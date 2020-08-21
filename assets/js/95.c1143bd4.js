(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{693:function(s,a,t){"use strict";t.r(a);var n=t(12),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据卷"}},[s._v("#")]),s._v(" 数据卷")]),s._v(" "),t("p",[t("code",[s._v("数据卷")]),s._v(" 是一个可供一个或多个容器使用的特殊目录，它绕过 UFS，可以提供很多有用的特性：")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("数据卷")]),s._v(" 可以在容器之间共享和重用")])]),s._v(" "),t("li",[t("p",[s._v("对 "),t("code",[s._v("数据卷")]),s._v(" 的修改会立马生效")])]),s._v(" "),t("li",[t("p",[s._v("对 "),t("code",[s._v("数据卷")]),s._v(" 的更新，不会影响镜像")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("数据卷")]),s._v(" 默认会一直存在，即使容器被删除")])])]),s._v(" "),t("blockquote",[t("p",[s._v("注意："),t("code",[s._v("数据卷")]),s._v(" 的使用，类似于 Linux 下对目录或文件进行 mount，镜像中的被指定为挂载点的目录中的文件会隐藏掉，能显示看到的是挂载的 "),t("code",[s._v("数据卷")]),s._v("。")])]),s._v(" "),t("h2",{attrs:{id:"创建一个数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个数据卷"}},[s._v("#")]),s._v(" 创建一个数据卷")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker volume create my-vol\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看所有的 "),t("code",[s._v("数据卷")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker volume "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("               my-vol\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("在主机里使用以下命令可以查看指定 "),t("code",[s._v("数据卷")]),s._v(" 的信息")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker volume inspect my-vol\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Driver"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Labels"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mountpoint"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/volumes/my-vol/_data"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my-vol"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Options"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Scope"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"启动一个挂载数据卷的容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动一个挂载数据卷的容器"}},[s._v("#")]),s._v(" 启动一个挂载数据卷的容器")]),s._v(" "),t("p",[s._v("在用 "),t("code",[s._v("docker run")]),s._v(" 命令的时候，使用 "),t("code",[s._v("--mount")]),s._v(" 标记来将 "),t("code",[s._v("数据卷")]),s._v(" 挂载到容器里。在一次 "),t("code",[s._v("docker run")]),s._v(" 中可以挂载多个 "),t("code",[s._v("数据卷")]),s._v("。")]),s._v(" "),t("p",[s._v("下面创建一个名为 "),t("code",[s._v("web")]),s._v(" 的容器，并加载一个 "),t("code",[s._v("数据卷")]),s._v(" 到容器的 "),t("code",[s._v("/webapp")]),s._v(" 目录。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker run -d -P "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --name web "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v my-vol:/wepapp \\")]),s._v("\n    --mount "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("source")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my-vol,target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/webapp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    training/webapp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    python app.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"查看数据卷的具体信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看数据卷的具体信息"}},[s._v("#")]),s._v(" 查看数据卷的具体信息")]),s._v(" "),t("p",[s._v("在主机里使用以下命令可以查看 "),t("code",[s._v("web")]),s._v(" 容器的信息")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker inspect web\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("数据卷")]),s._v(' 信息在 "Mounts" Key 下面')]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Mounts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"volume"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my-vol"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Source"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/volumes/my-vol/_data"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Destination"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Driver"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Mode"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"RW"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Propagation"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"删除数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除数据卷"}},[s._v("#")]),s._v(" 删除数据卷")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker volume "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" my-vol\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("数据卷")]),s._v(" 是被设计用来持久化数据的，它的生命周期独立于容器，Docker 不会在容器被删除后自动删除 "),t("code",[s._v("数据卷")]),s._v("，并且也不存在垃圾回收这样的机制来处理没有任何容器引用的 "),t("code",[s._v("数据卷")]),s._v("。如果需要在删除容器的同时移除数据卷。可以在删除容器的时候使用 "),t("code",[s._v("docker rm -v")]),s._v(" 这个命令。")]),s._v(" "),t("p",[s._v("无主的数据卷可能会占据很多空间，要清理请使用以下命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker volume prune\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);