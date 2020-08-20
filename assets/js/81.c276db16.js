(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{664:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sqlserver-利用sql生成模型实体类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlserver-利用sql生成模型实体类"}},[s._v("#")]),s._v(" SqlServer 利用SQL生成模型实体类")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@TableName")]),s._v(" sysname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TableName'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Result")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'public class '")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@TableName")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\n{'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Result")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Result")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\n    public '")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" ColumnType "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" NullableSign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" ColumnName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' { get; set; }\n'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ColumnName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        column_id ColumnId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" typ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bigint'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'long'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'binary'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'byte[]'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bit'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bool'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'char'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'date'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DateTime'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'datetime'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DateTime'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'datetime2'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DateTime'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'datetimeoffset'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DateTimeOffset'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'decimal'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'decimal'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'float'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'float'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'image'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'byte[]'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'int'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'int'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'money'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'decimal'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nchar'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'char'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ntext'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'numeric'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'decimal'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nvarchar'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'real'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'double'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smalldatetime'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DateTime'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smallint'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'short'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smallmoney'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'decimal'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'time'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TimeSpan'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'timestamp'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DateTime'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tinyint'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'byte'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uniqueidentifier'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Guid'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'varbinary'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'byte[]'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'varchar'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'UNKNOWN_'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" typ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" ColumnType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("is_nullable "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" typ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bigint'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'date'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'datetime'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'datetime2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'datetimeoffset'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'decimal'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'float'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'int'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'money'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'numeric'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'real'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smalldatetime'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smallint'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smallmoney'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tinyint'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uniqueidentifier'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'?'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" NullableSign\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("columns")]),s._v(" col\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("types")]),s._v(" typ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v("\n            col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("system_type_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" typ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("system_type_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user_type_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" typ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user_type_id\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" object_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" object_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@TableName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" t\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" ColumnId\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Result")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Result")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\n}'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Result")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br")])]),a("p",[s._v("将"),a("code",[s._v("TableName")]),s._v("换成具体的表名即可。")])])}),[],!1,null,null,null);t.default=e.exports}}]);