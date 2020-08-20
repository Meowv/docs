# PowerShell批量重命名

批量重命名当前目录下文件和文件夹名称

```powershell
Get-Childitem | Rename-Item -NewName {$_.name -replace "oldname","newname"}
```

批量重命名当前目录及子目录下文件和文件夹名称

```powershell
Get-ChildItem . -recurse | Rename-Item -NewName {$_.name -replace "oldname","newname"}
```
