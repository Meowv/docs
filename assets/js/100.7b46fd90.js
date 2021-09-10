(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{791:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"终止容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#终止容器"}},[t._v("#")]),t._v(" 终止容器")]),t._v(" "),a("p",[t._v("可以使用 "),a("code",[t._v("docker container stop")]),t._v(" 来终止一个运行中的容器。")]),t._v(" "),a("p",[t._v("此外，当 Docker 容器中指定的应用终结时，容器也自动终止。")]),t._v(" "),a("p",[t._v("例如对于上一章节中只启动了一个终端的容器，用户通过 "),a("code",[t._v("exit")]),t._v(" 命令或 "),a("code",[t._v("Ctrl+d")]),t._v(" 来退出终端时，所创建的容器立刻终止。")]),t._v(" "),a("p",[t._v("终止状态的容器可以用 "),a("code",[t._v("docker container ls -a")]),t._v(" 命令看到。例如")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker container "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -a\nCONTAINER ID        IMAGE                    COMMAND                CREATED             STATUS                          PORTS               NAMES\nba267838cc1b        ubuntu:18.04             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bin/bash"')]),t._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" minutes ago      Exited "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" About a minute ago                       trusting_newton\n98e5efa7d997        training/webapp:latest   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python app.py"')]),t._v("        About an hour ago   Exited "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("34")]),t._v(" minutes ago                           backstabbing_pike\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("处于终止状态的容器，可以通过 "),a("code",[t._v("docker container start")]),t._v(" 命令来重新启动。")]),t._v(" "),a("p",[t._v("此外，"),a("code",[t._v("docker container restart")]),t._v(" 命令会将一个运行态的容器终止，然后再重新启动它。")])])}),[],!1,null,null,null);s.default=e.exports}}]);