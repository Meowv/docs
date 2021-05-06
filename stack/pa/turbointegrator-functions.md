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

### StringToNumber

`StringToNumber` 使用当前用户区域设置的小数点分隔符将一个字符串转换为一个数字。如果输入字符串是无效的数字字符串，那么返回值将是无效的浮点值。在 Microsoft Windows 中，小数点分隔符是一项“地区选项”设置。

语法：`StringToNumber(String);`

| 参数 | 描述 |
| ------- | ------- |
| 字符串 | 要转换为数字的字符串。 |

示例：`nRET = StringToNumber('123.45');`

### StringToNumberEx

`StringToNumberEx` 使用传递的小数点分隔符和千位分隔符将一个字符串转换为一个数字。如果输入字符串是无效的数字字符串，那么返回值将是无效的浮点值。

语法：`StringToNumberEx(String, DecimalSep, ThousandsSep);`

| 参数 | 描述 |
| ------- | ------- |
| 字符串 | 要转换为数字的字符串。 |
| DecimalSep | 要在输出数字中使用的小数点分隔符。 |
| ThousandsSep | 要在输出数字中使用的千位分隔符。 |

示例：`nRET = StringToNumberEx('12453.45', ' . ', ' , ');`

### TextOutput

`TextOutput` 将一条以逗号分隔的记录写入到文本文件中。

缺省情况下，`TextOutput` 将写入服务器的语言环境字符集中的字符。要以不同的字符集创建文件，请先调用函数 `SetOutputCharacterSet`，然后再调用 `TextOutput`。

文本文件在写入第一条记录时打开，在包含 `TextOutput` 函数的 `TurboIntegrator` 过程（“前序”、“元数据”、“数据”或“结语”）完成处理时关闭。

如果在一个 `TurboIntegrator` 进程的多个过程（选项卡）中使用 `TextOutput` 函数写入同一个文件，那么在每次为新过程打开该文件时，都将覆盖该文件。

`TextOutput` 生成的每个输出记录都不得超过 8000 字节。如果某条输出记录超过 8000 字节，该记录将被截断，并会在 `TM1ProcessError.log` 文件中记录一条警告。

`TextOutput` 遇到使输出记录超过 8000 字节限制的字符串参数时，它将忽略该参数和所有以后的参数。例如，如果有 10 个字符串参数并且前七个参数的输出总共为 7950 字节，而第八个参数的输出为 51 字节，那么仅前七个参数的输出将被写入记录中。如果有十个字符串参数并且第一个参数的字节数超过 8000，那么将不会将输出写入记录中。

如果在写入文本文件时发生错误，`TextOutput` 函数会生成一个小错误。另外，执行该函数后会返回一个值：如果该函数写入文本文件成功，那么返回 1；如果失败，那么返回 0。

仅当 `TextOutput` 所写入的磁盘与用于运行服务器的磁盘不同时，才会生成错误并返回值。例如，如果服务器运行于 C: 驱动器，而 `TextOutput` 向 F: 驱动器写入，且 F: 驱动器空间不足，那么该错误被捕捉，而服务器会保持运行状态。如果服务器在 C: 驱动器上运行，`TextOutput` 也写入 C: 驱动器，但该驱动器空间不足，那么服务器将按预期终止。

> 注： 数据源为多维数据集视图时，执行 `TextOutput` 函数的能力由允许导出为文本功能分配确定，此功能按用户组设置。如果针对用户所在组拒绝了将数据导出为文本的功能，那么该用户执行 `TextOutput` 的任何尝试都会导致进程退出并返回权限错误。进程消息日志指示“Execution was aborted. No security access for TextOutput.”

语法：`TextOutput(FileName, String1, String2, ...Stringn);`

| 参数 | 描述 |
| ------- | ------- |
| FileName | 要向其写入记录的文本文件的完整路径。路径必须包括文件扩展名。 |
| String1...Stringn | 与要在文本文件中创建的每个字段相对应的字符串。此参数可以是字符串，也可以是字符串的 `TurboIntegrator` 变量。 |

示例：`TextOutput('NewCube.cma', V1, V2, V3, V4, V5 );`

此示例将一条记录写入 `NewCube.cma` 文件。记录中的每个字段与 `TurboIntegrator` 分配到数据源中某一列的变量相对应。

## 属性操作 TurboIntegrator 函数

### ATTRNL

`ATTRNL` 返回某一指定维度元素的数值属性。

语法：`ATTRNL(DimName, ElName, AttrName, [LangLocaleCode]);`

| 参数 | 描述 |
| ------- | ------- |
| DimName | 有效的维度名称。 |
| ElName | 维度的一个元素。 |
| AttrName | 要检索其值的属性。此参数必须是元素的有效属性。 |
| LangLocaleCode | 此可选参数指定要返回其值的语言环境代码。 |

示例：`ATTRNL('Model', 'L Series 1.8L Sedan', 'Engine Size', 'fr');`

在此示例中，函数针对“法语”语言环境返回型号维度中 L Series 1.8L Sedan 元素的 Engine Size 属性的数字值。

### ATTRSL

`AttrSL` 用于返回维度的指定元素的字符串属性。

语法：`AttrSL(DimName, ElName, AttrName, [LangLocaleCode]);`

| 参数 | 描述 |
| ------- | ------- |
| DimName | 有效的维度名称。 |
| ElName | 维度的一个元素。 |
| AttrName | 要检索其值的属性。此参数必须是元素的有效属性。 |
| LangLocaleCode | 此可选参数指定要返回其值的语言环境代码。 |

示例：`AttrSL('Plan_Business_Unit', '10100', 'Currency', 'fr');`

在此示例中，函数针对“法语”语言环境返回 Plan_Business_Unit 维度中 10100 元素的 Currency 属性的字符串值。

### AttrDelete

`AttrDelete` 删除 TM1® 数据库中的元素属性。

语法：`AttrDelete(DimName, AttrName);`

| 参数 | 描述 |
| ------- | ------- |
| DimName | 要删除其元素属性的维度。 |
| AttrName | 要删除的属性的名称。 |

示例：`AttrDelete('Model', 'InteriorColor');`

此示例删除型号维度的 InteriorColor 元素属性。

### AttrInsert

`AttrInsert` 用于为某一维度创建新的元素属性。此函数可以创建字符串属性、数值属性或别名属性。

语法：`AttrInsert(DimName, PrevAttr, AttrName, Type);`

| 参数 | 描述 |
| ------- | ------- |
| DimName | 要为其创建元素属性的维度。 |
| PrevAttr | 所创建属性的前置属性。 |
| AttrName | 要分配给新属性的名称。 |
| 类型 | 属性的类型。Type 参数有三种可能的值： |
| | N - 创建数值属性。 |
| | S - 创建字符串属性。 |
| | A - 创建别名属性。 |

示例：`AttrInsert('Model', 'Transmission', 'InteriorColor', 'S');`

此示例为型号维度创建 InteriorColor 字符串属性。此属性将插入到 Transmission 属性之后。

### AttrPutN

`AttrPutN` 用于向一个数值元素属性赋值。

语法：`AttrPutN( Value, DimName, ElName, AttrName, [LangLocaleCode] );`

| 参数 | 描述 |
| ------- | ------- |
| 值 | 要分配给元素属性的数字值。 |
| DimName | 要为其分配属性值的元素的父维度。 |
| ElName | 要为其分配属性值的元素。 |
| AttrName | 要为其赋值的属性。 |
| LangLocaleCode | 此可选参数指定应用 NumericValue 的语言环境代码。有效的 LangLocaleCode 值对应于 `}Cultures` 控制维度中列出的 ISO 639-1 国际语言代码。如果未指定或者省略 LangLocaleCode，那么将更新基本属性值。 |

示例：`AttrPutN(2257993, 'Model', ' S Series 1.8L Sedan ', 'ProdCode');`

此示例将值 2257993 赋给型号维度中 S Series 1.8L Sedan 的 ProdCode 属性。

### AttrPutS

`AttrPutS` 用于向一个字符串元素属性赋值。

语法：`AttrPutS(Value, DimName, ElName, AttrName, [LangLocaleCode] );`

| 参数 | 描述 |
| ------- | ------- |
| 值 | 要赋给某一元素属性的值。 |
| DimName | 要为其分配属性值的元素的父维度。 |
| ElName | 要为其分配属性值的元素。 |
| AttrName | 要为其赋值的属性。 |
| LangLocaleCode | 此可选参数指定应用 Value 的语言环境代码。 |

示例：`AttrPutS('Beige', 'Model', 'S Series 1.8L Sedan', 'InteriorColor');`

此示例将字符串 Beige 赋给型号维度中 S Series 1.8L Sedan 的 InteriorColor 属性。

### ChoreAttrDelete

`ChoreAttrDelete` 删除 TM1® 数据库的杂项属性。

语法：`ChoreAttrDelete(AttrName);`

| 参数 | 描述 |
| ------- | ------- |
| AttrName | 要删除的杂项属性的名称。 |

示例：`ChoreAttrDelete('Description');`

此示例删除 TM1 Server 上杂项的 Description 属性。

### ChoreAttrInsert

`ChoreAttrInsert` 用于为 TM1® Server 上的杂项创建新属性。此函数可以创建字符串属性、数值属性或别名属性。

> 注意： 如果是更新现有杂项属性，必须首先使用函数 `ChoreAttrDelete` 删除现有属性。然后，可以通过 `ChoreAttrInsert` 使用所需的更改来重新创建该属性。

> 要点： 如果尝试在未先删除该属性的情况下更新现有属性，那么插入会失败，且不会返回警告或错误。现有属性保持不变；不会更新，也不会被覆盖。

语法：`ChoreAttrInsert( PrevAttrName, NewAttrName, AttrType);`

| 参数 | 描述 |
| ------- | ------- |
| PrevAttrName | 所创建属性的前置属性。如果无前置属性或者想要新属性成为杂项的第一个属性，请保留此参数为空。 |
| NewAttrName | 要删除的杂项属性的名称。 |
| AttrType | 属性的类型。AttrType 参数有三种可能的值： |
| | N - 创建数值属性。 |
| | S - 创建字符串属性。 |
| | A - 创建别名属性。 |

示例：`ChoreAttrInsert('Owner', 'Description', 'S');`

此示例创建杂项的 Description 字符串属性。此属性在 Owner 属性之后插入。

### ChoreAttrN

`ChoreAttrN` 用于返回指定杂项的数值属性。

语法：`ChoreAttrN(ChoreName, AttrName);`

| 参数 | 描述 |
| ------- | ------- |
| ChoreName | 有效的杂项名称。 |
| AttrName | 要检索其值的属性。此参数必须是杂项的有效属性。 |

示例：`ChoreAttrN('Import', 'Division_Code');`

在此示例中，函数返回 Import 杂项的 Division_Code 属性的数字值。

### ChoreAttrNL

`ChoreAttrNL` 用于返回指定杂项相对于给定语言环境的属性数字值。

语法：`ChoreAttrNL(ChoreName, AttrName, [LangLocaleCode]);`

| 参数 | 描述 |
| ------- | ------- |
| ChoreName | 有效的杂项名称。 |
| AttrName | 要检索其值的属性。此参数必须是杂项的有效属性。 |
| LangLocaleCode | 此可选参数指定要返回其值的语言环境代码。 |

示例：`ChoreAttrNL('Import', 'Division_Code', 'fr');`

在此示例中，函数针对“法语”语言环境返回 Import 杂项的 Division_Code 属性的数字值。

### ChoreAttrPutN

`ChoreAttrPutN` 用于向数值杂项属性赋值。

语法：`ChoreAttrPutN(NumericValue, ChoreName, AttrName, [LangLocaleCode] );`

| 参数 | 描述 |
| ------- | ------- |
| NumericValue | 要赋予杂项属性的值。 |
| ChoreName | 要为其赋予属性值的杂项。 |
| AttrName | 要为其赋值的属性。 |
| LangLocaleCode | 此可选参数指定应用 NumericValue 的语言环境代码。 |

示例：`ChoreAttrPutN(7161994, 'Import', 'Division_Code','fr');`

此示例针对“法语”语言环境代码，将值 7161994 赋予 Import 杂项的 Division_Code 属性。

### ChoreAttrPutS

`ChoreAttrPutS` 用于向字符串杂项属性赋值。

语法：`ChoreAttrPutS(String, ChoreName, AttrName, [LangLocaleCode] );`

| 参数 | 描述 |
| ------- | ------- |
| String | 要赋予杂项属性的字符串。 |
| ChoreName | 要为其赋予属性值的杂项。 |
| AttrName | 要为其赋值的属性。 |
| LangLocaleCode | 此可选参数指定应用 String 的语言环境代码。 |

示例：`ChoreAttrPutS('Ricci', 'Import', 'Owner', 'fr');`

此示例针对“法语”语言环境代码，将字符串值 Ricci 赋予 Import 杂项的 Owner 属性。

### ChoreAttrS

`ChoreAttrS` 用于返回指定杂项的字符串属性。

语法：`ChoreAttrS(ChoreName, AttrName);`

| 参数 | 描述 |
| ------- | ------- |
| ChoreName | 有效的杂项名称。 |
| AttrName | 要检索其值的属性。此参数必须是杂项的有效属性。 |

示例：`ChoreAttrS('Exchange_Rate_Updates', 'Owner');`

在此示例中，函数返回 Exchange_Rate_Updates 杂项的 Owner 属性的字符串值。

### ChoreAttrSL

`ChoreAttrSL` 返回指定杂项相对于给定语言环境的字符串属性值。

语法：`ChoreAttrSL(ChoreName, AttrName, [LangLocaleCode]);`

| 参数 | 描述 |
| ------- | ------- |
| ChoreName | 有效的杂项名称。 |
| AttrName | 要检索其值的属性。此参数必须是杂项的有效属性。 |
| LangLocaleCode | 此可选参数指定要返回其值的语言环境代码。 |

示例：`ChoreAttrSL('Depreciate_Inventory', 'Owner', 'fr');`

在此示例中，函数针对“法语”语言环境返回 Depreciate_Inventory 杂项的 Owner 属性的字符串值。

### CreateHierarchyByAttribute

`CreateHierarchyByAttribute` 从单个属性创建简单的 3 层层级。

新的层级包含单个高级别根元素、代表现有属性值的中等级别合并以及包含关联属性值的低级别维度叶。

> 注： 此函数会根据当前属性值集合创建层级，但系统不会在属性数据更改时使层级自动同步。建模员必须根据需要重新生成层级。

语法：`CreateHierarchyByAttribute(DimName, AttrName [, emptyParent [, rootName ] ] );`

| 参数 | 描述 |
| ------- | ------- |
| DimName | 包含属性的维度的名称。将创建与维度具有相同名称的层级。 |
| AttrName | 用于创建层级的属性的名称。 |
| emptyParent | 指定要创建的合并的名称，其会收集不具有属性值的维度叶。如果作为空字符串传递，那么该函数不会创建合并。 |
| rootName | 覆盖根元素名称，该名称缺省情况下根据属性而命名。 |

示例：`CreateHierarchyByAttribute ('Country', 'City');`

此示例根据 Country 维度中的 City 属性创建层级。

### CubeAttrDelete

`CubeAttrDelete` 删除 TM1® 数据库中的多维数据集属性。

语法：`CubeAttrDelete(AttrName);`

| 参数 | 描述 |
| ------- | ------- |
| AttrName | 想要删除的多维数据集属性的名称。 |

示例：`CubeAttrDelete('Description');`

此示例删除 TM1 Server 上多维数据集的 Description 属性。
