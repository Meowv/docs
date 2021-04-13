(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{831:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linuxkit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linuxkit"}},[s._v("#")]),s._v(" LinuxKit")]),s._v(" "),t("p",[t("code",[s._v("LinuxKit")]),s._v(" 这个工具可以将多个 Docker 镜像组成一个最小化、可自由定制的 Linux 系统，最后的生成的系统只有几十 M 大小，可以很方便的在云端进行部署。")]),s._v(" "),t("p",[s._v("下面我们在 macOS 上通过实例，来编译并运行一个全部由 Docker 镜像组成的包含 nginx 服务的 Linux 系统。")]),s._v(" "),t("h2",{attrs:{id:"安装-linuxkit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-linuxkit"}},[s._v("#")]),s._v(" 安装 Linuxkit")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("brew tap linuxkit/linuxkit\n\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --HEAD linuxkit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"克隆源代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#克隆源代码"}},[s._v("#")]),s._v(" 克隆源代码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone -b master --depth"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" https://github.com/linuxkit/linuxkit\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" linuxkit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"编译-linux-系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译-linux-系统"}},[s._v("#")]),s._v(" 编译 Linux 系统")]),s._v(" "),t("p",[s._v("LinuxKit 通过 "),t("code",[s._v("yaml")]),s._v(" 文件配置。")]),s._v(" "),t("p",[s._v("我们来查看 "),t("code",[s._v("linuxkit.yml")]),s._v(" 文件，了解各个字段的作用。")]),s._v(" "),t("p",[t("code",[s._v("kernel")]),s._v(" 字段定义了内核版本。")]),s._v(" "),t("p",[t("code",[s._v("init")]),s._v(" 字段中配置系统启动时的初始化顺序。")]),s._v(" "),t("p",[t("code",[s._v("onboot")]),s._v(" 字段配置系统级的服务。")]),s._v(" "),t("p",[t("code",[s._v("services")]),s._v(" 字段配置镜像启动后运行的服务。")]),s._v(" "),t("p",[t("code",[s._v("files")]),s._v(" 字段配置制作镜像时打包入镜像中的文件。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("linuxkit build linuxkit.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"启动-linux-系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-linux-系统"}},[s._v("#")]),s._v(" 启动 Linux 系统")]),s._v(" "),t("p",[s._v("编译成功后，接下来启动这个 Linux 系统。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("linuxkit run -publish "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":80/tcp linuxkit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("接下来在浏览器中打开 "),t("code",[s._v("127.0.0.1:8080")]),s._v(" 即可看到 nginx 默认页面。")])])}),[],!1,null,null,null);a.default=e.exports}}]);