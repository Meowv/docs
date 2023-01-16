(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{692:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"在-travis-ci-中使用-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-travis-ci-中使用-docker"}},[s._v("#")]),s._v(" 在 Travis CI 中使用 Docker")]),s._v(" "),t("p",[s._v("当代码提交到 GitHub 时，"),t("a",{attrs:{href:"https://travis-ci.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Travis CI"),t("OutboundLink")],1),s._v(" 会根据项目根目录 "),t("code",[s._v(".travis.yml")]),s._v(" 文件设置的指令，执行一系列操作。")]),s._v(" "),t("p",[s._v("本小节介绍如何在 Travis CI 中使用 Docker 进行持续集成/持续部署（CI/CD）。这里以当代码提交到 GitHub 时自动构建 Docker 镜像并推送到 Docker Hub 为例进行介绍。")]),s._v(" "),t("h2",{attrs:{id:"准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),t("p",[s._v("首先登录 "),t("a",{attrs:{href:"https://travis-ci.com/account/repositories",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://travis-ci.com/account/repositories"),t("OutboundLink")],1),s._v(" 选择 GitHub 仓库，按照指引安装 GitHub App 来启用 GitHub 仓库构建。")]),s._v(" "),t("p",[s._v("在项目根目录新建一个 "),t("code",[s._v("Dockerfile")]),s._v(" 文件。")]),s._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" alpine")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World"')])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("新建 Travis CI 配置文件 "),t("code",[s._v(".travis.yml")]),s._v(" 文件。")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("language")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bash\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dist")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" xenial\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" docker\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("before_script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录到 docker hub")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(' echo "$DOCKER_PASSWORD" '),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" docker login "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('u "$DOCKER_USERNAME" '),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("stdin\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里编写测试代码的命令")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(' echo "test code"\n\n'),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("after_success")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当代码测试通过后执行的命令")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" docker build "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("t username/alpine .\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" docker push username/alpine\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("blockquote",[t("p",[s._v("请提前在 Travis CI 仓库设置页面配置 "),t("code",[s._v("DOCKER_PASSWORD")]),s._v(" "),t("code",[s._v("DOCKER_USERNAME")]),s._v(" 变量")])]),s._v(" "),t("h2",{attrs:{id:"查看结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看结果"}},[s._v("#")]),s._v(" 查看结果")]),s._v(" "),t("p",[s._v("将项目推送到 GitHub，登录 "),t("a",{attrs:{href:"https://travis-ci.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Travis CI"),t("OutboundLink")],1),s._v(" 查看构建详情。")])])}),[],!1,null,null,null);t.default=e.exports}}]);