# .NET Core 下使用 ElasticSearch

## Elasticsearch 快速入门

参考：[Elasticsearch 快速入门](../storage/elasticsearch/README.md)

## 安装

- [docker下安装Elasticsearch](../docker/repo/elasticsearch.md)
- [其它平台](https://www.elastic.co/cn/downloads/)

## 快速开始

在 .NET Core 项目中安装组件

```PowerShell
Install-Package NES
```

开源地址：<https://github.com/elastic/elasticsearch-net>

示例代码：

```csharp
public interface IElasticsearchProvider
{
    IElasticClient GetClient();
}

public class HttpTrackerElasticsearchOptions : IOptions<HttpTrackerElasticsearchOptions>
{
    /// <summary>
    /// 节点
    /// </summary>
    public string[] Nodes { get; set; }

    /// <summary>
    /// 用户名
    /// </summary>
    public string Username { get; set; }

    /// <summary>
    /// 密码
    /// </summary>
    public string Password { get; set; }

    /// <summary>
    /// 索引前缀
    /// </summary>
    public string IndexPrefix { get; set; } = "meowv";

    public HttpTrackerElasticsearchOptions Value => this;
}

public class ElasticsearchProvider : IElasticsearchProvider
{
    public HttpTrackerElasticsearchOptions Options { get; }

    public ElasticsearchProvider(IOptions<HttpTrackerElasticsearchOptions> options)
    {
        Options = options.Value;
    }

    public IElasticClient GetClient()
    {
        if (Options.Nodes == null)
            throw new Exception("Elasticsearch 配置有误，请检查。");

        ConnectionSettings connectionSettings;

        if (Options.Nodes.Count() > 1)
        {
            var nodes = Options.Nodes.Select(s => new Uri(s)).ToList();
            var connectionPool = new StaticConnectionPool(nodes);

            connectionSettings = new ConnectionSettings(connectionPool);
        }
        else
        {
            var node = Options.Nodes.Select(s => new Uri(s)).FirstOrDefault();

            connectionSettings = new ConnectionSettings(node);
        }

        connectionSettings.BasicAuthentication(Options.Username, Options.Password);

        return new ElasticClient(connectionSettings);
    }
}
```

```csharp
public abstract class ElasticsearchRepositoryBase
{
    private readonly IElasticsearchProvider _elasticsearchProvider;

    public ElasticsearchRepositoryBase(IElasticsearchProvider elasticsearchProvider)
    {
        _elasticsearchProvider = elasticsearchProvider;
    }

    protected abstract string IndexName { get; }

    protected IElasticClient Client => _elasticsearchProvider.GetClient();
}
```

```csharp
public interface IHttpTrackerLogRepository
{
    /// <summary>
    /// 按条件查询HTTP请求跟踪日志数据
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    Task<HttpTrackerResponse<PagedList<HttpTrackerLogDto>>> QueryAsync(QueryInput input);

    /// <summary>
    /// 插入一条HTTP请求跟踪日志数据
    /// </summary>
    /// <param name="httpTrackerLog"></param>
    /// <returns></returns>
    Task<HttpTrackerResponse> InsertAsync(HttpTrackerLog httpTrackerLog);
}
```

```csharp
public class HttpTrackerLogRepository : ElasticsearchRepositoryBase, IHttpTrackerLogRepository
{
    public HttpTrackerLogRepository(IElasticsearchProvider elasticsearchProvider, HttpTrackerElasticsearchOptions options, string name) : base(elasticsearchProvider)
    {
        var indexName = $"{IndexConsts.IndexNames.HttpTrackerLog}_{name}";
        if (!string.IsNullOrEmpty(options.IndexPrefix))
        {
            indexName = $"{options.IndexPrefix}_{indexName}";
        }

        IndexName = indexName;
    }

    protected override string IndexName { get; }

    public async Task<HttpTrackerResponse<PagedList<HttpTrackerLogDto>>> QueryAsync(QueryInput input)
    {
        var response = new HttpTrackerResponse<PagedList<HttpTrackerLogDto>>();

        var query = new List<QueryContainer>();
        if (!string.IsNullOrEmpty(input.Type))
        {
            query.Add(new MatchPhraseQuery
            {
                Field = new Field("type"),
                Query = input.Type
            });
        }
        if (!string.IsNullOrEmpty(input.Keyword))
        {
            query.Add(new MatchPhraseQuery
            {
                Field = new Field("description"),
                Query = input.Keyword
            });
        }

        var searchResponse = await Client.SearchAsync<HttpTrackerLog>(x => x.Index(IndexName)
                                         .From((input.Page - 1) * input.Limit)
                                         .Size(input.Limit)
                                         .Query(x => x.Bool(x => x.Should(query.ToArray())))
                                         .Sort(s => s.Descending(x => x.CreationTime)));

        var total = Convert.ToInt32(searchResponse.Total);
        var list = searchResponse.Documents
                                 .Select(x => new HttpTrackerLogDto
                                 {
                                     Type = x.Type,
                                     Description = x.Description,
                                     Request = new RequestInfo
                                     {
                                         UserAgent = x.UserAgent,
                                         Method = x.Method,
                                         Url = x.Url,
                                         Referrer = x.Referrer,
                                         IpAddress = x.IpAddress,
                                         Milliseconds = x.Milliseconds,
                                         RequestBody = x.RequestBody,
                                         Cookies = x.Cookies,
                                         Headers = x.Headers
                                     },
                                     Response = new ResponseInfo
                                     {
                                         StatusCode = x.StatusCode,
                                         ResponseBody = x.ResponseBody
                                     },
                                     Server = new ServerInfo
                                     {
                                         ServerName = x.ServerName,
                                         PId = x.PId,
                                         Host = x.Host,
                                         Port = x.Port
                                     },
                                     Exception = new ExceptionInfo
                                     {
                                         ExceptionType = x.ExceptionType,
                                         Message = x.Message,
                                         StackTrace = x.StackTrace
                                     },
                                     CreationTime = x.CreationTime
                                 }).ToList();

        response.IsSuccess(new PagedList<HttpTrackerLogDto>(total, list));
        return response;
    }

    public async Task<HttpTrackerResponse> InsertAsync(HttpTrackerLog httpTrackerLog)
    {
        var response = new HttpTrackerResponse();
        if (httpTrackerLog == null)
        {
            response.IsFailed("HttpTrackerLog is null");
            return response;
        }

        try
        {
            await Client.IndexAsync(httpTrackerLog, x => x.Index(IndexName));
        }
        catch (Exception ex)
        {
            response.IsFailed(ex);
        }

        return response;
    }
}
```

## Elasticsearch 各种查询示例

<https://github.com/elastic/elasticsearch-net/tree/master/examples>
