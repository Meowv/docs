# .NET Core 下使用 Kafka

## 安装

- [CentOS 安装 kafka](../other/kafka-install.md)
- [docker下安装Kafka](../docker/repo/kafka.md)

## 介绍

- Broker：消息中间件处理节点，一个Kafka节点就是一个broker，多个broker可以组成一个Kafka集群。
- Topic：一类消息，例如page view日志、click日志等都可以以topic的形式存在，Kafka集群能够同时负责多个topic的分发。
- Partition：topic物理上的分组，一个topic可以分为多个partition，每个partition是一个有序的队列。
- Segment：partition物理上由多个segment组成，下面2.2和2.3有详细说明。
- offset：每个partition都由一系列有序的、不可变的消息组成，这些消息被连续的追加到partition中。partition中的每个消息都有一个连续的序列号叫做offset,用于partition唯一标识一条消息。

![ ](./images/kafka-in-dotnet-01.png)

::: tip kafka partition 和 consumer 数目关系

- 如果consumer比partition多是浪费，因为kafka的设计是在一个partition上是不允许并发的，所以consumer数不要大于partition数 。
- 如果consumer比partition少，一个consumer会对应于多个partitions，这里主要合理分配consumer数和partition数，否则会导致partition里面的数据被取的不均匀 。最好partiton数目是consumer数目的整数倍，所以partition数目很重要，比如取24，就很容易设定consumer数目 。
- 如果consumer从多个partition读到数据，不保证数据间的顺序性，kafka只保证在一个partition上数据是有序的，但多个partition，根据你读的顺序会有不同
- 增减consumer，broker，partition会导致rebalance，所以rebalance后consumer对应的partition会发生变化

:::

## 快速开始

在 .NET Core 项目中安装组件

```PowerShell
Install-Package Confluent.Kafka
```

开源地址：<https://github.com/confluentinc/confluent-kafka-dotnet>

添加`IKafkaService`服务接口

```csharp
public interface IKafkaService
{
    /// <summary>
    /// 发送消息至指定主题
    /// </summary>
    /// <typeparam name="TMessage"></typeparam>
    /// <param name="topicName"></param>
    /// <param name="message"></param>
    /// <returns></returns>
    Task PublishAsync<TMessage>(string topicName, TMessage message) where TMessage : class;

    /// <summary>
    /// 从指定主题订阅消息
    /// </summary>
    /// <typeparam name="TMessage"></typeparam>
    /// <param name="topics"></param>
    /// <param name="messageFunc"></param>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    Task SubscribeAsync<TMessage>(IEnumerable<string> topics, Action<TMessage> messageFunc, CancellationToken cancellationToken) where TMessage : class;
}
```

实现`IKafkaService`

```csharp
public class KafkaService : IKafkaService
{
    public async Task PublishAsync<TMessage>(string topicName, TMessage message) where TMessage : class
    {
        var config = new ProducerConfig
        {
            BootstrapServers = "127.0.0.1:9092"
        };
        using var producer = new ProducerBuilder<string, string>(config).Build();
        await producer.ProduceAsync(topicName, new Message<string, string>
        {
            Key = Guid.NewGuid().ToString(),
            Value = message.SerializeToJson()
        });
    }

    public async Task SubscribeAsync<TMessage>(IEnumerable<string> topics, Action<TMessage> messageFunc, CancellationToken cancellationToken) where TMessage : class
    {
        var config = new ConsumerConfig
        {
            BootstrapServers = "127.0.0.1:9092",
            GroupId = "consumer",
            EnableAutoCommit = false,
            StatisticsIntervalMs = 5000,
            SessionTimeoutMs = 6000,
            AutoOffsetReset = AutoOffsetReset.Earliest,
            EnablePartitionEof = true
        };
        //const int commitPeriod = 5;
        using var consumer = new ConsumerBuilder<Ignore, string>(config)
                             .SetErrorHandler((_, e) =>
                             {
                                 Console.WriteLine($"Error: {e.Reason}");
                             })
                             .SetStatisticsHandler((_, json) =>
                             {
                                 Console.WriteLine($" - {DateTime.Now:yyyy-MM-dd HH:mm:ss} > 消息监听中..");
                             })
                             .SetPartitionsAssignedHandler((c, partitions) =>
                             {
                                 string partitionsStr = string.Join(", ", partitions);
                                 Console.WriteLine($" - 分配的 kafka 分区: {partitionsStr}");
                             })
                             .SetPartitionsRevokedHandler((c, partitions) =>
                             {
                                 string partitionsStr = string.Join(", ", partitions);
                                 Console.WriteLine($" - 回收了 kafka 的分区: {partitionsStr}");
                             })
                             .Build();
        consumer.Subscribe(topics);
        try
        {
            while (true)
            {
                try
                {
                    var consumeResult = consumer.Consume(cancellationToken);
                    Console.WriteLine($"Consumed message '{consumeResult.Message?.Value}' at: '{consumeResult?.TopicPartitionOffset}'.");
                    if (consumeResult.IsPartitionEOF)
                    {
                        Console.WriteLine($" - {DateTime.Now:yyyy-MM-dd HH:mm:ss} 已经到底了：{consumeResult.Topic}, partition {consumeResult.Partition}, offset {consumeResult.Offset}.");
                        continue;
                    }
                    TMessage messageResult = null;
                    try
                    {
                        messageResult = JsonConvert.DeserializeObject<TMessage>(consumeResult.Message.Value);
                    }
                    catch (Exception ex)
                    {
                        var errorMessage = $" - {DateTime.Now:yyyy-MM-dd HH:mm:ss}【Exception 消息反序列化失败，Value：{consumeResult.Message.Value}】 ：{ex.StackTrace?.ToString()}";
                        Console.WriteLine(errorMessage);
                        messageResult = null;
                    }
                    if (messageResult != null/* && consumeResult.Offset % commitPeriod == 0*/)
                    {
                        messageFunc(messageResult);
                        try
                        {
                            consumer.Commit(consumeResult);
                        }
                        catch (KafkaException e)
                        {
                            Console.WriteLine(e.Message);
                        }
                    }
                }
                catch (ConsumeException e)
                {
                    Console.WriteLine($"Consume error: {e.Error.Reason}");
                }
            }
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Closing consumer.");
            consumer.Close();
        }
        await Task.CompletedTask;
    }
}
```

注入`IKafkaService`，在需要使用的地方直接调用即可。

```csharp
public class MessageService : IMessageService, ITransientDependency
{
    private readonly IKafkaService _kafkaService;
    public MessageService(IKafkaService kafkaService)
    {
        _kafkaService = kafkaService;
    }

    public async Task RequestTraceAdded(XxxEventData eventData)
    {
        await _kafkaService.PublishAsync(eventData.TopicName, eventData);
    }
}
```

以上相当于一个生产者，当我们消息队列发出后，还需一个消费者进行消费，所以可以使用一个控制台项目接收消息来处理业务。

```csharp
var cts = new CancellationTokenSource();
Console.CancelKeyPress += (_, e) =>
{
    e.Cancel = true;
    cts.Cancel();
};

await kafkaService.SubscribeAsync<XxxEventData>(topics, async (eventData) =>
{
    // Your logic

    Console.WriteLine($" - {eventData.EventTime:yyyy-MM-dd HH:mm:ss} 【{eventData.TopicName}】- > 已处理");
}, cts.Token);
```

在`IKafkaService`中已经写了订阅消息的接口，这里也是注入后直接使用即可。

## 生产者消费者示例

### 生产者

```csharp
static async Task Main(string[] args)
{
    if (args.Length != 2)
    {
        Console.WriteLine("Usage: .. brokerList topicName");
        // 127.0.0.1:9092 helloTopic
        return;
    }

    var brokerList = args.First();
    var topicName = args.Last();

    var config = new ProducerConfig { BootstrapServers = brokerList };

    using var producer = new ProducerBuilder<string, string>(config).Build();

    Console.WriteLine("\n-----------------------------------------------------------------------");
    Console.WriteLine($"Producer {producer.Name} producing on topic {topicName}.");
    Console.WriteLine("-----------------------------------------------------------------------");
    Console.WriteLine("To create a kafka message with UTF-8 encoded key and value:");
    Console.WriteLine("> key value<Enter>");
    Console.WriteLine("To create a kafka message with a null key and UTF-8 encoded value:");
    Console.WriteLine("> value<enter>");
    Console.WriteLine("Ctrl-C to quit.\n");

    var cancelled = false;

    Console.CancelKeyPress += (_, e) =>
    {
        e.Cancel = true;
        cancelled = true;
    };

    while (!cancelled)
    {
        Console.Write("> ");

        var text = string.Empty;

        try
        {
            text = Console.ReadLine();
        }
        catch (IOException)
        {
            break;
        }

        if (string.IsNullOrWhiteSpace(text))
        {
            break;
        }

        var key = string.Empty;
        var val = text;

        var index = text.IndexOf(" ");
        if (index != -1)
        {
            key = text.Substring(0, index);
            val = text.Substring(index + 1);
        }

        try
        {
            var deliveryResult = await producer.ProduceAsync(topicName, new Message<string, string>
            {
                Key = key,
                Value = val
            });

            Console.WriteLine($"delivered to: {deliveryResult.TopicPartitionOffset}");
        }
        catch (ProduceException<string, string> e)
        {
            Console.WriteLine($"failed to deliver message: {e.Message} [{e.Error.Code}]");
        }
    }
}
```

### 消费者

```csharp
static void Main(string[] args)
{
    if (args.Length != 2)
    {
        Console.WriteLine("Usage: .. brokerList topicName");
        // 127.0.0.1:9092 helloTopic
        return;
    }

    var brokerList = args.First();
    var topicName = args.Last();

    Console.WriteLine($"Started consumer, Ctrl-C to stop consuming");

    var cts = new CancellationTokenSource();
    Console.CancelKeyPress += (_, e) =>
    {
        e.Cancel = true;
        cts.Cancel();
    };

    var config = new ConsumerConfig
    {
        BootstrapServers = brokerList,
        GroupId = "consumer",
        EnableAutoCommit = false,
        StatisticsIntervalMs = 5000,
        SessionTimeoutMs = 6000,
        AutoOffsetReset = AutoOffsetReset.Earliest,
        EnablePartitionEof = true
    };

    const int commitPeriod = 5;

    using var consumer = new ConsumerBuilder<Ignore, string>(config)
                         .SetErrorHandler((_, e) =>
                         {
                             Console.WriteLine($"Error: {e.Reason}");
                         })
                         .SetStatisticsHandler((_, json) =>
                         {
                             Console.WriteLine($" - {DateTime.Now:yyyy-MM-dd HH:mm:ss} > monitoring..");
                             //Console.WriteLine($"Statistics: {json}");
                         })
                         .SetPartitionsAssignedHandler((c, partitions) =>
                         {
                             Console.WriteLine($"Assigned partitions: [{string.Join(", ", partitions)}]");
                         })
                         .SetPartitionsRevokedHandler((c, partitions) =>
                         {
                             Console.WriteLine($"Revoking assignment: [{string.Join(", ", partitions)}]");
                         })
                         .Build();
    consumer.Subscribe(topicName);

    try
    {
        while (true)
        {
            try
            {
                var consumeResult = consumer.Consume(cts.Token);

                if (consumeResult.IsPartitionEOF)
                {
                    Console.WriteLine($"Reached end of topic {consumeResult.Topic}, partition {consumeResult.Partition}, offset {consumeResult.Offset}.");

                    continue;
                }

                Console.WriteLine($"Received message at {consumeResult.TopicPartitionOffset}: {consumeResult.Message.Value}");

                if (consumeResult.Offset % commitPeriod == 0)
                {
                    try
                    {
                        consumer.Commit(consumeResult);
                    }
                    catch (KafkaException e)
                    {
                        Console.WriteLine($"Commit error: {e.Error.Reason}");
                    }
                }
            }
            catch (ConsumeException e)
            {
                Console.WriteLine($"Consume error: {e.Error.Reason}");
            }
        }
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("Closing consumer.");
        consumer.Close();
    }
}
```

![ ](./images/kafka-in-dotnet-02.png)
