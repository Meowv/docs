(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{704:function(s,a,n){"use strict";n.r(a);var t=n(12),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"多阶段构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多阶段构建"}},[s._v("#")]),s._v(" 多阶段构建")]),s._v(" "),n("h2",{attrs:{id:"之前的做法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#之前的做法"}},[s._v("#")]),s._v(" 之前的做法")]),s._v(" "),n("p",[s._v("在 Docker 17.05 版本之前，我们构建 Docker 镜像时，通常会采用两种方式：")]),s._v(" "),n("h3",{attrs:{id:"全部放入一个-dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全部放入一个-dockerfile"}},[s._v("#")]),s._v(" 全部放入一个 Dockerfile")]),s._v(" "),n("p",[s._v("一种方式是将所有的构建过程编包含在一个 "),n("code",[s._v("Dockerfile")]),s._v(" 中，包括项目及其依赖库的编译、测试、打包等流程，这里可能会带来的一些问题：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("镜像层次多，镜像体积较大，部署时间变长")])]),s._v(" "),n("li",[n("p",[s._v("源代码存在泄露的风险")])])]),s._v(" "),n("p",[s._v("例如，编写 "),n("code",[s._v("app.go")]),s._v(" 文件，该程序输出 "),n("code",[s._v("Hello World!")])]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("编写 "),n("code",[s._v("Dockerfile.one")]),s._v(" 文件")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" golang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.9"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("alpine\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apk "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cache add git ca"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("certificates\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /go/src/github.com/go/helloworld/\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" app.go .\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" go get "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("v github.com/go"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("driver/mysql \\\n  && CGO_ENABLED=0 GOOS=linux go build "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("installsuffix cgo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o app . \\\n  && cp /go/src/github.com/go/helloworld/app /root\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /root/\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("构建镜像")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("docker build -t go/helloworld:1 -f Dockerfile.one "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"分散到多个-dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分散到多个-dockerfile"}},[s._v("#")]),s._v(" 分散到多个 Dockerfile")]),s._v(" "),n("p",[s._v("另一种方式，就是我们事先在一个 "),n("code",[s._v("Dockerfile")]),s._v(" 将项目及其依赖库编译测试打包好后，再将其拷贝到运行环境中，这种方式需要我们编写两个 "),n("code",[s._v("Dockerfile")]),s._v(" 和一些编译脚本才能将其两个阶段自动整合起来，这种方式虽然可以很好地规避第一种方式存在的风险，但明显部署过程较复杂。")]),s._v(" "),n("p",[s._v("例如，编写 "),n("code",[s._v("Dockerfile.build")]),s._v(" 文件")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" golang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.9"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("alpine\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apk "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cache add git\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /go/src/github.com/go/helloworld\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" app.go .\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" go get "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("v github.com/go"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("driver/mysql \\\n  && CGO_ENABLED=0 GOOS=linux go build "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("installsuffix cgo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o app .\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("编写 "),n("code",[s._v("Dockerfile.copy")]),s._v(" 文件")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" alpine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apk "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cache add ca"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("certificates\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /root/\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" app .\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("新建 "),n("code",[s._v("build.sh")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Building go/helloworld:build\n\ndocker build -t go/helloworld:build "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -f Dockerfile.build\n\ndocker create --name extract go/helloworld:build\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" extract:/go/src/github.com/go/helloworld/app ./app\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f extract\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Building go/helloworld:2\n\ndocker build --no-cache -t go/helloworld:2 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -f Dockerfile.copy\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" ./app\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("现在运行脚本即可构建镜像")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x build.sh\n\n./build.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("对比两种方式生成的镜像大小")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker image "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\nREPOSITORY      TAG    IMAGE ID        CREATED         SIZE\ngo/helloworld   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("      f7cf3465432c    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" seconds ago  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".47MB\ngo/helloworld   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      f55d3e16affc    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes ago   295MB\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"使用多阶段构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用多阶段构建"}},[s._v("#")]),s._v(" 使用多阶段构建")]),s._v(" "),n("p",[s._v("为解决以上问题，Docker v17.05 开始支持多阶段构建 ("),n("code",[s._v("multistage builds")]),s._v(")。使用多阶段构建我们就可以很容易解决前面提到的问题，并且只需要编写一个 "),n("code",[s._v("Dockerfile")]),s._v("：")]),s._v(" "),n("p",[s._v("例如，编写 "),n("code",[s._v("Dockerfile")]),s._v(" 文件")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" golang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.9"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("alpine as builder\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apk "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cache add git\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /go/src/github.com/go/helloworld/\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" go get "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("v github.com/go"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("driver/mysql\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" app.go .\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" CGO_ENABLED=0 GOOS=linux go build "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("installsuffix cgo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o app .\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" alpine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest as prod\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apk "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cache add ca"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("certificates\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /root/\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("from=0 /go/src/github.com/go/helloworld/app .\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("构建镜像")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("docker build -t go/helloworld:3 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("对比三个镜像大小")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker image "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\nREPOSITORY        TAG   IMAGE ID         CREATED            SIZE\ngo/helloworld     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("     d6911ed9c846     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" seconds ago      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".47MB\ngo/helloworld     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     f7cf3465432c     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" seconds ago     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".47MB\ngo/helloworld     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     f55d3e16affc     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" minutes ago      295MB\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("很明显使用多阶段构建的镜像体积小，同时也完美解决了上边提到的问题。")]),s._v(" "),n("h3",{attrs:{id:"只构建某一阶段的镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#只构建某一阶段的镜像"}},[s._v("#")]),s._v(" 只构建某一阶段的镜像")]),s._v(" "),n("p",[s._v("我们可以使用 "),n("code",[s._v("as")]),s._v(" 来为某一阶段命名，例如")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" golang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.9"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("alpine as builder\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("例如当我们只想构建 "),n("code",[s._v("builder")]),s._v(" 阶段的镜像时，增加 "),n("code",[s._v("--target=builder")]),s._v(" 参数即可")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("docker build --target builder -t username/imagename:tag "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"构建时从其他镜像复制文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建时从其他镜像复制文件"}},[s._v("#")]),s._v(" 构建时从其他镜像复制文件")]),s._v(" "),n("p",[s._v("上面例子中我们使用 "),n("code",[s._v("COPY --from=0 /go/src/github.com/go/helloworld/app .")]),s._v(" 从上一阶段的镜像中复制文件，我们也可以复制任意镜像中的文件。")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("from=nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest /etc/nginx/nginx.conf /nginx.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);