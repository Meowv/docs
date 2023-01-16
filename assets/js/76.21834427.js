(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{590:function(a,s,e){a.exports=e.p+"assets/img/ui-dashboard.b03d0b28.png"},810:function(a,s,e){"use strict";e.r(s);var t=e(2),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"kubernetes-dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-dashboard"}},[a._v("#")]),a._v(" Kubernetes Dashboard")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/kubernetes/dashboard",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kubernetes Dashboard"),s("OutboundLink")],1),a._v(" 是基于网页的 Kubernetes 用户界面。")]),a._v(" "),s("p",[s("img",{attrs:{src:e(590),alt:" "}})]),a._v(" "),s("h2",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[a._v("#")]),a._v(" 部署")]),a._v(" "),s("p",[a._v("执行以下命令即可部署 Dashboard：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("kubectl apply "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[a._v("#")]),a._v(" 访问")]),a._v(" "),s("p",[a._v("通过命令行代理访问，执行以下命令：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("kubectl proxy\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("到 "),s("a",{attrs:{href:"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"),s("OutboundLink")],1),a._v(" 即可访问。")]),a._v(" "),s("h2",{attrs:{id:"登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[a._v("#")]),a._v(" 登录")]),a._v(" "),s("p",[a._v("目前，Dashboard 仅支持使用 Bearer 令牌登录。下面教大家如何创建该令牌：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ kubectl create sa dashboard-admin "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" kube-system\n\n$ kubectl create clusterrolebinding dashboard-admin "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--clusterrole")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("cluster-admin "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--serviceaccount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("kube-system:dashboard-admin\n\n$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ADMIN_SECRET")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("kubectl get secrets "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" kube-system "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" dashboard-admin "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $1}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DASHBOARD_LOGIN_TOKEN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("kubectl describe secret "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" kube-system $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("ADMIN_SECRET"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-E")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'^token'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $2}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${DASHBOARD_LOGIN_TOKEN}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("将结果粘贴到登录页面，即可登录。")]),a._v(" "),s("h2",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[a._v("#")]),a._v(" 参考文档")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://kubernetes.io/zh/docs/tasks/access-application-cluster/web-ui-dashboard/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);