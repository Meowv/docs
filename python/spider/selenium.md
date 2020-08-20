# 动态网页爬虫

## Ajax是什么

AJAX（Asynchronouse JavaScript And XML）异步JavaScript和XML。过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。传统的网页（不使用Ajax）如果需要更新内容，必须重载整个网页页面。因为传统的在传输数据格式方面，使用的是XML语法。因此叫做AJAX，其实现在数据交互基本上都是使用JSON。使用AJAX加载的数据，即使使用了JS，将数据渲染到了浏览器中，在右键-&gt;查看网页源代码还是不能看到通过ajax加载的数据，只能看到使用这个url加载的html代码

## 获取Ajax数据的方式

* 直接分析ajax调用的接口。然后通过代码请求这个接口
* 使用 `selenium` + `chromedriver` 模拟浏览器行为获取数据

| 方式 | 优点 | 缺点 |
| :--- | :--- | :--- |
| 分析接口 | 直接可以请求到数据，不需要做任何解析工作，代码量少，性能高 | 分析接口比较复杂，特别是一些通过js混淆的接口，容易被发现是爬虫 |
| selenium | 直接模拟浏览器的行为，浏览器可以请求到的，使用 selenium 也能请求到，比较稳定 | 代码量多，性能低 |

## `selenium` + `chromedriver` 获取动态数据

selenium相当于是一个机器人，可以模拟人在浏览器上的一些行为，自动处理浏览器上的一些行为，比如点击，填充数据，删除cookie等

chromedriver是一个驱动chrome浏览器的驱动程序，使用他才可以驱动浏览器，针对不同的浏览器有不同的driver

* Chrome：[https://sites.google.com/a/chromium.org/chromedriver/downloads](https://sites.google.com/a/chromium.org/chromedriver/downloads)
* Firefox：[https://github.com/mozilla/geckodriver/releases](https://github.com/mozilla/geckodriver/releases)
* Edge：[https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)
* Safari：[https://webkit.org/blog/6900/webdriver-support-in-safari-10/](https://webkit.org/blog/6900/webdriver-support-in-safari-10/)

## 安装 `selenium` + `chromedriver`

* 安装selenium：selenium有很多语言的版本，有java、ruby、python等 `pip install selenium`
* 安装chromedriver：下载和自己浏览器版本对应的文件，放到不需要权限的纯英文目录下就可以了

## 简单使用

以一个简单的获取百度首页的例子使用 selenium和chromedriver

```python
from selenium import webdriver

# chromedriver的绝对路径
driver_path = r'D:\Program Files\chromedriver\chromedriver.exe'

# 初始化一个driver，并且指定chromedriver的路径
driver = webdriver.Chrome(executable_path=driver_path)

# 请求网页
driver.get('https://www.meowv.com/')

# 通过page_source获取网页源代码
print(driver.page_source)
```

## selenium 常用的操作

官方文档：[https://selenium-python.readthedocs.io/installation.html\#introduction](https://selenium-python.readthedocs.io/installation.html#introduction)

### 关闭页面

* `driver.close()`：关闭当前页面
* `driver.quit()`：退出整个浏览器

### 定位元素

* `find_element_by_id`：根据id来查找某个元素

```python
submitTag = driver.find_element_by_id('su')
submitTag1 = driver.find_element(By.ID,'su')
```

* `find_element_by_class_name`：根据类名查找元素

```python
submitTag = driver.find_element_by_class_name('su')
submitTag1 = driver.find_element(By.CLASS_NAME,'su')
```

* `find_element_by_name`：根据name属性的值来查找元素

```python
submitTag = driver.find_element_by_name('email')
submitTag1 = driver.find_element(By.NAME,'email')
```

* `find_element_by_tag_name`：根据标签名来查找元素

```python
submitTag = driver.find_element_by_tag_name('div')
submitTag1 = driver.find_element(By.TAG_NAME,'div')
```

* `find_element_by_xpath`：根据xpath语法来获取元素

```python
submitTag = driver.find_element_by_xpath('//div')
submitTag1 = driver.find_element(By.XPATH,'//div')
```

* `find_element_by_css_selector`：根据css选择器选择元素

```python
submitTag = driver.find_element_by_css_selector('//div')
submitTag1 = driver.find_element(By.CSS_SELECTOR,'//div')
```

* `find_element` 是获取第一个满足条件的元素
* `find_elements` 是获取所有满足条件的元素

### 操作表单元素

* 操作输入框：分为两步。第一步：找到这个元素。第二步：使用`send_keys(value)`，将数据填充进去

```python
inputTag = driver.find_element_by_id('kw')
inputTag.send_keys('python')
```

使用`clear`方法可以清除输入框中的内容 `inputTag.clear()`

* 操作checkbox：因为要选中checkbox标签，在网页中是通过鼠标点击的。因此想要选中checkbox标签，那么先选中这个标签，然后执行click事件

```python
rememberTag = driver.find_element_by_name("rememberMe")
rememberTag.click()
```

* 选择select：select元素不能直接点击。因为点击后还需要选中元素。这时候selenium就专门为select标签提供了一个类selenium.webdriver.support.ui.Select。将获取到的元素当成参数传到这个类中，创建这个对象。以后就可以使用这个对象进行选择了

```python
from selenium.webdriver.support.ui import Select
# 选中这个标签，然后使用Select创建对象
selectTag = Select(driver.find_element_by_id("city-select"))
# 根据索引选择
selectTag.select_by_index(1)
# 根据值选择
selectTag.select_by_value("https://news.hao123.com/wangzhi")
# 根据可视的文本选择
selectTag.select_by_visible_text("上海")
# 取消选中所有选项
selectTag.deselect_all()
```

* 操作按钮：操作按钮有很多种方式。比如单击、右击、双击等。这里讲一个最常用的。就是点击。直接调用click函数就可以了

```python
inputTag = driver.find_element_by_id('su')
inputTag.click()
```

### 行为链

有时候在页面中的操作可能要有很多步，那么这时候可以使用鼠标行为链类ActionChains来完成。比如现在要将鼠标移动到某个元素上并执行点击事件

```python
inputTag = driver.find_element_by_id('kw')
submitTag = driver.find_element_by_id('su')

actions = ActionChains(driver)
actions.move_to_element(inputTag)
actions.send_keys_to_element(inputTag,'python')
actions.move_to_element(submitTag)
actions.click(submitTag)
actions.perform()
```

还有更多的鼠标相关的操作

* `click_and_hold(element)`：点击但不松开鼠标
* `context_click(element)`：右键点击
* `double_click(element)`：双击
* 更多方法请参考：[http://selenium-python.readthedocs.io/api.html](http://selenium-python.readthedocs.io/api.html)

### Cookie操作

* 获取所有的cookie

```python
for cookie in driver.get_cookies():
    print(cookie)
```

-根据cookie的key获取value

```python
value = driver.get_cookie(key)
```

* 删除所有的cookie：

```python
driver.delete_all_cookies()
```

* 删除某个cookie：

```python
driver.delete_cookie(key)
```

### 页面等待

现在的网页越来越多采用了 Ajax 技术，这样程序便不能确定何时某个元素完全加载出来了。如果实际页面等待时间过长导致某个dom元素还没出来，但是你的代码直接使用了这个WebElement，那么就会抛出NullPointer的异常。为了解决这个问题。所以 selenium 提供了两种等待方式：一种是隐式等待、一种是显式等待。

* 隐式等待：调用driver.implicitly\_wait。那么在获取不可用的元素之前，会先等待10秒中的时间。

```python
driver = webdriver.Chrome(executable_path=driver_path)
driver.implicitly_wait(10)
# 请求网页
driver.get("https://www.douban.com/")
```

* 显示等待：显示等待是表明某个条件成立后才执行获取元素的操作。也可以在等待的时候指定一个最大的时间，如果超过这个时间那么就抛出一个异常。显示等待应该使用selenium.webdriver.support.excepted\_conditions期望的条件和selenium.webdriver.support.ui.WebDriverWait来配合完成.

```python
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

driver_path = r'D:\Program Files\chromedriver\chromedriver.exe'
driver = webdriver.Chrome(executable_path=driver_path)

driver.get('https://www.douban.com/')
driver.implicitly_wait(20)

element = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.NAME, 'phone'))
)
print(element)
```

* 一些其他的等待条件
  * `presence_of_element_located`：某个元素已经加载完毕了
  * `presence_of_all_emement_located`：网页中所有满足条件的元素都加载完毕了
  * `element_to_be_cliable`：某个元素是可以点击了
  * 更多条件请参考：[http://selenium-python.readthedocs.io/waits.html](http://selenium-python.readthedocs.io/waits.html)

### 切换页面

有时候窗口中有很多子tab页面。这时候肯定是需要进行切换的。selenium提供了一个叫做switch\_to\_window来进行切换，具体切换到哪个页面，可以从driver.window\_handles中找到。

```python
# 打开一个新的页面
self.driver.execute_script("window.open('"+url+"')")
# 切换到这个新的页面中
self.driver.switch_to_window(self.driver.window_handles[1])
```

### 设置代理ip

有时候频繁爬取一些网页。服务器发现你是爬虫后会封掉你的ip地址。这时候我们可以更改代理ip。更改代理ip，不同的浏览器有不同的实现方式。这里以Chrome浏览器为例

```python
from selenium import webdriver

options = webdriver.ChromeOptions()
options.add_argument("--proxy-server=http://132.232.126.92:8888")
driver_path = r"D:\Program Files\chromedriver\chromedriver.exe"
driver = webdriver.Chrome(executable_path=driver_path,chrome_options=options)

driver.get('http://httpbin.org/ip')
```

### WebElement元素

from selenium.webdriver.remote.webelement import WebElement类是每个获取出来的元素的所属类，它有一些常用的属性

* get\_attribute：这个标签的某个属性的值
* screentshot：获取当前页面的截图，这个方法只能在driver上使用，driver的对象类，是继承自WebElement
