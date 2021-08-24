# csv文件处理

## 读取csv文件

```python
import csv

with open('demo.csv', 'r') as fp:
    reader = csv.reader(fp)
    titles = next(reader)
    for x in reader:
        print(x)
```

这样操作以后获取数据的时候，就要通过下标来获取数据。如果想要在获取数据的时候通过标题来获取，那么就可以使用 DictReader

```python
import csv

with open('demo.csv', 'r') as fp:
    reader = csv.DictReader(fp)
    for x in reader:
        print(x['title'])
```

## 写入数据到csv文件

写入数据到csv文件，需要创建一个write对象，主要用到两个方法，一个是writerow写入一行，一个是writerows写入多行

```python
import csv

headers = ['name','age','classroom']
values = [
    ('aaa',18,'111'),
    ('bbb',19,'222'),
    ('ccc',20,'333')
]

with open('class.csv', 'w', newline='') as fp:
    writer = csv.writer(fp)
    writer.writerow(headers)
    writer.writerows(values)
```

也可以使用字典的方式把数据写入进去，这是需要使用DictWriter

```python
import csv

headers = ['name','age','classroom']
values = [
    {'name':'aaa','age':18,'classroom':'111'},
    {'name':'bbb','age':19,'classroom':'222'}
]

with open('class.csv', 'w', newline='') as fp:
    writer = csv.DictWriter(fp,headers)
    writer = csv.writeheader()
    writer.writerow({'name':'ccc','age':20,'classroom':'333'})
    writer.writerows(values)
```
