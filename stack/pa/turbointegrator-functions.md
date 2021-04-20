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
