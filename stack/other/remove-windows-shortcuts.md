# 移除 Windows 图标快捷方式小箭头

```shell
reg delete "HKEY_CLASSES_ROOT\lnkfile" /v IsShortcut /f & taskkill /f /im explorer.exe & start explorer.exe
```

以管理员身份打开终端，键入以上代码即可。
