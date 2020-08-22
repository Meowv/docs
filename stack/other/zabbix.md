# Zabbix表结构

## Group，主机

```sql
SELECT g.groupid, g.name AS groupname, h.hostid, h.host, h.name AS hostname
FROM hosts h
    JOIN hosts_groups hg ON h.hostid = hg.hostid
    JOIN groups g ON hg.groupid = g.groupid
--WHERE g.groupid = 2
order by g.name
```

## 一个主机有哪些应用

```sql
SELECT *
FROM applications
WHERE hostid = 10292
```

## 应用有哪些Items

```sql
SELECT a.name AS application_name, a.applicationid, i.*
FROM items_applications ia
    JOIN items i ON i.itemid = ia.itemid
    JOIN applications a ON a.applicationid = ia.applicationid
WHERE a.applicationid = 1530
```

## 一个item的监控数据

```sql
SELECT FROM_UNIXTIME(clock), value
FROM history
WHERE (itemid = 33262
    AND FROM_UNIXTIME(clock) >= '2018-11-10 9:00:00'
    AND FROM_UNIXTIME(clock) <= '2018-11-10 10:00:00')
ORDER BY clock
```

## 按天的数据源可以查询trends表

```sql
SELECT FROM_UNIXTIME(clock), value_min, value_avg, value_max, num
FROM trends
WHERE (itemid = 33262
    AND FROM_UNIXTIME(clock) >= '2018-11-08 9:00:00'
    AND FROM_UNIXTIME(clock) <= '2018-11-10 10:00:00')
ORDER BY clock
```
