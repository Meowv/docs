(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{701:function(s,a,t){"use strict";t.r(a);var e=t(12),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"开启实验特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启实验特性"}},[s._v("#")]),s._v(" 开启实验特性")]),s._v(" "),t("p",[s._v("一些 docker 命令或功能仅当 "),t("strong",[s._v("实验特性")]),s._v(" 开启时才能使用，请按照以下方法进行设置。")]),s._v(" "),t("h2",{attrs:{id:"开启-docker-cli-的实验特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启-docker-cli-的实验特性"}},[s._v("#")]),s._v(" 开启 Docker CLI 的实验特性")]),s._v(" "),t("p",[s._v("编辑 "),t("code",[s._v("~/.docker/config.json")]),s._v(" 文件，新增如下条目")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"experimental"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"enabled"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("或者通过设置环境变量的方式：")]),s._v(" "),t("h3",{attrs:{id:"linux-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-macos"}},[s._v("#")]),s._v(" Linux/macOS")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DOCKER_CLI_EXPERIMENTAL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("enabled\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" Windows")]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 临时生效")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":DOCKER_CLI_EXPERIMENTAL="),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"enabled"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久生效")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[environment]")]),s._v("::SetEnvironmentvariable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DOCKER_CLI_EXPERIMENTAL"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"enabled"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"开启-dockerd-的实验特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启-dockerd-的实验特性"}},[s._v("#")]),s._v(" 开启 Dockerd 的实验特性")]),s._v(" "),t("p",[s._v("编辑 "),t("code",[s._v("/etc/docker/daemon.json")]),s._v("，新增如下条目")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"experimental"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);