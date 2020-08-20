# Python中的正则表达式

## 什么是正则表达式

> 世界上分为两种人，一种是懂正则表达式的，一种是不懂正则表达式的

按照一定的规则，从某个字符串中匹配出想要的数据，这个规则就是正则表达式

## 正则表达式常用的匹配规则

### 匹配某个字符串

```python
text = 'hello'
ret = re.match('he', text)
print(ret.group())
# >> he
```

### 点\(`.`\) 匹配任意的字符串

```python
text = 'ab'
ret = re.match('.', text)
print(ret.group())
# >> a
```

### `\d` 匹配任意的数字

```python
text = '123'
ret = re.match('\d', text)
print(ret.group())
# >> 1
```

### `\D` 匹配任意的非数字

```python
text = "a"
ret = re.match('\D',text)
print(ret.group())
# >> a
```

如果text为一个数字，那么就匹配不成功了

```python
text = "1"
ret = re.match('\D',text)
print(ret.group())
# >> AttributeError: 'NoneType' object has no attribute 'group'
```

### `\s` 匹配的是空白字符串\(包括：\n，\t，\r，空格\)

```python
text = "\t"
ret = re.match('\s',text)
print(ret.group())
# >> 此处是一个空白
```

### `\w` 匹配的是 a-z 和 A-Z 以及数字和下划线

```python
text = "_"
ret = re.match('\w',text)
print(ret.group())
# >> _
```

如果要匹配一个其他的字符，那么就匹配不到

```python
text = "+"
ret = re.match('\w',text)
print(ret.group())
# >> AttributeError: 'NoneType' object has no attribute
```

### `\W` 匹配的是和 `\w` 相反的

```python
text = "+"
ret = re.match('\W',text)
print(ret.group())
# >> +
```

如果你的text是一个下划线或者英文字符，那么就匹配不到了

```python
text = "_"
ret = re.match('\W',text)
print(ret.group())
# >> AttributeError: 'NoneType' object has no attribute
```

### `[]` 组合的方式，只要满足中括号中的某一项都算匹配成功

```python
text = "027-88888888"
ret = re.match('[\d\-]+',text)
print(ret.group())
# >> 027-88888888
```

其实可以使用中括号代替几种默认的匹配规则

* `\d` ：\[0-9\]
* `\D` ：0-9
* `\w` ：\[0-9a-zA-Z\_\]
* `\W` ：

### 匹配多个字符

#### `*`：可以匹配0或者任意多个字符

```python
text = '8888'
ret = re.match('\d*',text)
print(ret.group())
# >> 8888
```

以上因为匹配的要求是 `\d` ，那么就要求是数字，后面跟了一个星号，就可以匹配到8888这四个字符

#### `+`：可以匹配1个或者多个字符，最少一个

```python
text = "abc"
ret = re.match('\w+',text)
print(ret.group())
# >> abc
```

因为匹配的是`\w` ，那么就要求是英文字符，后面跟了一个加号，意味着最少要有一个满足 `\w` 的字符才能够匹配到。如果text是一个空白字符或者是一个不满足`\w`的字符，就会报错

```python
text = ""
ret = re.match('\w+',text)
print(ret.group())
# >> AttributeError: 'NoneType' object has no attribute
```

#### `?`：匹配的字符可以出现一次或者不出现\(0或者1\)

```python
text = "123"
ret = re.match('\d?',text)
print(ret.group())
# >> 1
```

#### `{m}`：匹配m个字符

```python
text = "123"
ret = re.match('\d{2}',text)
print(ret.group())
# >> 12
```

#### `{m,n}`：匹配 m-n 个字符，在这中间的字符都可以匹配到

```python
text = "123"
ret = re.match('\d{1,2}',text)
prit(ret.group())
# >> 12
```

如果text只有一个字符，也可以匹配出来

```python
text = "1"
ret = re.match('\d{1,2}',text)
prit(ret.group())
# >> 1
```

### 几个实际的案例\(以给出的文本为例\)

* 验证手机号码：手机号码的规则是以1开头，第二位可以是34587，后面那9位就可以随意了

```python
text = "18570631587"
ret = re.match('1[34587]\d{9}',text)
print(ret.group())
# >> 18570631587
```

* 如果是个不满足条件的手机号码。那么就匹配不到了

```python
text = "1857063158"
ret = re.match('1[34587]\d{9}',text)
print(ret.group())
# >> AttributeError: 'NoneType' object has no attribute
```

* 验证邮箱：邮箱的规则是邮箱名称是用数字、数字、下划线组成的，然后是@符号，后面就是域名了

```python
text = "hynever@163.com"
ret = re.match('\w+@\w+\.[a-zA-Z\.]+',text)
print(ret.group())
```

* 验证URL：URL的规则是前面是http或者https或者是ftp然后再加上一个冒号，再加上一个斜杠，再后面就是可以出现任意非空白字符了

```python
text = "http://www.baidu.com/"
ret = re.match('(http|https|ftp)://[^\s]+',text)
print(ret.group())
```

* 验证身份证：身份证的规则是，总共有18位，前面17位都是数字，后面一位可以是数字，也可以是小写的x，也可以是大写的X

```python
text = "3113111890812323X"
ret = re.match('\d{17}[\dxX]',text)
print(ret.group())
```

### `^`：表示以...开始

```python
text = "hello"
ret = re.match('^h',text)
print(ret.group())
```

如果是在中括号中，代表的是取反操作

### `$`：表示以...结束

```python
# 匹配163.com的邮箱
text = "xxx@163.com"
ret = re.search('\w+@163\.com$',text)
print(ret.group())
# >> xxx@163.com
```

### `|`：匹配多个表达式或者字符串

```python
text = "hello|world"
ret = re.search('hello',text)
print(ret.group())
# >> hello
```

### 贪婪模式和非贪婪模式

* 贪婪模式：正则表达式会匹配尽量多的字符，默认是贪婪模式。
* 非贪婪模式：正则表达式会尽量少的匹配字符。

```python
text = "0123456"
ret = re.match('\d+',text)
print(ret.group())
# 因为默认采用贪婪模式，所以会输出0123456
```

可以改成非贪婪模式，就只会匹配到0

```python
text = "0123456"
ret = re.match('\d+?',text)
print(ret.group())
```

### 匹配0-100之间的数字

```python
text = '99'
ret = re.match('[1-9]?\d$|100$',text)
print(ret.group())
```

如果text=101，就会抛出一个异常

```python
text = '101'
ret = re.match('[1-9]?\d$|100$',text)
print(ret.group())
# >> AttributeError: 'NoneType' object has no attribute 'group'
```

### 转义字符和原生字符

在正则表达式中，有些字符是有特殊意义的字符，在 Python 中 `\` 也是用来转义的，因此如果想要在普通的字符串中匹配 `\` ，那么就要给出 四个 `\`

```python
text = "apple \c"
ret = re.search('\\\\c',text)
print(ret.group())
```

所以要使用原生字符就可以解决这个问题

```python
text = "apple \c"
ret = re.search(r'\\c',text)
print(ret.group())
```
