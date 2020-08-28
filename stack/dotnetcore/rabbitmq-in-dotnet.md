# .NET Core 下使用 RabbitMQ

## 介绍

RabbitMQ是一个开源的,基于AMQP(Advanced Message Queuing Protocol)协议的完整,可复用的企业级消息队列(Message Queue 一种应用程序与应用程序之间的一种通信方法)系统,RabbitMQ可以实现点对点,发布订阅等消息处理模式

- 官网：<https://www.rabbitmq.com/dotnet.html>
- 开源地址：<https://github.com/rabbitmq/rabbitmq-dotnet-client>

## 安装

- [docker下安装 RabbitMQ](../docker/repo/rabbitmq.md)
- [其他平台安装 RabbitMQ](https://www.rabbitmq.com/download.html)

为了开发方便，我在docker中安装了RabbitMQ，RabbitMQ安装完成后，默认端口打开地址为：`http://localhost:15672`，输入默认账号密码，guest/guest，可以看到RabbitMQ UI界面。

![ ](./images/rabbitmq-in-dotnet-01.png)

## 快速开始

在 .NET Core 项目中安装组件

```PowerShell
Install-Package RabbitMQ.Client
```

TODO...
