(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{507:function(s,t,a){s.exports=a.p+"assets/img/publish-blog-01.fa9cf3af.png"},508:function(s,t,a){s.exports=a.p+"assets/img/publish-blog-02.15bf54aa.png"},509:function(s,t,a){s.exports=a.p+"assets/img/publish-blog-03.75a3001d.png"},510:function(s,t,a){s.exports=a.p+"assets/img/publish-blog-04.eb70fae9.png"},511:function(s,t,a){s.exports=a.p+"assets/img/publish-blog-05.b4cc7085.png"},512:function(s,t,a){s.exports=a.p+"assets/img/publish-blog-06.07aefc81.png"},513:function(s,t,a){s.exports=a.p+"assets/img/publish-blog-07.9081ea19.png"},514:function(s,t,a){s.exports=a.p+"assets/img/publish-blog-08.f63f084c.png"},515:function(s,t,a){s.exports=a.p+"assets/img/publish-blog-09.5eb32f95.png"},516:function(s,t,a){s.exports=a.p+"assets/img/publish-blog-10.116da349.png"},517:function(s,t,a){s.exports=a.p+"assets/img/publish-blog-11.c53054cc.png"},611:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"终结篇之发布项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#终结篇之发布项目"}},[s._v("#")]),s._v(" 终结篇之发布项目")]),s._v(" "),n("p",[s._v("终于到了这一步了，开发了 API，紧接着又开发了 Blazor 版的博客项目，庆祝本系列文章完结撒花。🎉🎉🎉")]),s._v(" "),n("p",[s._v("既然开发完成了，还是拿出来溜溜比较好，本篇是本系列文章的最后一篇了，准备将 API 部署到 Linux，把前端 Blazor 开发的博客部署到 GitHub Pages。")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("blog")]),s._v("："),n("a",{attrs:{href:"https://blazor.meowv.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blazor.meowv.com/"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("strong",[s._v("api")]),s._v("："),n("a",{attrs:{href:"https://api2.meowv.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://api2.meowv.com/"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("先放地址，体验一下，要有点耐心，第一次访问会下载资源文件到本地浏览器，后面访问就贼快了。")]),s._v(" "),n("p",[s._v("也是第一次使用 Blazor 开发项目，不管怎么说，这个实验性的带教学和宣传目的博客总算是搞出来了，自己用的话，完全可以，同时在开发过程中自己也有不少收获。")]),s._v(" "),n("h2",{attrs:{id:"发布api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布api"}},[s._v("#")]),s._v(" 发布API")]),s._v(" "),n("p",[s._v("发布自己写的后端API项目，必须要有属于自己的服务器，当然如果只是为了动动手玩玩就没啥必要了，因为 .NET Core 跨平台咱们可以任意选择，我这里演示将项目发布到 Linux 下。")]),s._v(" "),n("p",[s._v("在这之前可以看一下我去年的一篇文章，"),n("RouterLink",{attrs:{to:"/stack/dotnetcore/publish-to-centos.html"}},[s._v("基于.NET Core开发的个人博客发布至CentOS小记")]),s._v(" ，简单了解下。")],1),s._v(" "),n("p",[s._v("我的机器是很久之前撸羊毛的渣渣配置服务器，1G内存，1核CPU，1M带宽，不过对于我们这种小站来说没啥访问量，照样用。🤣🤣")]),s._v(" "),n("p",[s._v("首先肯定是需要安装 .NET Core 运行环境，直接安装最新的 .NET Core 3.1 即可。这一步大家根据微软官方文档来就可以了，"),n("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/dotnet/core/install/linux",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.microsoft.com/zh-cn/dotnet/core/install/linux"),n("OutboundLink")],1),s._v(" 。")]),s._v(" "),n("p",[s._v("安装完成后可以使用 "),n("code",[s._v("dotnet --list-runtimes")]),s._v(" 查看运行时。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(507),alt:" "}})]),s._v(" "),n("p",[s._v("接着就可以去安装 Nginx ，高性能 Web 服务器，在这里使用它反向代理的功能，当然它的功能远不止于此。关于 Nginx 的安装我也不说了，如果你不懂，网上太多教程了。")]),s._v(" "),n("p",[s._v("安装完成后可以使用 "),n("code",[s._v("nginx -V")]),s._v(" 查看安装版本等信息。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(508),alt:" "}})]),s._v(" "),n("p",[s._v("到这一步就可以把我们API项目部署上去了，直接利用 Visual Studio 将项目打包发布，"),n("code",[s._v("appsettings.json")]),s._v("配置文件信息填好，这一步不用多说吧，相信大家都会。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(509),alt:" "}})]),s._v(" "),n("p",[s._v("利用 WinSCP 工具将发布好的代码上传至服务器，我这里新建了文件夹 qix/api2 方便自己管理，顺便提一句，WinSCP 是一个 Windows 环境下使用的 SSH 的开源图形化 SFTP 客户端。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(510),alt:" "}})]),s._v(" "),n("p",[s._v("那么现在我们可以在终端中定位到API所在目录，"),n("code",[s._v("cd /qix/api2")]),s._v("，然后执行命令启动项目"),n("code",[s._v("dotnet run Meowv.Blog.HttpApi.Hosting.dll")]),s._v("这时候便会看到输出信息，我们就可以使用服务器IP+端口的方式访问到API了。")]),s._v(" "),n("p",[s._v("如果只是这样肯定不是我想要的，这时候就引入了 Linux 下的守护进程，就类似于 Windows 下面的服务一样，让守护进程帮助我们运行项目，当关机、重启或者其它异常问题出现时，可以自动帮我们重启应用，就是自动执行"),n("code",[s._v("dotnet run xxx.dll")]),s._v("这句命令。")]),s._v(" "),n("p",[s._v("关于守护进程用的比较多的，supervisor 与 pm2 ，前者基于Python开发的，后者是基于nodejs开发的。")]),s._v(" "),n("p",[s._v("咱这里就选用 supervisor 了，当然 pm2 也不错也可以用用。")]),s._v(" "),n("p",[s._v("在 centos 下安装 supervisor 也很简单，直接贴几行代码，照着执行即可。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python-setuptools\n\neasy_install supervisor\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/supervisor\necho_supervisord_conf "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/supervisor/supervisord.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("安装成功后还需要花点时间去配置它，找到文件 /etc/supervisor/supervisord.conf 去掉文件最后的注释，可以改成向下面这样。")]),s._v(" "),n("div",{staticClass:"language-ini line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[s._v("...\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[include]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("files")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" conf.d/*.ini")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("这时候就可以监听到 conf.d 文件夹下面的 ini 配置文件了，在 /etc/supervisor/ 下新建文件夹 conf.d，conf.d 文件夹下新建一个配置文件 api2_meowv.conf 文件，名字随便起，内容如下：")]),s._v(" "),n("div",{staticClass:"language-ini line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[program:api2_meowv]")]),s._v(" # api2_meowv程序名称\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("command")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("dotnet Meowv.Blog.HttpApi.Hosting.dll # 执行的命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("directory")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/qix/api2  # 命令执行的目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("environment")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("ASPNETCORE__ENVIRONMENT=Production # 环境变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("user")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("root")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("stopsignal")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("INT")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("autostart")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("true # 是否自启动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("autorestart")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("true # 是否自动重启")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("startsecs")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("3 # 自动重启时间间隔（s）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("stderr_logfile")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/var/log/api2.meowv.com.err.log #错误日志文件指向目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("stdout_logfile")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/var/log/api2.meowv.com.out.log #输出日志文件指向目录")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("每行都带有注释，很清楚知道是干啥用的，顺便贴几条常用的命令：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("supervisorctl start program_name   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动某个进程(program_name=配置的进程名称)")]),s._v("\nsupervisorctl stop program_name    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止某一进程")]),s._v("\nsupervisorctl reload               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新启动配置中的所有程序")]),s._v("\nsupervisorctl stop all             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止全部进程")]),s._v("\nsupervisorctl update               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更新新的配置到supervisord")]),s._v("\nsupervisorctl restart program_name "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启某一进程")]),s._v("\nsupervisorctl                      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看正在守候的进程")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("img",{attrs:{src:a(511),alt:" "}})]),s._v(" "),n("p",[s._v("使用上面命令成功启动项目，使用IP+端口的方式去访问API肯定是不友好的，这时候就需要一个域名了，我这里将新建一个二级域名 api2.meowv.com 执行新开发的API项目。")]),s._v(" "),n("p",[s._v("关于域名的解析啥的不说了，配置完域名我顺便去申请了一个SSL证书，使用HTTPS的方式访问。")]),s._v(" "),n("p",[s._v("这时可以去配置 Nginx 方向代理了。来到 nginx 安装目录，我这里是 /etc/nginx ，新建一个文件夹 ssl ，将申请的SSL证书放进去，然后再 conf.d 文件夹下新建一个 api2_meowv.conf 文件，写入下面的配置信息。")]),s._v(" "),n("div",{staticClass:"language-nginx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" api2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meowv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("_api2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meowv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com_bundle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("_api2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meowv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_session_timeout")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_protocols")]),s._v(" TLSv1 TLSv1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" TLSv1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_ciphers")]),s._v(" AESGCM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ALL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("DH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("EXPORT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("RC4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("HIGH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MEDIUM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("LOW"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("aNULL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("eNULL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_prefer_server_ciphers")]),s._v(" on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_method")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OPTIONS'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_header")]),s._v(" Access"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Control"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Allow")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Headers "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Authorization,Content-Type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_header")]),s._v(" Access"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Control"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Allow")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Origin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_header")]),s._v(" Access"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Control"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Allow")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Credentials "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_header")]),s._v(" Access"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Control"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Allow")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Methods GET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("POST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("PUT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("DELETE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("OPTIONS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("204")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5009")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v("   X"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Real"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("IP        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v("   Host             "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v("   X"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("For  "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("client_max_body_size")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("M"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" api2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meowv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rewrite")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("https")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meowv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[n("img",{attrs:{src:a(512),alt:" "}})]),s._v(" "),n("p",[s._v("关于配置信息大家可以自己去学习一下，我这里也是简单的使用，我这里监听的端口是 5009，这个端口在 API 项目中是可以自定义的，相信大家都知道。做好以上操作后，在终端执行 "),n("code",[s._v("nginx -s reloa")]),s._v("，刷新 nginx 配置使其生效，然后就大功告成了。")]),s._v(" "),n("p",[s._v("关于项目中的数据库和Redis缓存，大家可以自行安装。数据库可以选择使用Sqlite，项目中已经做了一键切换数据库。安装Redis也很简单，相信大家可以自己完成，Redis可用可不用，可以直接关闭。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(513),alt:" "}})]),s._v(" "),n("p",[s._v("现在API项目便发布成功，将其部署在Linux系统下面，有了线上正常运行的API，接下来把前端 Blazor 开发的博客也发一下。")]),s._v(" "),n("h2",{attrs:{id:"发布blog"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布blog"}},[s._v("#")]),s._v(" 发布Blog")]),s._v(" "),n("p",[s._v("为了节省服务器资源，现在里面已经容纳了超级多的东西了，我准备将 Blog 部署在 GitHub Pages 上。")]),s._v(" "),n("p",[s._v("使用 Blazor WebAssembly 发布后是纯静态的文件，所以啊，其实放在哪里都可以。无关乎环境，只要可以开启一个WEB服务即可。")]),s._v(" "),n("p",[s._v("在GitHub上创建一个仓库来放我们的发布后的代码，关于创建仓库不会的看这里，"),n("a",{attrs:{href:"https://pages.github.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pages.github.com"),n("OutboundLink")],1),s._v(" 。")]),s._v(" "),n("p",[s._v("接下来去发布 Blazor 项目，发布之前改一下API地址，当然这个也可以做成配置文件形式的。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(514),alt:" "}})]),s._v(" "),n("p",[n("img",{attrs:{src:a(515),alt:" "}})]),s._v(" "),n("p",[s._v("然后将创建好的仓库克隆下来，把博客静态文件拷贝进去，这时候还不能直接push到仓库中，为了适配 GitHub Pages 我们还要做几点改动。")]),s._v(" "),n("p",[s._v("GitHub Pages 使用的是 Jekyll，以特殊字符开头的文件夹是不会被映射到路由中去的，我们发布的静态文件中刚好有以"),n("code",[s._v("_")]),s._v("开头的文件夹"),n("code",[s._v("_framework")]),s._v("，为了解决这个问题可以在仓库下面创建一个以"),n("code",[s._v(".nojekyll")]),s._v("命名的空文件即可。")]),s._v(" "),n("p",[s._v("根据实际操作和踩坑，现在如果发布还是会报一个无法加载资源的错误"),n("code",[s._v("The resource has been blocked.")]),s._v("，然后在GitHub找到了解决办法，详见："),n("a",{attrs:{href:"https://github.com/dotnet/aspnetcore/issues/19907#issuecomment-600054113",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/dotnet/aspnetcore/issues/19907#issuecomment-600054113"),n("OutboundLink")],1),s._v(" 。")]),s._v(" "),n("p",[s._v("新建一个"),n("code",[s._v(".gitattributes")]),s._v("文件，写入内容："),n("code",[s._v("* binary")]),s._v("，即可，现在将文件 push 到仓库。")]),s._v(" "),n("p",[s._v("然后在仓库的settings下面开启 GitHub Pages 功能选项。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(516),alt:" "}})]),s._v(" "),n("p",[s._v("我这里自定义了一个域名，如果你也想自定义域名可以在根目录添加一个名为"),n("code",[s._v("CNAME")]),s._v("的文件，里面的内容就是你的域名，我这里就是：blazor.meowv.com 。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(517),alt:" "}})]),s._v(" "),n("p",[s._v("最后在去配置一下域名的 CNAME 解析即可，等待 DNS 生效，便可以用自定义域名访问了。")]),s._v(" "),n("h2",{attrs:{id:"结束语"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[s._v("#")]),s._v(" 结束语")]),s._v(" "),n("p",[s._v("本系列文章从零开始搭建了API，使用 Blazor 开发了一个简单的博客系统，功能不是很多。整体来说从无到有，自己也踩了一遍坑，也算有不少收获了。")]),s._v(" "),n("p",[s._v("在这里再次感谢那些在公众号给我赞赏的人。🌹🌹🌹")]),s._v(" "),n("p",[s._v("可能整体涉及到的东西不是很多，广度和深度都没有，只是很基础的用了用，在写之前我也已经说过，这些系列是用来记录自己的编码过程，因为大佬们都不愿意出来分享，所以我们渣渣只能做到这种程度。")]),s._v(" "),n("p",[s._v("如果对你没啥帮助，权当看过笑过😀😀或者右上角点一下小叉叉❌❌，因为不管你做的如何，总有人喜欢说三道四~~")]),s._v(" "),n("p",[s._v("如果对你有些许帮助，请多多推广哟。✨✨✨")]),s._v(" "),n("p",[s._v("最后大家可以关注一下我的微信公众号：『"),n("strong",[s._v("阿星Plus")]),s._v("』🤞🤞🤞")]),s._v(" "),n("p",[s._v("因为疫情影响，今年高考推迟到7月份，每年高考便是我所在公司的业务高峰期，接下来实在太忙，估计也没时间创作了，正好准备休息一段时间，好好思考思考后面为大家带来更好的文章，有缘人下个系列见吧。😊😊😊")]),s._v(" "),n("p",[s._v("本系列文章代码开源地址："),n("a",{attrs:{href:"https://github.com/meowv/blog",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/meowv/blog"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);