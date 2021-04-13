(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{867:function(n,e,s){"use strict";s.r(e);var a=s(10),t=Object(a.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"swarm-mode-与滚动升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swarm-mode-与滚动升级"}},[n._v("#")]),n._v(" SWarm mode 与滚动升级")]),n._v(" "),s("p",[n._v("在 "),s("RouterLink",{attrs:{to:"/stack/docker/swarm_mode/deploy.html"}},[n._v("部署服务")]),n._v(" 一节中我们使用 "),s("code",[n._v("nginx:1.13.7-alpine")]),n._v(" 镜像部署了一个名为 "),s("code",[n._v("nginx")]),n._v(" 的服务。")],1),n._v(" "),s("p",[n._v("现在我们想要将 "),s("code",[n._v("NGINX")]),n._v(" 版本升级到 "),s("code",[n._v("1.13.12")]),n._v("，那么在 Swarm mode 中如何升级服务呢？")]),n._v(" "),s("p",[n._v("你可能会想到，先停止原来的服务，再使用新镜像部署一个服务，不就完成服务的 “升级” 了吗。")]),n._v(" "),s("p",[n._v("这样做的弊端很明显，如果新部署的服务出现问题，原来的服务删除之后，很难恢复，那么在 Swarm mode 中到底该如何对服务进行滚动升级呢？")]),n._v(" "),s("p",[n._v("答案就是使用 "),s("code",[n._v("docker service update")]),n._v(" 命令。")]),n._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("$ docker "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("service")]),n._v(" update "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    --image nginx:1.13.12-alpine "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    nginx\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("p",[n._v("以上命令使用 "),s("code",[n._v("--image")]),n._v(" 选项更新了服务的镜像。当然我们也可以使用 "),s("code",[n._v("docker service update")]),n._v(" 更新任意的配置。")]),n._v(" "),s("p",[s("code",[n._v("--secret-add")]),n._v(" 选项可以增加一个密钥")]),n._v(" "),s("p",[s("code",[n._v("--secret-rm")]),n._v(" 选项可以删除一个密钥")]),n._v(" "),s("p",[n._v("更多选项可以通过 "),s("code",[n._v("docker service update -h")]),n._v(" 命令查看。")]),n._v(" "),s("h2",{attrs:{id:"服务回退"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务回退"}},[n._v("#")]),n._v(" 服务回退")]),n._v(" "),s("p",[n._v("现在假设我们发现 "),s("code",[n._v("nginx")]),n._v(" 服务的镜像升级到 "),s("code",[n._v("nginx:1.13.12-alpine")]),n._v(" 出现了一些问题，我们可以使用命令一键回退。")]),n._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("docker "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("service")]),n._v(" rollback nginx\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("现在使用 "),s("code",[n._v("docker service ps")]),n._v(" 命令查看 "),s("code",[n._v("nginx")]),n._v(" 服务详情。")]),n._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("$ docker "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("service")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("ps")]),n._v(" nginx\n\nID                  NAME                IMAGE                  NODE                DESIRED STATE       CURRENT STATE                ERROR               PORTS\nrt677gop9d4x        nginx.1             nginx:1.13.7-alpine   VM-20-83-debian     Running             Running about a minute ago\nd9pw13v59d00         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("_ nginx.1         nginx:1.13.12-alpine  VM-20-83-debian     Shutdown            Shutdown "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("2")]),n._v(" minutes ago\ni7ynkbg6ybq5         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("_ nginx.1         nginx:1.13.7-alpine   VM-20-83-debian     Shutdown            Shutdown "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("2")]),n._v(" minutes ago\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br")])]),s("p",[n._v("结果的输出详细记录了服务的部署、滚动升级、回退的过程。")])])}),[],!1,null,null,null);e.default=t.exports}}]);