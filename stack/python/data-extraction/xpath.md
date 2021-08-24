# XPath语法

## 什么是Xpath

XPath\(XML Path Language\) 是一门在XML和HTML文档中查找信息的语言，可以用来在XML和HTML文档中对元素和属性进行遍历

## XPath工具

* Chrome插件 [XPath Helper](https://chrome.google.com/webstore/detail/xpath-helper/hgimnogjllphhhkhlmebbmlgjoejdpjl)
* Firefox插件 [Try XPath](https://addons.mozilla.org/en-US/firefox/addon/try-xpath/)

## XPath的语法

### 选取节点

XPath使用路径表达式来选取XML文档中的节点或者节点集，这些路径表达式和我们在常规的电脑文件系统中看到的表达式非常相似

| 表达式 | 描述 | 示例 | 结果 |
| :--- | :--- | :--- | :--- |
| nodename | 选取此节点的所有子节点 | `bookstore` | 选取bookstore下所有的子节点 |
| / | 如果是在最前面，代表从根节点选取，否则选择某节点下的某个节点 | `/bookstore` | 选取根元素下所有的bookstore节点 |
| // | 从全局节点中选择节点，随意在哪个位置 | `//book` | 从全局节点中找到所有的book节点 |
| @ | 选取某个节点的属性 | `//book[@price]` | 选择所有拥有price属性的book节点 |
| . | 当前节点 | `./a` | 选取当前节点下的a标签 |

### 谓语

谓语用来查找某个特定的节点或者包含某个指定的值的及诶按，被嵌在括号中使用

| 路径表达式 | 描述 |
| :--- | :--- |
| `//bookstore/book[1]` | 选取bookstore下的第一个book子元素 |
| `//bookstore/book[last()]` | 选取bookstore下最后一个book子元素 |
| `//bookstore/book[position()<3]` | 选取bookstore下前面两个book子元素 |
| `//book[@price]` | 选取拥有price属性的book元素 |
| `//book[@price=10]` | 选取拥有price属性并且等于10的book元素 |

### 通配符

在XPath中用 `*` 来表示通配符

| 通配符 | 描述 | 示例 | 结果 |
| :--- | :--- | :--- | :--- |
| `*` | 匹配任意节点 | `/bookstore/*` | 选取bookstore下的所有子元素 |
| `@*` | 匹配节点中的任意属性 | `//book[@*]` | 选取所有带属性的book元素 |

### 选取多个路径

通过在路径表达式中使用 `|` 运算符，可以选取若干个路径，比如选取所有book元素已经book元素下所有的title元素 `//bookstore/book | //book/title`
