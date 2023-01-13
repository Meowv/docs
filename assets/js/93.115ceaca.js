(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{697:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装与卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装与卸载"}},[s._v("#")]),s._v(" 安装与卸载")]),s._v(" "),a("p",[a("code",[s._v("Compose")]),s._v(" 支持 Linux、macOS、Windows 10 三大平台。")]),s._v(" "),a("p",[a("code",[s._v("Compose")]),s._v(" 可以通过 Python 的包管理工具 "),a("code",[s._v("pip")]),s._v(" 进行安装，也可以直接下载编译好的二进制文件使用，甚至能够直接在 Docker 容器中运行。")]),s._v(" "),a("p",[a("code",[s._v("Docker Desktop for Mac/Windows")]),s._v(" 自带 "),a("code",[s._v("docker-compose")]),s._v(" 二进制文件，安装 Docker 之后可以直接使用。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.25")]),s._v(".5, build 4667896b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("Linux 系统请使用以下介绍的方法安装。")]),s._v(" "),a("h2",{attrs:{id:"二进制包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制包"}},[s._v("#")]),s._v(" 二进制包")]),s._v(" "),a("p",[s._v("在 Linux 上的也安装十分简单，从 "),a("a",{attrs:{href:"https://github.com/docker/compose/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方 GitHub Release"),a("OutboundLink")],1),s._v(" 处直接下载编译好的二进制文件即可。")]),s._v(" "),a("p",[s._v("例如，在 Linux 64 位系统上直接下载对应的二进制包。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" https://github.com/docker/compose/releases/download/1.25.5/docker-compose-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/local/bin/docker-compose\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"pip-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pip-安装"}},[s._v("#")]),s._v(" PIP 安装")]),s._v(" "),a("p",[a("em",[s._v("注：")]),s._v(" "),a("code",[s._v("x86_64")]),s._v(" 架构的 Linux 建议按照上边的方法下载二进制包进行安装，如果您计算机的架构是 "),a("code",[s._v("ARM")]),s._v(" (例如，树莓派)，再使用 "),a("code",[s._v("pip")]),s._v(" 安装。")]),s._v(" "),a("p",[s._v("这种方式是将 Compose 当作一个 Python 应用来从 pip 源中安装。")]),s._v(" "),a("p",[s._v("执行安装命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-U")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以看到类似如下输出，说明安装成功。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Collecting "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v("\n  Downloading docker-compose-1.25.5.tar.gz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("149kB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": 149kB downloaded\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nSuccessfully installed "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" cached-property requests texttable websocket-client docker-py dockerpty six enum34 backports.ssl-match-hostname ipaddress\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"bash-补全命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bash-补全命令"}},[s._v("#")]),s._v(" bash 补全命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" https://raw.githubusercontent.com/docker/compose/1.25.5/contrib/completion/bash/docker-compose "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/bash_completion.d/docker-compose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" 卸载")]),s._v(" "),a("p",[s._v("如果是二进制包方式安装的，删除二进制文件即可。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" /usr/local/bin/docker-compose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果是通过 "),a("code",[s._v("pip")]),s._v(" 安装的，则执行如下命令即可删除。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip uninstall "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);