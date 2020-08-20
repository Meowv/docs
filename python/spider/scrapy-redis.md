# Scrapy-Redis分布式爬虫

## Scrapy-Redis分布式爬虫组件

Scrapy是一个框架，他本身是不支持分布式的。如果我们想要做分布式的爬虫，就需要借助一个组件叫做Scrapy-Redis，这个组件正是利用了Redis可以分布式的功能，集成到Scrapy框架中，使得爬虫可以进行分布式。可以充分的利用资源（多个ip、更多带宽、同步爬取）来提高爬虫的爬行效率。

## 分布式爬虫的优点

* 可以充分利用多台机器的带宽
* 可以充分利用多台机器的ip地址
* 多台机器做，爬取效率更高

## 分布式爬虫必须要解决的问题

* 分布式爬虫是好几台机器在同时运行，如何保证不同的机器爬取页面的时候不会出现重复爬取的问题
* 分布式爬虫在不同的机器上运行，在把数据爬完后如何保证保存在同一个地方

## 安装

通过 `pip install scrapy-redis` 即可安装

## 将scrapy框架开发的爬虫项目改为分布式爬虫项目

1. 将爬虫的类从`scrapy.Spider`变成`scrapy_redis.spiders.RedisSpider`，或者是从`scrapy.CrawlSpider`变成`scrapy_redis.spiders.RedisCrawlSpider`
2. 将爬虫中的`start_urls`删掉，增加一个 `redis_key="xxx"` 。这个`redis_key`是为了以后在redis中控制爬虫启动的。爬虫的第一个url，就是在redis中通过这个发送出去的。
3. 在配置文件中增加如下配置

   ```python
        # Scrapy-Redis相关配置

        # 确保request存储到redis中
        SCHEDULER = "scrapy_redis.scheduler.Scheduler"

        # 确保所有爬虫共享相同的去重指纹
        DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"

        # 设置redis为item pipeline
        ITEM_PIPELINES = {
            'scrapy_redis.pipelines.RedisPipeline': 300
        }

        # 在redis中保持scrapy-redis用到的队列，不会清理redis中的队列，从而可以实现暂停和恢复的功能
        SCHEDULER_PERSIST = True

        # 设置连接redis信息
        REDIS_HOST = '127.0.0.1'
        REDIS_PORT = 6379
   ```

4. 运行爬虫
   * 在爬虫服务器上，进入爬虫文件所在的路径，然后输入命令：`scrapy runspider [爬虫名字]`
   * 在Redis服务器上，推入一个开始的url链接：`redis-cli> lpush [redis_key] start_url` 开始爬取
