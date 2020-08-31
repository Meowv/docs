# .NET Core 下使用 Log4Net 记录日志

`Log4Net`相信大家都很熟悉了，算是比较主流和著名的日志组件了。

- 官网：<http://logging.apache.org>
- 开源地址：<https://github.com/apache/logging-log4net>

## 最佳实践

在项目中添加组件包

```powershell
Install-Package log4net
```

添加`log4net.config`文件

```xml
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
  <configSections>
    <section name="log4net" type="log4net.Config.Log4NetConfigurationSectionHandler, log4net"/>
  </configSections>
  <log4net debug="false">

    <appender name="info" type="log4net.Appender.RollingFileAppender,log4net">
      <param name="File" value="log4net/info/" />
      <param name="AppendToFile" value="true" />
      <param name="MaxSizeRollBackups" value="-1"/>
      <param name="MaximumFileSize" value="5MB"/>
      <param name="RollingStyle" value="Composite" />
      <param name="DatePattern" value="yyyyMMdd\\HH&quot;.log&quot;" />
      <param name="StaticLogFileName" value="false" />
      <layout type="log4net.Layout.PatternLayout,log4net">
        <param name="ConversionPattern" value="%n
{
    &quot;system&quot;: &quot;Meowv.Blog&quot;,
    &quot;datetime&quot;: &quot;%d&quot;,
    &quot;description&quot;: &quot;%m&quot;,
  &quot;level&quot;: &quot;%p&quot;,
    &quot;info&quot;: &quot;%exception&quot;
}" />
      </layout>
      <filter type="log4net.Filter.LevelRangeFilter">
        <levelMin value="INFO" />
        <levelMax value="INFO" />
      </filter>
    </appender>

    <appender name="error" type="log4net.Appender.RollingFileAppender,log4net">
      <param name="File" value="log4net/error/" />
      <param name="AppendToFile" value="true" />
      <param name="MaxSizeRollBackups" value="-1"/>
      <param name="MaximumFileSize" value="5MB"/>
      <param name="RollingStyle" value="Composite" />
      <param name="DatePattern" value="yyyyMMdd\\HH&quot;.log&quot;" />
      <param name="StaticLogFileName" value="false" />
      <layout type="log4net.Layout.PatternLayout,log4net">
        <param name="ConversionPattern" value="%n
{
    &quot;system&quot;: &quot;Meowv.Blog&quot;,
    &quot;datetime&quot;: &quot;%d&quot;,
    &quot;description&quot;: &quot;%m&quot;,
  &quot;level&quot;: &quot;%p&quot;,
    &quot;info&quot;: &quot;%exception&quot;
}" />
      </layout>
      <filter type="log4net.Filter.LevelRangeFilter">
        <levelMin value="ERROR" />
        <levelMax value="ERROR" />
      </filter>
    </appender>

    <root>
      <level value="ALL"></level>
      <appender-ref ref="info"/>
      <appender-ref ref="error"/>
    </root>

  </log4net>

</configuration>
```

### 控制台项目

```csharp
using log4net;
using log4net.Config;
using System;
using System.IO;
using System.Reflection;

namespace ConsoleAppDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            var log4netRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(log4netRepository, new FileInfo("log4net.config"));

            ILog log = LogManager.GetLogger(log4netRepository.Name, "NETCorelog4net");

            log.Info("NETCorelog4net log");
            log.Info("test log");
            log.Error("error");
            log.Info("linezero");
            Console.ReadKey();
        }
    }
}
```

![ ](./images/log4net-in-dotnet-01.png)

### AspNetCore项目

新建一个静态类，写一个扩展方法`UseLog4Net()`，用于`log4net`初始化。

```csharp
public static class Log4NetExtensions
{
    public static IHostBuilder UseLog4Net(this IHostBuilder hostBuilder)
    {
        var log4netRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
        XmlConfigurator.Configure(log4netRepository, new FileInfo("log4net.config"));

        return hostBuilder;
    }
}
```

扩展方法返回`IHostBuilder`对象，这样可以链式调用，美化代码，然后在`Program.cs`中使用扩展方法`UseLog4Net()`。

```csharp
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace WebAppDemo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                }).UseLog4Net();
    }
}
```

配置完成，然后在任意地方写入日志即可。

```csharp
using log4net;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace WebAppDemo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILog _log;

        public WeatherForecastController()
        {
            _log = LogManager.GetLogger(typeof(WeatherForecastController));
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            _log.Info("Hello, this is a Weather api!");
            _log.Warn("Wran !!!");
            _log.Error("Controller Error");

            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}

```

![ ](./images/log4net-in-dotnet-02.png)
