(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{944:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ubuntu-安装-docker-ce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-安装-docker-ce"}},[s._v("#")]),s._v(" Ubuntu 安装 Docker CE")]),s._v(" "),t("blockquote",[t("p",[s._v("警告：切勿在没有配置 Docker APT 源的情况下直接使用 apt 命令安装 Docker.")])]),s._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("h3",{attrs:{id:"系统要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[s._v("#")]),s._v(" 系统要求")]),s._v(" "),t("p",[s._v("Docker CE 支持以下版本的 "),t("a",{attrs:{href:"https://ubuntu.com/server",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu"),t("OutboundLink")],1),s._v(" 操作系统：")]),s._v(" "),t("ul",[t("li",[s._v("Ubuntu Focal 20.04 (LTS)")]),s._v(" "),t("li",[s._v("Eoan 19.10")]),s._v(" "),t("li",[s._v("Bionic 18.04 (LTS)")]),s._v(" "),t("li",[s._v("Xenial 16.04 (LTS)")])]),s._v(" "),t("p",[s._v("Docker CE 可以安装在 64 位的 x86 平台或 ARM 平台上。Ubuntu 发行版中，LTS（Long-Term-Support）长期支持版本，会获得 5 年的升级维护支持，这样的版本会更稳定，因此在生产环境中推荐使用 LTS 版本。")]),s._v(" "),t("h3",{attrs:{id:"卸载旧版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本"}},[s._v("#")]),s._v(" 卸载旧版本")]),s._v(" "),t("p",[s._v("旧版本的 Docker 称为 "),t("code",[s._v("docker")]),s._v(" 或者 "),t("code",[s._v("docker-engine")]),s._v("，使用以下命令卸载旧版本：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               docker-engine "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               docker.io\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"使用-apt-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-apt-安装"}},[s._v("#")]),s._v(" 使用 APT 安装")]),s._v(" "),t("p",[s._v("由于 "),t("code",[s._v("apt")]),s._v(" 源使用 HTTPS 以确保软件下载过程中不被篡改。因此，我们首先需要添加使用 HTTPS 传输的软件包以及 CA 证书。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    apt-transport-https "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    ca-certificates "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    software-properties-common\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。")]),s._v(" "),t("p",[s._v("为了确认所下载软件包的合法性，需要添加软件源的 "),t("code",[s._v("GPG")]),s._v(" 密钥。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官方源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("然后，我们需要向 "),t("code",[s._v("source.list")]),s._v(" 中添加 Docker 软件源")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu \\\n    '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release -cs"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' \\\n    stable"')]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官方源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ sudo add-apt-repository \\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \\')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    $(lsb_release -cs) \\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#    stable"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("blockquote",[t("p",[s._v("以上命令会添加稳定版本的 Docker CE APT 镜像源，如果需要测试或每日构建版本的 Docker CE 请将 stable 改为 test 或者 nightly。")])]),s._v(" "),t("h3",{attrs:{id:"安装-docker-ce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-ce"}},[s._v("#")]),s._v(" 安装 Docker CE")]),s._v(" "),t("p",[s._v("更新 apt 软件包缓存，并安装 "),t("code",[s._v("docker-ce")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"使用脚本自动安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本自动安装"}},[s._v("#")]),s._v(" 使用脚本自动安装")]),s._v(" "),t("p",[s._v("在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，Ubuntu 系统上可以使用这套脚本安装，另外可以通过 "),t("code",[s._v("--mirror")]),s._v(" 选项使用国内源进行安装：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL get.docker.com -o get-docker.sh\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" get-docker.sh --mirror Aliyun\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ sudo sh get-docker.sh --mirror AzureChinaCloud")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker CE 的稳定(stable)版本安装在系统中。")]),s._v(" "),t("h2",{attrs:{id:"启动-docker-ce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-docker-ce"}},[s._v("#")]),s._v(" 启动 Docker CE")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"建立-docker-用户组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立-docker-用户组"}},[s._v("#")]),s._v(" 建立 docker 用户组")]),s._v(" "),t("p",[s._v("默认情况下，"),t("code",[s._v("docker")]),s._v(" 命令会使用 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unix_domain_socket",target:"_blank",rel:"noopener noreferrer"}},[s._v("Unix socket"),t("OutboundLink")],1),s._v(" 与 Docker 引擎通讯。而只有 "),t("code",[s._v("root")]),s._v(" 用户和 "),t("code",[s._v("docker")]),s._v(" 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 "),t("code",[s._v("root")]),s._v(" 用户。因此，更好地做法是将需要使用 "),t("code",[s._v("docker")]),s._v(" 的用户加入 "),t("code",[s._v("docker")]),s._v(" 用户组。")]),s._v(" "),t("p",[s._v("建立 "),t("code",[s._v("docker")]),s._v(" 组：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将当前用户加入 "),t("code",[s._v("docker")]),s._v(" 组：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -aG docker "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("退出当前终端并重新登录，进行如下测试。")]),s._v(" "),t("h2",{attrs:{id:"测试-docker-是否安装正确"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试-docker-是否安装正确"}},[s._v("#")]),s._v(" 测试 Docker 是否安装正确")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker run hello-world\n\nUnable to "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" image "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello-world:latest'")]),s._v(" locally\nlatest: Pulling from library/hello-world\nd1725b59e92d: Pull complete\nDigest: sha256:0add3ace90ecb4adbf7777e9aacf18357296e799f81cabc9fde470971e499788\nStatus: Downloaded newer image "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" hello-world:latest\n\nHello from Docker"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". The Docker client contacted the Docker daemon.\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". The Docker daemon pulled the "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello-world"')]),s._v(" image from the Docker Hub.\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". The Docker daemon created a new container from that image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" runs the\n    executable that produces the output you are currently reading.\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". The Docker daemon streamed that output to the Docker client, "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" sent it\n    to your terminal.\n\nTo try something "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\nShare images, automate workflows, and "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" with a "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" Docker ID:\n https://hub.docker.com/\n\nFor "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" examples and ideas, visit:\n https://docs.docker.com/get-started/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("p",[s._v("若能正常输出以上信息，则说明安装成功。")]),s._v(" "),t("h2",{attrs:{id:"镜像加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速"}},[s._v("#")]),s._v(" 镜像加速")]),s._v(" "),t("p",[s._v("如果在使用过程中发现拉取 Docker 镜像十分缓慢，可以配置 Docker "),t("RouterLink",{attrs:{to:"/stack/docker/install/mirror.html"}},[s._v("国内镜像加速")]),s._v("。")],1),s._v(" "),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 官方 Ubuntu 安装文档"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);