# .NET Core 使用 Consul 服务注册发现

`Consul`是一个用来实现分布式系统服务发现与配置的开源工具。它内置了服务注册与发现框架、分布一致性协议实现、健康检查、Key/Value存储、多数据中心方案，不再需要依赖其他工具，使用起来也较为简单。

- `Consul`官网：<https://www.consul.io>
- 开源地址：<https://github.com/hashicorp/consul>

## 安装

`Consul`支持各种平台的安装，安装文档：<https://www.consul.io/downloads>，为了快速使用，我这里选择用[docker方式安装](../docker/repo/consul.md)。

安装完成启动`Consul`，打开默认地址 <http://localhost:8500> 可以看到`Consul`ui界面。

![ ](./images/consul-01.png)

## 快速使用

### 服务注册

### 服务发现
