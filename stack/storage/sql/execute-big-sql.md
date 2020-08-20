# SqlServer 执行超大sql文件

```sql
osql -S 127.0.0.1 -U sa -P 123456 -i d:\test.sql
```

osql为SQL Server的命令，在cmd中执行该命令，一般安装完SQL Server后该命令对应的路径会自动添加到系统环境变量中

* S 表示要连接的数据库服务器
* U 表示登录的用户ID
* P 表示登录密码
* i 表示要执行的脚本文件路径
