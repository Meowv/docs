(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{849:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sqlserver-游标循环处理数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqlserver-游标循环处理数据"}},[s._v("#")]),s._v(" SqlServer 游标循环处理数据")]),s._v(" "),t("p",[s._v("在开发中，经常会遇到一个场景。需要批量处理数据，循环添加、删除、修改一些数据。")]),s._v(" "),t("p",[t("strong",[s._v("需求：")])]),s._v(" "),t("p",[s._v("有 文章表（dbo.Gas_Article）、文章作者表（dbo.Gas_ArticleAuthor）")]),s._v(" "),t("p",[s._v("现在需要在后台统计出每个作者共发布了多少文章，和所有文章阅读量之和的数据")]),s._v(" "),t("p",[t("strong",[s._v("以下是我的处理方案：")])]),s._v(" "),t("p",[s._v("编写PROCEDURE，内部利用游标循环处理数据，然后使用SqlServer代理，新建一个作业定时任务处理，这样就可以在后台实时统计了。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PROCEDURE")]),s._v(" Job_UpdateAuthor "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--创建PROCEDURE")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" UpdateAuthorCursor "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CURSOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--定义游标")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" ArticleNumber "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ShowHits"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" ArticleHits "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    Author\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("    dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Gas_Article\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("   Author "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("  Name\n                                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("    dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Gas_ArticleAuthor\n                                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("   IsDelete "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" Author "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--查出需要的数据至游标中")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPEN")]),s._v(" UpdateAuthorCursor "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--打开游标")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Number")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Hits")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Author")]),s._v(" NVARCHAR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FETCH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NEXT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" UpdateAuthorCursor "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Hits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Author")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--读取第一行数据，赋值给变量")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHILE")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@FETCH_STATUS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v("  dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Gas_ArticleAuthor\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v("     ArticleNumber "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Number")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        ArticleHits "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Hits")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("   Name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Author")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 更新dbo.Gas_ArticleAuthor数据")]),s._v("\n\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FETCH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NEXT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" UpdateAuthorCursor "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Hits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Author")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--读取下一行数据")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CLOSE")]),s._v(" UpdateAuthorCursor "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--关闭游标")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEALLOCATE")]),s._v(" UpdateAuthorCursor "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--释放游标")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\nGO\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);