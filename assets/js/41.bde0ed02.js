(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{629:function(s,t,e){s.exports=e.p+"assets/img/exceptionless-in-dotnet-01.924ef84f.png"},630:function(s,t,e){s.exports=e.p+"assets/img/exceptionless-in-dotnet-02.b2df268f.png"},631:function(s,t,e){s.exports=e.p+"assets/img/exceptionless-in-dotnet-03.bceb23b4.png"},876:function(s,t,e){"use strict";e.r(t);var n=e(9),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"net-core-下使用-exceptionless-记录日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#net-core-下使用-exceptionless-记录日志"}},[s._v("#")]),s._v(" .NET Core 下使用 Exceptionless 记录日志")]),s._v(" "),n("p",[n("code",[s._v("ExceptionLess")]),s._v("是一套免费开源分布式系统日志收集框架，也是我无意中发现的，支持自己部署和平台托管的方式接入使用。")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("ExceptionLess")]),s._v("官网："),n("a",{attrs:{href:"https://exceptionless.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://exceptionless.com"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("code",[s._v("ExceptionLess")]),s._v("开源地址："),n("a",{attrs:{href:"https://github.com/exceptionless/Exceptionless",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/exceptionless/Exceptionless"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("code",[s._v("ExceptionLess")]),s._v(".NET客户端开源地址："),n("a",{attrs:{href:"https://github.com/exceptionless/Exceptionless.Net",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/exceptionless/Exceptionless.Net"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("p",[s._v("如果是自己小项目，可以直接使用托管的方式接入"),n("code",[s._v("ExceptionLess")]),s._v("，但是如果是公司项目还是建议自己部署吧。")]),s._v(" "),n("div",{staticClass:"language-powershell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[s._v("docker run "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("it "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p 5000:80 exceptionless"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("exceptionless:6"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("成功后，打开："),n("a",{attrs:{href:"http://localhost:5000",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:5000"),n("OutboundLink")],1),s._v("，可以看到"),n("code",[s._v("dashboard")]),s._v("界面，注册账号登录，创建一个项目。")]),s._v(" "),n("p",[n("img",{attrs:{src:e(629),alt:" "}}),s._v(" "),n("img",{attrs:{src:e(630),alt:" "}})]),s._v(" "),n("p",[s._v("可以看到选择不同的项目类型，配置方法也写的非常清楚，在 .NET Core 照着配置即可。")]),s._v(" "),n("p",[s._v("更多安装方式参考："),n("a",{attrs:{href:"https://github.com/exceptionless/Exceptionless/wiki/Self-Hosting",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/exceptionless/Exceptionless/wiki/Self-Hosting"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),n("p",[s._v("安装 NuGet 程序包到项目中：")]),s._v(" "),n("div",{staticClass:"language-powershell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Install-Package")]),s._v(" Exceptionless"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AspNetCore\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在"),n("code",[s._v("dashboard")]),s._v("界面可以得到一个api密钥，和"),n("code",[s._v("dashboard")]),s._v("服务地址，可以放在配置文件中。")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Exceptionless"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ServerUrl"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:5000"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ApiKey"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pz2zGzIxbAWjHVU4FqR2UV7ATDfYxbpFZXGjQmCR"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language-csharp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Configure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IApplicationBuilder")]),s._v(" app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IWebHostEnvironment")]),s._v(" env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token range operator"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("UseExceptionless")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Configuration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token range operator"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("code",[s._v("UseExceptionless")]),s._v("有多个重载方法，根据需要选择，这里将"),n("code",[s._v("IConfiguration")]),s._v("对象传进去，获取"),n("code",[s._v("Exceptionless")]),s._v("配置的服务地址和api密钥。")]),s._v(" "),n("p",[s._v("然后在项目中随意写几个接口并访问，在"),n("code",[s._v("dashboard")]),s._v("界面就可以实时看到访问日志了，还是挺方便的。")]),s._v(" "),n("p",[n("img",{attrs:{src:e(631),alt:" "}})]),s._v(" "),n("p",[s._v("现在您的项目可以自动将所有未处理异常发送到"),n("code",[s._v("Exceptionless")]),s._v("了，也可以通过 "),n("code",[s._v("ex.ToExceptionless().Submit()")]),s._v("向"),n("code",[s._v("Exceptionless")]),s._v("发送已处理的异常。")]),s._v(" "),n("p",[s._v("更多使用方法请参考："),n("a",{attrs:{href:"https://github.com/exceptionless/Exceptionless.Net/wiki",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/exceptionless/Exceptionless.Net/wiki"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);