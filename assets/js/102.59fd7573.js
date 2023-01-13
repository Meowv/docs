(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{706:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"挂载主机目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载主机目录"}},[s._v("#")]),s._v(" 挂载主机目录")]),s._v(" "),a("h2",{attrs:{id:"挂载一个主机目录作为数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载一个主机目录作为数据卷"}},[s._v("#")]),s._v(" 挂载一个主机目录作为数据卷")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("--mount")]),s._v(" 标记可以指定挂载一个本地主机的目录到容器中去。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" web "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v /src/webapp:/opt/webapp \\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--mount")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bind,source"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/src/webapp,target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/webapp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    training/webapp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    python app.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("上面的命令加载主机的 "),a("code",[s._v("/src/webapp")]),s._v(" 目录到容器的 "),a("code",[s._v("/opt/webapp")]),s._v("目录。这个功能在进行测试的时候十分方便，比如用户可以放置一些程序到本地目录中，来查看容器是否正常工作。本地目录的路径必须是绝对路径，以前使用 "),a("code",[s._v("-v")]),s._v(" 参数时如果本地目录不存在 Docker 会自动为你创建一个文件夹，现在使用 "),a("code",[s._v("--mount")]),s._v(" 参数时如果本地目录不存在，Docker 会报错。")]),s._v(" "),a("p",[s._v("Docker 挂载主机目录的默认权限是 "),a("code",[s._v("读写")]),s._v("，用户也可以通过增加 "),a("code",[s._v("readonly")]),s._v(" 指定为 "),a("code",[s._v("只读")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" web "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v /src/webapp:/opt/webapp:ro \\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--mount")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bind,source"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/src/webapp,target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/webapp,readonly "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    training/webapp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    python app.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("加了 "),a("code",[s._v("readonly")]),s._v(" 之后，就挂载为 "),a("code",[s._v("只读")]),s._v(" 了。如果你在容器内 "),a("code",[s._v("/opt/webapp")]),s._v(" 目录新建文件，会显示如下错误")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/opt/webapp "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# touch new.txt")]),s._v("\ntouch: new.txt: Read-only "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" system\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"查看数据卷的具体信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看数据卷的具体信息"}},[s._v("#")]),s._v(" 查看数据卷的具体信息")]),s._v(" "),a("p",[s._v("在主机里使用以下命令可以查看 "),a("code",[s._v("web")]),s._v(" 容器的信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect web\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("挂载主机目录")]),s._v(' 的配置信息在 "Mounts" Key 下面')]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Mounts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bind"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Source"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/src/webapp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Destination"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/webapp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Mode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"RW"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Propagation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rprivate"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"挂载一个本地主机文件作为数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载一个本地主机文件作为数据卷"}},[s._v("#")]),s._v(" 挂载一个本地主机文件作为数据卷")]),s._v(" "),a("p",[a("code",[s._v("--mount")]),s._v(" 标记也可以从主机挂载单个文件到容器中")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v $HOME/.bash_history:/root/.bash_history \\")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--mount")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bind,source"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.bash_history,target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/.bash_history "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n   ubuntu:18.04 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\nroot@2affd44b4667:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# history")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  diskutil list\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("这样就可以记录在容器输入过的命令了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);