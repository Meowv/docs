# Python操作MySQL数据库

## win下安装MySQL

详细可参考 [Windows下MySQL安装流程，8.0以上版本ROOT密码报错及修改](../../storage/mysql/mysql-install.md)

## 安装驱动程序

python想要操作MySQL，必须要有一个中间件，或者叫做驱动程序，驱动程序有很多，mysqlclient、mysqldb、pymysql。我选择用pymysql，安装命令：`pip install pymysql`

## 连接数据库

```python
import pymysql

db = pymysql.connect(
    host="127.0.0.1",
    user='root',
    password='123456',
    database='pymysql_test',
    port=3306
)

cursor = db.cursor()
cursor.execute('select 1')

data = cursor.fetchone()
print(data)

db.close()
```

## 插入数据

```python
import pymysql

db = pymysql.connect(
    host="127.0.0.1",
    user='root',
    password='123456',
    database='pymysql_test',
    port=3306
)

cursor = db.cursor()

sql = """
    insert into user(id,username,gender,age,password) values(null,'abc',1,18,'111111');
"""

cursor.execute(sql)
db.commit()
db.close()
```

将数据作为参数的方式插入到数据库

```python
sql = """
    insert into user(id,username,gender,age,password) values(null,%s,%s,%s,%s);
"""

cursor.execute(sql,('spider',1,20,'222222'))
```

## 查找数据

使用pymysql查询数据，可以使用 fetch 方法

* fetchone\(\)：这个方法每次只获取一条数据
* fetchall\(\)：这个方法接收全部的返回结果
* fetchmany\(size\)：这个方法可以获取指定条数的数据

```python
cursor = db.cursor()

sql = """
    select * from user
"""

cursor.execute(sql)
while True:
    result = cursor.fetchone()
    if not result:
        break
    print(result)

db.close()
```

直接使用fetchall，一次性可以把所有满足条件的数据都取出来

```python
cursor = db.cursor()

sql = """
    select * from user
"""

cursor.execute(sql)
results = cursor.fetchall()
for result in results:
    print(result)

db.close()
```

使用fetchmany，指定获取多少条数据

```python
cursor = db.cursor()

sql = """
    select * from user
"""

cursor.execute(sql)
results = cursor.fetchmany(1)
for result in results:
    print(result)

db.close()
```

## 删除数据

```python
cursor = db.cursor()

sql = """
    delete from user where id=1
"""

cursor.execute(sql)
db.commit()

db.close()
```

## 更新数据

```python
conn = pymysql.connect(
    host="127.0.0.1",
    user='root',
    password='123456',
    database='pymysql_test',
    port=3306
)

sql = """
    update user set username='aaa' where id=1
"""
cursor.execute(sql)
conn.commit()

conn.close()
```
