# urllib库

## urllib

urllib库是Python中一个最基本的网络请求库，可以模拟浏览器的行为，向指定服务器发送一个请求，并可以保存服务器返回的数据。

### urlopen函数

在Python3的urllib库中，所有和网络相求相关的方法都被集成到 urlli.request 模块下了，urlopen函数基本使用方法

```python
from urllib import request
response = request.urlopen('http://www.baidu.com')
print(response.read())
```

* url：请求的url
* data：请求的data，如果设置了这个值，那么将变成POST请求
* 返回值：返回值是一个 http.client.HTTPResponse 对象，这个对象是一个类文件句柄对象，有read\(size\)、readline、readlines、getcode 等方法

实际上，使用浏览器访问百度，右键查看源代码，会发现和代码打印出来的数据是一模一样的。

### urlretrieve函数

这个函数可以方便的将网页上的一个文件保存到本地

```python
// 以下代码可以将百度首页代码下载到本地
from urllib import request
request.urlretrieve('http://www.baidu.com', 'baidu.html')
```

### urlencode函数

用浏览器发送请求的时候，如果url中包含了中文或者其他特殊字符，那么浏览器会自动给我们进行编码。而如果使用代码发送请求，那么就必须手动进行编码，这时候就应该使用urlencode函数来实现。urlencode可以把字典数据转换为URL编码的数据

```python
from urllib import parse
data = ['name':'阿星Plus','age':25,]
qs = parse.urlencode(data)
print(qs)
```

### parse\_qs函数

可以将经过编码后的url参数进行解码

```python
form urllib import parse
qs = 'name=%E9%98%BF%E6%98%9FPlus&age=25'
print(parse.parse_qs(qs))
```

### urlparse和urlsplit

拿到一个URL，想要对这个URL中的各个组成部分进行分割，那么这时候就可以使用urlparse或者urlsplit来进行分割

```python
form urllib import request,parse

url = 'https://www.baidu.com/s?wd=阿星Plus'

# result = parse.urlsplit(url)
result = parse.urlparse(url)

print('scheme:',result.scheme)
print('netloc:',result.netloc)
print('path:',result.path)
print('query:',result.query)
```

urlparse和urlsplit基本上是一模一样的，唯一不一样的是，urlparse里面多了一个params属性，而urlsplit没有这个params属性。

### request.Request类

如果想要在请求的时候增加一些请求头，那么就必须使用 request.Request 类来实现，比如要增加一个 User-Agent

```python
from urllib import request

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
}
req = request.Request('http://www.baidu.com', headers=headers)
resp = request.urlopen(req)
print(resp.read()
```

### ProxyHandler处理器\(设置代理\)

* 很多网站会检测某一段时间某个IP的访问次数\(通过流量统计，系统日志等\)，如果访问次数多的不像正常人，它会禁止这个IP的访问
* 所以我们可以设置一些代理服务器，每隔一段时间换一个代理，就算IP被禁止，依然可以换个IP继续爬取
* urllib中通过ProxyHandler来设置使用代理服务器，下面代码说明如何使用自定义opener来使用代理

```python
from urllib import request
# 没有设置代理
resp = request.urlopen('http://httpbin.org/get')
print(resp.read().decode("utf-8"))

# 设置代理
handler = request.ProxyHandler({"http":"132.232.126.92"})
opener = request.build_opener(handler)
req = request.Request('http://httpbin.org/ip')
resp = opener.open(req)
print(resp.read()
```

### Cookie

在网站中，HTTP请求是无状态的，也就是说即使第一次和服务器连接并登录成功后，第二次请求服务器依然不知道当前请求是哪个用户。cookie的出现就是为了解决这个问题，第一次登录后服务器返回一些数据\(cookie\)给浏览器，然后浏览器保存在本地，当该用户发送第二次请求的时候，就会自动把上次请求存储的cookie数据自动的携带给服务器，服务器通过浏览器携带的数据就能判断当前用户是哪个了。cookie存储的数据量有限，不同的浏览器有不同的存储大小，但一般不超过4kb，因此使用cookie只能存储一些小量的数据。

#### cookie的格式

```shell
Set-Cookie: NAME=VALUE；Expires/Max-age=DATE；Path=PATH；Domain=DOMAIN_NAME；SECURE
```

* NAME：cookie的名字
* VALUE：cookie的值
* Expires：cookie的过期时间
* Path：cookie的作用路径
* Domain：cookie作用的域名
* SECURE：是否只在https协议下起作用

#### 使用cookielib库和HTTPCookieProcessor模拟登录

* Cookie是指网站服务器为了辨别用户身份和进行Session跟踪而储存在用户浏览器上的文本文件，Cookie可以保持登录信息到用户下次与服务器的会话
* 这里以人人网为例，人人网中，要访问某个人的主页，必须先登录才能访问，登录就是需要有cookie信息。解决方案有两种，第一种是使用浏览器访问，然后将cookie信息复制下来，放到headers中

```python
from urllib import request
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
    'Cookie': 'anonymid=jy8dyj742asuaj; depovince=SH; _r01_=1; JSESSIONID=abc_7R4FWXud3fWjCgeWw; ick_login=501ccd78-b0b4-4253-b815-9992020c05de; jebecookies=c50e000a-723a-4f2f-ad13-6371cf5b4a63|||||; _de=2A184C89A453DAE2ECD78F48F9B08787; p=8de679b3735cc2d3245b06d272bc08665; first_login_flag=1; ln_uact=13477996338; ln_hurl=http://head.xiaonei.com/photos/0/0/men_main.gif; t=28a3a7049b82d64a7ef87911c789ac0a5; societyguester=28a3a7049b82d64a7ef87911c789ac0a5; id=971368245; xnsid=fbe5d896; ver=7.0; loginfrom=null; jebe_key=cb9f1dc6-cf33-4933-87e6-3289dc7cf36a%7C8ddf4c90ebf64a7cc8163133aa871bf1%7C1563436919308%7C1%7C1563436918703; jebe_key=cb9f1dc6-cf33-4933-87e6-3289dc7cf36a%7C8ddf4c90ebf64a7cc8163133aa871bf1%7C1563436919308%7C1%7C1563436918708; wp_fold=0'
}

url = 'http://www.renren.com/971368245/profile'
req = request.Request(url, headers=headers)
resp = request.urlopen(req)
with open('renren.html', 'w') as fp:
    fp.write(resp.read().decode('utf-8'))
```

但是每次在访问需要cookie的页面都要从浏览器中复制cookie比较麻烦。在Python中处理cookie，一般是通过http.cookiejar模块和urllib模块的HTTPCookieProcessor处理器类一起使用。http.cookiejar模块主要作用是提供用于存储cookie的对象，而HTTPCookieProcessor处理器主要作用是处理这些cookie对象，并构建handler对象。

#### http.cookiejar模块

该模块主要的类有CookieJar、FileCookieJar、MozillaCookieJar、LWPCookieJar

* CookieJar：管理HTTP cookie值、存储HTTP请求生成的cookie、向传出的HTTP请求添加cookie的对象。整个cookie都存储在内存中，对CookieJar实例进行垃圾回收后cookie也将丢失
* FileCookieJar\(filename,delayload=None,policy=None\)：从CookieJar派生而来，用来创建FileCookieJar实例，检索Cookie信息并将Cookie存储到文件中。filename是存储cookie的文件名。delayload为True时支持延迟访问文件，既只有在需要时才读取文件或在文件中存储数据
* MozillaCookieJar\(filename,delayload=None,policy=None\)：从FileCookieJar派生而来，创建于Mozilla浏览器 cookies.txt兼容的FileCookieJar实例
* LWPCookieJar\(filename,delayload=None,policy=None\)：从FileCookieJar派生而来,创建于libwww-pert标准的 Set-Cookie3 文件格式兼容的FileCookieJar实例

#### 使用http.cookiejar和request.HTTPCookieProcessor模拟登录

```python
from urllib import request,parse
from http.cookiejar import CookieJar
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
}

def get_opener():
    cookiejar = CookieJar()
    handler = request.HTTPCookieProcessor(cookiejar)
    opener = request.build_opener(handler)
    return opener

def login_renren(opener):
    data = {"email": "", "password": ""}
    data = parse.urlencode(data).encode('utf-8')
    login_url = "http://www.renren.com/PLogin.do"
    req = request.Request(login_url, headers=headers, data=data)
    opener.open(req)

def visit_profile(opener):
    url = 'http://www.renren.com/971368245/profile'
    req = request.Request(url,headers=headers)
    resp = opener.open(req)
    with open('renren.html','w') as fp:
        fp.write(resp.read().decode("utf-8"))

if __name__ == '__main__':
    opener = get_opener()
    login_renren(opener)
    visit_profile(opener)
```

#### 保存cookie到本地

保存cookie到本地，可以使用cookiejar的save方法，并且需要指定一个文件名

```python
from urllib import request
from http.cookiejar import MozillaCookieJar

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
}

cookiejar = MozillaCookieJar('cookie.txt')
handler = request.HTTPCookieProcessor(cookiejar)
opener = request.build_opener(handler)

req = request.Request('http://httpbin.org/cookies',headers=headers)
resp = opener.open(req)
print(resp.read())
cookiejar.save(ignore_discard=True,ignore_expires=True)
```

#### 从本地加载cookie

从本地加载cookie，需要使用cookiejar的load方法，并且也需要指定方法

```python
from urllib import request
from http.cookiejar import MozillaCookieJar

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
}

cookiejar = MozillaCookieJar("cookie.txt")
cookiejar.load(ignore_expires=True,ignore_discard=True)
handler = request.HTTPCookieProcessor(cookiejar)
opener = request.build_opener(handler)

req = request.Request('http://httpbin.org/cookies',headers=headers)
resp = opener.open(req)
print(resp.read())
```
