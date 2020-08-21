(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{709:function(e,a,s){"use strict";s.r(a);var t=s(12),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"volume-定义匿名卷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volume-定义匿名卷"}},[e._v("#")]),e._v(" VOLUME 定义匿名卷")]),e._v(" "),s("p",[e._v("格式为：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v('VOLUME ["<路径1>", "<路径2>"...]')])]),e._v(" "),s("li",[s("code",[e._v("VOLUME <路径>")])])]),e._v(" "),s("p",[e._v("之前我们说过，容器运行时应该尽量保持容器存储层不发生写操作，对于数据库类需要保存动态数据的应用，其数据库文件应该保存于卷(volume)中，后面的章节我们会进一步介绍 Docker 卷的概念。为了防止运行时用户忘记将动态文件所保存目录挂载为卷，在 "),s("code",[e._v("Dockerfile")]),e._v(" 中，我们可以事先指定某些目录挂载为匿名卷，这样在运行时如果用户不指定挂载，其应用也可以正常运行，不会向容器存储层写入大量数据。")]),e._v(" "),s("div",{staticClass:"language-docker line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-docker"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VOLUME")]),e._v(" /data\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这里的 "),s("code",[e._v("/data")]),e._v(" 目录就会在运行时自动挂载为匿名卷，任何向 "),s("code",[e._v("/data")]),e._v(" 中写入的信息都不会记录进容器存储层，从而保证了容器存储层的无状态化。当然，运行时可以覆盖这个挂载设置。比如：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("docker run -d -v mydata:/data xxxx\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("在这行命令中，就使用了 "),s("code",[e._v("mydata")]),e._v(" 这个命名卷挂载到了 "),s("code",[e._v("/data")]),e._v(" 这个位置，替代了 "),s("code",[e._v("Dockerfile")]),e._v(" 中定义的匿名卷的挂载配置。")])])}),[],!1,null,null,null);a.default=r.exports}}]);