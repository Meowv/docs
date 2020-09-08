# .NET Core 下的 API 网关

## 网关介绍

网关其实就是将我们写好的API全部放在一个统一的地址暴漏在公网，提供访问的一个入口。在 .NET Core下可以使用`Ocelot`来帮助我们很方便的接入API 网关。与之类似的库还有[`ProxyKit`](https://github.com/proxykit/ProxyKit)，微软也发布了一个反向代理的库[`YARP`](https://github.com/microsoft/reverse-proxy)。

关于网关的介绍不多说了，网上文章也挺多的，这些都是不错的选择，听说后期`Ocelot`将会使用`YARP`来重写。本篇主要实践一下在.NET Core环境下使用`Ocelot`。

- Ocelot官网：<https://threemammals.com/ocelot>
- Ocelot文档：<https://ocelot.readthedocs.io>
- GitHub：<https://github.com/ThreeMammals/Ocelot>
- Ocelot资源汇总：<https://www.cnblogs.com/shanyou/p/10363360.html>

## 接入使用
