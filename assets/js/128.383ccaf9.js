(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{732:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"debian-安装-docker-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debian-安装-docker-ce"}},[s._v("#")]),s._v(" Debian 安装 Docker CE")]),s._v(" "),a("blockquote",[a("p",[s._v("警告：切勿在没有配置 Docker APT 源的情况下直接使用 apt 命令安装 Docker.")])]),s._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),a("h3",{attrs:{id:"系统要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[s._v("#")]),s._v(" 系统要求")]),s._v(" "),a("p",[s._v("Docker CE 支持以下版本的 "),a("a",{attrs:{href:"https://www.debian.org/intro/about",target:"_blank",rel:"noopener noreferrer"}},[s._v("Debian"),a("OutboundLink")],1),s._v(" 操作系统：")]),s._v(" "),a("ul",[a("li",[s._v("Buster 10")]),s._v(" "),a("li",[s._v("Stretch 9")])]),s._v(" "),a("h3",{attrs:{id:"卸载旧版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本"}},[s._v("#")]),s._v(" 卸载旧版本")]),s._v(" "),a("p",[s._v("旧版本的 Docker 称为 "),a("code",[s._v("docker")]),s._v(" 或者 "),a("code",[s._v("docker-engine")]),s._v("，使用以下命令卸载旧版本：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               docker-engine "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               docker.io\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"使用-apt-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-apt-安装"}},[s._v("#")]),s._v(" 使用 APT 安装")]),s._v(" "),a("p",[s._v("由于 apt 源使用 HTTPS 以确保软件下载过程中不被篡改。因此，我们首先需要添加使用 HTTPS 传输的软件包以及 CA 证书。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     apt-transport-https "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     ca-certificates "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     gnupg2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     lsb-release "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     software-properties-common\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。")]),s._v(" "),a("p",[s._v("为了确认所下载软件包的合法性，需要添加软件源的 GPG 密钥。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fsSL")]),s._v(" https://mirrors.ustc.edu.cn/docker-ce/linux/debian/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官方源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后，我们需要向 "),a("code",[s._v("source.list")]),s._v(" 中添加 Docker CE 软件源：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/debian \\\n   '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cs")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' \\\n   stable"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官方源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ sudo add-apt-repository \\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#    "deb [arch=amd64] https://download.docker.com/linux/debian \\')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    $(lsb_release -cs) \\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#    stable"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("blockquote",[a("p",[s._v("以上命令会添加稳定版本的 Docker CE APT 源，如果需要测试或每日构建版本的 Docker CE 请将 stable 改为 test 或者 nightly。")])]),s._v(" "),a("h3",{attrs:{id:"安装-docker-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-ce"}},[s._v("#")]),s._v(" 安装 Docker CE")]),s._v(" "),a("p",[s._v("更新 apt 软件包缓存，并安装 "),a("code",[s._v("docker-ce")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"使用脚本自动安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本自动安装"}},[s._v("#")]),s._v(" 使用脚本自动安装")]),s._v(" "),a("p",[s._v("在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，Debian 系统上可以使用这套脚本安装，另外可以通过 "),a("code",[s._v("--mirror")]),s._v(" 选项使用国内源进行安装：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fsSL")]),s._v(" get.docker.com "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" get-docker.sh\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" get-docker.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--mirror")]),s._v(" Aliyun\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ sudo sh get-docker.sh --mirror AzureChinaCloud")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker CE 的稳定(stable)版本安装在系统中。")]),s._v(" "),a("h2",{attrs:{id:"启动-docker-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-docker-ce"}},[s._v("#")]),s._v(" 启动 Docker CE")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"建立-docker-用户组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立-docker-用户组"}},[s._v("#")]),s._v(" 建立 docker 用户组")]),s._v(" "),a("p",[s._v("默认情况下，"),a("code",[s._v("docker")]),s._v(" 命令会使用 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unix_domain_socket",target:"_blank",rel:"noopener noreferrer"}},[s._v("Unix socket"),a("OutboundLink")],1),s._v(" 与 Docker 引擎通讯。而只有 "),a("code",[s._v("root")]),s._v(" 用户和 "),a("code",[s._v("docker")]),s._v(" 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 "),a("code",[s._v("root")]),s._v(" 用户。因此，更好地做法是将需要使用 "),a("code",[s._v("docker")]),s._v(" 的用户加入 "),a("code",[s._v("docker")]),s._v(" 用户组。")]),s._v(" "),a("p",[s._v("建立 "),a("code",[s._v("docker")]),s._v(" 组：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将当前用户加入 "),a("code",[s._v("docker")]),s._v(" 组：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aG")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("退出当前终端并重新登录，进行如下测试。")]),s._v(" "),a("h2",{attrs:{id:"测试-docker-是否安装正确"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试-docker-是否安装正确"}},[s._v("#")]),s._v(" 测试 Docker 是否安装正确")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run hello-world\n\nUnable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" image "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello-world:latest'")]),s._v(" locally\nlatest: Pulling from library/hello-world\nd1725b59e92d: Pull complete\nDigest: sha256:0add3ace90ecb4adbf7777e9aacf18357296e799f81cabc9fde470971e499788\nStatus: Downloaded newer image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" hello-world:latest\n\nHello from Docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". The Docker client contacted the Docker daemon.\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". The Docker daemon pulled the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello-world"')]),s._v(" image from the Docker Hub.\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". The Docker daemon created a new container from that image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" runs the\n    executable that produces the output you are currently reading.\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". The Docker daemon streamed that output to the Docker client, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" sent it\n    to your terminal.\n\nTo try something "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" ambitious, you can run an Ubuntu container with:\n $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" ubuntu "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\nShare images, automate workflows, and "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" with a "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" Docker ID:\n https://hub.docker.com/\n\nFor "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" examples and ideas, visit:\n https://docs.docker.com/get-started/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("若能正常输出以上信息，则说明安装成功。")]),s._v(" "),a("h2",{attrs:{id:"镜像加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速"}},[s._v("#")]),s._v(" 镜像加速")]),s._v(" "),a("p",[s._v("如果在使用过程中发现拉取 Docker 镜像十分缓慢，可以配置 Docker "),a("RouterLink",{attrs:{to:"/stack/docker/install/mirror.html"}},[s._v("国内镜像加速")]),s._v("。")],1),s._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/debian/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 官方 Debian 安装文档"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);