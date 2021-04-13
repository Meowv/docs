(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{584:function(s,t,a){s.exports=a.p+"assets/img/github_application_create.0ec4f070.png"},779:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"部署-drone"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署-drone"}},[s._v("#")]),s._v(" 部署 Drone")]),s._v(" "),n("h2",{attrs:{id:"要求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#要求"}},[s._v("#")]),s._v(" 要求")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("拥有公网 IP、域名 (如果你不满足要求，可以尝试在本地使用 Gogs + Drone)")])]),s._v(" "),n("li",[n("p",[s._v("域名 SSL 证书 (目前国内有很多云服务商提供免费证书)")])]),s._v(" "),n("li",[n("p",[s._v("熟悉 "),n("code",[s._v("Docker")]),s._v(" 以及 "),n("code",[s._v("Docker Compose")])])]),s._v(" "),n("li",[n("p",[s._v("熟悉 "),n("code",[s._v("Git")]),s._v(" 基本命令")])]),s._v(" "),n("li",[n("p",[s._v("对 "),n("code",[s._v("CI/CD")]),s._v(" 有一定了解")])])]),s._v(" "),n("h2",{attrs:{id:"新建-github-应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建-github-应用"}},[s._v("#")]),s._v(" 新建 GitHub 应用")]),s._v(" "),n("p",[s._v("登录 GitHub，在 "),n("a",{attrs:{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/settings/applications/new"),n("OutboundLink")],1),s._v(" 新建一个应用。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(584),alt:" "}})]),s._v(" "),n("p",[s._v("接下来查看这个应用的详情，记录 "),n("code",[s._v("Client ID")]),s._v(" 和 "),n("code",[s._v("Client Secret")]),s._v("，之后配置 Drone 会用到。")]),s._v(" "),n("h2",{attrs:{id:"配置-drone"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-drone"}},[s._v("#")]),s._v(" 配置 Drone")]),s._v(" "),n("p",[s._v("我们通过使用 "),n("code",[s._v("Docker Compose")]),s._v(" 来启动 "),n("code",[s._v("Drone")]),s._v("，编写 "),n("code",[s._v("docker-compose.yml")]),s._v(" 文件。")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("drone-server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" drone/drone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 443"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token datetime number"}},[s._v("80:80")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" drone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("rw\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./ssl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/certs\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" DRONE_AGENTS_ENABLED=true\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" DRONE_SERVER_HOST=$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DRONE_SERVER_HOST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//drone.yeasy.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" DRONE_SERVER_PROTO=$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DRONE_SERVER_PROTO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" DRONE_RPC_SECRET=$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DRONE_RPC_SECRET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("secret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" DRONE_GITHUB_SERVER=https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//github.com\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" DRONE_GITHUB_CLIENT_ID=$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DRONE_GITHUB_CLIENT_ID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" DRONE_GITHUB_CLIENT_SECRET=$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DRONE_GITHUB_CLIENT_SECRET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("drone-agent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" drone/drone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("runner"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("docker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" drone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /var/run/docker.sock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/run/docker.sock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("rw\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" DRONE_RPC_PROTO=http\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" DRONE_RPC_HOST=drone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" DRONE_RPC_SECRET=$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DRONE_RPC_SECRET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("secret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" DRONE_RUNNER_NAME=$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("HOSTNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("demo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" DRONE_RUNNER_CAPACITY=2\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 114.114.114.114\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("drone-data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("p",[s._v("新建 "),n("code",[s._v(".env")]),s._v(" 文件，输入变量及其值")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 必填 服务器地址，例如 drone.domain.com")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_SERVER_HOST")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_SERVER_PROTO")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_RPC_SECRET")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("secret\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOSTNAME")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("demo\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 必填 在 GitHub 应用页面查看")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_GITHUB_CLIENT_ID")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 必填 在 GitHub 应用页面查看")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_GITHUB_CLIENT_SECRET")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"启动-drone"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动-drone"}},[s._v("#")]),s._v(" 启动 Drone")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("docker-compose up -d\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);