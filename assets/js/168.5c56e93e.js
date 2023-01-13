(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{775:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"部署服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署服务"}},[s._v("#")]),s._v(" 部署服务")]),s._v(" "),a("p",[s._v("我们使用 "),a("code",[s._v("docker service")]),s._v(" 命令来管理 "),a("code",[s._v("Swarm")]),s._v(" 集群中的服务，该命令只能在管理节点运行。")]),s._v(" "),a("h2",{attrs:{id:"新建服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建服务"}},[s._v("#")]),s._v(" 新建服务")]),s._v(" "),a("p",[s._v("现在我们在上一节创建的 "),a("code",[s._v("Swarm")]),s._v(" 集群中运行一个名为 "),a("code",[s._v("nginx")]),s._v(" 服务。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--replicas")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" nginx nginx:1.13.7-alpine\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("现在我们使用浏览器，输入任意节点 IP ，即可看到 nginx 默认页面。")]),s._v(" "),a("h2",{attrs:{id:"查看服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看服务"}},[s._v("#")]),s._v(" 查看服务")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("docker service ls")]),s._v(" 来查看当前 "),a("code",[s._v("Swarm")]),s._v(" 集群运行的服务。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nID                  NAME                MODE                REPLICAS            IMAGE                 PORTS\nkc57xffvhul5        nginx               replicated          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3                 nginx:1.13.7-alpine   *:80-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("使用 "),a("code",[s._v("docker service ps")]),s._v(" 来查看某个服务的详情。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" nginx\nID                  NAME                IMAGE                 NODE                DESIRED STATE       CURRENT STATE                ERROR               PORTS\npjfzd39buzlt        nginx.1             nginx:1.13.7-alpine   swarm2              Running             Running about a minute ago\nhy9eeivdxlaa        nginx.2             nginx:1.13.7-alpine   swarm1              Running             Running about a minute ago\n36wmpiv7gmfo        nginx.3             nginx:1.13.7-alpine   swarm3              Running             Running about a minute ago\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("使用 "),a("code",[s._v("docker service logs")]),s._v(" 来查看某个服务的日志。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" logs nginx\nnginx.3.36wmpiv7gmfo@swarm3    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.255")]),s._v(".0.4 - - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("/Nov/2017:02:10:30 +0000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET / HTTP/1.1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("612")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v("\nnginx.3.36wmpiv7gmfo@swarm3    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.255")]),s._v(".0.4 - - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("/Nov/2017:02:10:30 +0000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET /favicon.ico HTTP/1.1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("169")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v("\nnginx.3.36wmpiv7gmfo@swarm3    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("/11/25 02:10:30 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#5: *1 open() "/usr/share/nginx/html/favicon.ico" failed (2: No such file or directory), client: 10.255.0.4, server: localhost, request: "GET /favicon.ico HTTP/1.1", host: "192.168.99.102"')]),s._v("\nnginx.1.pjfzd39buzlt@swarm2    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.255")]),s._v(".0.2 - - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("/Nov/2017:02:10:26 +0000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET / HTTP/1.1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("612")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v("\nnginx.1.pjfzd39buzlt@swarm2    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.255")]),s._v(".0.2 - - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("/Nov/2017:02:10:27 +0000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET /favicon.ico HTTP/1.1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("169")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v("\nnginx.1.pjfzd39buzlt@swarm2    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("/11/25 02:10:27 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#5: *1 open() "/usr/share/nginx/html/favicon.ico" failed (2: No such file or directory), client: 10.255.0.2, server: localhost, request: "GET /favicon.ico HTTP/1.1", host: "192.168.99.101"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"服务伸缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务伸缩"}},[s._v("#")]),s._v(" 服务伸缩")]),s._v(" "),a("p",[s._v("我们可以使用 "),a("code",[s._v("docker service scale")]),s._v(" 对一个服务运行的容器数量进行伸缩。")]),s._v(" "),a("p",[s._v("当业务处于高峰期时，我们需要扩展服务运行的容器数量。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" scale "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("nginx")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当业务平稳时，我们需要减少服务运行的容器数量。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" scale "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("nginx")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"删除服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除服务"}},[s._v("#")]),s._v(" 删除服务")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("docker service rm")]),s._v(" 来从 "),a("code",[s._v("Swarm")]),s._v(" 集群移除某个服务。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);