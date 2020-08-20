# .NET Core 下操作 Git，自动提交代码到 GitHub

.NET Core 3.0 预览版发布已经好些时日了，博客园也已将其用于生产环境中，可见 .NET Core 日趋成熟，你想盖大楼吗？想 GitHub 首页一片绿吗？今天拿她玩玩自动化提交代码至 GitHub。

## 安装项目模板

```shell
dotnet new --install "Microsoft.DotNet.Web.ProjectTemplates.3.0"
dotnet new worker
```

## 创建项目

直接使用 .NET CLI 创建一个 Work Service 的项目

```shell
dotnet new worker -o AutomaticPush
```

用 Visual Studio 2019 打开项目可以看到以下代码

```csharp
// Program.cs
public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureServices((hostContext, services) =>
            {
                services.AddHostedService<Worker>();
            });
}
```

* 从 3.0 起 WebHost 被 Host 取代了
* `CreateHostBuilder`创建 Host 并在`ConfigureServices`中调用`.AddHostedService<Worker>()`

```csharp
// Worker.cs
public class Worker : BackgroundService
{
    private readonly ILogger<Worker> _logger;
    public Worker(ILogger<Worker> logger)
    {
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
            await Task.Delay(1000, stoppingToken);
        }
    }
}
```

Worker 继承了 BackgroundService，在 override ExecuteAsync 方法中完成自动提交的代码

.NET 下操作 Git 需要用到一个库 `LibGit2Sharp`，同时支持 .NET Framework 及 .NET Core

在项目中安装使用

```bash
Install-Package LibGit2Sharp
```

## LibGit2Sharp 简单使用

* `Repository.Init(@"D:\Work")` 在指定路径创建一个新的 Git 仓库，相当于 `git init`
* `Repository.Clone("https://github.com/Meowv/Blog.git", @"D:\Work")` 拉取一个远程仓库到本地，相当于 `git clone`
* `using (var repo = new Repository(@"D:\Blog")){}` 打开本地存在的 Git 仓库
* 获取 Branch

  ```csharp
  using (var repo = new Repository(@"D:\Blog"))
  {
      var branches = repo.Branches;

      foreach (var item in branches)
      {
      }
  }
  ```

* 获取 Commits

  ```csharp
  using (var repo = new Repository(@"D:\Blog"))
  {
      foreach (var commit in repo.Commits)
      {
      }
  }
  ```

* 获取 Tags

  ```csharp
  using (var repo = new Repository(@"D:\Blog"))
  {
      foreach (var commit in repo.Tags)
      {
      }
  }
  ```

* 更多操作请移步 [https://github.com/libgit2/libgit2sharp](https://github.com/libgit2/libgit2sharp)

## 自动 Push 代码盖大楼

有了以上基础，就可以实现自动生成文件，push 代码到 GitHub 了。

新建一个配置文件，存放我们 GitHub 仓库以及账号密码等重要信息

```javascript
{
  "repository": "本地git仓库绝对路径",
  "username": "GitHub账号",
  "password": "GitHub密码",
  "name": "提交人",
  "email": "邮箱"
}
```

在ExecuteAsync中读取配置文件信息

```csharp
var configurationRoot = new ConfigurationBuilder().AddJsonFile("config.json").Build();

var path = configurationRoot["repository"];
var username = configurationRoot["username"];
var password = configurationRoot["password"];
var name = configurationRoot["name"];
var email = configurationRoot["email"];
```

git会自动检测文件变化，所以就先自动按日期创建.log文件，不断生成内容然后提交

```csharp
while (!stoppingToken.IsCancellationRequested)
{
    var fileName = $"{DateTime.Now.ToString("dd")}.log";
    var content = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");

    // 写入内容
    WriteText(path, fileName, content);

    using (var repo = new Repository(path))
    {
        // Stage the file
        Commands.Stage(repo, "*");
        // Create the committer's signature and commit
        var author = new Signature(name, email, DateTime.Now);
        var committer = author;
        // Commit to the repository
        var commit = repo.Commit(content, author, committer);
        // git push
        var options = new PushOptions
        {
            CredentialsProvider = new CredentialsHandler((url, usernameFromUrl, types) =>
            {
                return new UsernamePasswordCredentials()
                {
                    Username = username,
                    Password = password
                };
            })
        };
        repo.Network.Push(repo.Branches["master"], options);
    }

    Console.WriteLine(content);

    // 等待60秒继续执行...
    await Task.Delay(60000, stoppingToken);
}

private static void WriteText(string path, string fileName, string content)
{
    path = Path.Combine(path, DateTime.Now.ToString(@"yyyy\\MM"));
    if (!Directory.Exists(path))
    {
        Directory.CreateDirectory(path);
    }
    var filePath = Path.Combine(path, fileName);
    using var fs = new FileStream(filePath, FileMode.Append);
    using var sw = new StreamWriter(fs);
    sw.WriteLine(content);
}
```

至此，整个代码编写部分结束，项目发布后可以选择sc.exe注册为Windows服务，在这里推荐使用nssm\(一个服务封装程序\)，好了，赶紧盖大楼去吧~~
