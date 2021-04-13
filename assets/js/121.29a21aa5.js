(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{800:function(e,v,_){"use strict";_.r(v);var o=_(10),c=Object(o.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"arg-构建参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#arg-构建参数"}},[e._v("#")]),e._v(" ARG 构建参数")]),e._v(" "),_("p",[e._v("格式："),_("code",[e._v("ARG <参数名>[=<默认值>]")])]),e._v(" "),_("p",[e._v("构建参数和 "),_("code",[e._v("ENV")]),e._v(" 的效果一样，都是设置环境变量。所不同的是，"),_("code",[e._v("ARG")]),e._v(" 所设置的构建环境的环境变量，在将来容器运行时是不会存在这些环境变量的。但是不要因此就使用 "),_("code",[e._v("ARG")]),e._v(" 保存密码之类的信息，因为 "),_("code",[e._v("docker history")]),e._v(" 还是可以看到所有值的。")]),e._v(" "),_("p",[_("code",[e._v("Dockerfile")]),e._v(" 中的 "),_("code",[e._v("ARG")]),e._v(" 指令是定义参数名称，以及定义其默认值。该默认值可以在构建命令 "),_("code",[e._v("docker build")]),e._v(" 中用 "),_("code",[e._v("--build-arg <参数名>=<值>")]),e._v(" 来覆盖。")]),e._v(" "),_("p",[e._v("在 1.13 之前的版本，要求 "),_("code",[e._v("--build-arg")]),e._v(" 中的参数名，必须在 "),_("code",[e._v("Dockerfile")]),e._v(" 中用 "),_("code",[e._v("ARG")]),e._v(" 定义过了，换句话说，就是 "),_("code",[e._v("--build-arg")]),e._v(" 指定的参数，必须在 "),_("code",[e._v("Dockerfile")]),e._v(" 中使用了。如果对应参数没有被使用，则会报错退出构建。从 1.13 开始，这种严格的限制被放开，不再报错退出，而是显示警告信息，并继续构建。这对于使用 CI 系统，用同样的构建流程构建不同的 "),_("code",[e._v("Dockerfile")]),e._v(" 的时候比较有帮助，避免构建命令必须根据每个 Dockerfile 的内容修改。")])])}),[],!1,null,null,null);v.default=c.exports}}]);