# Planning Analytics TurboIntegrator 函数

##  TurboIntegrator 保留字

为了避免 `TurboIntegrator` 脚本出错，您应该避免创建名称与以下类别中列出的任何字匹配的变量。

`TurboIntegrator` 中的保留字有四个类别：

- `Planning Analytics` 规则函数名
- `TurboIntegrator` 函数名
- `TurboIntegrator` 局部变量名
- `TurboIntegrator` 关键字
  - `break`
  - `else`
  - `elseif`
  - `end`
  - `endif`
  - `if`
  - `while`

## ASCII 和文本 TurboIntegrator 函数

### ASCIIDelete

`ASCIIDelete` 用于删除 `ASCII` 文件。

语法：`ASCIIDelete(FileName);`

| 参数 | 描述 |
| ------- | ------- |
| FileName | 要删除的 `ASCII` 文件的名称。如果未指定完整路径，TM1 将在服务器数据目录中搜索该文件。 |

示例：`ASCIIDelete('C:\exported_data\2002Q1Results.cma');`

此示例从 `C:\exported_data` 目录中删除名为 `2002Q1Results.cma` 的 `ASCII` 文件。

### ASCIIOutput

`ASCIIOutput` 将一条以逗号分隔的记录写入到 `ASCII` 文件中。

此 `ASCII` 文件在写入第一条记录时打开，在包含 `ASCIIIOutput` 函数的 `TurboIntegrator` 过程（“前序”、“元数据”、“数据”或“结语”）完成处理时关闭。

`ASCIIOutput` 生成的每个输出记录都不得超过 8000 字节。如果某条输出记录超过 8000 字节，该记录将被截断，并会在 `TM1ProcessError.log` 文件中记录一条警告。

`ASCIIOutput` 遇到使输出记录超过 8000 字节限制的字符串参数时，它将忽略该参数和所有以后的参数。例如，如果有 10 个字符串参数并且前七个参数的输出总共为 7950 字节，而第八个参数的输出为 51 字节，那么仅前七个参数的输出将被写入记录中。如果有十个字符串参数并且第一个参数的字节数超过 8000，那么将不会将输出写入记录中。

如果在一个 `TurboIntegrator` 进程的多个过程（选项卡）中使用 `ASCIIOutput` 函数写入同一个文件，那么在每次为新过程打开该文件时，都将覆盖该文件。

如果在写入 `ASCII` 文件时发生错误，`ASCIIOutput` 函数会生成一个小错误。此外，执行该函数后会返回一个值：如果该函数写入 `ASCII` 文件成功，那么返回 1；如果失败，那么返回 0。

> 注： 仅当 `ASCIIOutput` 所写入的磁盘与用于运行服务器的磁盘不同时，才会生成错误并返回值。例如，如果服务器运行于 C: 驱动器，而 `ASCIIOutput` 向 F: 驱动器写入，且 F: 驱动器空间不足，那么该错误被捕捉，而服务器会保持运行状态。如果服务器在 C: 驱动器上运行，`ASCIIOutput` 也写入 C: 驱动器，但该驱动器空间不足，那么服务器将按预期终止。

> 注： 数据源为多维数据集视图时，执行 `ASCIIOutput` 函数的能力由允许导出为文本功能分配确定，此功能按用户组设置。如果针对用户所在组拒绝了将数据导出为文本的功能，那么该用户执行 `ASCIIOutput` 的任何尝试都会导致进程退出并返回权限错误。进程消息日志指示“Execution was aborted. No security access for ASCIIOutput.”

> 注： `ASCIIOutput` 函数将在生成的所有文件的末尾追加 0x1A 十六进制字符。但 TM1 Web 无法打开包含 0x1A 十六进制字符的 Web 表。

如果使用 `ASCIIOutput` 将 TM1 数据导出为 `ASCII` 文件，然后尝试在 TM1 Web 表中打开该文件，您将遇到以下错误。

将 MS Excel 工作簿转换为 XML 格式时出错，十六进制值 0x1A 是无效字符。

如果从 Web 表中移除 0x1A 十六进制字符，那么将在 TM1 Web 中打开该文件。

语法：`ASCIIOutput(FileName, String1, String2, ...Stringn);`

| 参数 | 描述 |
| ------- | ------- |
| FileName | 要向其中写入记录的 `ASCII` 文件的完整路径。路径必须包括文件扩展名。 |
| String1...Stringn | 与要在 `ASCII` 文件中创建的每个字段相对应的字符串。此参数可以是字符串，也可以是字符串的 `TurboIntegrator` 变量。 |

示例：`ASCIIOutput('NewCube.cma', V1, V2, V3, V4, V5 );`

此示例将一条记录写入 `ASCII` 文件 NewCube.cma。记录中的每个字段与 `TurboIntegrator` 分配到数据源中某一列的变量相对应。

### NumberToString

`NumberToString` 使用当前用户区域设置的小数点分隔符将一个数字转换为一个字符串。

在 Microsoft Windows 中，小数点分隔符是一项“地区选项”设置。

此函数的输出类似于“常规”数字格式；它不使用千位分隔符并且使用负号 (-) 表示负数。

语法：`NumberToString(Value);`

| 参数 | 描述 |
| ------- | ------- |
| 值 | 要转换为字符串的实值。 |

示例：`nRET = NumberToString(1234.5);`

### NumberToStringEx

`NumberToStringEx` 使用传递的字符串格式、小数点分隔符和千位分隔符将一个数字转换为一个字符串。

语法：`NumberToStringEx(Value, NumericFormat, DecimalSep, ThousandsSep);`

| 参数 | 描述 |
| ------- | ------- |
| 值 | 要转换为字符串的实值。 |
| FormatString | TM1 数字格式字符串，用于定义函数输出格式。 |
| DecimalSep | 要在输出字符串中使用的小数点分隔符。 |
| ThousandsSep | 要在输出字符串中使用的千位分隔符。 |

示例：

`sRet=NUMBERTOSTRINGEX(7895.23,'#,0.#########', ',', '.');`

`ASCIIOUTPUT('number_to_string.txt',sRet);`

将返回 ascii 文件：7.895,23

### SetInputCharacterSet

`SetInputCharacterSet` 函数允许您指定在 `TurboIntegrator` 数据源中使用的字符集。

`TurboIntegrator` 进程读取外部文件作为输入时，该进程需要知道写入外部文件的字符集。如果该文件包含有效的字节顺序标记，那么在有需要时，TM1 函数会将该文件正确地转换为 UTF-8。

对于缺少有效字节顺序标记的格式，必须将字符从某种其他编码转换为 UTF-8。如果在托管服务器的计算机上存在合适的转换程序，那么会将输入文件转换为 TM1 所要求的 Unicode 字符集。

语法：`SetInputCharacterSet (CharacterSet);`

| 参数 | 描述 |
| ------- | ------- |
| CharacterSet | 在输入文件中由 `TurboIntegrator` 进程使用的[字符编码](https://www.ibm.com/docs/zh/planning-analytics/2.0.0?topic=attf-setinputcharacterset)。如果 CharacterSet 参数是未知的字符类型，那么类型将缺省为系统语言环境。 |

示例：`SetInputCharacterSet ('TM1CS_ISO_8859_11');`

此示例指定 `TurboIntegrator` 数据源的输入字符集是 ISO-8859-11 拉丁语/泰国语。

### SetOutputCharacterSet

`SetOutputCharacterSet` 允许您在 `TurboIntegrator` 进程中使用 `TextOutput` 写入文本文件时指定要使用的字符集。

语法：`SetOutputCharacterSet( FileName, CharacterSet );`

| 参数 | 描述 |
| ------- | ------- |
| FileName | 您要为其指定字符集的文本文件的完整路径。路径必须包括文件扩展名。此参数应与用于 `TextOutput` 函数的 FileName 参数相同。 |
| CharacterSet | 在写入输出文件时使用的字符编码。 |

### SetOutputEscapeDoubleQuote

`SetOutputEscapeDoubleQuote` 允许您在将多维数据集视图导出为 `.csv` 文件时，对出现在元素名称或数据值中的双引号进行转义。

如果您的 `TurboIntegrator` 脚本中包括 `SetOutputEscapeDoubleQuote` 并且将其设为 1 时，那么导出的文件将保留在源多维数据集视图中双引号出现的位置，方法是对另一个双引号对中的每个双引号进行转义。例如，如果源视图中的元素名为“地区”，那么在 `.csv` 输出文件中该元素将以 """Region""" 的形式导出。

如果您的 `TurboIntegrator` 脚本中未包括 `SetOutputEscapeDoubleQuote` 或未将其设为 0，那么导出的文件不会对源多维数据集中出现任何双引号进行转义。

`SetOutputEscapeDoubleQuote` 与 `ASCIIOutput` 函数一起使用，这是实际上用于写输出文件的函数。 在 `TurboIntegrator` `脚本中，SetOutputEscapeDoubleQuote` 应在 `ASCIIOutput` 之前，两个函数均应使用相同的 FileName 参数值。

语法：`SetOutputEscapeDoubleQuote(FileName, Num);`

| 参数 | 描述 |
| ------- | ------- |
| FileName | 要向其中写入多维数据集视图的文件的完整路径。路径必须包括文件扩展名。 |
| Num | 用于确定是否在输出文件中对双引号进行转义的标记。 |
| | 1 指明在将输出文件中转义的双引号。 |
| | 0 指明在输出文件中不对双引号进行转义。 |

示例：`SetOutputEscapeDoubleQuote('C:\temp\cube1.csv', 1);`

此示例对在将输出写到 C:\temp\cube1.csv 文件时在源多维数据集视图中碰到的任何双引号进行转义。
