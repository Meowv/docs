(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{593:function(e,v,_){e.exports=_.p+"assets/img/kubernetes_design.94f04f39.jpg"},754:function(e,v,_){"use strict";_.r(v);var s=_(12),t=Object(s.a)({},(function(){var e=this,v=e.$createElement,s=e._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[e._v("#")]),e._v(" 基本概念")]),e._v(" "),s("p",[s("img",{attrs:{src:_(593),alt:" "}})]),e._v(" "),s("ul",[s("li",[e._v("节点（"),s("code",[e._v("Node")]),e._v("）：一个节点是一个运行 Kubernetes 中的主机。")]),e._v(" "),s("li",[e._v("容器组（"),s("code",[e._v("Pod")]),e._v("）：一个 Pod 对应于由若干容器组成的一个容器组，同个组内的容器共享一个存储卷(volume)。")]),e._v(" "),s("li",[e._v("容器组生命周期（"),s("code",[e._v("pos-states")]),e._v("）：包含所有容器状态集合，包括容器组状态类型，容器组生命周期，事件，重启策略，以及 replication controllers。")]),e._v(" "),s("li",[e._v("Replication Controllers：主要负责指定数量的 pod 在同一时间一起运行。")]),e._v(" "),s("li",[e._v("服务（"),s("code",[e._v("services")]),e._v("）：一个 Kubernetes 服务是容器组逻辑的高级抽象，同时也对外提供访问容器组的策略。")]),e._v(" "),s("li",[e._v("卷（"),s("code",[e._v("volumes")]),e._v("）：一个卷就是一个目录，容器对其有访问权限。")]),e._v(" "),s("li",[e._v("标签（"),s("code",[e._v("labels")]),e._v("）：标签是用来连接一组对象的，比如容器组。标签可以被用来组织和选择子对象。")]),e._v(" "),s("li",[e._v("接口权限（"),s("code",[e._v("accessing_the_api")]),e._v("）：端口，IP 地址和代理的防火墙规则。")]),e._v(" "),s("li",[e._v("web 界面（"),s("code",[e._v("ux")]),e._v("）：用户可以通过 web 界面操作 Kubernetes。")]),e._v(" "),s("li",[e._v("命令行操作（"),s("code",[e._v("cli")]),e._v("）："),s("code",[e._v("kubectl")]),e._v("命令。")])]),e._v(" "),s("h2",{attrs:{id:"节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点"}},[e._v("#")]),e._v(" 节点")]),e._v(" "),s("p",[e._v("在 "),s("code",[e._v("Kubernetes")]),e._v(" 中，节点是实际工作的点，节点可以是虚拟机或者物理机器，依赖于一个集群环境。每个节点都有一些必要的服务以运行容器组，并且它们都可以通过主节点来管理。必要服务包括 Docker，kubelet 和代理服务。")]),e._v(" "),s("h3",{attrs:{id:"容器状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器状态"}},[e._v("#")]),e._v(" 容器状态")]),e._v(" "),s("p",[e._v("容器状态用来描述节点的当前状态。现在，其中包含三个信息：")]),e._v(" "),s("h4",{attrs:{id:"主机ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主机ip"}},[e._v("#")]),e._v(" 主机IP")]),e._v(" "),s("p",[e._v("主机 IP 需要云平台来查询，"),s("code",[e._v("Kubernetes")]),e._v(" 把它作为状态的一部分来保存。如果 "),s("code",[e._v("Kubernetes")]),e._v(" 没有运行在云平台上，节点 ID 就是必需的。IP 地址可以变化，并且可以包含多种类型的 IP 地址，如公共 IP，私有 IP，动态 IP，ipv6 等等。")]),e._v(" "),s("h4",{attrs:{id:"节点周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点周期"}},[e._v("#")]),e._v(" 节点周期")]),e._v(" "),s("p",[e._v("通常来说节点有 "),s("code",[e._v("Pending")]),e._v("，"),s("code",[e._v("Running")]),e._v("，"),s("code",[e._v("Terminated")]),e._v(" 三个周期，如果 Kubernetes 发现了一个节点并且其可用，那么 Kubernetes 就把它标记为 "),s("code",[e._v("Pending")]),e._v("。然后在某个时刻，Kubernetes 将会标记其为 "),s("code",[e._v("Running")]),e._v("。节点的结束周期称为 "),s("code",[e._v("Terminated")]),e._v("。一个已经 "),s("code",[e._v("Terminated")]),e._v(" 的节点不会接受和调度任何请求，并且已经在其上运行的容器组也会删除。")]),e._v(" "),s("h4",{attrs:{id:"节点状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点状态"}},[e._v("#")]),e._v(" 节点状态")]),e._v(" "),s("p",[e._v("节点的状态主要是用来描述处于 "),s("code",[e._v("Running")]),e._v(" 的节点。当前可用的有 "),s("code",[e._v("NodeReachable")]),e._v(" 和 "),s("code",[e._v("NodeReady")]),e._v("。以后可能会增加其他状态。"),s("code",[e._v("NodeReachable")]),e._v(" 表示集群可达。"),s("code",[e._v("NodeReady")]),e._v(" 表示 kubelet 返回 Status Ok 并且 HTTP 状态检查健康。")]),e._v(" "),s("h3",{attrs:{id:"节点管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点管理"}},[e._v("#")]),e._v(" 节点管理")]),e._v(" "),s("p",[e._v("节点并非 Kubernetes 创建，而是由云平台创建，或者就是物理机器、虚拟机。在 Kubernetes 中，节点仅仅是一条记录，节点创建之后，Kubernetes 会检查其是否可用。在 Kubernetes 中，节点用如下结构保存：")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"10.1.2.3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"kind"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Minion"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"apiVersion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"v1beta1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"resources"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"capacity"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"cpu"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"memory"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1073741824")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"labels"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"my-first-k8s-node"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[e._v("Kubernetes 校验节点可用依赖于 ID。在当前的版本中，有两个接口可以用来管理节点：节点控制和 Kube 管理。")]),e._v(" "),s("h3",{attrs:{id:"节点控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点控制"}},[e._v("#")]),e._v(" 节点控制")]),e._v(" "),s("p",[e._v("在 Kubernetes 主节点中，节点控制器是用来管理节点的组件。主要包含：")]),e._v(" "),s("ul",[s("li",[e._v("集群范围内节点同步")]),e._v(" "),s("li",[e._v("单节点生命周期管理")])]),e._v(" "),s("p",[e._v("节点控制有一个同步轮寻，主要监听所有云平台的虚拟实例，会根据节点状态创建和删除。可以通过 "),s("code",[e._v("--node_sync_period")]),e._v("标志来控制该轮寻。如果一个实例已经创建，节点控制将会为其创建一个结构。同样的，如果一个节点被删除，节点控制也会删除该结构。在 Kubernetes 启动时可用通过 "),s("code",[e._v("--machines")]),e._v("标记来显示指定节点。同样可以使用 "),s("code",[e._v("kubectl")]),e._v(" 来一条一条的添加节点，两者是相同的。通过设置 "),s("code",[e._v("--sync_nodes=false")]),e._v("标记来禁止集群之间的节点同步，你也可以使用  api/kubectl 命令行来增删节点。")]),e._v(" "),s("h2",{attrs:{id:"容器组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器组"}},[e._v("#")]),e._v(" 容器组")]),e._v(" "),s("p",[e._v("在 Kubernetes 中，使用的最小单位是容器组，容器组是创建，调度，管理的最小单位。\n一个容器组使用相同的 Docker 容器并共享卷（挂载点）。一个容器组是一个特定应用的打包集合，包含一个或多个容器。")]),e._v(" "),s("p",[e._v("和运行的容器类似，一个容器组被认为只有很短的运行周期。容器组被调度到一组节点运行，直到容器的生命周期结束或者其被删除。如果节点死掉，运行在其上的容器组将会被删除而不是重新调度。（也许在将来的版本中会添加容器组的移动）。")]),e._v(" "),s("h3",{attrs:{id:"容器组设计的初衷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器组设计的初衷"}},[e._v("#")]),e._v(" 容器组设计的初衷")]),e._v(" "),s("h3",{attrs:{id:"资源共享和通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源共享和通信"}},[e._v("#")]),e._v(" 资源共享和通信")]),e._v(" "),s("p",[e._v("容器组主要是为了数据共享和它们之间的通信。")]),e._v(" "),s("p",[e._v("在一个容器组中，容器都使用相同的网络地址和端口，可以通过本地网络来相互通信。每个容器组都有独立的 IP，可用通过网络来和其他物理主机或者容器通信。")]),e._v(" "),s("p",[e._v("容器组有一组存储卷（挂载点），主要是为了让容器在重启之后可以不丢失数据。")]),e._v(" "),s("h3",{attrs:{id:"容器组管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器组管理"}},[e._v("#")]),e._v(" 容器组管理")]),e._v(" "),s("p",[e._v("容器组是一个应用管理和部署的高层次抽象，同时也是一组容器的接口。容器组是部署、水平放缩的最小单位。")]),e._v(" "),s("h3",{attrs:{id:"容器组的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器组的使用"}},[e._v("#")]),e._v(" 容器组的使用")]),e._v(" "),s("p",[e._v("容器组可以通过组合来构建复杂的应用，其本来的意义包含：")]),e._v(" "),s("ul",[s("li",[e._v("内容管理，文件和数据加载以及本地缓存管理等。")]),e._v(" "),s("li",[e._v("日志和检查点备份，压缩，快照等。")]),e._v(" "),s("li",[e._v("监听数据变化，跟踪日志，日志和监控代理，消息发布等。")]),e._v(" "),s("li",[e._v("代理，网桥")]),e._v(" "),s("li",[e._v("控制器，管理，配置以及更新")])]),e._v(" "),s("h3",{attrs:{id:"替代方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替代方案"}},[e._v("#")]),e._v(" 替代方案")]),e._v(" "),s("p",[e._v("为什么不在一个单一的容器里运行多个程序？")]),e._v(" "),s("ul",[s("li",[e._v("1.透明化。为了使容器组中的容器保持一致的基础设施和服务，比如进程管理和资源监控。这样设计是为了用户的便利性。")]),e._v(" "),s("li",[e._v("2.解偶软件之间的依赖。每个容器都可能重新构建和发布，Kubernetes 必须支持热发布和热更新（将来）。")]),e._v(" "),s("li",[e._v("3.方便使用。用户不必运行独立的程序管理，也不用担心每个应用程序的退出状态。")]),e._v(" "),s("li",[e._v("4.高效。考虑到基础设施有更多的职责，容器必须要轻量化。")])]),e._v(" "),s("h3",{attrs:{id:"容器组的生命状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器组的生命状态"}},[e._v("#")]),e._v(" 容器组的生命状态")]),e._v(" "),s("p",[e._v("包括若干状态值："),s("code",[e._v("pending")]),e._v("、"),s("code",[e._v("running")]),e._v("、"),s("code",[e._v("succeeded")]),e._v("、"),s("code",[e._v("failed")]),e._v("。")]),e._v(" "),s("h4",{attrs:{id:"pending"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pending"}},[e._v("#")]),e._v(" pending")]),e._v(" "),s("p",[e._v("容器组已经被节点接受，但有一个或多个容器还没有运行起来。这将包含某些节点正在下载镜像的时间，这种情形会依赖于网络情况。")]),e._v(" "),s("h4",{attrs:{id:"running"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running"}},[e._v("#")]),e._v(" running")]),e._v(" "),s("p",[e._v("容器组已经被调度到节点，并且所有的容器都已经启动。至少有一个容器处于运行状态（或者处于重启状态）。")]),e._v(" "),s("h4",{attrs:{id:"succeeded"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#succeeded"}},[e._v("#")]),e._v(" succeeded")]),e._v(" "),s("p",[e._v("所有的容器都正常退出。")]),e._v(" "),s("h4",{attrs:{id:"failed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#failed"}},[e._v("#")]),e._v(" failed")]),e._v(" "),s("p",[e._v("容器组中所有容器都意外中断了。")]),e._v(" "),s("h3",{attrs:{id:"容器组生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器组生命周期"}},[e._v("#")]),e._v(" 容器组生命周期")]),e._v(" "),s("p",[e._v("通常来说，如果容器组被创建了就不会自动销毁，除非被某种行为触发，而触发此种情况可能是人为，或者复制控制器所为。唯一例外的是容器组由 succeeded 状态成功退出，或者在一定时间内重试多次依然失败。")]),e._v(" "),s("p",[e._v("如果某个节点死掉或者不能连接，那么节点控制器将会标记其上的容器组的状态为 "),s("code",[e._v("failed")]),e._v("。")]),e._v(" "),s("p",[e._v("举例如下。")]),e._v(" "),s("ul",[s("li",[e._v("容器组状态 "),s("code",[e._v("running")]),e._v("，有 1 容器，容器正常退出\n"),s("ul",[s("li",[e._v("记录完成事件")]),e._v(" "),s("li",[e._v("如果重启策略为：\n"),s("ul",[s("li",[e._v("始终：重启容器，容器组保持 "),s("code",[e._v("running")])]),e._v(" "),s("li",[e._v("失败时：容器组变为 "),s("code",[e._v("succeeded")])]),e._v(" "),s("li",[e._v("从不：容器组变为 "),s("code",[e._v("succeeded")])])])])])]),e._v(" "),s("li",[e._v("容器组状态 "),s("code",[e._v("running")]),e._v("，有1容器，容器异常退出\n"),s("ul",[s("li",[e._v("记录失败事件")]),e._v(" "),s("li",[e._v("如果重启策略为：\n"),s("ul",[s("li",[e._v("始终：重启容器，容器组保持 "),s("code",[e._v("running")])]),e._v(" "),s("li",[e._v("失败时：重启容器，容器组保持 "),s("code",[e._v("running")])]),e._v(" "),s("li",[e._v("从不：容器组变为 "),s("code",[e._v("failed")])])])])])]),e._v(" "),s("li",[e._v("容器组状态 "),s("code",[e._v("running")]),e._v("，有2容器，有1容器异常退出\n"),s("ul",[s("li",[e._v("记录失败事件")]),e._v(" "),s("li",[e._v("如果重启策略为：\n"),s("ul",[s("li",[e._v("始终：重启容器，容器组保持 "),s("code",[e._v("running")])]),e._v(" "),s("li",[e._v("失败时：重启容器，容器组保持 "),s("code",[e._v("running")])]),e._v(" "),s("li",[e._v("从不：容器组保持 "),s("code",[e._v("running")])])])]),e._v(" "),s("li",[e._v("当有2容器退出\n"),s("ul",[s("li",[e._v("记录失败事件")]),e._v(" "),s("li",[e._v("如果重启策略为：\n"),s("ul",[s("li",[e._v("始终：重启容器，容器组保持 "),s("code",[e._v("running")])]),e._v(" "),s("li",[e._v("失败时：重启容器，容器组保持 "),s("code",[e._v("running")])]),e._v(" "),s("li",[e._v("从不：容器组变为 "),s("code",[e._v("failed")])])])])])])])]),e._v(" "),s("li",[e._v("容器组状态 "),s("code",[e._v("running")]),e._v("，容器内存不足\n"),s("ul",[s("li",[e._v("标记容器错误中断")]),e._v(" "),s("li",[e._v("记录内存不足事件")]),e._v(" "),s("li",[e._v("如果重启策略为：\n"),s("ul",[s("li",[e._v("始终：重启容器，容器组保持 "),s("code",[e._v("running")])]),e._v(" "),s("li",[e._v("失败时：重启容器，容器组保持 "),s("code",[e._v("running")])]),e._v(" "),s("li",[e._v("从不：记录错误事件，容器组变为 "),s("code",[e._v("failed")])])])])])]),e._v(" "),s("li",[e._v("容器组状态 "),s("code",[e._v("running")]),e._v("，一块磁盘死掉\n"),s("ul",[s("li",[e._v("杀死所有容器")]),e._v(" "),s("li",[e._v("记录事件")]),e._v(" "),s("li",[e._v("容器组变为 "),s("code",[e._v("failed")])]),e._v(" "),s("li",[e._v("如果容器组运行在一个控制器下，容器组将会在其他地方重新创建")])])]),e._v(" "),s("li",[e._v("容器组状态 "),s("code",[e._v("running")]),e._v("，对应的节点段溢出\n"),s("ul",[s("li",[e._v("节点控制器等到超时")]),e._v(" "),s("li",[e._v("节点控制器标记容器组 "),s("code",[e._v("failed")])]),e._v(" "),s("li",[e._v("如果容器组运行在一个控制器下，容器组将会在其他地方重新创建")])])])])])}),[],!1,null,null,null);v.default=t.exports}}]);