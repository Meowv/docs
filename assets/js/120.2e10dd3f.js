(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{811:function(s,a,t){"use strict";t.r(a);var r=t(11),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"常见问题总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题总结"}},[s._v("#")]),s._v(" 常见问题总结")]),s._v(" "),t("h2",{attrs:{id:"镜像相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像相关"}},[s._v("#")]),s._v(" 镜像相关")]),s._v(" "),t("h3",{attrs:{id:"如何批量清理临时镜像文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何批量清理临时镜像文件"}},[s._v("#")]),s._v(" 如何批量清理临时镜像文件")]),s._v(" "),t("p",[s._v("答：可以使用 "),t("code",[s._v("docker image prune")]),s._v(" 命令。")]),s._v(" "),t("h3",{attrs:{id:"如何查看镜像支持的环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何查看镜像支持的环境变量"}},[s._v("#")]),s._v(" 如何查看镜像支持的环境变量")]),s._v(" "),t("p",[s._v("答：可以使用 "),t("code",[s._v("docker run IMAGE env")]),s._v(" 命令。")]),s._v(" "),t("h3",{attrs:{id:"本地的镜像文件都存放在哪里"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地的镜像文件都存放在哪里"}},[s._v("#")]),s._v(" 本地的镜像文件都存放在哪里")]),s._v(" "),t("p",[s._v("答：与 Docker 相关的本地资源默认存放在 "),t("code",[s._v("/var/lib/docker/")]),s._v(" 目录下，以 "),t("code",[s._v("overlay2")]),s._v(" 文件系统为例，其中 "),t("code",[s._v("containers")]),s._v(" 目录存放容器信息，"),t("code",[s._v("image")]),s._v(" 目录存放镜像信息，"),t("code",[s._v("overlay2")]),s._v(" 目录下存放具体的镜像层文件。")]),s._v(" "),t("h3",{attrs:{id:"构建-docker-镜像应该遵循哪些原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建-docker-镜像应该遵循哪些原则"}},[s._v("#")]),s._v(" 构建 Docker 镜像应该遵循哪些原则")]),s._v(" "),t("p",[s._v("答：整体原则上，尽量保持镜像功能的明确和内容的精简，要点包括")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("尽量选取满足需求但较小的基础系统镜像，例如大部分时候可以选择 "),t("code",[s._v("alpine")]),s._v(" 镜像，仅有不足六兆大小；")])]),s._v(" "),t("li",[t("p",[s._v("清理编译生成文件、安装包的缓存等临时文件；")])]),s._v(" "),t("li",[t("p",[s._v("安装各个软件时候要指定准确的版本号，并避免引入不需要的依赖；")])]),s._v(" "),t("li",[t("p",[s._v("从安全角度考虑，应用要尽量使用系统的库和依赖；")])]),s._v(" "),t("li",[t("p",[s._v("如果安装应用时候需要配置一些特殊的环境变量，在安装后要还原不需要保持的变量值；")])]),s._v(" "),t("li",[t("p",[s._v("使用 Dockerfile 创建镜像时候要添加 .dockerignore 文件或使用干净的工作目录。")])])]),s._v(" "),t("p",[s._v("更多内容请查看 "),t("RouterLink",{attrs:{to:"/stack/docker/best_practices/"}},[s._v("Dockerfile 最佳实践")])],1),s._v(" "),t("h3",{attrs:{id:"碰到网络问题-无法-pull-镜像-命令行指定-http-proxy-无效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#碰到网络问题-无法-pull-镜像-命令行指定-http-proxy-无效"}},[s._v("#")]),s._v(" 碰到网络问题，无法 pull 镜像，命令行指定 http_proxy 无效")]),s._v(" "),t("p",[s._v("答：在 Docker 配置文件中添加 "),t("code",[s._v('export http_proxy="http://<PROXY_HOST>:<PROXY_PORT>"')]),s._v("，之后重启 Docker 服务即可。")]),s._v(" "),t("h2",{attrs:{id:"容器相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器相关"}},[s._v("#")]),s._v(" 容器相关")]),s._v(" "),t("h3",{attrs:{id:"容器退出后-通过-docker-container-ls-命令查看不到-数据会丢失么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器退出后-通过-docker-container-ls-命令查看不到-数据会丢失么"}},[s._v("#")]),s._v(" 容器退出后，通过 docker container ls 命令查看不到，数据会丢失么")]),s._v(" "),t("p",[s._v("答：容器退出后会处于终止（exited）状态，此时可以通过 "),t("code",[s._v("docker container ls -a")]),s._v(" 查看。其中的数据也不会丢失，还可以通过 "),t("code",[s._v("docker start")]),s._v(" 命令来启动它。只有删除掉容器才会清除所有数据。")]),s._v(" "),t("h3",{attrs:{id:"如何停止所有正在运行的容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何停止所有正在运行的容器"}},[s._v("#")]),s._v(" 如何停止所有正在运行的容器")]),s._v(" "),t("p",[s._v("答：可以使用 "),t("code",[s._v("docker stop $(docker container ls -q)")]),s._v(" 命令。")]),s._v(" "),t("h3",{attrs:{id:"如何批量清理已经停止的容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何批量清理已经停止的容器"}},[s._v("#")]),s._v(" 如何批量清理已经停止的容器")]),s._v(" "),t("p",[s._v("答：可以使用 "),t("code",[s._v("docker container prune")]),s._v(" 命令。")]),s._v(" "),t("h3",{attrs:{id:"如何获取某个容器的-pid-信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何获取某个容器的-pid-信息"}},[s._v("#")]),s._v(" 如何获取某个容器的 PID 信息")]),s._v(" "),t("p",[s._v("答：可以使用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker inspect --format "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{ .State.Pid }}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CONTAINER ID or NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"如何获取某个容器的-ip-地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何获取某个容器的-ip-地址"}},[s._v("#")]),s._v(" 如何获取某个容器的 IP 地址")]),s._v(" "),t("p",[s._v("答：可以使用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker inspect --format "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{ .NetworkSettings.IPAddress }}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CONTAINER ID or NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"如何给容器指定一个固定-ip-地址-而不是每次重启容器-ip-地址都会变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何给容器指定一个固定-ip-地址-而不是每次重启容器-ip-地址都会变"}},[s._v("#")]),s._v(" 如何给容器指定一个固定 IP 地址，而不是每次重启容器 IP 地址都会变")]),s._v(" "),t("p",[s._v("答：使用以下命令启动容器可以使容器 IP 固定不变")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker network create -d bridge --subnet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.25")]),s._v(".0.0/16 my-net\n\ndocker run --network"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my-net --ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.25")]),s._v(".3.3 -itd --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my-container busybox\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"如何临时退出一个正在交互的容器的终端-而不终止它"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何临时退出一个正在交互的容器的终端-而不终止它"}},[s._v("#")]),s._v(" 如何临时退出一个正在交互的容器的终端，而不终止它")]),s._v(" "),t("p",[s._v("答：按 "),t("code",[s._v("Ctrl-p Ctrl-q")]),s._v("。如果按 "),t("code",[s._v("Ctrl-c")]),s._v(" 往往会让容器内应用进程终止，进而会终止容器。")]),s._v(" "),t("h3",{attrs:{id:"使用-docker-port-命令映射容器的端口时-系统报错-error-no-public-port-80-published-for-xxx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-port-命令映射容器的端口时-系统报错-error-no-public-port-80-published-for-xxx"}},[s._v("#")]),s._v(" 使用 "),t("code",[s._v("docker port")]),s._v(" 命令映射容器的端口时，系统报错“Error: No public port '80' published for xxx”")]),s._v(" "),t("p",[s._v("答：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("创建镜像时 "),t("code",[s._v("Dockerfile")]),s._v(" 要通过 "),t("code",[s._v("EXPOSE")]),s._v(" 指定正确的开放端口；")])]),s._v(" "),t("li",[t("p",[s._v("容器启动时指定 "),t("code",[s._v("PublishAllPort = true")]),s._v("。")])])]),s._v(" "),t("h3",{attrs:{id:"可以在一个容器中同时运行多个应用进程么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可以在一个容器中同时运行多个应用进程么"}},[s._v("#")]),s._v(" 可以在一个容器中同时运行多个应用进程么")]),s._v(" "),t("p",[s._v("答：一般并不推荐在同一个容器内运行多个应用进程。如果有类似需求，可以通过一些额外的进程管理机制，比如 "),t("code",[s._v("supervisord")]),s._v(" 来管理所运行的进程。可以参考 "),t("a",{attrs:{href:"https://docs.docker.com/config/containers/multi-service_container/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.docker.com/config/containers/multi-service_container/"),t("OutboundLink")],1),s._v(" 。")]),s._v(" "),t("h3",{attrs:{id:"如何控制容器占用系统资源-cpu、内存-的份额"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何控制容器占用系统资源-cpu、内存-的份额"}},[s._v("#")]),s._v(" 如何控制容器占用系统资源（CPU、内存）的份额")]),s._v(" "),t("p",[s._v("答：在使用 "),t("code",[s._v("docker create")]),s._v(" 命令创建容器或使用 "),t("code",[s._v("docker run")]),s._v(" 创建并启动容器的时候，可以使用 -c|--cpu-shares[=0] 参数来调整容器使用 CPU 的权重；使用 -m|--memory[=MEMORY] 参数来调整容器使用内存的大小。")]),s._v(" "),t("h2",{attrs:{id:"仓库相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#仓库相关"}},[s._v("#")]),s._v(" 仓库相关")]),s._v(" "),t("h3",{attrs:{id:"仓库-repository-、注册服务器-registry-、注册索引-index-有何关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#仓库-repository-、注册服务器-registry-、注册索引-index-有何关系"}},[s._v("#")]),s._v(" 仓库（Repository）、注册服务器（Registry）、注册索引（Index） 有何关系")]),s._v(" "),t("p",[s._v("首先，仓库是存放一组关联镜像的集合，比如同一个应用的不同版本的镜像。")]),s._v(" "),t("p",[s._v("注册服务器是存放实际的镜像文件的地方。注册索引则负责维护用户的账号、权限、搜索、标签等的管理。因此，注册服务器利用注册索引来实现认证等管理。")]),s._v(" "),t("h2",{attrs:{id:"配置相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置相关"}},[s._v("#")]),s._v(" 配置相关")]),s._v(" "),t("h3",{attrs:{id:"docker-的配置文件放在哪里-如何修改配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-的配置文件放在哪里-如何修改配置"}},[s._v("#")]),s._v(" Docker 的配置文件放在哪里，如何修改配置")]),s._v(" "),t("p",[s._v("答：使用 "),t("code",[s._v("systemd")]),s._v(" 的系统（如 Ubuntu 16.04、Centos 等）的配置文件在 "),t("code",[s._v("/etc/docker/daemon.json")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"如何更改-docker-的默认存储位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何更改-docker-的默认存储位置"}},[s._v("#")]),s._v(" 如何更改 Docker 的默认存储位置")]),s._v(" "),t("p",[s._v("答：Docker 的默认存储位置是 "),t("code",[s._v("/var/lib/docker")]),s._v("，如果希望将 Docker 的本地文件存储到其他分区，可以使用 Linux 软连接的方式来完成，或者在启动 daemon 时通过 "),t("code",[s._v("-g")]),s._v(" 参数指定，或者修改配置文件 "),t("code",[s._v("/etc/docker/daemon.json")]),s._v(' 的 "data-root" 项 。可以使用 '),t("code",[s._v('docker system info | grep "Root Dir"')]),s._v(" 查看当前使用的存储位置。")]),s._v(" "),t("p",[s._v("例如，如下操作将默认存储位置迁移到 /storage/docker。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@s26 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -h")]),s._v("\nFilesystem                    Size  Used Avail Use% Mounted on\n/dev/mapper/VolGroup-lv_root   50G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".3G   42G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("% /\ntmpfs                          48G  228K   48G   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /dev/shm\n/dev/sda1                     485M   40M  420M   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("% /boot\n/dev/mapper/VolGroup-lv_home  222G  188M  210G   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /home\n/dev/sdb2                     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".7T  323G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".3T  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("% /storage\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@s26 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service docker stop")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@s26 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /var/lib/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@s26 lib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv docker /storage/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@s26 lib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ln -s /storage/docker/ docker")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@s26 lib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -la docker")]),s._v("\nlrwxrwxrwx. "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("月 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":43 docker -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /storage/docker\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@s26 lib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service docker start")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"使用内存和-swap-限制启动容器时候报警告-warning-your-kernel-does-not-support-cgroup-swap-limit-warning-your-kernel-does-not-support-swap-limit-capabilities-limitation-discarded"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用内存和-swap-限制启动容器时候报警告-warning-your-kernel-does-not-support-cgroup-swap-limit-warning-your-kernel-does-not-support-swap-limit-capabilities-limitation-discarded"}},[s._v("#")]),s._v(' 使用内存和 swap 限制启动容器时候报警告："WARNING: Your kernel does not support cgroup swap limit. WARNING: Your kernel does not support swap limit capabilities. Limitation discarded."')]),s._v(" "),t("p",[s._v("答：这是因为系统默认没有开启对内存和 swap 使用的统计功能，引入该功能会带来性能的下降。要开启该功能，可以采取如下操作：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("编辑 "),t("code",[s._v("/etc/default/grub")]),s._v(" 文件（Ubuntu 系统为例），配置 "),t("code",[s._v('GRUB_CMDLINE_LINUX="cgroup_enable=memory swapaccount=1"')])])]),s._v(" "),t("li",[t("p",[s._v("更新 grub："),t("code",[s._v("$ sudo update-grub")])])]),s._v(" "),t("li",[t("p",[s._v("重启系统，即可。")])])]),s._v(" "),t("h2",{attrs:{id:"docker-与虚拟化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-与虚拟化"}},[s._v("#")]),s._v(" Docker 与虚拟化")]),s._v(" "),t("h3",{attrs:{id:"docker-与-lxc-linux-container-有何不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-与-lxc-linux-container-有何不同"}},[s._v("#")]),s._v(" Docker 与 LXC（Linux Container）有何不同")]),s._v(" "),t("p",[s._v("答：LXC 利用 Linux 上相关技术实现了容器。Docker 则在如下的几个方面进行了改进：")]),s._v(" "),t("ul",[t("li",[s._v("移植性：通过抽象容器配置，容器可以实现从一个平台移植到另一个平台；")]),s._v(" "),t("li",[s._v("镜像系统：基于 OverlayFS 的镜像系统为容器的分发带来了很多的便利，同时共同的镜像层只需要存储一份，实现高效率的存储；")]),s._v(" "),t("li",[s._v("版本管理：类似于Git的版本管理理念，用户可以更方便的创建、管理镜像文件；")]),s._v(" "),t("li",[s._v("仓库系统：仓库系统大大降低了镜像的分发和管理的成本；")]),s._v(" "),t("li",[s._v("周边工具：各种现有工具（配置管理、云平台）对 Docker 的支持，以及基于 Docker的 PaaS、CI 等系统，让 Docker 的应用更加方便和多样化。")])]),s._v(" "),t("h3",{attrs:{id:"docker-与-vagrant-有何不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-与-vagrant-有何不同"}},[s._v("#")]),s._v(" Docker 与 Vagrant 有何不同")]),s._v(" "),t("p",[s._v("答：两者的定位完全不同。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Vagrant 类似 Boot2Docker（一款运行 Docker 的最小内核），是一套虚拟机的管理环境。Vagrant 可以在多种系统上和虚拟机软件中运行，可以在 Windows，Mac 等非 Linux 平台上为 Docker 提供支持，自身具有较好的包装性和移植性。")])]),s._v(" "),t("li",[t("p",[s._v("原生的 Docker 自身只能运行在 Linux 平台上，但启动和运行的性能都比虚拟机要快，往往更适合快速开发和部署应用的场景。")])])]),s._v(" "),t("p",[s._v("简单说：Vagrant 适合用来管理虚拟机，而 Docker 适合用来管理应用环境。")]),s._v(" "),t("h3",{attrs:{id:"开发环境中-docker-和-vagrant-该如何选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发环境中-docker-和-vagrant-该如何选择"}},[s._v("#")]),s._v(" 开发环境中 Docker 和 Vagrant 该如何选择")]),s._v(" "),t("p",[s._v("答：Docker 不是虚拟机，而是进程隔离，对于资源的消耗很少，但是目前需要 Linux 环境支持。Vagrant 是虚拟机上做的封装，虚拟机本身会消耗资源。")]),s._v(" "),t("p",[s._v("如果本地使用的 Linux 环境，推荐都使用 Docker。")]),s._v(" "),t("p",[s._v("如果本地使用的是 macOS 或者 Windows 环境，那就需要开虚拟机，单一开发环境下 Vagrant 更简单；多环境开发下推荐在 Vagrant 里面再使用 Docker 进行环境隔离。")]),s._v(" "),t("h2",{attrs:{id:"其它"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[s._v("#")]),s._v(" 其它")]),s._v(" "),t("h3",{attrs:{id:"docker-能在非-linux-平台-比如-windows-或-macos-上运行么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-能在非-linux-平台-比如-windows-或-macos-上运行么"}},[s._v("#")]),s._v(" Docker 能在非 Linux 平台（比如 Windows 或 macOS ）上运行么")]),s._v(" "),t("p",[s._v("答：完全可以。安装方法请查看 "),t("RouterLink",{attrs:{to:"/stack/docker/install/windows.html"}},[s._v("安装 Docker")]),s._v(" 一节")],1),s._v(" "),t("h3",{attrs:{id:"如何将一台宿主主机的-docker-环境迁移到另外一台宿主主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何将一台宿主主机的-docker-环境迁移到另外一台宿主主机"}},[s._v("#")]),s._v(" 如何将一台宿主主机的 Docker 环境迁移到另外一台宿主主机")]),s._v(" "),t("p",[s._v("答：停止 Docker 服务。将整个 Docker 存储文件夹复制到另外一台宿主主机，然后调整另外一台宿主主机的配置即可。")]),s._v(" "),t("h3",{attrs:{id:"如何进入-docker-容器的网络命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何进入-docker-容器的网络命名空间"}},[s._v("#")]),s._v(" 如何进入 Docker 容器的网络命名空间")]),s._v(" "),t("p",[s._v("答：Docker 在创建容器后，删除了宿主主机上 "),t("code",[s._v("/var/run/netns")]),s._v(" 目录中的相关的网络命名空间文件。因此，在宿主主机上是无法看到或访问容器的网络命名空间的。")]),s._v(" "),t("p",[s._v("用户可以通过如下方法来手动恢复它。")]),s._v(" "),t("p",[s._v("首先，使用下面的命令查看容器进程信息，比如这里的 1234。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker inspect --format"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{. State.Pid}} '")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$container_id")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("接下来，在 "),t("code",[s._v("/proc")]),s._v(" 目录下，把对应的网络命名空间文件链接到 "),t("code",[s._v("/var/run/netns")]),s._v(" 目录。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /proc/1234/ns/net /var/run/netns/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后，在宿主主机上就可以看到容器的网络命名空间信息。例如")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" netns show\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("此时，用户可以通过正常的系统命令来查看或操作容器的命名空间了。例如修改容器的 IP 地址信息为 "),t("code",[s._v("172.17.0.100/16")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" netns "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" eth0 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.100/16\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"如何获取容器绑定到本地那个-veth-接口上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何获取容器绑定到本地那个-veth-接口上"}},[s._v("#")]),s._v(" 如何获取容器绑定到本地那个 veth 接口上")]),s._v(" "),t("p",[s._v("答：Docker 容器启动后，会通过 veth 接口对连接到本地网桥，veth 接口命名跟容器命名毫无关系，十分难以找到对应关系。")]),s._v(" "),t("p",[s._v("最简单的一种方式是通过查看接口的索引号，在容器中执行 "),t("code",[s._v("ip a")]),s._v(" 命令，查看到本地接口最前面的接口索引号，如 "),t("code",[s._v("205")]),s._v("，将此值加上 1，即 "),t("code",[s._v("206")]),s._v("，然后在本地主机执行 "),t("code",[s._v("ip a")]),s._v(" 命令，查找接口索引号为 "),t("code",[s._v("206")]),s._v(" 的接口，两者即为连接的 veth 接口对。")])])}),[],!1,null,null,null);a.default=e.exports}}]);