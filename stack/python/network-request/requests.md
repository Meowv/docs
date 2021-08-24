# requests库

## requests

虽然Python的标准库中 urllib模块已经包含了平常我们使用的大多数功能，但是它的 API 使用起来让人感觉不太好，而 Requests宣传是 “HTTP for Humans”，说明使用更简洁方便。

### 安装和文档地址

```python
pip install requests
```

* 中文文档：[http://docs.python-requests.org/zh\_CN/latest/index.html](http://docs.python-requests.org/zh_CN/latest/index.html)
* github地址：[https://github.com/requests/requests](https://github.com/requests/requests)

### 发送GET请求

* 最简单的发送get请求就是通过request.get来调用

  ```python
  response = request.get('http://www.baidu.com/')
  ```

* 添加header和查询参数，如果想要添加headers，可以传入headers参数来增加请求头中的headers信息，如果要将参数放在url中传递，可以利用params参数

```python
import requests
kw = {'wd': '中国'}
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
}

# params 接受一个字典或者字符串的查询参数，字典类型自动转换为url编码，不需要urlencode()
response = request.get('http://www.baidu.com/s', params=kw, headers=headers)

# 查看响应内容，response.text 返回的是Unicode格式的数据
print(response.text)

# 查看响应内容，response.content 返回的是字节流数据
print(response.content)

# 查看完整url地址
print(response.url)

# 查看响应头部字符编码
print(response.encoding)

# 查看响应码
print(response.status_code)
```

### 发送POST请求

* 最基本的post请求可以使用post方法

  ```python
  response = request.post('http://www.baidu,com', data=data)
  ```

* 传入data数据，这时候就不需要urlencode进行编码了，直接传入一个字典进去就可以了

  ```python
  import requests
  url = 'https://www.lagou.com/jobs/positionAjax.json?city=%E6%B7%B1%E5%9C%B3&needAddtionalResult=false&isSchoolJob=0'
  headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
    'Referer': 'https://www.lagou.com/jobs/list_python?labelWords=&fromSearch=true&suginput='
  }
  data = {
    'first': 'true',
    'pn': 1,
    'kd': 'python'
  }
  resp = requests.post(url, headers=headers, data=data)
  # 如果是json数据，直接可以调用json方法
  print(resp.json())
  ```

### 使用代理

使用requests添加代理，只需要在请求的方法中传递proxies参数就可以了

```python
import requests
url = 'http://httpbin.org/get'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
}
proxy = {
    'http': '132.232.126.92'
}

resp = requests.get(url, headers=headers, proxies=proxy)
with open('http.html', 'w', encoding='utf-8') as fp:
    fp.write(resp.text)
```

### cookie

如果在一个响应中包含了cookie，那么可以利用cookie属性拿到这个返回的cookie值

```python
import requests

resp = requests.get('http://www.baidu.com/')
print(resp.cookies)
print(resp.cookies.get_dict())
```

### session

* urllib库，是可以使用opener发送多个请求，多个请求之间是可以共享cookie的。
* 使用requests，也要达到共享cookie的目的，可以用requests库提供的session对象。这里的session不是web开发中的session，这里只是一个会话的对象。

```python
import requests

url = 'http://www.renren.com/PLogin.do'
data = {'email':'','password':''}
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
}

# 登录
session = requests.session()
session.post(url, data=data, headers=headers)

# 访问个人主页
resp = session.get('http://www.renren.com/971368245/profile')
print(resp.text)
```

### 处理不受信任的SSL证书

对于那些已经被信任的SSL整数的网站，比如 [https://www.baidu.com/](https://www.baidu.com/) ，那么使用requests直接就可以正常的返回响应，对于不受信任的网站，添加 verify=False 参数

```python
url = 'https://xxx.com'
resp = requests.get(url,verify=False)
print(resp.content.decode('utf-8'))
```
