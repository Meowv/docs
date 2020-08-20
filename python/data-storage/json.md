# json文件处理

## 什么是json

JSON\(JavaScript Object Notation, JS 对象标记\) 是一种轻量级的数据交换格式。它基于 ECMAScript \(w3c制定的js规范\)的一个子集，采用完全独立于编程语言的文本格式来存储和表示数据。简洁和清晰的层次结构使得 JSON 成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成，并有效地提升网络传输效率。

## json支持的数据格式

* 对象\(字典\)，使用花括号
* 数组\(列表\)，使用方括号
* 整型、浮点型、布尔型、NULL类型
* 字符串类型\(字符串必须要用双引号，不能用单引号\)
* 多个数据之间使用逗号分开
* json本质上还是一个字符串

## 字典和列表转json

```python
import json

books = {
    {
        'title': '钢铁是怎样练成的',
        'price': 9.8
    },
    {
        'title': '红楼梦',
        'price': 9.9
    }
}

json_str = json.dumps(books, ensure_ascii=False)
print(json_str)
```

* 因为json在dump的时候，只能存放ascii的字符，因为会将中文进行转义，这时候我们可以使用 `ensure_ascii=False` 关闭这个特性。
* 在python中，只有基本数据类型才能转换成json格式的字符串，int、float、str、list、dict、tuple

## 将json数据直接dump到文件中

json模块中除了dumps函数，还有一个dump函数，这个函数可以传入一个文件指针，直接将字符串dump到文件中

```python
import json

books = {
    {
        'title': '钢铁是怎样练成的',
        'price': 9.8
    },
    {
        'title': '红楼梦',
        'price': 9.9
    }
}

with open('books.json', 'w') as fp:
    json.dump(books, fp)
```

## 将一个json字符串load成python对象

```python
import json

json_str = '[{"title": "钢铁是怎样练成的", "price": 9.8}, {"title": "红楼梦", "price": 9.9}]'

books = json.loads(json_str, encoding='utf-8')
print(type(books)) # <class 'list'>
print(books)
```

## 直接从文件中读取json数据

```python
import json

with open('books.json','r',encoding='utf-8') as fp:
    json_str = json.load(fp)
    print(json_str)
```
