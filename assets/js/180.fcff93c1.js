(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{813:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用-kubeadm-部署-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-kubeadm-部署-kubernetes"}},[s._v("#")]),s._v(" 使用 kubeadm 部署 kubernetes")]),s._v(" "),a("p",[a("code",[s._v("kubeadm")]),s._v(" 提供了 "),a("code",[s._v("kubeadm init")]),s._v(" 以及 "),a("code",[s._v("kubeadm join")]),s._v(" 这两个命令作为快速创建 "),a("code",[s._v("kubernetes")]),s._v(" 集群的最佳实践。")]),s._v(" "),a("h2",{attrs:{id:"安装-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[s._v("#")]),s._v(" 安装 Docker")]),s._v(" "),a("p",[s._v("参考 安装 Docker 的内容")]),s._v(" "),a("h2",{attrs:{id:"安装-kubelet-kubeadm-kubectl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-kubelet-kubeadm-kubectl"}},[s._v("#")]),s._v(" 安装 "),a("strong",[s._v("kubelet")]),s._v(" "),a("strong",[s._v("kubeadm")]),s._v(" "),a("strong",[s._v("kubectl")])]),s._v(" "),a("h3",{attrs:{id:"ubuntu-debian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-debian"}},[s._v("#")]),s._v(" Ubuntu/Debian")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" apt-transport-https\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/kubernetes.list")]),s._v("\ndeb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main\nEOF")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" kubelet kubeadm kubectl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"centos-fedora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-fedora"}},[s._v("#")]),s._v(" CentOS/Fedora")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/yum.repos.d/kubernetes.repo")]),s._v("\n[kubernetes]\nname=Kubernetes\nbaseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" kubelet kubeadm kubectl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"修改内核的运行参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改内核的运行参数"}},[s._v("#")]),s._v(" 修改内核的运行参数")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/sysctl.d/99-kubernetes-cri.conf")]),s._v("\nnet.bridge.bridge-nf-call-iptables  = 1\nnet.ipv4.ip_forward                 = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nEOF")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用配置")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sysctl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--system")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"配置-kubelet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-kubelet"}},[s._v("#")]),s._v(" 配置 kubelet")]),s._v(" "),a("h3",{attrs:{id:"修改-kubelet-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-kubelet-service"}},[s._v("#")]),s._v(" 修改 "),a("code",[s._v("kubelet.service")])]),s._v(" "),a("p",[a("code",[s._v("/etc/systemd/system/kubelet.service.d/10-proxy-ipvs.conf")]),s._v(" 写入以下内容")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用 ipvs 相关内核模块")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-modprobe ip_vs\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-modprobe ip_vs_rr\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-modprobe ip_vs_wrr\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-modprobe ip_vs_sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("执行以下命令应用配置。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("h3",{attrs:{id:"master"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master"}},[s._v("#")]),s._v(" master")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" kubeadm init --image-repository registry.cn-hangzhou.aliyuncs.com/google_containers "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n      --pod-network-cidr "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.0/16 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n      --ignore-preflight-errors"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("all\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("--pod-network-cidr 10.244.0.0/16")]),s._v(" 参数与后续 CNI 插件有关，这里以 "),a("code",[s._v("flannel")]),s._v(" 为例，若后续部署其他类型的网络插件请更改此参数。")])]),s._v(" "),a("blockquote",[a("p",[s._v("执行可能出现错误，例如缺少依赖包，根据提示安装即可。")])]),s._v(" "),a("p",[s._v("执行成功会输出")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("addons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Applied essential addon: CoreDNS\nI1116 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":35:13.270407   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86677")]),s._v(" request.go:538"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Throttling request took "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("181")]),s._v(".409184ms, request: POST:https://192.168.199.100:6443/api/v1/namespaces/kube-system/serviceaccounts\nI1116 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":35:13.470292   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86677")]),s._v(" request.go:538"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Throttling request took "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("186")]),s._v(".088112ms, request: POST:https://192.168.199.100:6443/api/v1/namespaces/kube-system/configmaps\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("addons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Applied essential addon: kube-proxy\n\nYour Kubernetes control-plane has initialized successfully"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" /etc/kubernetes/admin.conf "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n\nYou should now deploy a pod network to the cluster.\nRun "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubectl apply -f [podnetwork].yaml"')]),s._v(" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nThen you can "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" any number of worker nodes by running the following on each as root:\n\nkubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".199.100:6443 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--token")]),s._v(" cz81zt.orsy9gm9v649e5lf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --discovery-token-ca-cert-hash sha256:5edb316fd0d8ea2792cba15cdf1c899a366f147aa03cba52d4e5c5884ad836fe\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"node-工作节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-工作节点"}},[s._v("#")]),s._v(" node 工作节点")]),s._v(" "),a("p",[s._v("在 "),a("strong",[s._v("另一主机")]),s._v(" 重复 "),a("strong",[s._v("部署")]),s._v(" 小节以前的步骤，安装配置好 kubelet。根据提示，加入到集群。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ kubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".199.100:6443 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--token")]),s._v(" cz81zt.orsy9gm9v649e5lf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --discovery-token-ca-cert-hash sha256:5edb316fd0d8ea2792cba15cdf1c899a366f147aa03cba52d4e5c5884ad836fe\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"查看服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看服务"}},[s._v("#")]),s._v(" 查看服务")]),s._v(" "),a("p",[s._v("所有服务启动后，查看本地实际运行的 Docker 容器。这些服务大概分为三类：主节点服务、工作节点服务和其它服务。")]),s._v(" "),a("h3",{attrs:{id:"主节点服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主节点服务"}},[s._v("#")]),s._v(" 主节点服务")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("apiserver")]),s._v(" 是整个系统的对外接口，提供 RESTful 方式供客户端和其它组件调用；")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("scheduler")]),s._v(" 负责对资源进行调度，分配某个 pod 到某个节点上；")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("controller-manager")]),s._v(" 负责管理控制器，包括 endpoint-controller（刷新服务和 pod 的关联信息）和 replication-controller（维护某个 pod 的复制为配置的数值）。")])])]),s._v(" "),a("h3",{attrs:{id:"工作节点服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作节点服务"}},[s._v("#")]),s._v(" 工作节点服务")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("proxy")]),s._v(" 为 pod 上的服务提供访问的代理。")])]),s._v(" "),a("h3",{attrs:{id:"其它服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它服务"}},[s._v("#")]),s._v(" 其它服务")]),s._v(" "),a("ul",[a("li",[s._v("Etcd 是所有状态的存储数据库；")])]),s._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("p",[s._v("将 "),a("code",[s._v("/etc/kubernetes/admin.conf")]),s._v(" 复制到 "),a("code",[s._v("~/.kube/config")])]),s._v(" "),a("p",[s._v("执行 "),a("code",[s._v("$ kubectl get all -A")]),s._v(" 查看启动的服务。")]),s._v(" "),a("p",[s._v("由于未部署 CNI 插件，CoreDNS 未正常启动。如何使用 Kubernetes，请参考后续章节。")]),s._v(" "),a("h2",{attrs:{id:"部署-cni"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-cni"}},[s._v("#")]),s._v(" 部署 CNI")]),s._v(" "),a("p",[s._v("这里以 "),a("code",[s._v("flannel")]),s._v(" 为例进行介绍。")]),s._v(" "),a("h3",{attrs:{id:"flannel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flannel"}},[s._v("#")]),s._v(" flannel")]),s._v(" "),a("p",[s._v("检查 podCIDR 设置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ kubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" CIDR\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出")]),s._v("\n    podCIDR: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.0/24\n    podCIDRs:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" https://raw.githubusercontent.com/coreos/flannel/v0.11.0/Documentation/kube-flannel.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"master-节点默认不能运行-pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-节点默认不能运行-pod"}},[s._v("#")]),s._v(" master 节点默认不能运行 pod")]),s._v(" "),a("p",[s._v("如果用 "),a("code",[s._v("kubeadm")]),s._v(" 部署一个单节点集群，默认情况下无法使用，请执行以下命令解除限制")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ kubectl taint nodes "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--all")]),s._v(" node-role.kubernetes.io/master-\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 恢复默认值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ kubectl taint nodes NODE_NAME node-role.kubernetes.io/master=true:NoSchedule")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kubernetes.io/zh/docs/setup/independent/create-cluster-kubeadm/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);