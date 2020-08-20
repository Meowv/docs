# SQLite 查询语句

## 随机一条数据

```sql
SELECT * FROM "main"."table" ORDER BY RANDOM() LIMIT 1
```

## 分页

```sql
SELECT *,rowid FROM "main"."table" LIMIT 0,10
```

## 所有表

```sql
select * from sqlite_master
```
