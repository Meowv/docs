# SQLServer

```bash
docker pull mcr.microsoft.com/mssql/server
docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=hackxing123456..' -p 1433:1433 --name mssql -d mcr.microsoft.com/mssql/server
```
