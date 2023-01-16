(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{747:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"外部访问容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外部访问容器"}},[a._v("#")]),a._v(" 外部访问容器")]),a._v(" "),s("p",[a._v("容器中可以运行一些网络应用，要让外部也可以访问这些应用，可以通过 "),s("code",[a._v("-P")]),a._v(" 或 "),s("code",[a._v("-p")]),a._v(" 参数来指定端口映射。")]),a._v(" "),s("p",[a._v("当使用 "),s("code",[a._v("-P")]),a._v(" 标记时，Docker 会随机映射一个 "),s("code",[a._v("49000~49900")]),a._v(" 的端口到内部容器开放的网络端口。")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("docker container ls")]),a._v(" 可以看到，本地主机的 49155 被映射到了容器的 5000 端口。此时访问本机的 49155 端口即可访问容器内 web 应用提供的界面。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" training/webapp python app.py\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" container "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("\nCONTAINER ID  IMAGE                   COMMAND       CREATED        STATUS        PORTS                    NAMES\nbc533791f3f5  training/webapp:latest  python app.py "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" seconds ago  Up "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" seconds  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:49155-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5000")]),a._v("/tcp  nostalgic_morse\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("同样的，可以通过 "),s("code",[a._v("docker logs")]),a._v(" 命令来查看应用的信息。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" nostalgic_morse\n* Running on http://0.0.0.0:5000/\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".2.2 - - "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("23")]),a._v("/May/2014 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(":16:31"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"GET / HTTP/1.1"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" -\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".2.2 - - "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("23")]),a._v("/May/2014 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(":16:31"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"GET /favicon.ico HTTP/1.1"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("404")]),a._v(" -\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[s("code",[a._v("-p")]),a._v(" 则可以指定要映射的端口，并且，在一个指定端口上只可以绑定一个容器。支持的格式有 "),s("code",[a._v("ip:hostPort:containerPort | ip::containerPort | hostPort:containerPort")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"映射所有接口地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#映射所有接口地址"}},[a._v("#")]),a._v(" 映射所有接口地址")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("hostPort:containerPort")]),a._v(" 格式本地的 5000 端口映射到容器的 5000 端口，可以执行")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5000")]),a._v(":5000 training/webapp python app.py\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("此时默认会绑定本地所有接口上的所有地址。")]),a._v(" "),s("h2",{attrs:{id:"映射到指定地址的指定端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#映射到指定地址的指定端口"}},[a._v("#")]),a._v(" 映射到指定地址的指定端口")]),a._v(" "),s("p",[a._v("可以使用 "),s("code",[a._v("ip:hostPort:containerPort")]),a._v(" 格式指定映射使用一个特定地址，比如 localhost 地址 127.0.0.1")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:5000:5000 training/webapp python app.py\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"映射到指定地址的任意端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#映射到指定地址的任意端口"}},[a._v("#")]),a._v(" 映射到指定地址的任意端口")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("ip::containerPort")]),a._v(" 绑定 localhost 的任意端口到容器的 5000 端口，本地主机会自动分配一个端口。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1::5000 training/webapp python app.py\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("还可以使用 "),s("code",[a._v("udp")]),a._v(" 标记来指定 "),s("code",[a._v("udp")]),a._v(" 端口")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:5000:5000/udp training/webapp python app.py\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"查看映射端口配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看映射端口配置"}},[a._v("#")]),a._v(" 查看映射端口配置")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("docker port")]),a._v(" 来查看当前映射的端口配置，也可以查看到绑定的地址")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" port nostalgic_morse "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5000")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:49155.\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("blockquote",[s("p",[a._v("注意：")])]),a._v(" "),s("ul",[s("li",[a._v("容器有自己的内部网络和 ip 地址（使用 "),s("code",[a._v("docker inspect")]),a._v(" 可以获取所有的变量，Docker 还可以有一个可变的网络配置。）")]),a._v(" "),s("li",[s("code",[a._v("-p")]),a._v(" 标记可以多次使用来绑定多个端口")])]),a._v(" "),s("p",[a._v("例如")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5000")]),a._v(":5000 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3000")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    training/webapp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    python app.py\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);