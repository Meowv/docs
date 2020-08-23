(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{720:function(s,a,e){"use strict";e.r(a);var t=e(12),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"如何调试-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何调试-docker"}},[s._v("#")]),s._v(" 如何调试 Docker")]),s._v(" "),e("h2",{attrs:{id:"开启-debug-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启-debug-模式"}},[s._v("#")]),s._v(" 开启 Debug 模式")]),s._v(" "),e("p",[s._v("在 dockerd 配置文件 daemon.json（默认位于 /etc/docker/）中添加")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"debug"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("重启守护进程。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -SIGHUP "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pidof dockerd"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("此时 dockerd 会在日志中输入更多信息供分析。")]),s._v(" "),e("h2",{attrs:{id:"检查内核日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查内核日志"}},[s._v("#")]),s._v(" 检查内核日志")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dmesag "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" dockerd\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dmesag "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" runc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"docker-不响应时处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-不响应时处理"}},[s._v("#")]),s._v(" Docker 不响应时处理")]),s._v(" "),e("p",[s._v("可以杀死 dockerd 进程查看其堆栈调用情况。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -SIGUSR1 "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pidof dockerd"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"重置-docker-本地数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重置-docker-本地数据"}},[s._v("#")]),s._v(" 重置 Docker 本地数据")]),s._v(" "),e("p",[e("em",[s._v("注意，本操作会移除所有的 Docker 本地数据，包括镜像和容器等。")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);