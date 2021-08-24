# BeautifulSoup库

* 和 lxml 一样，Beautiful Soup 也是一个 HTML/XML 的解析器，主要的功能也是如何解析和提取 HTML/XML 数据。
* lxml 只会局部遍历，而 Beautiful Soup 是基于 HTML DOM（Document Object Model）的，会载入整个文档，解析整个 DOM 树，因此时间和内存开销都会大很多，所以- 性能要低于 lxml。
* BeautifulSoup 用来解析 HTML 比较简单，API 非常人性化，支持 CSS 选择器、Python 标准库中的 HTML 解析器，也支持 lxml 的 XML 解析器。
* Beautiful Soup 3 目前已经停止开发，推荐现在的项目使用 Beautiful Soup 4。
* 安装命令：pip install pip install bs4
* 中文文档：[https://www.crummy.com/software/BeautifulSoup/bs4/doc/index.zh.html](https://www.crummy.com/software/BeautifulSoup/bs4/doc/index.zh.html)

## Python 中的解析工具

| 解析工具 | 解析速度 | 使用难度 |
| :--- | :--- | :--- |
| BeautifulSoup | 最慢 | 最简单 |
| lxml | 快 | 简单 |
| 正则表达式 | 最快 | 最难 |

## 简单使用

```python
from bs4 import BeautifulSoup

html = """
    <html><head><title>The Dormouse's story</title></head>
    <body>
    <p class="title" name="dromouse"><b>The Dormouse's story</b></p>
    <p class="story">Once upon a time there were three little sisters; and their names were
    <a href="http://example.com/elsie" class="sister" id="link1"><!-- Elsie --></a>,
    <a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
    <a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
    and they lived at the bottom of a well.</p>
    <p class="story">...</p>
"""

# 创建 BeautifulSoup 对象，使用lxml解析
soup = BeautifulSoup(html,'lxml')

print(soup.prettify())
```

## 四个常用的对象

BeautifulSoup将复杂的HTML文档转换成一个复杂的树形结构，每个节点都是Python对象，所有对象可以归纳为4种：Tag、NavigatableString、BeautifulSoup、Comment

### Tag

Tag其实就是HTML中的标签

```python
from bs4 import BeautifulSoup

html = """
    <html><head><title>The Dormouse's story</title></head>
    <body>
    <p class="title" name="dromouse"><b>The Dormouse's story</b></p>
    <p class="story">Once upon a time there were three little sisters; and their names were
    <a href="http://example.com/elsie" class="sister" id="link1"><!-- Elsie --></a>,
    <a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
    <a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
    and they lived at the bottom of a well.</p>
    <p class="story">...</p>
"""

# 创建 BeautifulSoup 对象
soup = BeautifulSoup(html, 'lxml')

print(soup.title)
# <title>The Dormouse's story</title>

print(soup.head)
# <head><title>The Dormouse's story</title></head>

print(soup.a)
# <a class="sister" href="http://example.com/elsie" id="link1"><!-- Elsie --></a>

print(soup.p)
# <p class="title" name="dromouse"><b>The Dormouse's story</b></p>

print(type(soup.p))
# <class 'bs4.element.Tag'>
```

可以利用 soup 加标签名轻松地获取这些标签的内容，这些对象的类型是 bs4.element.Tag，查找的是所有内容中的第一个符合要求的标签。对于Tag，他有两个重要的属性，分别是 name 和 attrs

```python
print(soup.name)
# [document]
#soup 对象本身比较特殊，它的 name 即为 [document]

print(soup.head.name)
# head
#对于其他内部标签，输出的值便为标签本身的名称

print(soup.p.attrs)
# {'class': ['title'], 'name': 'dromouse'}
# 在这里，我们把 p 标签的所有属性打印输出了出来，得到的类型是一个字典。

print(soup.p['class'])
print(soup.p.get('class'))
# ['title']
#还可以利用get方法，传入属性的名称，二者是等价的

# 可以对这些属性和内容等等进行修改
soup.p['class'] = "newClass"
print(soup.p ) # <p class="newClass" name="dromouse"><b>The Dormouse's story</b></p>
```

### NavigableString

如果拿到标签后，还想获取标签中的的内容，那么可以通过 tag.string 获取标签中的文本内容

```python
print(soup.p.string)
# The Dormouse's story

print(type(soup.p.string))
# <class 'bs4.element.NavigableString'>
```

### BeautifulSoup

BeautifulSoup 对象表示的是一个文档的全部内容，大部分时候可以把它当做Tag对象，它支持 遍历文档数 和 搜索文档数 中描述的大部分方法。

因为BeautifulSoup 对象并不是真正的HTML或XML的Tag，所以他没有name和attribute属性，但查看它的 `.name` 属性是很方便的，BeautifulSoup 对象包含了一个值为 `[document]` 的特殊属性 `.name`

```python
print(soup.name)
# '[document]'
```

### Comment

Tag , NavigableString , BeautifulSoup 几乎覆盖了HTML和XML中的所有内容，但是还有一些特殊对象，注释。

```python
markup = "<b><!--Hey, buddy. Want to buy a used parser?--></b>"
soup = BeautifulSoup(markup)
comment = soup.b.string
type(comment)
# <class 'bs4.element.Comment'>
```

Comment 对象是一个特殊类型的 NavigableString 对象

```python
comment
# 'Hey, buddy. Want to buy a used parser'
```

## 遍历文档树

### contents和children

```python
from bs4 import BeautifulSoup
html_doc = """
<html><head><title>The Dormouse's story</title></head>

<p class="title"><b>The Dormouse's story</b></p>

<p class="story">Once upon a time there were three little sisters; and their names were
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>

<p class="story">...</p>
"""
soup = BeautifulSoup(html_doc, 'lxml')

head_tag = soup.head

# <head><title>The Dormouse's story</title></head>
print(head_tag)

# 返回所有子节点的迭代器
for child in head_tag.children:
    print(child)
```

### strings和stripped\_strings

如果tag中包含多个字符串，可以使用 strings 来循环获取

```python
for string in soup.strings:
    print(repr(string))
    # "The Dormouse's story"
    # '\n'
    # "The Dormouse's story"
    # '\n'
    # 'Once upon a time there were three little sisters; and their names were\n'
    # 'Elsie'
    # ',\n'
    # 'Lacie'
    # ' and\n'
    # 'Tillie'
    # ';\nand they lived at the bottom of a well.'
    # '\n'
    # '...'
    # '\n'
```

输出的字符串中可能包含了很多空格和空白字符，使用 `stripped_strings` 可以去除多余空白内容

```python
for string in soup.stripped_strings:
    print(repr(string))
    # "The Dormouse's story"
    # "The Dormouse's story"
    # 'Once upon a time there were three little sisters; and their names were'
    # 'Elsie'
    # ','
    # 'Lacie'
    # 'and'
    # 'Tillie'
    # ';\nand they lived at the bottom of a well.'
    # '...'
```

## 搜索文档树

### find和find\_all

* 搜索文档树，用的比较多的是 `find` 和 `find_all`
* `find` 方法是找到第一个满足条件的标签后就立即返回，只返回一个元素
* `find_all` 方法是把所有满足条件的标签都返回

```python
soup.find_all('a', attrs={'id': 'link2'})
```

或者是直接传入属性的名字作为关键字参数

```python
soup.find_all('a', id='link2')
```

### select

使用以上方法可以方便的找出元素，但有时候使用css选择器的方式可以更加的方便，应该使用select方法。

#### 通过标签名查找

```python
print(soup.select('a'))
```

#### 通过类名查找

通过类名，应该在类的前面加一个 `.` ，比如要查找 class='sister' 的标签

```python
print(soup.select('.sister'))
```

#### 通过id查找

通过id查找，应该在id的名字前面加一个 `#`

```python
print(soup.select('#link1'))
```

#### 组合查找

组合查找即和写class文件时，标签名与类名、id名进行组合原理是一样的，例如查找p标签中，id='link1'的内容

```python
print(soup.select('p #link1'))
```

直接子标签查找，则使用 `>` 分割

```python
print(soup.select('head > title'))
```

#### 通过属性查找

查找时还可以加入属性元素，属性需要用中括号括起来，属性和标签属于同一个节点，所以中间不能加空格，否则会无法匹配到

```python
print(soup.select('a[href="http://example.com/elsie"]'))
```

#### 获取内容

以上的select方法返回的结果都是列表形式，可以用遍历的形式输出，然后用 `get_text()` 方法来获取它的内容

```python
soup = BeautifulSoup(html, 'lxml')
print(type(soup.select('title')))
print(soup.select('title')[0].get_text())

for title in soup.select('title'):
    print(title.get_text())
```
