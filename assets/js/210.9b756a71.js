(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{846:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"windows下mysql安装流程-8-0以上版本root密码报错及修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows下mysql安装流程-8-0以上版本root密码报错及修改"}},[s._v("#")]),s._v(" Windows下MySQL安装流程，8.0以上版本ROOT密码报错及修改")]),s._v(" "),a("p",[s._v("官网下载MySQL安装后，解压，添加环境变量，以管理员方式运行cmd，运行以下命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysqld "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--initialize")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--console")]),s._v("\nmysqld "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-install")]),s._v("\n\nnet start mysql\nnet stop mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("以上命令走完，确保MySQL安装和启动没问题，第一次安装设置密码(忘记密码也适用)")]),s._v(" "),a("p",[s._v("运行："),a("code",[s._v("mysqld --shared-memory --skip-grant-tables")])]),s._v(" "),a("p",[s._v("此时命令提示符窗口处于锁定状态，我们重新以管理员方式运行新的cmd，运行以下命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("提示输入密码时直接按回车进入，输入")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("use mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nalter user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" identified by "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush privileges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("123456就是要设置的密码，退出MySQL交互环境，再次启动MySQL服务，用设置的密码连接MySQL")])])}),[],!1,null,null,null);a.default=n.exports}}]);