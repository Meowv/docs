# 给项目瘦身，让它跑起来

上一篇文章已经成功创建了博客项目，但是abp默认给我们引用了许多项目中用不到的组件。

本篇文章将给项目进行瘦身，删掉对我们来说暂时用不到的组件。讲解各个模块之间的关系，写一个Hello World，让其成功运行起来。

## 给项目瘦身

### Meowv.Blog.HttpApi.Hosting

`Meowv.Blog.HttpApi.Hosting`相当于一个web项目，但这里主要依赖于`Meowv.Blog.HttpApi`模块，用来暴露我们的API的。

删掉`Meowv.Blog.HttpApi.Hosting`项目中abp自己生成的文件和文件夹，只留下`Program.cs`和`Startup.cs`两个类。

在abp中，每个模块都应该定义一个模块类，派生自`AbpModule`，那么就添加一个模块类`MeowvBlogHttpApiHostingModule.cs`

`AbpModule`类中可以做 配置服务前和后的操作，应用程序初始化，应用程序初始化前和后，应用程序关闭和模块依赖等一系列操作，详看，<https://docs.abp.io/en/abp/latest/Module-Development-Basics>

为了方便，在这里直接集成Autofac，来替换官方依赖注入，详看，<https://docs.abp.io/zh-Hans/abp/latest/Autofac-Integration>

于是我们的模块类就变成下面这个样子。

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace Meowv.Blog.HttpApi.Hosting
{
    [DependsOn(
       typeof(AbpAspNetCoreMvcModule),
       typeof(AbpAutofacModule)
    )]
    public class MeowvBlogHttpApiHostingModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            base.ConfigureServices(context);
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            var app = context.GetApplicationBuilder();
            var env = context.GetEnvironment();

            // 环境变量，开发环境
            if (env.IsDevelopment())
            {
                // 生成异常页面
                app.UseDeveloperExceptionPage();
            }

            // 路由
            app.UseRouting();

            // 路由映射
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
```

然后在`Startup.cs`使用，`services.AddApplication<MeowvBlogHttpApiHostingModule>();`

继续修改`Program.cs`代码，如下：

```csharp
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System.Threading.Tasks;

namespace Meowv.Blog.HttpApi.Hosting
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            await Host.CreateDefaultBuilder(args)
                      .ConfigureWebHostDefaults(builder =>
                      {
                          builder.UseIISIntegration()
                                 .UseStartup<Startup>();
                      }).UseAutofac().Build().RunAsync();
        }
    }
}
```

然后编辑一下项目文件，`Meowv.Blog.HttpApi.Hosting.csproj`，删掉无用的配置文件信息和abp默认引用的组件。

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">

  <Import Project="..\..\common.props" />

  <PropertyGroup>
    <TargetFramework>netcoreapp3.1</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Volo.Abp.Autofac" Version="2.7.0" />

    <ProjectReference Include="..\Meowv.Blog.HttpApi\Meowv.Blog.HttpApi.csproj" />
  </ItemGroup>

</Project>
```

### Meowv.Blog.HttpApi

`Meowv.Blog.HttpApi`职责主要是编写Controller，所有的API都写在这里，同时它要依赖于`Meowv.Blog.Application`模块

先删掉Models文件夹和默认的Controller，修改默认模块类名称为：`MeowvBlogHttpApiModule`，并删掉无用的依赖项

```csharp
using Volo.Abp.Identity;
using Volo.Abp.Modularity;

namespace Meowv.Blog.HttpApi
{
    [DependsOn(
        typeof(AbpIdentityHttpApiModule)
    )]
    public class MeowvBlogHttpApiModule : AbpModule
    {

    }
}
```

编辑项目文件`Meowv.Blog.HttpApi.csproj`

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <Import Project="..\..\common.props" />

  <PropertyGroup>
    <TargetFramework>netcoreapp3.1</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Volo.Abp.Identity.HttpApi" Version="2.7.0" />
  </ItemGroup>

</Project>
```

### Meowv.Blog.Application

`Meowv.Blog.Application`为我们的应用服务层，在这里编写服务的接口以及对应的实现

首先还是模块类，`MeowvBlogApplicationModule`，在这里我们应该集成缓存和AutoMapper，这个先留着，先把项目瘦身跑起来后面在说吧。

```csharp
using Volo.Abp.Identity;
using Volo.Abp.Modularity;

namespace Meowv.Blog.Application
{
    [DependsOn(
        typeof(AbpIdentityApplicationModule)
    )]
    public class MeowvBlogApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {

        }
    }
}
```

新建一个`MeowvBlogApplicationServiceBase.cs`继承自`ApplicationService`，然后就可以先写一个Hello World的应用服务接口和实现。

```csharp
//IHelloWorldService.cs
namespace Meowv.Blog.Application.HelloWorld
{
    public interface IHelloWorldService
    {
        string HelloWorld();
    }
}
```

```csharp
//HelloWorldService.cs
namespace Meowv.Blog.Application.HelloWorld.Impl
{
    public class HelloWorldService : ServiceBase, IHelloWorldService
    {
        public string HelloWorld()
        {
            return "Hello World";
        }
    }
}
```

> 这里有两点需要注意，我们的服务都以Service结尾，每个服务都应该继承我们编写的的基类`ServiceBase`

然后在`Meowv.Blog.HttpApi`层中添引用：`Meowv.Blog.Application`，同时添加依赖模块类，`MeowvBlogApplicationModule`

```csharp
//MeowvBlogHttpApiModule.cs
using Meowv.Blog.Application;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;

namespace Meowv.Blog.HttpApi
{
    [DependsOn(
        typeof(AbpIdentityHttpApiModule),
        typeof(MeowvBlogApplicationModule)
    )]
    public class MeowvBlogHttpApiModule : AbpModule
    {

    }
}
```

## 让它跑起来

好了，完成以上步骤，基本上差不多了，在`Meowv.Blog.HttpApi`中新增一个 Controller，`HelloWorldController.cs`

```csharp
using Meowv.Blog.Application.HelloWorld;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace Meowv.Blog.HttpApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HelloWorldController : AbpController
    {
        private readonly IHelloWorldService _helloWorldService;

        public HelloWorldController(IHelloWorldService helloWorldService)
        {
            _helloWorldService = helloWorldService;
        }

        [HttpGet]
        public string HelloWorld()
        {
            return _helloWorldService.HelloWorld();
        }
    }
}
```

ok，运行一下`Meowv.Blog.HttpApi.Hosting`试试看，不出意料应该会报错的，因为我们在启动层`Meowv.Blog.HttpApi.Hosting`没有依赖`MeowvBlogHttpApiModule`模块，添加上试试

```csharp
...
    [DependsOn(
       typeof(AbpAspNetCoreMvcModule),
       typeof(AbpAutofacModule),
       typeof(MeowvBlogHttpApiModule)
    )]
    public class MeowvBlogHttpApiHostingModule : AbpModule
    {
        ...
    }
...
```

搞定，成功出现Hello World，目标圆满完成。

![ ](./images/slim-and-run-01.png)

放一张此时项目的层级目录，以供参考

![ ](./images/slim-and-run-02.png)

以上就是本章全部内容，暂时只用到了其中三个项目层便成功运行，由于时间问题，其中还有许多需要完善的地方没有操作，但后续用到的时候会逐步优化掉。
