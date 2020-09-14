(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{871:function(s,a,t){"use strict";t.r(a);var n=t(12),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"基于-net-core开发的个人博客-发布至centos小计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于-net-core开发的个人博客-发布至centos小计"}},[s._v("#")]),s._v(" 基于.NET Core开发的个人博客 发布至CentOS小计")]),s._v(" "),t("p",[s._v("早些时候，使用 .NET Framework 开发网站，只能部署在 Windows 服务器上面，近两年 .NET Core 如火如荼，乘此机会赶紧上车，最近将自己利用 .NET Core 开发的个人博客发布在了 CentOS 上，简单记录一下使用过程和一些常用的命令，以备不时之需。")]),s._v(" "),t("h2",{attrs:{id:"渣渣服务器配置信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渣渣服务器配置信息"}},[s._v("#")]),s._v(" 渣渣服务器配置信息")]),s._v(" "),t("ul",[t("li",[s._v("操作系统 CentOS 7.6 64 位")]),s._v(" "),t("li",[s._v("CPU 1 核")]),s._v(" "),t("li",[s._v("内存 1 GB")]),s._v(" "),t("li",[s._v("公网带宽 1 Mbps")])]),s._v(" "),t("h2",{attrs:{id:"强大的管理工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强大的管理工具"}},[s._v("#")]),s._v(" 强大的管理工具")]),s._v(" "),t("ul",[t("li",[s._v("Xshell：强大的安全终端模拟软件，它支持 SSH1, SSH2, 以及 Microsoft Windows 平台的 TELNET 协议。")]),s._v(" "),t("li",[s._v("WinSCP：WinSCP 是一个 Windows 环境下使用的 SSH 的开源图形化 SFTP 客户端。同时支持 SCP 协议。它的主要功能是在本地与远程计算机间安全地复制文件，并且可以直接编辑文件")]),s._v(" "),t("li",[s._v("Xftp：Xftp 是一个功能强大的 SFTP、FTP 文件传输软件。使用了 Xftp 以后，MS Windows 用户能安全地在 UNIX/Linux 和 Windows PC 之间传输文件。")])]),s._v(" "),t("h2",{attrs:{id:"安装-net-core-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-net-core-sdk"}},[s._v("#")]),s._v(" 安装 .NET Core SDK")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -Uvh https://packages.microsoft.com/config/rhel/7/packages-microsoft-prod.rpm\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dotnet-sdk-2.2\n\ndotnet --info\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"安装-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-nginx"}},[s._v("#")]),s._v(" 安装 Nginx")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o  nginx.rpm http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh nginx.rpm\n\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n\nsystemctl start nginx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动nginx")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置nginx的开机启动")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"nginx-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置"}},[s._v("#")]),s._v(" Nginx 配置")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name meowv.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_certificate ssl/1_meowv.com_bundle.crt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_certificate_key ssl/2_meowv.com.key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_session_timeout 5m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_ciphers AESGCM:ALL:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("DH:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("EXPORT:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("RC4:+HIGH:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MEDIUM:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("LOW:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("aNULL:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("eNULL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_prefer_server_ciphers on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# error_page 403 https://meowv.com;")]),s._v("\n    location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# add_header Access-Control-Allow-Origin *;")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root   /qix/static;")]),s._v("\n        proxy_pass http://localhost:5000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header   X-Real-IP        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header   Host             "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header   X-Forwarded-For  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name meowv.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    rewrite ^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ https://meowv.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h2",{attrs:{id:"安装-supervisor-守护进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-supervisor-守护进程"}},[s._v("#")]),s._v(" 安装 Supervisor 守护进程")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python-setuptools\n\neasy_install supervisor\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/supervisor\necho_supervisord_conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/supervisor/supervisord.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"配置-supervisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-supervisor"}},[s._v("#")]),s._v(" 配置 Supervisor")]),s._v(" "),t("p",[s._v("找到文件 /etc/supervisor/supervisord.conf 去掉文件最后的注释并修改为")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("include"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nfiles "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" conf.d/*.ini\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("在 /etc/supervisor/ 下新建文件夹 conf.d，conf.d 文件夹下新建 meowv.conf 文件，内容为")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("program:meowv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#meowv为程序名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dotnet MeowvBlog.Web.dll "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行的命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("directory")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/qix/meowv "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令执行的目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ASPNETCORE__ENVIRONMENT"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Production "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#环境变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("stopsignal")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("autostart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否自启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("autorestart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否自动重启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("startsecs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#自动重启时间间隔（s）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("stderr_logfile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log/meowv.com.err.log "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#错误日志文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("stdout_logfile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log/meowv.com.out.log "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输出日志文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"利用-crontab-定时执行-python-爬虫任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用-crontab-定时执行-python-爬虫任务"}},[s._v("#")]),s._v(" 利用 crontab 定时执行 Python 爬虫任务")]),s._v(" "),t("p",[s._v("在 Windows 平台我们可以使用任务计划程序运行定时任务，那么在 Linux 下有 crontab 帮我们实现")]),s._v(" "),t("p",[s._v("可以用"),t("code",[s._v("crontab -e")]),s._v("命令来编辑"),t("code",[s._v("/var/spool/cron")]),s._v("下对应用户的"),t("code",[s._v("cron")]),s._v("文件，也可以直接编辑"),t("code",[s._v("/etc/crontab")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example of job definition:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .---------------- minute (0 - 59)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  .------------- hour (0 - 23)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  .---------- day of month (1 - 31)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  |  |  |")]),s._v("\n*/30 * * * * /bin/python /qix/spider/spider.py "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#每30分钟执行一次")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl start  crond.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动")]),s._v("\nsystemctl status  crond.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看状态")]),s._v("\nsystemctl stop  crond.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止")]),s._v("\nsystemctl restart  crond.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新启动")]),s._v("\nsystemctl reload  crond.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新加载")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#目录跳转")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#回到上一个目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看目录下的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -h              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看文件使用情况")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建文件夹文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑文件")]),s._v("\n:wq"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#保存文件，并退出vi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" -a        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看ip")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看系统资源使用情况")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启系统")]),s._v("\nnginx -s reload    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新nginx配置使其生效")]),s._v("\nsupervisorctl start program_name   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动某个进程(program_name=配置的进程名称)")]),s._v("\nsupervisorctl stop program_name    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止某一进程")]),s._v("\nsupervisorctl reload               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新启动配置中的所有程序")]),s._v("\nsupervisorctl stop all             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止全部进程")]),s._v("\nsupervisorctl update               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更新新的配置到supervisord")]),s._v("\nsupervisorctl restart program_name "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启某一进程")]),s._v("\nsupervisorctl                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看正在守候的进程")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);