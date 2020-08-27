# .NET Core 下的爬虫利器

爬虫大家或多或少的都应该接触过的，爬虫有风险，抓数需谨慎。

本着研究学习的目的，记录一下在 .NET Core 下抓取数据的实际案例。爬虫代码一般具有时效性，当我们的目标发生改版升级，规则转换后我们写的爬虫代码就会失效，需要重新应对。抓取数据的主要思路就是去分析目标网站的页面逻辑，利用`xpath`、正则表达式等知识去解析网页拿到我们想要的数据。

本篇主要简单介绍三个组件的使用，`HtmlAgilityPack`、`AngleSharp`、`PuppeteerSharp`，前两个可以处理传统的页面，无法抓取单页应用，如果需要抓取单页应用可以使用`PuppeteerSharp`。

关于这三个组件库的实际应用可以参考一下[定时任务最佳实战](../../aspnetcore/abp-blog/task-processing-bestpractice-1.md)系列文章。

## HtmlAgilityPack

- <https://html-agility-pack.net/>
- <https://github.com/zzzprojects/html-agility-pack>

在项目中安装`HtmlAgilityPack`组件

```bash
Install-Package HtmlAgilityPack
```

## AngleSharp

- <https://anglesharp.github.io/>
- <https://github.com/AngleSharp/AngleSharp>

在项目中安装`AngleSharp`组件

```bash
Install-Package AngleSharp
```

## PuppeteerSharp

- <https://www.puppeteersharp.com/>
- <https://github.com/hardkoded/puppeteer-sharp>

`PuppeteerSharp`是基于`Puppeteer`的，`Puppeteer` 是一个Google 开源的NodeJS 库，它提供了一个高级API 来通过DevTools协议控制Chromium 浏览器。Puppeteer 默认以无头(Headless) 模式运行，但是可以通过修改配置运行“有头”模式。

`PuppeteerSharp`可以干很多事情，不光可以用来抓取单页应用，还可以用来生成页面PDF或者图片，可以做自动化测试等。

在项目中安装`PuppeteerSharp`组件

```bash
Install-Package PuppeteerSharp
```
