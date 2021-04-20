(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{917:function(t,_,v){"use strict";v.r(_);var e=v(10),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"planning-analytics-turbointegrator-函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#planning-analytics-turbointegrator-函数"}},[t._v("#")]),t._v(" Planning Analytics TurboIntegrator 函数")]),t._v(" "),v("h2",{attrs:{id:"turbointegrator-保留字"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#turbointegrator-保留字"}},[t._v("#")]),t._v(" TurboIntegrator 保留字")]),t._v(" "),v("p",[t._v("为了避免 "),v("code",[t._v("TurboIntegrator")]),t._v(" 脚本出错，您应该避免创建名称与以下类别中列出的任何字匹配的变量。")]),t._v(" "),v("p",[v("code",[t._v("TurboIntegrator")]),t._v(" 中的保留字有四个类别：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("Planning Analytics")]),t._v(" 规则函数名")]),t._v(" "),v("li",[v("code",[t._v("TurboIntegrator")]),t._v(" 函数名")]),t._v(" "),v("li",[v("code",[t._v("TurboIntegrator")]),t._v(" 局部变量名")]),t._v(" "),v("li",[v("code",[t._v("TurboIntegrator")]),t._v(" 关键字\n"),v("ul",[v("li",[v("code",[t._v("break")])]),t._v(" "),v("li",[v("code",[t._v("else")])]),t._v(" "),v("li",[v("code",[t._v("elseif")])]),t._v(" "),v("li",[v("code",[t._v("end")])]),t._v(" "),v("li",[v("code",[t._v("endif")])]),t._v(" "),v("li",[v("code",[t._v("if")])]),t._v(" "),v("li",[v("code",[t._v("while")])])])])]),t._v(" "),v("h2",{attrs:{id:"ascii-和文本-turbointegrator-函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ascii-和文本-turbointegrator-函数"}},[t._v("#")]),t._v(" ASCII 和文本 TurboIntegrator 函数")]),t._v(" "),v("h3",{attrs:{id:"asciidelete"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#asciidelete"}},[t._v("#")]),t._v(" ASCIIDelete")]),t._v(" "),v("p",[v("code",[t._v("ASCIIDelete")]),t._v(" 用于删除 "),v("code",[t._v("ASCII")]),t._v(" 文件。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v("ASCIIDelete(FileName);")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("FileName")]),t._v(" "),v("td",[t._v("要删除的 "),v("code",[t._v("ASCII")]),t._v(" 文件的名称。如果未指定完整路径，TM1 将在服务器数据目录中搜索该文件。")])])])]),t._v(" "),v("p",[t._v("示例："),v("code",[t._v("ASCIIDelete('C:\\exported_data\\2002Q1Results.cma');")])]),t._v(" "),v("p",[t._v("此示例从 "),v("code",[t._v("C:\\exported_data")]),t._v(" 目录中删除名为 "),v("code",[t._v("2002Q1Results.cma")]),t._v(" 的 "),v("code",[t._v("ASCII")]),t._v(" 文件。")]),t._v(" "),v("h3",{attrs:{id:"asciioutput"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#asciioutput"}},[t._v("#")]),t._v(" ASCIIOutput")]),t._v(" "),v("p",[v("code",[t._v("ASCIIOutput")]),t._v(" 将一条以逗号分隔的记录写入到 "),v("code",[t._v("ASCII")]),t._v(" 文件中。")]),t._v(" "),v("p",[t._v("此 "),v("code",[t._v("ASCII")]),t._v(" 文件在写入第一条记录时打开，在包含 "),v("code",[t._v("ASCIIIOutput")]),t._v(" 函数的 "),v("code",[t._v("TurboIntegrator")]),t._v(" 过程（“前序”、“元数据”、“数据”或“结语”）完成处理时关闭。")]),t._v(" "),v("p",[v("code",[t._v("ASCIIOutput")]),t._v(" 生成的每个输出记录都不得超过 8000 字节。如果某条输出记录超过 8000 字节，该记录将被截断，并会在 "),v("code",[t._v("TM1ProcessError.log")]),t._v(" 文件中记录一条警告。")]),t._v(" "),v("p",[v("code",[t._v("ASCIIOutput")]),t._v(" 遇到使输出记录超过 8000 字节限制的字符串参数时，它将忽略该参数和所有以后的参数。例如，如果有 10 个字符串参数并且前七个参数的输出总共为 7950 字节，而第八个参数的输出为 51 字节，那么仅前七个参数的输出将被写入记录中。如果有十个字符串参数并且第一个参数的字节数超过 8000，那么将不会将输出写入记录中。")]),t._v(" "),v("p",[t._v("如果在一个 "),v("code",[t._v("TurboIntegrator")]),t._v(" 进程的多个过程（选项卡）中使用 "),v("code",[t._v("ASCIIOutput")]),t._v(" 函数写入同一个文件，那么在每次为新过程打开该文件时，都将覆盖该文件。")]),t._v(" "),v("p",[t._v("如果在写入 "),v("code",[t._v("ASCII")]),t._v(" 文件时发生错误，"),v("code",[t._v("ASCIIOutput")]),t._v(" 函数会生成一个小错误。此外，执行该函数后会返回一个值：如果该函数写入 "),v("code",[t._v("ASCII")]),t._v(" 文件成功，那么返回 1；如果失败，那么返回 0。")]),t._v(" "),v("blockquote",[v("p",[t._v("注： 仅当 "),v("code",[t._v("ASCIIOutput")]),t._v(" 所写入的磁盘与用于运行服务器的磁盘不同时，才会生成错误并返回值。例如，如果服务器运行于 C: 驱动器，而 "),v("code",[t._v("ASCIIOutput")]),t._v(" 向 F: 驱动器写入，且 F: 驱动器空间不足，那么该错误被捕捉，而服务器会保持运行状态。如果服务器在 C: 驱动器上运行，"),v("code",[t._v("ASCIIOutput")]),t._v(" 也写入 C: 驱动器，但该驱动器空间不足，那么服务器将按预期终止。")])]),t._v(" "),v("blockquote",[v("p",[t._v("注： 数据源为多维数据集视图时，执行 "),v("code",[t._v("ASCIIOutput")]),t._v(" 函数的能力由允许导出为文本功能分配确定，此功能按用户组设置。如果针对用户所在组拒绝了将数据导出为文本的功能，那么该用户执行 "),v("code",[t._v("ASCIIOutput")]),t._v(" 的任何尝试都会导致进程退出并返回权限错误。进程消息日志指示“Execution was aborted. No security access for ASCIIOutput.”")])]),t._v(" "),v("blockquote",[v("p",[t._v("注： "),v("code",[t._v("ASCIIOutput")]),t._v(" 函数将在生成的所有文件的末尾追加 0x1A 十六进制字符。但 TM1 Web 无法打开包含 0x1A 十六进制字符的 Web 表。")])]),t._v(" "),v("p",[t._v("如果使用 "),v("code",[t._v("ASCIIOutput")]),t._v(" 将 TM1 数据导出为 "),v("code",[t._v("ASCII")]),t._v(" 文件，然后尝试在 TM1 Web 表中打开该文件，您将遇到以下错误。")]),t._v(" "),v("p",[t._v("将 MS Excel 工作簿转换为 XML 格式时出错，十六进制值 0x1A 是无效字符。")]),t._v(" "),v("p",[t._v("如果从 Web 表中移除 0x1A 十六进制字符，那么将在 TM1 Web 中打开该文件。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v("ASCIIOutput(FileName, String1, String2, ...Stringn);")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("FileName")]),t._v(" "),v("td",[t._v("要向其中写入记录的 "),v("code",[t._v("ASCII")]),t._v(" 文件的完整路径。路径必须包括文件扩展名。")])]),t._v(" "),v("tr",[v("td",[t._v("String1...Stringn")]),t._v(" "),v("td",[t._v("与要在 "),v("code",[t._v("ASCII")]),t._v(" 文件中创建的每个字段相对应的字符串。此参数可以是字符串，也可以是字符串的 "),v("code",[t._v("TurboIntegrator")]),t._v(" 变量。")])])])]),t._v(" "),v("p",[t._v("示例："),v("code",[t._v("ASCIIOutput('NewCube.cma', V1, V2, V3, V4, V5 );")])]),t._v(" "),v("p",[t._v("此示例将一条记录写入 "),v("code",[t._v("ASCII")]),t._v(" 文件 NewCube.cma。记录中的每个字段与 "),v("code",[t._v("TurboIntegrator")]),t._v(" 分配到数据源中某一列的变量相对应。")]),t._v(" "),v("h3",{attrs:{id:"numbertostring"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#numbertostring"}},[t._v("#")]),t._v(" NumberToString")]),t._v(" "),v("p",[v("code",[t._v("NumberToString")]),t._v(" 使用当前用户区域设置的小数点分隔符将一个数字转换为一个字符串。")]),t._v(" "),v("p",[t._v("在 Microsoft Windows 中，小数点分隔符是一项“地区选项”设置。")]),t._v(" "),v("p",[t._v("此函数的输出类似于“常规”数字格式；它不使用千位分隔符并且使用负号 (-) 表示负数。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v("NumberToString(Value);")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("值")]),t._v(" "),v("td",[t._v("要转换为字符串的实值。")])])])]),t._v(" "),v("p",[t._v("示例："),v("code",[t._v("nRET = NumberToString(1234.5);")])]),t._v(" "),v("h3",{attrs:{id:"numbertostringex"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#numbertostringex"}},[t._v("#")]),t._v(" NumberToStringEx")]),t._v(" "),v("p",[v("code",[t._v("NumberToStringEx")]),t._v(" 使用传递的字符串格式、小数点分隔符和千位分隔符将一个数字转换为一个字符串。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v("NumberToStringEx(Value, NumericFormat, DecimalSep, ThousandsSep);")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("值")]),t._v(" "),v("td",[t._v("要转换为字符串的实值。")])]),t._v(" "),v("tr",[v("td",[t._v("FormatString")]),t._v(" "),v("td",[t._v("TM1 数字格式字符串，用于定义函数输出格式。")])]),t._v(" "),v("tr",[v("td",[t._v("DecimalSep")]),t._v(" "),v("td",[t._v("要在输出字符串中使用的小数点分隔符。")])]),t._v(" "),v("tr",[v("td",[t._v("ThousandsSep")]),t._v(" "),v("td",[t._v("要在输出字符串中使用的千位分隔符。")])])])]),t._v(" "),v("p",[t._v("示例：")]),t._v(" "),v("p",[v("code",[t._v("sRet=NUMBERTOSTRINGEX(7895.23,'#,0.#########', ',', '.');")])]),t._v(" "),v("p",[v("code",[t._v("ASCIIOUTPUT('number_to_string.txt',sRet);")])]),t._v(" "),v("p",[t._v("将返回 ascii 文件：7.895,23")]),t._v(" "),v("h3",{attrs:{id:"setinputcharacterset"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#setinputcharacterset"}},[t._v("#")]),t._v(" SetInputCharacterSet")]),t._v(" "),v("p",[v("code",[t._v("SetInputCharacterSet")]),t._v(" 函数允许您指定在 "),v("code",[t._v("TurboIntegrator")]),t._v(" 数据源中使用的字符集。")]),t._v(" "),v("p",[v("code",[t._v("TurboIntegrator")]),t._v(" 进程读取外部文件作为输入时，该进程需要知道写入外部文件的字符集。如果该文件包含有效的字节顺序标记，那么在有需要时，TM1 函数会将该文件正确地转换为 UTF-8。")]),t._v(" "),v("p",[t._v("对于缺少有效字节顺序标记的格式，必须将字符从某种其他编码转换为 UTF-8。如果在托管服务器的计算机上存在合适的转换程序，那么会将输入文件转换为 TM1 所要求的 Unicode 字符集。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v("SetInputCharacterSet (CharacterSet);")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("CharacterSet")]),t._v(" "),v("td",[t._v("在输入文件中由 "),v("code",[t._v("TurboIntegrator")]),t._v(" 进程使用的"),v("a",{attrs:{href:"https://www.ibm.com/docs/zh/planning-analytics/2.0.0?topic=attf-setinputcharacterset",target:"_blank",rel:"noopener noreferrer"}},[t._v("字符编码"),v("OutboundLink")],1),t._v("。如果 CharacterSet 参数是未知的字符类型，那么类型将缺省为系统语言环境。")])])])]),t._v(" "),v("p",[t._v("示例："),v("code",[t._v("SetInputCharacterSet ('TM1CS_ISO_8859_11');")])]),t._v(" "),v("p",[t._v("此示例指定 "),v("code",[t._v("TurboIntegrator")]),t._v(" 数据源的输入字符集是 ISO-8859-11 拉丁语/泰国语。")]),t._v(" "),v("h3",{attrs:{id:"setoutputcharacterset"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#setoutputcharacterset"}},[t._v("#")]),t._v(" SetOutputCharacterSet")]),t._v(" "),v("p",[v("code",[t._v("SetOutputCharacterSet")]),t._v(" 允许您在 "),v("code",[t._v("TurboIntegrator")]),t._v(" 进程中使用 "),v("code",[t._v("TextOutput")]),t._v(" 写入文本文件时指定要使用的字符集。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v("SetOutputCharacterSet( FileName, CharacterSet );")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("FileName")]),t._v(" "),v("td",[t._v("您要为其指定字符集的文本文件的完整路径。路径必须包括文件扩展名。此参数应与用于 "),v("code",[t._v("TextOutput")]),t._v(" 函数的 FileName 参数相同。")])]),t._v(" "),v("tr",[v("td",[t._v("CharacterSet")]),t._v(" "),v("td",[t._v("在写入输出文件时使用的字符编码。")])])])]),t._v(" "),v("h3",{attrs:{id:"setoutputescapedoublequote"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#setoutputescapedoublequote"}},[t._v("#")]),t._v(" SetOutputEscapeDoubleQuote")]),t._v(" "),v("p",[v("code",[t._v("SetOutputEscapeDoubleQuote")]),t._v(" 允许您在将多维数据集视图导出为 "),v("code",[t._v(".csv")]),t._v(" 文件时，对出现在元素名称或数据值中的双引号进行转义。")]),t._v(" "),v("p",[t._v("如果您的 "),v("code",[t._v("TurboIntegrator")]),t._v(" 脚本中包括 "),v("code",[t._v("SetOutputEscapeDoubleQuote")]),t._v(" 并且将其设为 1 时，那么导出的文件将保留在源多维数据集视图中双引号出现的位置，方法是对另一个双引号对中的每个双引号进行转义。例如，如果源视图中的元素名为“地区”，那么在 "),v("code",[t._v(".csv")]),t._v(' 输出文件中该元素将以 """Region""" 的形式导出。')]),t._v(" "),v("p",[t._v("如果您的 "),v("code",[t._v("TurboIntegrator")]),t._v(" 脚本中未包括 "),v("code",[t._v("SetOutputEscapeDoubleQuote")]),t._v(" 或未将其设为 0，那么导出的文件不会对源多维数据集中出现任何双引号进行转义。")]),t._v(" "),v("p",[v("code",[t._v("SetOutputEscapeDoubleQuote")]),t._v(" 与 "),v("code",[t._v("ASCIIOutput")]),t._v(" 函数一起使用，这是实际上用于写输出文件的函数。 在 "),v("code",[t._v("TurboIntegrator")]),t._v(" "),v("code",[t._v("脚本中，SetOutputEscapeDoubleQuote")]),t._v(" 应在 "),v("code",[t._v("ASCIIOutput")]),t._v(" 之前，两个函数均应使用相同的 FileName 参数值。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v("SetOutputEscapeDoubleQuote(FileName, Num);")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("FileName")]),t._v(" "),v("td",[t._v("要向其中写入多维数据集视图的文件的完整路径。路径必须包括文件扩展名。")])]),t._v(" "),v("tr",[v("td",[t._v("Num")]),t._v(" "),v("td",[t._v("用于确定是否在输出文件中对双引号进行转义的标记。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("1 指明在将输出文件中转义的双引号。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("0 指明在输出文件中不对双引号进行转义。")])])])]),t._v(" "),v("p",[t._v("示例："),v("code",[t._v("SetOutputEscapeDoubleQuote('C:\\temp\\cube1.csv', 1);")])]),t._v(" "),v("p",[t._v("此示例对在将输出写到 C:\\temp\\cube1.csv 文件时在源多维数据集视图中碰到的任何双引号进行转义。")]),t._v(" "),v("h3",{attrs:{id:"stringtonumber"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#stringtonumber"}},[t._v("#")]),t._v(" StringToNumber")]),t._v(" "),v("p",[v("code",[t._v("StringToNumber")]),t._v(" 使用当前用户区域设置的小数点分隔符将一个字符串转换为一个数字。如果输入字符串是无效的数字字符串，那么返回值将是无效的浮点值。在 Microsoft Windows 中，小数点分隔符是一项“地区选项”设置。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v("StringToNumber(String);")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("字符串")]),t._v(" "),v("td",[t._v("要转换为数字的字符串。")])])])]),t._v(" "),v("p",[t._v("示例："),v("code",[t._v("nRET = StringToNumber('123.45');")])]),t._v(" "),v("h3",{attrs:{id:"stringtonumberex"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#stringtonumberex"}},[t._v("#")]),t._v(" StringToNumberEx")]),t._v(" "),v("p",[v("code",[t._v("StringToNumberEx")]),t._v(" 使用传递的小数点分隔符和千位分隔符将一个字符串转换为一个数字。如果输入字符串是无效的数字字符串，那么返回值将是无效的浮点值。")]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v("StringToNumberEx(String, DecimalSep, ThousandsSep);")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("字符串")]),t._v(" "),v("td",[t._v("要转换为数字的字符串。")])]),t._v(" "),v("tr",[v("td",[t._v("DecimalSep")]),t._v(" "),v("td",[t._v("要在输出数字中使用的小数点分隔符。")])]),t._v(" "),v("tr",[v("td",[t._v("ThousandsSep")]),t._v(" "),v("td",[t._v("要在输出数字中使用的千位分隔符。")])])])]),t._v(" "),v("p",[t._v("示例："),v("code",[t._v("nRET = StringToNumberEx('12453.45', ' . ', ' , ');")])]),t._v(" "),v("h3",{attrs:{id:"textoutput"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#textoutput"}},[t._v("#")]),t._v(" TextOutput")]),t._v(" "),v("p",[v("code",[t._v("TextOutput")]),t._v(" 将一条以逗号分隔的记录写入到文本文件中。")]),t._v(" "),v("p",[t._v("缺省情况下，"),v("code",[t._v("TextOutput")]),t._v(" 将写入服务器的语言环境字符集中的字符。要以不同的字符集创建文件，请先调用函数 "),v("code",[t._v("SetOutputCharacterSet")]),t._v("，然后再调用 "),v("code",[t._v("TextOutput")]),t._v("。")]),t._v(" "),v("p",[t._v("文本文件在写入第一条记录时打开，在包含 "),v("code",[t._v("TextOutput")]),t._v(" 函数的 "),v("code",[t._v("TurboIntegrator")]),t._v(" 过程（“前序”、“元数据”、“数据”或“结语”）完成处理时关闭。")]),t._v(" "),v("p",[t._v("如果在一个 "),v("code",[t._v("TurboIntegrator")]),t._v(" 进程的多个过程（选项卡）中使用 "),v("code",[t._v("TextOutput")]),t._v(" 函数写入同一个文件，那么在每次为新过程打开该文件时，都将覆盖该文件。")]),t._v(" "),v("p",[v("code",[t._v("TextOutput")]),t._v(" 生成的每个输出记录都不得超过 8000 字节。如果某条输出记录超过 8000 字节，该记录将被截断，并会在 "),v("code",[t._v("TM1ProcessError.log")]),t._v(" 文件中记录一条警告。")]),t._v(" "),v("p",[v("code",[t._v("TextOutput")]),t._v(" 遇到使输出记录超过 8000 字节限制的字符串参数时，它将忽略该参数和所有以后的参数。例如，如果有 10 个字符串参数并且前七个参数的输出总共为 7950 字节，而第八个参数的输出为 51 字节，那么仅前七个参数的输出将被写入记录中。如果有十个字符串参数并且第一个参数的字节数超过 8000，那么将不会将输出写入记录中。")]),t._v(" "),v("p",[t._v("如果在写入文本文件时发生错误，"),v("code",[t._v("TextOutput")]),t._v(" 函数会生成一个小错误。另外，执行该函数后会返回一个值：如果该函数写入文本文件成功，那么返回 1；如果失败，那么返回 0。")]),t._v(" "),v("p",[t._v("仅当 "),v("code",[t._v("TextOutput")]),t._v(" 所写入的磁盘与用于运行服务器的磁盘不同时，才会生成错误并返回值。例如，如果服务器运行于 C: 驱动器，而 "),v("code",[t._v("TextOutput")]),t._v(" 向 F: 驱动器写入，且 F: 驱动器空间不足，那么该错误被捕捉，而服务器会保持运行状态。如果服务器在 C: 驱动器上运行，"),v("code",[t._v("TextOutput")]),t._v(" 也写入 C: 驱动器，但该驱动器空间不足，那么服务器将按预期终止。")]),t._v(" "),v("blockquote",[v("p",[t._v("注： 数据源为多维数据集视图时，执行 "),v("code",[t._v("TextOutput")]),t._v(" 函数的能力由允许导出为文本功能分配确定，此功能按用户组设置。如果针对用户所在组拒绝了将数据导出为文本的功能，那么该用户执行 "),v("code",[t._v("TextOutput")]),t._v(" 的任何尝试都会导致进程退出并返回权限错误。进程消息日志指示“Execution was aborted. No security access for TextOutput.”")])]),t._v(" "),v("p",[t._v("语法："),v("code",[t._v("TextOutput(FileName, String1, String2, ...Stringn);")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("FileName")]),t._v(" "),v("td",[t._v("要向其写入记录的文本文件的完整路径。路径必须包括文件扩展名。")])]),t._v(" "),v("tr",[v("td",[t._v("String1...Stringn")]),t._v(" "),v("td",[t._v("与要在文本文件中创建的每个字段相对应的字符串。此参数可以是字符串，也可以是字符串的 "),v("code",[t._v("TurboIntegrator")]),t._v(" 变量。")])])])]),t._v(" "),v("p",[t._v("示例："),v("code",[t._v("TextOutput('NewCube.cma', V1, V2, V3, V4, V5 );")])]),t._v(" "),v("p",[t._v("此示例将一条记录写入 "),v("code",[t._v("NewCube.cma")]),t._v(" 文件。记录中的每个字段与 "),v("code",[t._v("TurboIntegrator")]),t._v(" 分配到数据源中某一列的变量相对应。")])])}),[],!1,null,null,null);_.default=r.exports}}]);