(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{608:function(t,r,e){"use strict";e.r(r);var a=e(12),v=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"http协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" HTTP协议")]),t._v(" "),e("h2",{attrs:{id:"http和https"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http和https"}},[t._v("#")]),t._v(" http和https")]),t._v(" "),e("ul",[e("li",[t._v("http协议：全称是 HyperText Transfer Protocol，意思是超文本传输协议，是一种发布和接收HTML页面的方法，服务器端口号是80。")]),t._v(" "),e("li",[t._v("https协议：是HTTP协议的加密版本，在HTTP下加入了SSL层，服务器端口号是443。")])]),t._v(" "),e("h3",{attrs:{id:"在浏览器中发送一个http请求的过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器中发送一个http请求的过程"}},[t._v("#")]),t._v(" 在浏览器中发送一个http请求的过程")]),t._v(" "),e("ul",[e("li",[t._v('当用户在浏览器地址栏钟输入一个URL访问之后，浏览器会向服务器发送HTTP请求，http请求主要分为 "GET" 和 "POST"。')]),t._v(" "),e("li",[t._v("比如当我们在浏览器输入URL "),e("a",{attrs:{href:"http://baidu.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://baidu.com"),e("OutboundLink")],1),t._v(" 的时候，浏览器发一个Request请求去获取 "),e("a",{attrs:{href:"http://baidu.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://baidu.com"),e("OutboundLink")],1),t._v(" 的HTML文件，服务器把Response文件对象返回给浏览器。")]),t._v(" "),e("li",[t._v("浏览器分析Response中的HTML，发现其中引用了很多其他文件，如图片、css、js等，浏览器会自动再次发送Request去获取这些文件。")]),t._v(" "),e("li",[t._v("当所有文件都下载成功，网页会根据HTML语法结构，完整显示出来。")])]),t._v(" "),e("h2",{attrs:{id:"url组成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url组成"}},[t._v("#")]),t._v(" URL组成")]),t._v(" "),e("p",[t._v("URL是Uniform Resource Locator的简写，统一资源定位符。 一个URL由以下几部分组成：")]),t._v(" "),e("ul",[e("li",[t._v("schema：代表访问的协议，一般为http、https、ftp")]),t._v(" "),e("li",[t._v("host：主机名，域名，比如 www.baidu.com")]),t._v(" "),e("li",[t._v("post：端口号，当访问一个网站的时候，http默认使用80，https默认使用443")]),t._v(" "),e("li",[t._v("path：查找路径，比如 www.baidu.com/search/error.html , search/error.html就是path")]),t._v(" "),e("li",[t._v("query-string：查询字符串，比如 www.baidu.com/s?wd=python wd=python就是查询字符串")]),t._v(" "),e("li",[t._v("anchor：锚点，前端用来做页面定位用")])]),t._v(" "),e("p",[t._v("在浏览器中请求一个URL，浏览器会对这个url进行编码，除了英文字母、数字和不分符号外，其他全部使用百分号加十六进制值进行编码")]),t._v(" "),e("h2",{attrs:{id:"get-和-post"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post"}},[t._v("#")]),t._v(" GET 和 POST")]),t._v(" "),e("p",[t._v("在HTTP协议中定义了8种请求方法")]),t._v(" "),e("ul",[e("li",[t._v("GET：一般情况下，只从服务器获取数据下来，并不会对服务器资源产生任何影响的时候会用GET请求")]),t._v(" "),e("li",[t._v("POST：向服务器发送数据、上传文件，会对服务器资源产生影响的时候会使用POST请求")])]),t._v(" "),e("p",[t._v("以上是网站开发中常用的两种方法，一般情况下都会遵循使用原则，但是有些网站和服务器为了做反爬虫机制，也经常不按常理出牌，要视情况而定。")]),t._v(" "),e("h2",{attrs:{id:"请求头常见参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求头常见参数"}},[t._v("#")]),t._v(" 请求头常见参数")]),t._v(" "),e("p",[t._v("在HTTP协议中，向服务器发送一个请求，数据分为三个部分，第一个是把数据放在URL中，第二个是把数据放在body中(POST请求)，第三个就是把数据放在head中")]),t._v(" "),e("ul",[e("li",[t._v("User-Agent：浏览器名称。这个在网络爬虫中经常会被使用到，请求一个网页的时候，服务器通过这个参数就可以知道当前请求是由哪种浏览器发送的，如果我们通过Python爬虫发送请求，那么User-Agent就是Python，这对于那些有反爬虫机制的网站来说，可以轻易判断请求是爬虫。因为我们需要设置这个值为一些浏览器的值，来伪装爬虫。")]),t._v(" "),e("li",[t._v("Referer：表明当前这个请求是从哪个URL过来的。这个一般也可以用来做反爬虫技术。如果不是从指定页面过来的，那么就不做响应的响应。")]),t._v(" "),e("li",[t._v("Cookie：HTTP协议是无状态的。同一个人发送了两次请求，服务器没有能力知道这两个请求是否来自同一个人，因此需要用Cookie来做标识，一般如果想要做登录后才能访问的网站，那么就需要发送Cookie信息了。")])]),t._v(" "),e("h2",{attrs:{id:"常见响应状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见响应状态码"}},[t._v("#")]),t._v(" 常见响应状态码")]),t._v(" "),e("ul",[e("li",[t._v("200 OK：客户端请求成功")]),t._v(" "),e("li",[t._v("400 Bad Request：客户端请求有语法错误，不能被服务器所理解")]),t._v(" "),e("li",[t._v("401 Unauthorized：请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用")]),t._v(" "),e("li",[t._v("403 Forbidden：服务器收到请求，但是拒绝提供服务")]),t._v(" "),e("li",[t._v("404 Not Found：请求资源不存在")]),t._v(" "),e("li",[t._v("500 Internal Server Error：服务器发生不可预期的错误")]),t._v(" "),e("li",[t._v("503 Server Unavailable：服务器当前不能出来客户端的请求，一段时间后可能恢复正常")])])])}),[],!1,null,null,null);r.default=v.exports}}]);