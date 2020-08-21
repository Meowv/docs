(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{756:function(s,a,t){"use strict";t.r(a);var n=t(12),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"zabbix表结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zabbix表结构"}},[s._v("#")]),s._v(" Zabbix表结构")]),s._v(" "),t("h2",{attrs:{id:"group，主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group，主机"}},[s._v("#")]),s._v(" Group，主机")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("groupid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" groupname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hostid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" hostname\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" hosts h\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" hosts_groups hg "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hostid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hostid\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" groups g "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" hg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("groupid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("groupid\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--WHERE g.groupid = 2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"一个主机有哪些应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个主机有哪些应用"}},[s._v("#")]),s._v(" 一个主机有哪些应用")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" applications\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" hostid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10292")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"应用有哪些items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用有哪些items"}},[s._v("#")]),s._v(" 应用有哪些Items")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" application_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("applicationid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" items_applications ia\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" items i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("itemid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ia"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("itemid\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" applications a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("applicationid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ia"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("applicationid\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("applicationid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1530")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"一个item的监控数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个item的监控数据"}},[s._v("#")]),s._v(" 一个item的监控数据")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" FROM_UNIXTIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("clock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" history\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("itemid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33262")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" FROM_UNIXTIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("clock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2018-11-10 9:00:00'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" FROM_UNIXTIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("clock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2018-11-10 10:00:00'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" clock\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"按天的数据源可以查询trends表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按天的数据源可以查询trends表"}},[s._v("#")]),s._v(" 按天的数据源可以查询trends表")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" FROM_UNIXTIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("clock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value_min"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value_avg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value_max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" trends\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("itemid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33262")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" FROM_UNIXTIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("clock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2018-11-08 9:00:00'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" FROM_UNIXTIME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("clock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2018-11-10 10:00:00'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" clock\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);