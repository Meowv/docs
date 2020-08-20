(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{601:function(s,t,a){"use strict";a.r(t);var n=a(12),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sqlserver游标循环处理数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlserver游标循环处理数据"}},[s._v("#")]),s._v(" SqlServer游标循环处理数据")]),s._v(" "),a("p",[s._v("在开发中，经常会遇到一个场景。需要批量处理数据，循环添加、删除、修改一些数据。")]),s._v(" "),a("p",[a("strong",[s._v("需求：")])]),s._v(" "),a("p",[s._v("有 文章表（dbo.Gas_Article）、文章作者表（dbo.Gas_ArticleAuthor）")]),s._v(" "),a("p",[s._v("现在需要在后台统计出每个作者共发布了多少文章，和所有文章阅读量之和的数据")]),s._v(" "),a("p",[a("strong",[s._v("以下是我的处理方案：")])]),s._v(" "),a("p",[s._v("编写PROCEDURE，内部利用游标循环处理数据，然后使用SqlServer代理，新建一个作业定时任务处理，这样就可以在后台实时统计了。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PROCEDURE")]),s._v(" Job_UpdateAuthor "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--创建PROCEDURE")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" UpdateAuthorCursor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CURSOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--定义游标")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" ArticleNumber "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ShowHits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" ArticleHits "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    Author\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("    dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Gas_Article\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("   Author "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("  Name\n                                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("    dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Gas_ArticleAuthor\n                                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("   IsDelete "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" Author "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--查出需要的数据至游标中")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPEN")]),s._v(" UpdateAuthorCursor "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--打开游标")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Number")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Hits")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Author")]),s._v(" NVARCHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FETCH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NEXT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" UpdateAuthorCursor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Hits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Author")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--读取第一行数据，赋值给变量")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHILE")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@FETCH_STATUS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v("  dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Gas_ArticleAuthor\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v("     ArticleNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Number")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        ArticleHits "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Hits")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("   Name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Author")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 更新dbo.Gas_ArticleAuthor数据")]),s._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FETCH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NEXT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" UpdateAuthorCursor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Hits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Author")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--读取下一行数据")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CLOSE")]),s._v(" UpdateAuthorCursor "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--关闭游标")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEALLOCATE")]),s._v(" UpdateAuthorCursor "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--释放游标")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\nGO\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);