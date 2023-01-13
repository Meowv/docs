(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{576:function(s,t,a){s.exports=a.p+"assets/img/qrcode-01.d045d106.png"},799:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"net-core-生成二维码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#net-core-生成二维码"}},[s._v("#")]),s._v(" .NET Core 生成二维码")]),s._v(" "),t("p",[s._v("二维码的生成有好多种方式，本篇将使用"),t("code",[s._v("QRCoder")]),s._v("来实现，小巧易用，支持并发生成，不依赖第三方库。")]),s._v(" "),t("p",[s._v("开源地址："),t("a",{attrs:{href:"https://github.com/codebude/QRCoder",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/codebude/QRCoder"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("先在项目中添加组件")]),s._v(" "),t("div",{staticClass:"language-PowerShell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Install-Package")]),s._v(" QRCoder\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后添加一个生成二维码的接口，并且实现")]),s._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("QRCoder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("System"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Drawing")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("System"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Drawing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Imaging")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("System"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IO")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IQRCode")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GenerateQRCode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("QRCode")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token type-list"}},[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IQRCode")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GenerateQRCode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" generator "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("QRCodeGenerator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" codeData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" generator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("CreateQrCode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" QRCodeGenerator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ECCLevel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("M"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("QRCoder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("QRCode")]),s._v(" qrcode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("QRCoder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("QRCode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("codeData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" bitmapImg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" qrcode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetGraphic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Color"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Black"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Color"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("White"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MemoryStream")]),s._v(" stream "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("MemoryStream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        bitmapImg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Save")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stream"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ImageFormat"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Jpeg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" stream"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetBuffer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[t("code",[s._v("qrcode.GetGraphic(...)")]),s._v("默认返回了"),t("code",[s._v("Bitmap")]),s._v("类型，这里处理成了"),t("code",[s._v("byte[]")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("qrcode.GetGraphic(...)")]),s._v("方法参数简单说明，可以根据开发时候的注释说明进一步了解。")]),s._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Bitmap")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetGraphic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" pixelsPerModule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Color")]),s._v(" darkColor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Color")]),s._v(" lightColor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Bitmap")]),s._v(" icon "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" iconSizePercent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" iconBorderWidth "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")])]),s._v(" drawQuietZones "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// int pixelsPerModule 生成二维码图片的像素大小")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Color darkColor 暗色 一般设置为Color.Black 黑色")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Color lightColor 亮色 一般设置为Color.White 白色")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// Bitmap icon 二维码水印图标 例如：Bitmap icon = new Bitmap(context.Server.MapPath("~/images/zs.png"));默认为NULL ，加上这个二维码中间会显示一个图标')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// int iconSizePercent 水印图标的大小比例 ，可根据自己的喜好设置")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// int iconBorderWidth 水印图标的边框")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bool drawQuietZones 静止区，位于二维码某一边的空白边界,用来阻止读者获取与正在浏览的二维码无关的信息，即是否绘画二维码的空白边框区域 默认为true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("在控制器中注入调用")]),s._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("Microsoft"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AspNetCore"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Mvc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token attribute"}},[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Route")]),t("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"api/[controller]"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token attribute"}},[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ApiController")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("QrCodeController")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token type-list"}},[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ControllerBase")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token attribute"}},[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpGet")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("FileContentResult")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("QrCode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token attribute"}},[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FromServices")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IQRCode")]),s._v(" _qrcode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" buffer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" _qrcode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GenerateQRCode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("File")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("buffer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"image/jpeg"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("code",[s._v("QRCoder")]),s._v("会根据content的内容来生成对应的二维码，如果传入的是纯文本，则返回文本内容，如果传入的是一个标准的URL，则扫描二维码的时候会直接打开链接，还是很方便人性化的。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(576),alt:" "}})])])}),[],!1,null,null,null);t.default=e.exports}}]);