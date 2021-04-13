(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{863:function(s,e,a){"use strict";a.r(e);var n=a(10),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"在-swarm-集群中管理配置数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-swarm-集群中管理配置数据"}},[s._v("#")]),s._v(" 在 Swarm 集群中管理配置数据")]),s._v(" "),a("p",[s._v("在动态的、大规模的分布式集群上，管理和分发配置文件也是很重要的工作。传统的配置文件分发方式（如配置文件放入镜像中，设置环境变量，volume 动态挂载等）都降低了镜像的通用性。")]),s._v(" "),a("p",[s._v("在 Docker 17.06 以上版本中，Docker 新增了 "),a("code",[s._v("docker config")]),s._v(" 子命令来管理集群中的配置信息，以后你无需将配置文件放入镜像或挂载到容器中就可实现对服务的配置。")]),s._v(" "),a("blockquote",[a("p",[s._v("注意："),a("code",[s._v("config")]),s._v(" 仅能在 Swarm 集群中使用。")])]),s._v(" "),a("p",[s._v("这里我们以在 Swarm 集群中部署 "),a("code",[s._v("redis")]),s._v(" 服务为例。")]),s._v(" "),a("h2",{attrs:{id:"创建-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-config"}},[s._v("#")]),s._v(" 创建 config")]),s._v(" "),a("p",[s._v("新建 "),a("code",[s._v("redis.conf")]),s._v(" 文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("此项配置 Redis 监听 "),a("code",[s._v("6380")]),s._v(" 端口")]),s._v(" "),a("p",[s._v("我们使用 "),a("code",[s._v("docker config create")]),s._v(" 命令创建 "),a("code",[s._v("config")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker config create redis.conf redis.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"查看-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-config"}},[s._v("#")]),s._v(" 查看 config")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("docker config ls")]),s._v(" 命令来查看 "),a("code",[s._v("config")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker config "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\nID                          NAME                CREATED             UPDATED\nyod8fx8iiqtoo84jgwadp86yk   redis.conf          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" seconds ago       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" seconds ago\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"创建-redis-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-redis-服务"}},[s._v("#")]),s._v(" 创建 redis 服务")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --name redis "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --config source=redis.conf,target=/etc/redis.conf \\")]),s._v("\n     --config redis.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6380 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     redis:latest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     redis-server /redis.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("如果你没有在 "),a("code",[s._v("target")]),s._v(" 中显式的指定路径时，默认的 "),a("code",[s._v("redis.conf")]),s._v(" 以 "),a("code",[s._v("tmpfs")]),s._v(" 文件系统挂载到容器的 "),a("code",[s._v("/config.conf")]),s._v("。")]),s._v(" "),a("p",[s._v("经过测试，redis 可以正常使用。")]),s._v(" "),a("p",[s._v("以前我们通过监听主机目录来配置 Redis，就需要在集群的每个节点放置该文件，如果采用 "),a("code",[s._v("docker config")]),s._v(" 来管理服务的配置信息，我们只需在集群中的管理节点创建 "),a("code",[s._v("config")]),s._v("，当部署服务时，集群会自动的将配置文件分发到运行服务的各个节点中，大大降低了配置信息的管理和分发难度。")])])}),[],!1,null,null,null);e.default=t.exports}}]);