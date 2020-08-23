# .NET Core 下使用 Serilog 记录日志

## Serilog

::: tip Why Serilog?
Like many other libraries for .NET, Serilog provides diagnostic logging to files, the console, and elsewhere. It is easy to set up, has a clean API, and is portable between recent .NET platforms.

Unlike other logging libraries, Serilog is built with powerful structured event data in mind.
:::

## 最佳实践

### 控制台项目

在项目中添加下面几个组件包

```xml
<PackageReference Include="Volo.Abp.Autofac" Version="3.0.5" />
<PackageReference Include="Microsoft.Extensions.Hosting" Version="3.1.6" />
<PackageReference Include="Serilog.Extensions.Logging" Version="3.0.1" />
<PackageReference Include="Serilog.Sinks.Console" Version="3.1.1" />
<PackageReference Include="Serilog.Sinks.File" Version="4.1.0" />
```

```csharp
class Program
{
    static async Task Main(string[] args)
    {
        Log.Logger = new LoggerConfiguration()
           .MinimumLevel.Information()
           .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
#if DEBUG
            .MinimumLevel.Override("Xxx", LogEventLevel.Debug)
#else
            .MinimumLevel.Override("Xxx", LogEventLevel.Information)
#endif
           .Enrich.FromLogContext()
           .WriteTo.File(Path.Combine(Directory.GetCurrentDirectory(), "Logs/logs.txt"))
           .WriteTo.Console()
           .CreateLogger();

        await CreateHostBuilder(args).RunConsoleAsync();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureLogging((context, logging) => logging.ClearProviders())
            .ConfigureServices((hostContext, services) =>
            {
                services.AddHostedService<XxxHostedService>();
            });
}
```

```csharp
//XxxHostedService.cs
public class XxxHostedService : IHostedService
{
    private readonly IHostApplicationLifetime _hostApplicationLifetime;

    public XxxHostedService(IHostApplicationLifetime hostApplicationLifetime)
    {
        _hostApplicationLifetime = hostApplicationLifetime;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        using var application = AbpApplicationFactory.Create<XxxModule>(options =>
        {
            options.UseAutofac();
            options.Services.AddLogging(c => c.AddSerilog());
        });
        application.Initialize();

        var service = await application.ServiceProvider.GetRequiredService<XxxService>();
        service.XxxAsync();

        application.Shutdown();

        _hostApplicationLifetime.StopApplication();
    }

    public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;
}
```

### AspNetCore项目

在项目中添加下面几个组件包

```xml
<PackageReference Include="Serilog.AspNetCore" Version="3.4.0" />
<PackageReference Include="Serilog.Sinks.Async" Version="1.4.0" />
<PackageReference Include="Serilog.Sinks.File" Version="4.1.0" />
...
```

```csharp
public static async Task Main(string[] args)
{
    Log.Logger = new LoggerConfiguration()
#if DEBUG
        .MinimumLevel.Debug()
#else
        .MinimumLevel.Information()
#endif
        .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
        .Enrich.FromLogContext()
        .WriteTo.Async(c => c.File($"Logs/{DateTime.Now:yyyy/MMdd}/logs.txt"))
        .CreateLogger();

        try
        {
            Log.Information("Starting Xxx.");

            await CreateHostBuilder(args).Build().RunAsync();
        }
        catch (Exception ex)
        {
            Log.Fatal(ex, "Xxx terminated unexpectedly!");
        }
        finally
        {
            Log.CloseAndFlush();
        }
    }

    internal static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseIISIntegration()
                          .UseStartup<Startup>();
            }).UseAutofac().UseSerilog();
}
```
