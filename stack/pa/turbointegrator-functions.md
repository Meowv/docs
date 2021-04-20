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
