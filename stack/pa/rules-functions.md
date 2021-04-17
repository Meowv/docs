# Planning Analytics 规则函数

## TM1 规则中的算术运算符

在构造 TM1® 规则时，可以使用以下数学运算符。

| 运算符 | 含义 |
| ------- | ------- |
| `+`（加号） | 加法 |
| `-`（减号） | 减法 |
| `*`（星号） | 乘法 |
| `/`（正斜杠） | 使用此运算符除以零会返回一个未定义的值。 |
| `\`（反斜杠） | 使用此运算符除以零会返回零。 |
| `^`（脱字号/抑扬符） | 求幂 |

## TM1 规则中的比较运算符

在规则计算语句的公式部分使用以下比较运算符来比较值。

要比较两个字符串值，请在比较运算符前面插入 `@` 符号。例如，`IF('A' @= 'B',0,1)` 得到数字 1。

| 运算符 | 含义 |
| ------- | ------- |
| `>` | 大于 |
| `<` | 小于 |
| `>=` | 大于等于 |
| `<=` | 小于等于 |
| `=` | 等于 |
| `<>` | 不等于 |

## TM1 规则中的逻辑运算符

您可以使用逻辑运算符在规则计算语句中合并表达式。

| 运算符 | 含义 | 示例 |
| ------- | ------- | ------- |
| `&`（和号） | AND | `(Value1 > 5) & (Value1 < 10)`：如果值大于 5 且小于 10，那么返回 TRUE。 |
| `%`（百分号） | OR | 	`(Value1 > 10) % (Value1 < 5)`：如果值大于 10 或小于 5，那么返回 TRUE。 |
| `~`（波浪号） | NOT | `~(Value1 > 5)`：相当于 `(Value1 <= 5)` |

## 属性规则函数

### ATTRN

`ATTRN` 返回某一指定维度元素的数值属性。此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ATTRN(dimension, element, attribute)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| element | 维度的一个元素。 |
| attribute | 要检索其值的属性。此参数必须是元素的有效属性。 |

> 注： 在条件语句 (`IF`) 中使用此函数时，语句是包含条件的部分，而不是整个条件块。发生一个小错误后，继续执行下一个语句。TI 处理不了解一旦处理小错误，它就处于条件语句中，所以下一个语句就是下一行，而不是 `endif` 后的行。

要避免出现该情况，针对任何可能导致小错误的操作使用变量，然后使用条件语句中的变量。例如：

```c
V1 = CELLGETN('PNLCube', 'fred',
'argentina','Sales','Jan');
IF(V1 = 454);ASCIIOUTPUT
('bug.txt', 'if logic not working
 properly');
ENDIF;
```

示例：`ATTRN('Model', 'L Series 1.8L Sedan', 'Engine Size')`

在此示例中，函数返回型号维度中 L Series 1.8L Sedan 元素的 Engine Size 属性的数值。

### ATTRS

`ATTRS` 返回某一指定维度元素的字符串属性。此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ATTRS(dimension, element, attribute)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| element | 维度的一个元素。 |
| attribute | 要检索其值的属性。此参数必须是元素的有效属性。 |

示例：`ATTRS('plan_business_unit', '10100', 'Currency')`

在此示例中，函数返回 plan_business_unit 维度中 10100 元素的 Currency 属性的字符串值。

### CubeATTRN

`CubeATTRN` 返回某一指定多维数据集的数值属性。此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`CubeATTRN(CubeName, AttrName);`

| 参数 | 描述 |
| ------- | ------- |
| CubeName | 一个有效的多维数据集名称。 |
| AttrName | 要检索其值的属性。此参数必须是多维数据集的有效属性。 |

示例：`CubeATTRN('Product', 'Accounting_Code');`

在此示例中，函数返回 Product 多维数据集的 Accounting_Code 属性的数字值。

### CubeATTRS

`CubeATTRS` 返回某一指定多维数据集的字符串属性。此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`CubeATTRS(CubeName, AttrName);`

| 参数 | 描述 |
| ------- | ------- |
| CubeName | 一个有效的多维数据集名称。 |
| AttrName | 要检索其值的属性。此参数必须是多维数据集的有效属性。 |

示例：`CubeATTRS('Product', 'Owner');`

在此示例中，函数返回 Product 多维数据集的 Owner 属性的字符串值。

### DimensionATTRN

`DimensionATTRN` 返回某一指定维度的数值属性。此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`DimensionATTRN(DimName, AttrName);`

| 参数 | 描述 |
| ------- | ------- |
| DimName | 有效的维度名称。 |
| AttrName | 要检索其值的属性。此参数必须是维度的有效属性。 |

示例：`DimensionATTRN('Plan_Business_Unit', 'Accounting_Code');`

在此示例中，函数返回 Plan_Business_Unit 维度的 Accounting_Code 属性的数字值。

### DimensionATTRS

`DimensionATTRS` 返回某一指定维度的字符串属性。此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`DimensionATTRS(DimName, AttrName);`

| 参数 | 描述 |
| ------- | ------- |
| DimName | 有效的维度名称。 |
| AttrName | 要检索其值的属性。此参数必须是维度的有效属性。 |

示例：`DimensionATTRS('Plan_Business_Unit', 'Manager');`

在此示例中，函数返回 Plan_Business_Unit 维度的 Manager 属性的字符串值。

### ElementAttrN

`ElementAttrN` 返回维度的指定元素的数值属性。此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ElementAttrN(dimension, hierarchy, element, attribute)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element | 维度的一个元素。 |
| attribute | 要检索其值的属性。此参数必须是元素的有效属性。 |

> 注： 在条件语句 (`IF`) 中使用此函数时，语句是包含条件的部分，而不是整个条件块。发生一个小错误后，继续执行下一个语句。TI 处理不了解一旦处理小错误，它就处于条件语句中，所以下一个语句就是下一行，而不是 `endif` 后的行。

要避免出现该情况，针对任何可能导致小错误的操作使用变量，然后使用条件语句中的变量。例如：

```c
V1 = CELLGETN('PNLCube', 'fred',
'argentina','Sales','Jan');
IF(V1 = 454);ASCIIOUTPUT
('bug.txt', 'if logic not working
 properly');
ENDIF;
```

示例：`ElementAttrN('Model', 'Automobile', 'L Series 1.8L Sedan', 'Engine Size')`

在此示例中，函数返回 Model 维度的 Automobile 层级中 L Series 1.8L Sedan 元素的 Engine Size 属性的数字值。

### ElementAttrS

`ElementAttrS` 用于返回维度的指定元素的字符串属性。此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ElementAttrS(dimension, hierarchy, element, attribute)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element | 维度的一个元素。 |
| attribute | 要检索其值的属性。此参数必须是元素的有效属性。 |

示例：`ElementAttrS('plan_business_unit', 'expense', '10100', 'Currency')`

在此示例中，函数返回 plan_business_unit 维度的 expense 层级中 10100 元素的 Currency 属性的字符串值。

## 合并计算规则函数

### ConsolidatedAvg

`ConsolidatedAvg` 用于计算合并中的平均值并返回单一值。此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ConsolidatedAvg(flag-value, cube-name, element_1, element_2,… );`

- flag-value
    - `1` - 计算此值时使用合并加权（计算中包括零）。如果未开启此值，那么将使用合并元素的原始值。以下条件可能会影响计算中是否包括零：
        - 如果已指定零作为某些合并元素的加权，那么必须设置配置参数 [`ZeroWeightOptimization=F`](https://www.ibm.com/docs/zh/planning-analytics/2.0.0?topic=pitf-zeroweightoptimization)，才能在这些函数的计算中考虑这些元素。如果没有此配置参数，那么加权为零的元素将从合并列表中清除，并因而不会在发现最大值或最小值等内容时处理这些元素。
        - 如果希望零值单元格参与平均值计算，那么必须为多维数据集设置 [`UNDEFVALS`](https://www.ibm.com/docs/zh/planning-analytics/2.0.0?topic=cdrf-undefvals#tm1_ref_undefvals)，这样在将零分配给多维数据集的单元格时，值将像其他任何非零值一样存储在单元格中，这样就将参与平均值计算。
        - 如果多维数据集规则包含 [`SKIPCHECK`](https://www.ibm.com/docs/zh/planning-analytics/2.0.0?topic=mrf-skipcheck#tm1_ref_skipcheck)，那么即使 flag-value 设置为 1，也会忽略零。从规则中移除 SKIPCHECK 可在合并平均值中包括零。
    - `2` - 忽略零值。如果设置此值，那么计算中不会包括零值。
- cube-name 
    - 值所在的多维数据集的名称。
    - 如果函数作为多维数据集规则的一部分运行，而不是作为 `TurboIntegrator` 进程的一部分运行，那么可以将 cube-name 参数指定为空字符串，以表示当前多维数据集。这意味着您可编写类似以下内容的规则：`['Apr']=ConsolidatedAvg( 0, '', !actvsbud, '1 Quarter' );`
- element_1, element_2, … 
    - 维度元素名称，用于定义包含要检索的值的多维数据集的交集。
    - 参数 element_1 到 element_n 区分顺序。element_1 必须是多维数据集内第一个维度中的元素，element_2 必须是第二个维度中的元素，依此类推。这些参数也可以是维度元素的别名或 `TurboIntegrator` 变量的名称。

示例：在名为 Income Statement 的多维数据集内包含三个维度：Regions、Time 和 Income Statement，Income Statement 维度包含名为 Gross Sales（表示总体销售额）的元素。要计算 2010 年所有区域内的平均销售额，可编写：

`ConsolidatedAvg( 1,  'Income Statement', 'All Regions', '2010', 'Gross Sales' );`

### ConsolidateChildren

`ConsolidateChildren` 通过沿指定维度合计直接子项来强制计算合并值。在按照规则计算中间合并值，并且您要通过合计中间合并值而不是合计基础叶值来计算父合并值时，可以使用 `ConsolidateChildren`。此函数仅在 TM1® 规则中有效。

语法：`ConsolidateChildren(DimName1, DimName2, ...)`

| 参数 | 描述 |
| ------- | ------- |
| DimName1, DimName2, ... | 将沿其执行合并的维度的名称。此函数至少需要一个 DimName 参数，并且可以接受与为其编写规则的多维数据集中维度数量相同的 DimName 参数数量。 |

### ConsolidatedCount

`ConsolidatedCount` 计算合并中的值并返回单一值。此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ConsolidatedCount(flag-value, cube-name, element_1, element_2,… );`

- flag-value
    - `1` - 计算此值时使用合并加权。如果打开此选项，那么将使用合并元素的原始值。
    - `2` - 忽略零值。如果设置此选项，那么这些函数不会使用零值。
        > 注： 如果已指定零作为某些合并元素的加权，那么这些元素的配置参数必须设置为 `ZeroWeightOptimization=F` 才能包括到这些函数的计算中。如果没有此配置参数，那么加权为零的元素将从合并列表中清除，并且因而不会在发现事物线最大或最小值时进行处理。
- cube-name
    - 值所在的多维数据集的名称。
    - 如果函数作为多维数据集规则的一部分运行，而不是作为 `TurboIntegrator` 进程的一部分运行，那么可以将 cube-name 参数指定为空字符串，以表示当前多维数据集。这意味着您可编写类似以下内容的规则：`['Apr']=ConsolidatedCount( 1, '', !actvsbud, '1 Quarter' );`
- element_1, element_2, …
    - 维度元素名称，用于定义包含要检索值的多维数据集的交集。
    - 参数 element_1 到 element_n 区分顺序。element_1 必须是多维数据集中第一个维度中的元素，element_2 必须是第二个维度中的元素，依此类推。这些参数也可以是维度元素的别名或 `TurboIntegrator` 变量的名称。

### ConsolidatedCountUnique

`ConsolidatedCountUnique` 用于计算指定合并中实际存在数据点的唯一元素数目。将统计合并单元格的一个维度中的唯一元素数目。此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ConsolidatedCountUnique( 0, unique-along-dimension-name, cube-name,elem_1, elem_2, . . . );`

示例：在称为“损益表”的多维数据集中包含三个维度：区域、时间和损益表，损益表维度包含称为“总销售”（表示总体销售额）的元素。要计算 2010 年中有多少地区具有非零总销售，可编写：

`ConsolidatedCountUnique( 0, 'Regions', 'Income Statement', 'All Regions', '2010', 'Gross Sales' );`

### ConsolidatedMax

`ConsolidatedMax` 计算合并中的最大值并返回单一值。此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ConsolidatedMax(flag-value, cube-name, element_1, element_2,… );`

- flag-value
    - `1` - 计算此值时使用合并加权。如果打开此选项，那么将使用合并元素的原始值。
    - `2` - 忽略零值。如果设置此选项，那么这些函数不会使用零值。
        > 注： 如果已指定零作为某些合并元素的加权，那么这些元素的配置参数必须设置为 `ZeroWeightOptimization=F` 才能包括到这些函数的计算中。如果没有此配置参数，那么加权为零的元素将从合并列表中清除，并且因而不会在发现事物线最大或最小值时进行处理。
- cube-name
    - 值所在的多维数据集的名称。
    - 如果函数作为多维数据集规则的一部分运行，而不是作为 `TurboIntegrator` 进程的一部分运行，那么可以将 cube-name 参数指定为空字符串，以表示当前多维数据集。这意味着您可编写类似以下内容的规则：`['Apr']=ConsolidatedMax( 1, '', !actvsbud, '1 Quarter' );`
- element_1, element_2, …
    - 维度元素名称，用于定义包含要检索值的多维数据集的交集。
    - 参数 element_1 到 element_n 区分顺序。element_1 必须是多维数据集中第一个维度中的元素，element_2 必须是第二个维度中的元素，依此类推。这些参数也可以是维度元素的别名或 `TurboIntegrator` 变量的名称。

示例：考虑一个称为“损益表”的多维数据集，它具有三个维度：“区域”、“时间”和“损益表”。损益表维度包含称为“总销售”（表示总体销售额）的元素。要计算 2010 年所有地区内的平均销售，可使用：

`ConsolidatedMax( 1,  'Income Statement', 'All Regions', '2010', 'Gross Sales' );`

### ConsolidatedMin

`ConsolidatedMin` 计算合并中的最小值并返回单一值。此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ConsolidatedMin(flag-value, cube-name, element_1, element_2,… );`

- flag-value
    - `1` - 计算此值时使用合并加权。如果打开此选项，那么将使用合并元素的原始值。
    - `2` - 忽略零值。如果设置此选项，那么这些函数不会使用零值。
        > 注： 如果已指定零作为某些合并元素的加权，那么这些元素的配置参数必须设置为 `ZeroWeightOptimization=F` 才能包括到这些函数的计算中。如果没有此配置参数，那么加权为零的元素将从合并列表中清除，并且因而不会在发现事物线最大或最小值时进行处理。
- cube-name
    - 值所在的多维数据集的名称。
    - 如果函数作为多维数据集规则的一部分运行，而不是作为 `TurboIntegrator` 进程的一部分运行，那么可以将 cube-name 参数指定为空字符串，以表示当前多维数据集。这意味着您可编写类似以下内容的规则：`['Apr']=ConsolidatedMin( 1, '', !actvsbud, '1 Quarter' );`
- element_1, element_2, …
    - 维度元素名称，用于定义包含要检索值的多维数据集的交集。
    - 参数 element_1 到 element_n 区分顺序。element_1 必须是多维数据集中第一个维度中的元素，element_2 必须是第二个维度中的元素，依此类推。这些参数也可以是维度元素的别名或 `TurboIntegrator` 变量的名称。

## 多维数据集数据规则函数

### CellValueN

`CellValueN` 用于返回多维数据集内指定元素的数字值。这是 TM1® 规则函数，仅在 TM1 规则中有效。在 `TurboIntegrator` 进程中使用此函数会引起错误。

对于不在元素参数中的维度，将从规则目标（正在检索并触发规则求值的单元格）中检索坐标。此函数的行为类似于在规则右侧使用的多维数据集内引用表达式（例如，`[ 'Measures':'Count' ]`）。

元素参数可以按任意顺序指定，并且对于 `CellValueN`，可指定来自同一维度中（但位于该维度的不同层级中）的多个元素。由于元素列表无需按多维数据集维度顺序排列，因此必须通过维度限定所有元素参数。来自多层级维度的元素参数也必须通过层级限定。

语法：`CellValueN(cube, element1,..., elementN);`

| 参数 | 描述 |
| ------- | ------- |
| cube | 多维数据集的名称。 |
| elementN | 用于定义单元格的元素名称。必须至少指定一个元素。 |

示例：`CellValueN('ForecastCube', 'Products':'ProductsByChannel':'Channel2', 'Measures':'Count')`

此示例返回指定单元格的数字值。Products 维度具有多个层级，而 Measures 维度具有一个层级。

多维数据集内引用限于字面值参数，而 `CellValueN` 没有此限制。此行为类似于 `DB()` 规则函数。元素参数可使用字符串值表达式来指定。例如，可以将上面的 Products 元素参数指定为：

`'Products' : 'ProductsByChannel' : AttrS( … )`

与 `DB()` 和多维数据集内引用表达式不同，`CellValueN` 元素参数必须通过维度限定，或者通过维度和层级限定。

### CellValueS

`CellValueS` 用于返回多维数据集内指定元素的字符串值。这是 TM1® 规则函数，仅在 TM1 规则中有效。在 `TurboIntegrator` 进程中使用此函数会引起错误。

对于不在元素参数中的维度，将从规则目标（正在检索并触发规则求值的单元格）中检索坐标。此函数的行为类似于在规则右侧使用的多维数据集内引用表达式（例如，`[ 'Measures':'Count' ]`）。

元素参数可以按任意顺序指定，并且对于 `CellValueS`，可指定来自同一维度中（但位于该维度的不同层级中）的多个元素。由于元素列表无需按多维数据集维度顺序排列，因此必须通过维度限定所有元素参数。来自多层级维度的元素参数也必须通过层级限定。

语法：`CellValueS(cube, element1,..., elementN);`

| 参数 | 描述 |
| ------- | ------- |
| cube | 多维数据集的名称。 |
| elementN | 用于定义单元格的元素名称。必须至少指定一个元素。 |

示例：`CellValueS('ForecastCube', 'Products':'ProductsByChannel':'Channel2', 'Measures':'Location');`

此示例返回指定单元格的字符串值。Products 维度具有多个层级，而 Measures 维度具有一个层级。

多维数据集内引用限于字面值参数，而 `CellValueS` 没有此限制。此行为类似于 `DB()` 规则函数。元素参数可使用字符串值表达式来指定。例如，可以将上面的 Products 元素参数指定为：

`'Products' : 'ProductsByChannel' : AttrS( … )`

与 `DB()` 和多维数据集内引用表达式不同，`CellValueS` 元素参数必须通过维度限定，或者通过维度和层级限定。

### DB

`DB` 返回 TM1® 数据库中某个多维数据集内的值。用于数字表达式中时，`DB` 返回一个数值；用于字符串表达式中时，它返回一个字符串值。

`DB` 是 TM1 规则函数，仅在 TM1 规则中有效。在 `TurboIntegrator` 进程中使用此函数会引起错误。

语法：`DB(cube, e1, e2, [...e256])`

- cube
    - 要从中检索值的多维数据集的名称。
- e1,...en
    - 定义包含要检索值的交集的维度元素名称。
    - 参数 e1 到 en 区分顺序。e1 必须是多维数据集中第一个维度中的元素，e2 必须是第二个维度中的元素，依此类推。

示例：`DB('Budget', 'California', '15" Flat Panel Monitors', 'Net Sales', 'January')`

在此示例中，“Budget是多维数据集名称，函数会返回“California”、“15” Flat Panel Monitors”、“Net Sales和“January”的交集的值。

用于引用多层级维度时，必须指定特定层级。在此示例中，Category2 元素存在于 ProductsCube 维度的 ByCategory 层级中。

`DB('ProductsCube', 'ByCategory':'Category2',...)`

### ISLEAF

如果指定单元是叶单元（只由叶/简单元素标识），那么 `ISLEAF` 返回 1。如果指定单元格由任何合并元素标识，那么此函数返回 0。

此函数仅在 TM1® 规则中有效。

`ISLEAF` 函数不能用于 `TurboIntegrator` 进程。进程中出现此函数将会阻止进程进行编译。

语法：`ISLEAF`，无参数

示例：`[]=IF((ISLEAF=1),TrueStatement, FalseStatement);`

您可以在 IF 语句中使用 ISLEAF 以测试当前单元格是否为叶元。如果当前单元是叶元，它将执行 TrueStatement；否则，它将执行 FalseStatement。

### ISUNDEFINEDCELLVALUE

`ISUNDEFINEDCELLVALUE` 将传递的值与缺省数字多维数据集值（受该多维数据集的规则中是否存在 `UNDEFVALS` 声明影响）进行比较。如果传递的值等于多维数据集的缺省值，那么该函数将返回1 ；否则，该函数将返回0。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ISUNDEFINEDCELLVALUE(TestValue, <Cube>)`

| 参数 | 描述 |
| ------- | ------- |
| TestValue | 要针对多维数据集的缺省值进行比较的数字值。 |
| Cube | 用于指定应该比较其缺省值的多维数据集的可选字符串参数。 |

当 `ISUNDEFINEDCELLVALUE` 用于规则时，将假定多维数据集为主体多维数据集，除非另有说明。

当用于 TI 时，应该指定一个多维数据集。

如果该多维数据集在 TI 中被省略，或者在指定时无效，那么 0 将用于比较。

示例：当 TestValue 是特殊的未定义值并且用于多维数据集内声明了 `UNDEFVALS` 的规则时，`ISUNDEFINEDCELLVALUE(TestValue)` 将返回 1。

### UNDEF

`UNDEF` 返回未定义的值。此函数可用于防止数据存储在基于逻辑测试的多维数据集中。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`UNDEF`，无参数

### UNDEFINEDCELLVALUE

`UNDEFINEDCELLVALUE` 将返回缺省数字多维数据集值，该值受该多维数据集的规则中是否存在 `UNDEFVALS` 声明影响。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`UNDEFINEDCELLVALUE(<Cube>)`

| 参数 | 描述 |
| ------- | ------- |
| Cube | 用于指定应该返回其缺省值的多维数据集的可选字符串参数。 |

当 `UNDEFINEDCELLVALUE` 用于规则时，将假定多维数据集为主体多维数据集，除非另有说明。

当用于 TI 进程时，应该指定一个多维数据集。

如果该多维数据集在 TI 进程中被省略，或者在指定时无效，那么将返回 0。

当 `UNDEFINEDCELLVALUE` 用于没有 `UNDEFVALS` 声明的多维数据集的规则时，或者当用于 TI 进程时，将返回 0。

当 `UNDEFINEDCELLVALUE` 用于有 `UNDEFVALS` 声明的多维数据集的规则时，将返回特殊的未定义值。

`UNDEFINEDCELLVALUE('ExampleCube')` 将返回缺省值 'ExampleCube'，或者如果 'ExampleCube' 不存在，将返回 0。

### UNDEFVALS

在多维数据集的规则中指定 `UNDEFVALS` 会将多维数据集的缺省值由零更改为未定义的特殊值。与其他规则函数一样，`UNDEFVALS` 也仅应用于与显示该函数的规则关联的多维数据集。

这是 TM1® 规则函数，仅在 TM1 规则中有效。

语法：`UNDEFVALS`，无参数

使用 `UNDEFVALS` 将对数据在多维数据集中的存储方式以及检索方式产生影响。

- 数据存储
    - 对于未在规则中指定 `UNDEFVALS` 的多维数据集而言，缺省值为零。如果尝试在此多维数据集的单元格中存储零，那么该存储请求将被忽略，因为这是多余的缺省值存储尝试，从而不必要地耗用内存空间。与此类似，如果单元格已经包含值，但又删除了该值，那么该单元格中不会存储任何内容。
    - 但是，如果此多维数据集在规则中定义了 `UNDEFVALS`，那么缺省值将是未定义的特殊值。现在，在此多维数据集的单元格中存储零时，将实际地存储该值，就像存储任何其他非零值一样。
    - 未定义的特殊值只是运行时值，是从单元格值的请求返回的。此类值绝不会存储在内存的实际单元格中，也绝不会写入磁盘。将 `UNDEFVALS` 包含在多维数据集的规则中，不会对内存使用量或磁盘存储空间产生影响，但实际将零作为值包含在内的单元格除外。`UNDEFVALS` 包含在多维数据集的规则中时，该多维数据集中的零值将耗用内存空间，并且将写入磁盘，就像其他任何数据值一样。如果未指定 `UNDEFVALS`，那么零值单元格不会存储在内存中，也不会写入磁盘。
- 数据检索
    - 对于未在规则中指定 `UNDEFVALS` 的多维数据集而言，缺省值为零。检索单元格时，如果在多维数据集中当前没有为该值存储任何值，那么将返回零（作为缺省值）。这意味着应用程序无法判断单元格实际是否存在并且将零包含为单格值，也无法判断单元格是否不存在（因为可能存在包含稀疏数据的情况）。
    - 但是，如果此多维数据集在规则中定义了 `UNDEFVALS`，那么缺省值将是未定义的特殊值。在这种情况下，检索不存在的单元格时，检索到的值将是这个未定义的特殊值。这可用于区分不存在的单元格（返回未定义的特殊值）与存在但值为零的单元格（返回零）。编写用于针对 TM1 运行的任何客户端可能会遇到已设置 `UNDEFVALS` 的多维数据集，因此必须预编译为处理单元格值，即这个未定义的特殊值，而不是处理零。
        > 注： 这个未定义的特殊值并不是 `TurboIntegrator` 函数 UNDEF() 所返回的值。UNDEF() 返回的值是一个未定义的值，用于尝试除零或者计算非法数字的对数之类的情况。

在 `TurboIntegrator` 中，对于正常的算术运算（`+、-、*、/、\、^`）和正常的算术比较（`<、>、>=、<=、=、<>`），未定义的特殊值均被视为零。为此，以下代码不起作用：

```c
NoCellVal = UndefinedCellValue( 'cube-name' );
If ( vv = NoCellVal );
```

在此比较中，NoCellVal（即 `UNDEFVALS` 多维数据集的特殊的未定义值）被视为零。这意味着比较实际上是 `If ( vv = 0)`.

在 `TurboIntegrator` 中，必须使用 `IsUndefinedCellValue` 来测试单元格值是否为未定义的特殊值。例如：

```c
vv = CellGetN( 'cube-name', elements-list);
if ( IsUndefinedCellValue( vv, 'cube-name' ) = 1 ); 
#the cells does not exist 
cell_does_not_exist = 1;
else; 
#cell exists 
cell_does_not_exist = 0;
Endif;
```

## 日期和时间规则函数

### DATE

`DATE` 将以 yy-mm-dd 或 yyyy-mm-dd 格式返回某一给定序列号的日期字符串。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`DATE(SerialNumber, ReturnFourDigitYear)`

| 参数 | 描述 |
| ------- | ------- |
| SerialNumber | 一个以序列格式表示的日期。 |
| ReturnFourDigitYear | 一个可选的布尔参数，该参数确定 `DATE` 函数是使用两位年份表示法还是使用四位年份表示法返回字符串。 |

- 如果 ReturnFourDigitYear 为 true，那么此函数使用四位年份表示法返回介于 1960 年 1 月 1 日至 9999 年 12 月 31 日范围内的日期。序列日期 0 对应于 1960 年 1 月 1 日，序列日期 2936549 对应于 9999 年 12 月 31 日。
- 如果 ReturnFourDigitYear 为 false，或者 `DATE` 函数中忽略此可选参数，那么此函数使用两位年份表示法返回介于 1960 年 1 月 1 日至 2059 年 12 月 31 日范围内的日期。序列日期 0 对应于 1960 年 1 月 1 日，序列日期 36524 对应于 2059 年 12 月 31 日。
- 如果 ReturnFourDigitYear 为 false 或忽略此参数，并且您指定了一个大于 36524 的序列日期，那么此函数使用的序列日期由公式 n - 36525 确定。例如，如果指定序列日期 36530，那么 36530 - 36525 = 5。在这种情况下，`DATE` 将使用 5 作为序列日期并返回 1960 年 1 月 6 日这一日期。

示例：

`DATE(13947)` 将返回 98-03-09。

`DATE(13947, 1)` 将返回 1998-03-09。


### DATES

`DATES` 以“yy-mm-dd”或“yyyy-mm-dd”格式返回与给定的年月日相对应的日期字符串。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`DATES(year, month, day)`

| 参数 | 描述 |
| ------- | ------- |
| year | 年份，以 yy 或 yyyy 格式表示。 |
| month | 月份，以 mm 格式表示。 |
| day | 日期，以 dd 格式表示。 |

示例：

`DATES(98, 2, 10)` 返回“10.02.98”。

`DATES(1998, 2, 10)` 返回“1998-02-10”。

### DAY

`DAY` 以给定日期字符串格式返回日的数字值。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`DAY(DateString)`

| 参数 | 描述 |
| ------- | ------- |
| DateString | 日期字符串，采用 YY-MM-DD 或 YYYY-MM-DD 格式。 |

示例：`DAY('02-05-25')` 返回 25。

### DAYNO

`DAYNO` 将返回与给定日期字符串相对应的序列日期数字。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

> 注： `DAYNO` 能够为起始于 1960 年 1 月 1 日（日期字符串 1960-01-01 或 60-01-01）的日期字符串返回序列日期。对于 2059 年 12 月 31 日以后的日期，日期字符串中的年份应使用四位数表示。例如，2061 年 1 月 5 日的日期字符串应为 2061-01-05。

语法：`DAYNO('DateString')`

| 参数 | 描述 |
| ------- | ------- |
| DateString | 日期字符串，采用 YY-MM-DD 或 YYYY-MM-DD 格式。 |

示例：`DAYNO('98-03-09')` 返回 13947。

### MONTH

`MONTH` 以给定日期字符串格式返回月份的数字值。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`MONTH(date)`

| 参数 | 描述 |
| ------- | ------- |
| date | 日期字符串，采用 YY-MM-DD 或 YYYY-MM-DD 格式。 |

示例：`MONTH('02-05-25')` 返回 5。

### NOW

`NOW` 以序列号格式返回当前日期/时间值。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`NOW`，无参数

### TIME

`TIME` 以 HH:MM 格式返回字符串，表示 TM1® Server 上的系统时间。

此函数在 TM1 规则和 `TurboIntegrator` 进程中都有效。

语法：`TIME`，无参数

示例：

如果给定一个系统时间 9:33 AM，那么 `TIME` 将返回字符串“09:33”。

如果给定一个系统时间 9:33 PM，那么 `TIME` 将返回字符串“21:33”。

### TIMST

`TIMST` 返回格式化的日期/时间字符串。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`TIMST(datetime, format, ExtendedYears)`

| 参数 | 修饰符/描述 |
| ------- | ------- |
| datetime | 一个日期/时间序列号。<br>数字的整数部分指定日期，小数部分指定一天中的时间。日数字 0 对应于“60-01-01”。负数对应于以前的年份。21 世纪直到 2059 年之间的年份使用 00 至 59 表示。采用一天 24 小时、一小时 60 分钟、一分钟 60 秒钟制。 |
| format | 设置函数结果的字符串。`format` 参数中的所有字符都将显示在结果中，但以下字符除外，它们返回日期/时间组件的值： |
| | `\y` - 年份的最后两位数字（97、98 等） |
| | `\Y` - 年份的四位数字（1997、1998 等） |
| | `\m` - 月份的两位数字（01 至 12） |
| | `\M` - 月份的缩写（JAN、FEB 等） |
| | `\d` - 日的两位数字（01 至 31） |
| | `\D` - 日的数字（1 至 31） |
| | `\h` - 用军用时间表示的小时（00 至 23） |
| | `\H` - 标准小时（1 至 12） |
| | `\i` - 分钟（00 至 59） |
| | `\s` - 秒（00 至 59） |
| | `\p` - 上午或下午 |
| ExtendedYears | 此可选布尔参数指定函数返回的日期是介于 1960 和 2059 之间还是介于 1960 和 9999 之间。<br>如果 ExtendedYears 为 true，那么此函数返回介于 1960 年 1 月 1 日至 9999 年 12 月 31 日范围内的日期。序列日期 0 对应于 1960 年 1 月 1 日，序列日期 2936549 对应于 9999 年 12 月 31 日。<br>如果 ExtendedYears 为 false，或者 TIMST 函数中忽略此可选参数，那么此函数返回介于 1960 年 1 月 1 日至 2059 年 12 月 31 日范围内的日期。序列日期 0 对应于 1960 年 1 月 1 日，序列日期 36524 对应于 2059 年 12 月 31 日。<br> 如果 ExtendedYears 为 false 或忽略此参数，并且您指定了一个大于 36524 的序列日期，那么此函数使用的序列日期由公式 n - 36525 确定。例如，如果指定序列日期 36530，那么 36530 - 36525 = 5。在这种情况下，TIMST 将使用 5 作为序列日期并返回 1960 年 1 月 6 日这一日期。|

示例：

`TIMST(366.0000, '\M \D, \Y')` 返回“JAN 1, 1961”。

`TIMST(366.5000, '\H\p \imin\ssec')` 返回“12p.m. 00min00sec”。

`TIMST(366.1000, 'On \M \D, \Y at \H\p \imin\ssec')` 返回“On JAN 1, 1961 at 2a.m. 24min00sec”。

`TIMST(11111.1100, 'On \M \D, \Y at \H\p \imin\ssec')` 返回 'On JUN 3,1990 at 2a.m. 38min24sec'.

### TIMVL

`TIMVL` 返回日期/时间值的组件（年份、月份等）数字值。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`TIMVL(datetime, type, ExtendedYears)`

| 参数 | 修饰符/描述 |
| ------- | ------- |
| datetime | 日期和时间序列号。<br>数字的整数部分指定日期，小数部分指定一天中的时间。日数字 0 对应于'60-01-01'。负数对应于以前的年份。21 世纪直到 2059 年之间的年份使用 00 至 59 表示。采用一天 24 小时、一小时 60 分钟、一分钟 60 秒钟制。 |
| type | 字符，指定要提取的组件的类型。下面是有效的类型参数： |
| | `Y` - 年份值（1997、1998 等） |
| | `M` - 月份值（1 至 12） |
| | `D` - 日值（1 至 31） |
| | `H` - 小时值（0 至 23） |
| | `I` - 分钟值（00 至 59） |
| | `S` - 秒值（00 至 59） |
| ExtendedYears | 此可选布尔参数指定函数返回的日期是介于 1960 和 2059 之间还是介于 1960 和 9999 之间。|

示例：

`TIMVL(11111.1100, 'Y')` 返回 1990。

`TIMVL(11111.1100, 'H')` 返回 2。

### TODAY

`TODAY` 以 yy-mm-dd 格式返回当前日期。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`TODAY(<ReturnFourDigitYear>)`

| 参数 | 描述 |
| ------- | ------- |
| ReturnFourDigitYear | 一个可选的布尔参数，该参数确定 `TODAY` 函数是使用两位年份表示法还是使用四位年份表示法返回一个字符串。 |

示例：

`P1=TODAY(1)` 以 YYYY-MM-DD 格式返回数据字符串，例如 2009-06-05。

`P1=TODAY(0)` 以 YY-MM-DD 格式返回数据字符串，例如 09-06-05。

### YEAR

`YEAR` 以给定日期字符串格式返回年份的数字值。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`YEAR(date)`

| 参数 | 描述 |
| ------- | ------- |
| date | 日期字符串，采用 YY-MM-DD 格式。 |

示例：`YEAR('02-05-25')` 返回 2。

## 维度信息规则函数

### DIMIX

`DIMIX` 返回某一元素在维度中的索引号。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`DIMIX(server_name:dimension, element)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 由服务器名称限定的有效维度名称。 |
| element | 维度中某一元素的名称。如果元素不是指定维度的成员，那么此函数返回 0。 |

示例：`DIMIX('planning_sample:Region','Brazil')`

Brazil 在区域维度中的索引值为 3。此示例返回 3。

### DIMNM

`DIMNM` 将返回对应于 index 参数的维度的元素。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`DIMNM(server_name:dimension, index)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 由服务器名称限定的有效维度名称。 |
| index | 一个小于或等于维度中元素数的值。如果此参数小于 1 或大于维度中的元素数目，那么此函数返回 0。 |

示例：`DIMNM(planning_sample:'Region',2)`

此示例返回“比利时”，它是区域维度中索引值为 2 的元素。

### DIMSIZ

`DIMSIZ` 返回指定维度中的元素数。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`DIMSIZ(dimension)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。某些安装可能需要使用服务器名称对维度名称进行限定，如 server_name:dimension 所示。 |

示例：`DIMSIZ('Accounts')`

如果维度 Accounts 包含 19 个元素，那么此示例返回值 19。

### DNEXT

`DNEXT` 返回被指定为函数参数的元素之后的元素名称。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`DNEXT(dimension, element)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| element | 维度中某一元素的名称。此参数也可以是维度元素的别名。 |

示例：`DNEXT("Location","Oregon")`

如果 Location 维度包含已排序的元素 California、Oregon 和 Washington，那么此示例返回 Washington。

### DNLEV

`DNLEV` 返回维度中的级别数。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`DNLEV(dimension)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |

示例：`DNLEV('Region')`

在区域维度中，各个国家/地区（级别 0）构成区域（级别 1）。然后地区构成高级地区（级别 2），后者又构成全世界（级别 3）。在区域维度中有四个级别，因此此示例返回值 4。

### DTYPE

`DTYPE` 将返回有关指定元素的元素类型的信息。如果元素是数值元素，那么 `DTYPE` 返回 N；如果元素是字符串元素，那么返回 S；如果元素是合并元素，那么返回 C。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`DTYPE(dimension, element)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| element | 维度中某一元素的名称。 |

示例：`DTYPE('Region','Europe')`

由于元素欧洲是区域维度的合并元素，因此此示例返回 C。

### TABDIM

`TABDIM` 返回对应于 index 参数的维度名称。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`TABDIM(cube, index)`

| 参数 | 描述 |
| ------- | ------- |
| cube | 一个有效的多维数据集名称。 |
| index | 一个小于或等于多维数据集中维度总数的正值。 |

示例：`TABDIM('SalesCube',3)`

多维数据集 SalesCube 包含五个维度：帐户 1、实际与预算、型号、月份和区域。此示例返回 SalesCube 的第三个维度型号。

## 元素信息规则函数

### ELCOMP

`ELCOMP` 返回指定维度中合并元素的子项的名称。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ELCOMP(dimension, element, position)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| element | 维度中合并元素的名称。 |
| position | 一个小于或等于指定元素中子项总数的正值。 |

示例：`ELCOMP('Region','Central Europe',2)`

在维度区域中，合并元素中欧是子项法国和德国的合并。德国位于此合并中的第二个位置。因此，此示例返回德国。

### ELCOMPN

`ELCOMPN` 将返回指定元素中的组件数。如果 element 参数不是合并元素，那么函数返回 0。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ELCOMPN(dimension, element)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| element | 维度中合并元素的名称。 |

示例：`ELCOMPN('Region','Scandinavia')`

在 Region 维度中，元素 Scandanavia 是三个元素的合并。此示例返回 3。

### ElementComponent

`ElementComponent` 用于返回指定维度中合并元素的子项的名称。如果 element 参数不是合并元素，那么函数返回 0。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementComponent(dimension, hierarchy, element, position)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element | 维度中合并元素的名称。 |
| position | 一个小于或等于指定元素中子项总数的正值。 |

示例：`ElementComponent('Region', 'Europe', 'Central Europe', 2)`

在维度区域中，合并元素中欧是子项法国和德国的合并。德国位于此合并中的第二个位置。因此，此示例返回德国。

### ElementComponentCount

`ElementComponentCount` 用于返回指定元素中的组件数。如果 element 参数不是合并元素，那么函数返回 0。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementComponentCount(dimension, hierarchy, element)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element | 维度中合并元素的名称。 |

示例：`ElementComponentCount('Region', '', 'Scandinavia')`

在 Region 维度中，元素 Scandanavia 是三个元素的合并。此示例返回 3。

### ElementCount

`ElementCount` 用于返回指定维度中的元素数。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementCount(dimension, hierarchy)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |

示例：`ElementCount('Accounts', 'Receivables')`

如果 Accounts 维度中的 Receivables 层级包含 19 个元素，那么此示例返回值 19。

### ElementFirst

`ElementFirst` 用于返回指定维度的第一个元素。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementFirst(server_name:dimension, hierarchy)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |

示例：`ElementFirst("planning_sample:Location", "North America")`

如果 Location 维度的 North America 层级包含已排序的元素 California、Oregon 和 Washington，那么此示例返回 California。

### ElementIndex

`ElementIndex` 返回元素在维度中的索引号。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementIndex(server_name:dimension, hierarchy, element)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 由服务器名称限定的有效维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element | 维度中某一元素的名称。如果元素不是指定维度的成员，那么此函数返回 0。 |

示例：`ElementIndex('planning_sample:Region', 'South America', 'Brazil')`

Brazil 在区域维度中的索引值为 3。此示例返回 3。

### ElementIsAncestor

`ElementIsAncestor` 用于确定指定维度中 element1 是否为 element2 的祖代。如果 element1 是 element2 的祖代，那么此函数返回 1；否则，此函数返回 0。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementIsAncestor(dimension, hierarchy, element1, element2)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element1 | 维度中某一元素的名称。 |
| element2 | 维度中某一元素的名称。 |

示例：`ElementIsAncestor('Region', 'Western', 'Europe', 'Germany')`

在 Region 维度的 Western 层级中，元素 Europe 是 Germany 的祖代。此示例将返回 1。

### ElementIsComponent

`ElementIsComponent` 用于确定指定维度中 element1 是否为 element2 的子项。如果 element1 是 element2 的子项，那么此函数返回 1；否则，此函数返回 0。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementIsComponent(dimension, hierarchy, element1, element2)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element1 | 维度中某一元素的名称。 |
| element2 | 维度中某一元素的名称。 |

示例：`ElementIsComponent('Region', 'Countries', 'Germany', 'Central Europe')`

在维度区域中，元素中欧是德国和法国两个元素的合并。此示例将返回 1。

> 注： 仅对于直接子项，此函数才会返回 1。在上面的示例中，德国是中欧的子项。而且中欧是欧洲的子项。

但是，由于此函数仅对直接子项返回 1，因此下面的示例返回 0：

`ElementIsComponent('Region', 'Countries'', 'Germany', 'Europe')`

### ElementIsParent

`ElementIsParent` 用于确定指定维度中 element1 是否为 element2 的父项。如果 element1 是 element2 的父项，那么此函数返回 1；否则，此函数返回 0。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementIsParent(dimension, hierarchy, element1, element2)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element1 | 维度中某一元素的名称。 |
| element2 | 维度中某一元素的名称。 |

示例：`ElementIsParent('Region', 'Countries', 'Central Europe', 'Germany')`

在维度区域中，合并元素中欧是德国和法国二者的父项。因此，此示例返回 1。

> 注： 仅对于直接父项，此函数才会返回 1。在上面的示例中，欧洲是中欧的父项。而且中欧是德国的父项。

但是，由于欧洲不是德国的直接父项，因此下面的示例返回 0：

`ElementIsParent('Region', 'Countries', 'Europe', 'Germany')`

### ElementLevel

`ElementLevel` 用于返回元素在维度中的级别。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementLevel(dimension, hierarchy, element)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element | 维度中某一元素的名称。 |

示例：`ElementLevel('Region','Countries', 'Europe')`

在区域维度中，各个国家/地区（级别 0）构成区域（级别 1）。然后地区构成高级地区（级别 2），后者又构成全世界（级别 3）。此示例返回 2，因为欧洲是级别 2 元素。

### ElementName

`ElementName` 用于返回维度中对应于 index 参数的元素。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementName(server_name:dimension, hierarchy, index)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 由服务器名称限定的有效维度名称。 |
| hierarchy | 维度中层级的名称。 |
| index | 一个小于或等于维度中元素数的值。如果此参数小于 1 或大于维度中的元素数目，那么此函数返回 0。 |

示例：`ElementName(planning_sample:'Region', 'Countries', 2)`

此示例返回“Belgium”，它是 Region 维度的 Countries 层级中索引值为 2 的元素。

### ElementNext

`ElementNext` 用于返回被指定为函数参数的元素之后的元素名称。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementNext(dimension, hierarchy, element)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element | 维度中某一元素的名称。此参数也可以是维度元素的别名。 |

示例：`ElementNext("Location","Cities", "Oregon")`

如果 Location 维度包含已排序的元素 California、Oregon 和 Washington，那么此示例返回 Washington。

### ElementParent

`ElementParent` 用于返回指定维度中元素的父项。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementParent(dimension, hierarchy, element, index)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element | 维度中某一元素的名称。 |
| index | 一个小于或等于使用 element 参数作为子项的合并元素（父项）总数的正值。 |

示例：`ElementParent('Model', 'Automobile', 'Wagon 4WD', 2)`

在维度型号中，元素 Wagon 4WD 是 Total Wagons 和 Total 4WD 二者的子项。因此，Total Wagons 和 Total 4WD 二者都是 Wagon 4WD 的父项。在型号维度的结构中，先定义了 Total Wagons，然后定义了 Total 4WD。此示例返回 Total 4WD，因为它是型号维度中 Wagon 4WD 的父项的第二个实例。

### ElementParentCount

`ElementParentCount` 用于返回指定维度中元素的父项数。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementParentCount(dimension, hierarchy, element)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element | 维度中某一元素的名称。 |

示例：`ElementParentCount('Model', 'Automobile', 'Wagon 4WD')`

在型号维度中，元素 Wagon 4WD 是 Total Wagons 和 Total 4WD 二者的子项。因此，Total Wagons 和 Total 4WD 二者都是 Wagon 4WD 的父项。函数返回 2。

### ElementType

`ElementType` 用于返回有关指定元素的元素类型的信息。如果元素是数值元素，那么 `ElementType` 返回 N；如果元素是字符串元素，那么返回 S；如果元素是合并元素，那么返回 C。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementType(dimension, hierarchy, element)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element | 维度中某一元素的名称。 |

示例：`ElementType('Region', 'Countries', 'Europe')`

由于元素欧洲是区域维度的合并元素，因此此示例返回 C。

### ElementWeight

`ElementWeight` 用于返回合并元素中子项的权重。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ElementWeight(dimension, hierarchy, element1, element2)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |
| element1 | 维度中合并元素的名称。 |
| element2 | 合并元素子项的名称。 |

示例：`ElementWeight('Account1', 'SubAccount1', 'Gross margin', 'Variable Costs')`

元素“Variable Costs”是“Gross margin”的子项，其权重为 -1。以下示例将返回 -1。

### ELISANC

`ELISANC` 用于确定指定维度中 element1 是否是 element2 的祖代。如果 element1 是 element2 的祖代，那么此函数返回 1；否则，此函数返回 0。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ELISANC(dimension, element1, element2)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| element1 | 维度中某一元素的名称。 |
| element2 | 维度中某一元素的名称。 |

示例：`ELISANC('Region', 'Europe', 'Germany')`

在维度区域中，元素欧洲是德国的祖代。此示例将返回 1。

### ELISCOMP

`ELISCOMP` 确定指定维度中 element1 是否是 element2 的子项。如果 element1 是 element2 的子项，那么此函数返回 1；否则，此函数返回 0。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ELISCOMP(dimension, element1, element2)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| element1 | 维度中某一元素的名称。 |
| element2 | 维度中某一元素的名称。 |

在维度区域中，元素中欧是德国和法国两个元素的合并。以下示例将返回 1。

示例：`ELISCOMP('Region','Germany','Central Europe')`

>  仅对于直接子项，此函数才会返回 1。在此示例中，德国是中欧的子项。而且中欧是欧洲的子项。

但是，由于此函数仅对直接子项返回 1，因此下面的示例返回 0：

`ELISCOMP('Region','Germany','Europe')`

### ELISPAR

`ELISPAR` 确定指定维度中 element1 是否是 element2 的父项。如果 element1 是 element2 的父项，那么此函数返回 1；否则，此函数返回 0。

语法：`ELISPAR(dimension, element1, element2)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| element1 | 维度中某一元素的名称。 |
| element2 | 维度中某一元素的名称。 |

在维度区域中，合并元素中欧是德国和法国二者的父项。因此，以下示例返回 1。

示例：`ELISPAR('Region','Central Europe','Germany')`

> 注： 仅对于直接父项，此函数才会返回 1。在此示例中，欧洲是中欧的父项。而且中欧是德国的父项。

但是，由于欧洲不是德国的直接父项，因此下面的示例返回 0：

`ELISPAR('Region','Europe','Germany')`

### ELLEV

`ELLEV` 返回元素在维度中的级别。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ELLEV(dimension, element)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| element | 维度中某一元素的名称。 |

示例：`ELLEV('Region','Europe')`

在区域维度中，各个国家/地区（级别 0）构成区域（级别 1）。然后地区构成高级地区（级别 2），后者又构成全世界（级别 3）。此示例返回 2，因为欧洲是级别 2 元素。

### RLPAR

`ELPAR` 返回指定维度中元素的父项。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ELPAR(dimension, element, index)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| element | 维度中某一元素的名称。 |
| index | 一个小于或等于使用 element 参数作为子项的合并元素（父项）总数的正值。 |

示例：`ELPAR('Model','Wagon 4WD',2)`

在维度型号中，元素 Wagon 4WD 是 Total Wagons 和 Total 4WD 二者的子项。因此，Total Wagons 和 Total 4WD 二者都是 Wagon 4WD 的父项。在型号维度的结构中，先定义了 Total Wagons，然后定义了 Total 4WD。此示例返回 Total 4WD，因为它是型号维度中 Wagon 4WD 的父项的第二个实例。

### ELPARN

`ELPARN` 返回指定的维度中元素的父项数。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ELPARN(dimension, element)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| element | 维度中某一元素的名称。 |

示例：`ELPARN('Model','Wagon 4WD')`

在型号维度中，元素 Wagon 4WD 是 Total Wagons 和 Total 4WD 二者的子项。因此，Total Wagons 和 Total 4WD 二者都是 Wagon 4WD 的父项。函数返回 2。

### ELWEIGHT

`ELWEIGHT` 返回合并元素中子项的权重。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`ELWEIGHT(dimension, element1, element2)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| element1 | 维度中合并元素的名称。 |
| element2 | 合并元素子项的名称。 |

示例：`ELWEIGHT('Account1','Gross margin','Variable Costs')`

元素“Variable Costs”是“Gross margin”的子项，其权重为 -1。返回 -1。

### LevelCount

`LevelCount` 用于返回维度中的级别数。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中均有效。

语法：`LevelCount(dimension, hierarchy)`

| 参数 | 描述 |
| ------- | ------- |
| dimension | 有效的维度名称。 |
| hierarchy | 维度中层级的名称。 |

示例：`LevelCount('Region', 'Countries')`

在区域维度中，各个国家/地区（级别 0）构成区域（级别 1）。然后地区构成高级地区（级别 2），后者又构成全世界（级别 3）。在区域维度中有四个级别，因此此示例返回值 4。

## 财务规则函数

### FV

`FV` 将返回最后一次付款时的年金值。年金是按相等的时间间隔支付的一系列款项。假定在每个期间末支付各个款项。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`FV(payment, interest, periods)`

| 参数 | 描述 |
| ------- | ------- |
| payment | 每个期间支付的付款额。 |
| interest | 每个期间支付的利率。 |
| periods | 年金中的期间数。 |

示例：`FV(1000, .14, 5)`

此示例返回 5 年末的年金值（每年支付 1,000 美元，利率为 14%）。

### PAYMT

`PAYMT` 根据给定的初始值或本金、利率和期间数，返回年金的付款额。年金是按相等的时间间隔支付的一系列款项。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`PAYMT(principal, interest, periods)`

| 参数 | 描述 |
| ------- | ------- |
| payment | 一系列未来支付额折现的现值或总额。 |
| interest | 每个期间支付的利率。 |
| periods | 年金中的期间数。假定在每个期间末支付各个款项。 |

示例：`PAYMT(100000, .14, 5)`

此示例返回按年支付的 5 年年金的付款额（本金为 100,000 美元，利率为 14%）。

### PV

`PV` 返回年金的初始值或本金值。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`PV(payment, interest, periods)`

| 参数 | 描述 |
| ------- | ------- |
| payment | 支付的付款额。 |
| interest | 每个期间支付的利率。 |
| periods | 年金中的期间数。假定在每个期间末支付各个款项。 |

示例：`PV(1000, .14, 5)`

此示例返回利率为 14% 时每年支付 1,000 美元的 5 年年金的本金值。

## 层级规则函数

### Hierarchy

如果提供的维度中只包含一个层级，那么 `Hierarchy` 将返回该层级的名称。否则，此属性将返回空字符串。`Hierarchy` 仅在 TM1® 规则中有效。随着在 TM1 中引入了对多个层级的支持，需要在使用多个层级时，识别哪些层级处于上下文中。

`Hierarchy` 不能用于 `TurboIntegrator` 进程。进程中出现此函数将会阻止进程进行编译。

语法：`Hierarchy (DimName);`

| 参数 | 描述 |
| ------- | ------- |
| DimName | 有效的维度名称。 |

示例：`Hierarchy ('Quarter');`

此示例返回“Quarter”，这是 Quarter 维度中的唯一层级。

### HierarchyCount

`HierarchyCount` 用于返回所提供维度中的层级数。 `HierarchyCount` 仅在 TM1® 规则中有效。

`HierarchyCount` 不能用于 `TurboIntegrator` 进程。进程中出现此函数将会阻止进程进行编译。

语法：`HierarchyCount (DimName);`

| 参数 | 描述 |
| ------- | ------- |
| DimName | 有效的维度名称。 |

示例：`HierarchyCount ('model');`

此示例返回 3，这是 model 维度中的层级数。

### HierarchyIndex

如果层级位于提供的维度中，那么 `HierarchyIndex` 返回从 1 开始的索引，否则返回从 0 开始的索引。`HierarchyIndex` 仅在 TM1® 规则中有效。

`HierarchyIndex` 不能用于 `TurboIntegrator` 进程。进程中出现此函数将会阻止进程进行编译。

语法：`HierarchyIndex (DimName, HierName);`

| 参数 | 描述 |
| ------- | ------- |
| DimName | 有效的维度名称。 |
| HierName | 要在 DimName 中查找其索引位置的有效层级名称。 |

示例：`HierarchyIndex ('model', 'CustomerTarget');`

此示例返回 3，这是 model 维度中 CustomerTarget 层级的索引位置。

### HierarchyN

`HierarchyN` 用于返回提供的维度中指定位置的层级名称，如果索引超出范围，那么会返回空字符串。`HierarchyN` 仅在 TM1® 规则中有效。

`HierarchyN` 不能用于 `TurboIntegrator` 进程。进程中出现此函数将会阻止进程进行编译。

语法：`HierarchyN (DimName, index);`

| 参数 | 描述 |
| ------- | ------- |
| DimName | 有效的维度名称。 |
| index | 一个小于或等于维度中层级数的值。如果此参数小于 1 或大于维度中的层级数目，那么此函数返回 0。 |

示例：`HierarchyN ('model', 3);`

此示例返回“CustomerTarget”，这是 model 维度中的第三个层级。

## 逻辑规则函数

### CONTINUE

当作为规则表达式的一部分包括此函数时，`CONTINUE`允许执行具有相同区域定义的后续规则。通常，TM1® 只执行给定区域遇到的第一个规则。

此函数在 TM1 规则和 `TurboIntegrator` 进程中都有效。

语法：`CONTINUE`，无参数

示例：

```c
['Jan']= if(!region @= 'Argentina',10,CONTINUE);
['Jan']=20;
```

在此示例中，所有由 January 和 Argentina 标识的单元格都将被赋以值 10。由 Jan 和任何其他地区元素标识的单元格都将被赋以值 20。

### IF

如果您指定的逻辑表达式为 `TRUE`，那么 `IF` 返回一个值；如果为 `FALSE`，那么此函数返回另一个值。

此函数仅在 TM1® 规则中有效。

`TurboIntegrator` 使用其自己的 `IF` 函数，该函数能够计算多个逻辑表达式。

语法：`IF(expression, true_value, false_value)`

| 参数 | 描述 |
| ------- | ------- |
| expression | 可以计算为 TRUE 或 FALSE 的任何值或表达式。 |
| true_value | expression 为 TRUE 时返回的值。 |
| false_value | expression 为 FALSE 时返回的值。 |

示例：

`IF(1<2, 4, 5)` 返回 4。

`IF(1>2, 'ABC', 'DEF')` 返回“DEF”。

### STET

`STET` 函数将取消某个规则对特定元素的作用。

这是 TM1® 规则函数，仅在 TM1 规则中有效。此函数不能用于 `TurboIntegrator` 进程。

语法：`STET`，无参数

示例：`['Sales'] = IF(!Region @= 'France',STET, 100);`

在此示例中，规则规定 Sales 的值始终为 100，但 Sales 和区域维度中的元素法国的交集除外。

## 数学规则函数

### ABS

`ABS` 返回数字的绝对值。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ABS(x)`

| 参数 | 描述 |
| ------- | ------- |
| x | 要得到其绝对值的数字。 |

示例：`ABS(-1.2)` 返回 1.2

### ACOS

`ACOS` 将返回余弦值为 x 的角度（以弧度表示）。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ACOS(x)`

| 参数 | 描述 |
| ------- | ------- |
| x | 要得到的角度的余弦值。x 必须介于 -1 和 1 之间；否则，此函数将返回一个错误。 |

示例：`ACOS(0)` 返回 1.5708。

### ASIN

`ASIN` 返回正弦值为 x 的角度（以弧度表示）。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ASIN(x)`

| 参数 | 描述 |
| ------- | ------- |
| x | 要得到的角度的正弦值。x 必须介于 -1 和 1 之间；否则，此函数将返回一个错误。 |

示例：`ASIN(1)` 返回 1.5708。

### ATAN

`ATAN` 返回正切值为 x 的角度（以弧度表示）。结果介于 -pi/2 和 +pi/2 之间。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ATAN(x)`

| 参数 | 描述 |
| ------- | ------- |
| x | 要得到的角度的正切值。 |

示例：`ATAN(1)` 返回 .7854。
### COS

`COS` 返回一个以弧度表示的角度的余弦值。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`COS(x)`

| 参数 | 描述 |
| ------- | ------- |
| x | 要得到其余弦值的角度，以弧度表示。 |

示例：`COS(0)` 返回 1。

### EXP

`EXP` 返回某个数字的自然反对数。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`EXP(x)`

| 参数 | 描述 |
| ------- | ------- |
| x | 要得到其自然反对数的数字。 |

示例：`EXP(1)` 返回 2.71828。

### INT

`INT` 返回小于或等于指定值的最大整数。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`INT(x)`

| 参数 | 描述 |
| ------- | ------- |
| x | 一个数值。 |

示例：`INT(5.6)` 返回 5。`INT(-5.6)` 返回 -6。

### ISUND

如果未定义指定值，那么 `ISUND` 返回 1；否则返回 0。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ISUND(x)`

| 参数 | 描述 |
| ------- | ------- |
| x | 一个数字或表达式。 |

示例：`ISUND(5.2)` 返回 0。`ISUND(1/0)` 返回 1。

### LN

`LN` 返回数字的自然对数（以 e 为底）。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`LN(x)`

| 参数 | 描述 |
| ------- | ------- |
| x | 一个正数。如果 x 为负数或零，那么此函数将返回一个错误。 |

示例：`LN(10)` 返回 2.302585093。

### LOG

`LOG` 返回以 10 为底的正数的对数。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`LOG(x)`

| 参数 | 描述 |
| ------- | ------- |
| x | 一个正数。如果 x 为负数或零，那么此函数将返回一个错误。 |

示例：`LOG(10)` 返回 1。

### MAX

`MAX` 返回一对值中的最大数。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`MAX(num1, num2)`

| 参数 | 描述 |
| ------- | ------- |
| num1 | 一对值中的第一个值。 |
| num2 | 一对值中的第二个值。 |

示例：`MAX(10, 3)` 返回 10。

### MIN

`MIN` 返回一对值中的最小数。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`MIN(num1, num2)`

| 参数 | 描述 |
| ------- | ------- |
| num1 | 一对值中的第一个值。 |
| num2 | 一对值中的第二个值。 |

示例：`MIN(10, 3)` 返回 3。

### MOD

`MOD` 返回一个数字除以除数后所得的余数。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`MOD(number, divisor)`

| 参数 | 描述 |
| ------- | ------- |
| number | 要得到其余数的数字。 |
| divisor | 用来除 number 参数的值。 |

示例：`MOD(10, 3)` 返回 1。

### RAND

`RAND` 将生成在 0 和 1 之间均匀分布的随机数。当装入 TM1® 时，会设置随机数字生成器的种子值。

此函数在 TM1 规则和 `TurboIntegrator` 进程中都有效。

语法：`RAND`，无参数

### ROUND

`ROUND` 将给定的数字四舍五入为最接近的整数。您可以通过各种有效方法来执行舍入。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

最基本的舍入形式是，将任意数字替换为整数。可以通过多种方法将数字 y 舍入为整数 q。

最常用的方法如下所示：

- 舍入到最接近的整数
    - q 是最接近于 y 的整数（请参阅“远离 0 舍入”以了解平分决胜规则）。
- 朝向零舍入（即截断）
    - q 是 y 的整数部分（除去小数部分）。
- 向下舍入（取小整数）
    - q 是不超过 y 的最大整数。
- 向上舍入（取大整数）
    - q 是不小于 y 的最小整数。
- 远离 0 舍入
    - 如果 y 是整数，那么 q 是 y；否则 q 是最接近于 0 并使 y 介于 0 与 q 之间的整数。

基本上，`TurboIntegrator` 使用向下舍入方法 `floor(x + .5)`。Microsoft Excel 使用的方法是舍入到最接近的整数。因此，根据您是使用 `TurboIntegrator` 进程还是在 Excel 中工作，这将生成不同的整数。

语法：`ROUND(number)`

| 参数 | 描述 |
| ------- | ------- |
| number | 要四舍五入的数字。 |

示例：`ROUND(1.46)` 返回 1。

### ROUNDP

`ROUNDP` 以指定的小数位精度四舍五入给定的数字。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`ROUNDP(number, decimal)`

| 参数 | 描述 |
| ------- | ------- |
| number | 要四舍五入的数字。 |
| decimal | 应用四舍五入时采用的小数精度。如果此参数为正数，那么函将四舍五入到小数点右侧指定的位数。如果此参数为负数，那么函数将四舍五入到小数点左侧的指定位数。decimal 参数必须介于 -15 到 15 之间（包括端点值）。 |

示例：

`ROUNDP(1.46, 1)` 返回 1.5。

`ROUNDP(1.466, 2)` 返回 1.47。

`ROUNDP(234.56, -1)` 返回 230.00。

`ROUNDP(234.56, 0)` 返回 235.00。

### SIGN

`SIGN` 确定数字是正数、负数还是零。如果数字是正数，那么函数返回 1；如果数字是负数，那么返回 -1；如果数字是零，那么返回 0。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`SIGN(number)`

| 参数 | 描述 |
| ------- | ------- |
| number | 一个数字。 |

示例：`SIGN(-2.5)` 返回 -1。

### SIN

`SIN` 返回给定角度的正弦值。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`SIN(x)`

| 参数 | 描述 |
| ------- | ------- |
| x | 要得到其正弦值的值，以弧度表示。 |

示例：`SIN(1.5708)` 返回 1。

### SQRT

`SQRT` 返回给定值的平方根。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`SQRT(x)`

| 参数 | 描述 |
| ------- | ------- |
| x | 任意正值。如果 x 为负数，那么 SQRT 将返回一个错误。 |

示例：`SQRT(16)` 返回 4。

### TAN

`TAN` 返回给定角度的正切值。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`TAN(x)`

| 参数 | 描述 |
| ------- | ------- |
| x | 要得到其正切值的值，以弧度表示。 |

示例：`TAN(0)` 返回 0。`TAN(.7854)` 返回 1。

## 文本规则函数

### CAPIT

`CAPIT` 对字符串中的每个词应用首字母大写。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`CAPIT(string)`

| 参数 | 描述 |
| ------- | ------- |
| string | 一个文本字符串。 |

示例：`CAPIT('first quarter sales')` 返回 'First Quarter Sales'。

### CHAR

`CHAR` 返回由给定 `ASCII` 数字代码标识的字符。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`CHAR(number)`

| 参数 | 描述 |
| ------- | ------- |
| number | 一个 `ASCII` 代码数字。此数字必须介于 1 和 255 之间，包括这两个值。 |

示例：`CHAR(100)` 返回“d”。

### CODE

`CODE` 返回某个字符串中指定字符的 `ASCII` 数字代码。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`CODE(string, location)`

| 参数 | 描述 |
| ------- | ------- |
| string | 一个文本字符串。 |
| number | 一个数字，指定要获得其 ASCII 代码值的字符串中的字符。 |

示例：

`CODE('321', 2)` 返回 50。

`CODE('End', 3)` 返回 100。

### DELET

`DELET` 返回在字符串中从指定起始点处删除指定字符数后的结果。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`DELET(string, start, number)`

| 参数 | 描述 |
| ------- | ------- |
| string | 一个文本字符串。 |
| start | 开始进行删除的位置处的字符。 |
| number | 要删除的字符数。 |

示例：`DELET('payment', 3, 3)` 返回“pant”。

### FILL

`FILL` 根据需要重复给定的字符串，以返回指定长度的字符串。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`FILL(string, length)`

| 参数 | 描述 |
| ------- | ------- |
| string | 一个文本字符串。会根据需要重复此字符串以达到指定的长度。 |
| length | 要让函数返回的字符串的长度。 |

示例：

`FILL('-', 5)` 返回“-----”。

`FILL('ab', 5)` 返回“ababa”。

### INSRT

`INSRT` 在指定插入点处将一个字符串插入到另一个字符串。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`INSRT(string1, string2, location)`

| 参数 | 描述 |
| ------- | ------- |
| string1 | 一个文本字符串。 |
| string2 | 一个文本字符串。 |
| location | string2 中要插入 string1 的位置的字符。此函数会在 string2 中紧挨指定字符的前面插入 string1。 |

示例：`INSRT('ABC', 'DEF', 2)` 返回‘DABCEF’。

### LONG

`LONG` 返回字符串的长度。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`LONG(string)`

| 参数 | 描述 |
| ------- | ------- |
| string | 一个文本字符串。 |

示例：`LONG('Sales')` 返回 5。

### LOWER

`LOWER` 将字符串中的所有大写字符转换为小写字符。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`LOWER(string)`

| 参数 | 描述 |
| ------- | ------- |
| string | 一个文本字符串。 |

示例：`LOWER('First Quarter Sales')` 返回“first quarter sales'。

### NUMBR

`NUMBR` 将字符串转换为数字。传递给 `NUMBR` 函数的字符串必须使用 .（句点）作为十位分隔符，使用 ,（逗号）作为千位分隔符。任何其他十位/千位分隔符都将产生不正确的结果。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`NUMBR(string)`

| 参数 | 描述 |
| ------- | ------- |
| string | 要转换为数字的字符串。忽略除“0”至“9”、“+”、“-”、“.”和“E”以外的所有字符。 |

示例：

`NUMBR('-5.6')` 返回 -5.6。

`NUMBR('-5A.B6C')` 返回 -5.6。

### SCAN

`SCAN` 返回一个数字，指示字符串中第一次出现指定子字符串的开始位置。如果给定字符串中没有出现该子字符串，那么此函数返回 0。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`SCAN(substring, string)`

| 参数 | 描述 |
| ------- | ------- |
| substring | 要定位的子字符串。 |
| string | 要在其中搜索子字符串的字符串。 |

此函数的自变量区分大小写。substring 自变量中使用的首字母大写情况必须与函数的 string 自变量中使用的首字母大写情况完全匹配，此函数才会返回非零值。

示例:

`SCAN('scribe', 'described')` 返回 3。

但是，`SCAN('Scribe', 'described')` 返回 0，因为 substring 自变量中的大小写 (Scribe) 不匹配 string 自变量中的大小写 (described)。

### STR

`STR` 将数字转换为字符串。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`STR(number, length, decimal)`

| 参数 | 描述 |
| ------- | ------- |
| number | 要转换为字符串的数字。 |
| | 此数字可以包含正号或负号。 |
| | 此数字可以包含小数位。 |
| length | 函数结果中字符串的长度，包括正负号、分隔符、小数或小数位。 |
| | 如果数字中的位数小于 length 参数，那么此函数在插入正负号、分隔符、小数或小数位后，会插入前导空格以达到此长度。 |
| | 如果数字中的位数超过 length 参数，那么此函数会截断数字以达到此长度。 |
| | 如果指定了 length 参数，该参数必须是大于“0”的正数。 |
| | 如果未指定 length 参数，那么会保留 number 参数，并且函数结果的长度包括正负号、分隔符、小数和小数位。 |
| decimal | 要包括在函数结果中的小数位数。 |
| | 如果此参数为“0”或未指定此参数，那么不会包含小数点。 |
| | 如果指定数字的小数位数多于请求的小数位数，将对函数结果进行舍入。 |

示例：

| 函数调用 | Number | Length | Decimal | 结果 |
| ------- | ------- | ------- | ------- | ------- |
| `STR(3.14159, 6, 2)` | 3.14159 | 6 | 2 | 3.14 |
| `STR(-3.14, 6, 0)` | -3.14159 | 6 | 0 | -3 |
| `STR(3.14159,5,3)` | 3.14159 | 5 | 3 | 3.142 |
| `STR(1000000,4,0)` | 1000000 | 4| 0 | 1000 |
| `STR(1000000,4,2)` | 1000000 | 4 | 2 | 1000000.00 |
| `STR(10,2,4)` | 10 | 2 | 4| 10.0000 |
| `STR(1000000,5,0)` | 1000000 | 5 | 0 | 1,000 |
| `STR(1000000,10,5)` | 1000000 | 10 | 5 | 1,000,000.00000 |

### SUBST

`SUBST` 返回给定字符串的一个子字符串。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`SUBST(string, beginning, length)`

| 参数 | 描述 |
| ------- | ------- |
| string | 要从中提取子字符串的字符串。 |
| beginning | 子字符串开始处的字符。 |
| length | 子字符串的长度。 |

示例：`SUBST('Retirement', 3, 4)` 返回“tire”。

### TRIM

`TRIM` 将返回修剪字符串中的所有前导和尾部空格后的结果。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`TRIM(string)`

| 参数 | 描述 |
| ------- | ------- |
| string | 一个文本字符串。 |

示例：`TRIM(' First Quarter ')` 返回“First Quarter”。

### UPPER

`UPPER` 将文本字符串转换为大写。

此函数在 TM1® 规则和 `TurboIntegrator` 进程中都有效。

语法：`UPPER(string)`

| 参数 | 描述 |
| ------- | ------- |
| string | 一个文本字符串。 |

示例：`UPPER('First Quarter Results')` 返回 FIRST QUARTER RESULTS。

## 其他规则函数

### FEEDERS

使用 `SKIPCHECK` 声明在 TM1® 规则中复原稀疏合并时，还必须确保规则所派生的所有单元格均由数据装入程序语句进行标识。为此，请在紧挨着所有规则语句后面插入一个 `FEEDERS` 声明：

`FEEDERS;`

在紧挨着 `FEEDERS` 声明后面，应该创建数据装入程序语句，用于标识多维数据集中基于规则而派生的单元格。

### FEEDSTRINGS

对视图进行消零时，除非字符串位于填充的单元格中，否则不会显示基于规则生成的字符串值。为了能够填充字符串单元格，请插入 `FEEDSTRINGS` 声明作为规则的第一行。

`FEEDSTRINGS;`

插入此声明后，您可以为多维数据集视图中的字符串单元格设置数据装入程序，并使该字符串可用于其他规则（即使对视图进行了消零）。为字符串单元格定义数据装入程序的语句应该在规则中的 `FEEDERS` 声明下面创建。

如果是数字数据装入程序，那么对合并单元格装入数据会导致填充合并的所有组件。由于可以在合并单元格中存储字符串，因此必须特别注意这些单元格是否用于填充其他单元格。过度使用字符串数据装入程序会导致计算量过多，应用程序性能下降。

### SKIPCHECK

通过在 TM1® 规则的开始处插入 `SKIPCHECK` 声明，您可以还原稀疏合并，并提高性能：

在合并过程中，TM1 将使用稀疏合并算法跳过包含零或为空的单元格。此算法可加快高度稀疏的多维数据集中合并计算的速度。稀疏多维数据集是已填充单元格的数量占总单元格数量的百分比很低的多维数据集。

在合并已定义规则的多维数据集内的数据时，因为一个或多个空单元格可能实际上由规则计算而得，所以 TM1 将关闭此稀疏合并算法。（跳过基于规则而计算的单元格将导致合并的总数不正确）。如果关闭稀疏合并算法，那么在合并过程中会检查每个单元格是否有值。在大而稀疏的多维数据集中，这会降低计算的速度。

`SKIPCHECK;`

如果规则使用 `FEEDSTRINGS` 语句，那么 `SKIPCHECK` 语句应该是规则中的第二个语句。如果规则不使用 `FEEDSTRINGS` 语句，那么 `SKIPCHECK` 语句应该是规则中的第一个语句。

当使用 `SKIPCHECK` 还原稀疏合并时，还必须确保规则中包括一个 `FEEDERS` 声明，并且所有基于规则而生成的单元格均由数据装入程序语句进行标识。
