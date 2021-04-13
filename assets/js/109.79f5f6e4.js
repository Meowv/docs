(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{788:function(e,o,c){"use strict";c.r(o);var v=c(10),_=Object(v.a)({},(function(){var e=this,o=e.$createElement,c=e._self._c||o;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"compose-简介"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#compose-简介"}},[e._v("#")]),e._v(" Compose 简介")]),e._v(" "),c("p",[c("code",[e._v("Compose")]),e._v(" 项目是 Docker 官方的开源项目，负责实现对 Docker 容器集群的快速编排。从功能上看，跟 "),c("code",[e._v("OpenStack")]),e._v(" 中的 "),c("code",[e._v("Heat")]),e._v(" 十分类似。")]),e._v(" "),c("p",[e._v("其代码目前在 "),c("a",{attrs:{href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/docker/compose"),c("OutboundLink")],1),e._v(" 上开源。")]),e._v(" "),c("p",[c("code",[e._v("Compose")]),e._v(" 定位是 「定义和运行多个 Docker 容器的应用（Defining and running multi-container Docker applications）」，其前身是开源项目 Fig。")]),e._v(" "),c("p",[e._v("通过第一部分中的介绍，我们知道使用一个 "),c("code",[e._v("Dockerfile")]),e._v(" 模板文件，可以让用户很方便的定义一个单独的应用容器。然而，在日常工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况。例如要实现一个 Web 项目，除了 Web 服务容器本身，往往还需要再加上后端的数据库服务容器，甚至还包括负载均衡容器等。")]),e._v(" "),c("p",[c("code",[e._v("Compose")]),e._v(" 恰好满足了这样的需求。它允许用户通过一个单独的 "),c("code",[e._v("docker-compose.yml")]),e._v(" 模板文件（YAML 格式）来定义一组相关联的应用容器为一个项目（project）。")]),e._v(" "),c("p",[c("code",[e._v("Compose")]),e._v(" 中有两个重要的概念：")]),e._v(" "),c("ul",[c("li",[c("p",[e._v("服务 ("),c("code",[e._v("service")]),e._v(")：一个应用的容器，实际上可以包括若干运行相同镜像的容器实例。")])]),e._v(" "),c("li",[c("p",[e._v("项目 ("),c("code",[e._v("project")]),e._v(")：由一组关联的应用容器组成的一个完整业务单元，在 "),c("code",[e._v("docker-compose.yml")]),e._v(" 文件中定义。")])])]),e._v(" "),c("p",[c("code",[e._v("Compose")]),e._v(" 的默认管理对象是项目，通过子命令对项目中的一组容器进行便捷地生命周期管理。")]),e._v(" "),c("p",[c("code",[e._v("Compose")]),e._v(" 项目由 Python 编写，实现上调用了 Docker 服务提供的 API 来对容器进行管理。因此，只要所操作的平台支持 Docker API，就可以在其上利用 "),c("code",[e._v("Compose")]),e._v(" 来进行编排管理。")])])}),[],!1,null,null,null);o.default=_.exports}}]);