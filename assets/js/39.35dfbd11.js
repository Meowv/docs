(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{575:function(s,e,a){s.exports=a.p+"assets/img/images-mac-example-nginx.d313e45f.png"},576:function(s,e,a){s.exports=a.p+"assets/img/images-create-nginx-docker.ee39987b.png"},712:function(s,e,a){"use strict";a.r(e);var n=a(12),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"利用-commit-理解镜像构成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#利用-commit-理解镜像构成"}},[s._v("#")]),s._v(" 利用 commit 理解镜像构成")]),s._v(" "),n("blockquote",[n("p",[s._v("注意：如果您是初学者，您可以暂时跳过后面的内容，直接学习 "),n("a",{attrs:{href:"../container/run"}},[s._v("容器")]),s._v(" 一节。")])]),s._v(" "),n("p",[s._v("注意： "),n("code",[s._v("docker commit")]),s._v(" 命令除了学习之外，还有一些特殊的应用场合，比如被入侵后保存现场等。但是，不要使用 "),n("code",[s._v("docker commit")]),s._v(" 定制镜像，定制镜像应该使用 "),n("code",[s._v("Dockerfile")]),s._v(" 来完成。如果你想要定制镜像请查看下一小节。")]),s._v(" "),n("p",[s._v("镜像是容器的基础，每次执行 "),n("code",[s._v("docker run")]),s._v(" 的时候都会指定哪个镜像作为容器运行的基础。在之前的例子中，我们所使用的都是来自于 Docker Hub 的镜像。直接使用这些镜像是可以满足一定的需求，而当这些镜像无法直接满足需求时，我们就需要定制这些镜像。接下来的几节就将讲解如何定制镜像。")]),s._v(" "),n("p",[s._v("回顾一下之前我们学到的知识，镜像是多层存储，每一层是在前一层的基础上进行的修改；而容器同样也是多层存储，是在以镜像为基础层，在其基础上加一层作为容器运行时的存储层。")]),s._v(" "),n("p",[s._v("现在让我们以定制一个 Web 服务器为例子，来讲解镜像是如何构建的。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("docker run --name webserver -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这条命令会用 "),n("code",[s._v("nginx")]),s._v(" 镜像启动一个容器，命名为 "),n("code",[s._v("webserver")]),s._v("，并且映射了 80 端口，这样我们可以用浏览器去访问这个 "),n("code",[s._v("nginx")]),s._v(" 服务器。")]),s._v(" "),n("p",[s._v("如果是在 Linux 本机运行的 Docker，或者如果使用的是 Docker Desktop for Mac/Windows，那么可以直接访问："),n("a",{attrs:{href:"http://localhost",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost"),n("OutboundLink")],1),s._v("；如果使用的是 Docker Toolbox，或者是在虚拟机、云服务器上安装的 Docker，则需要将 "),n("code",[s._v("localhost")]),s._v(" 换为虚拟机地址或者实际云服务器地址。")]),s._v(" "),n("p",[s._v("直接用浏览器访问的话，我们会看到默认的 Nginx 欢迎页面。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(575),alt:" "}})]),s._v(" "),n("p",[s._v("现在，假设我们非常不喜欢这个欢迎页面，我们希望改成欢迎 Docker 的文字，我们可以使用 "),n("code",[s._v("docker exec")]),s._v(" 命令进入容器，修改其内容。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it webserver "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\nroot@3729b97e8226:/"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo '<h1>Hello, Docker!</h1>' > /usr/share/nginx/html/index.html")]),s._v("\nroot@3729b97e8226:/"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exit")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("我们以交互式终端方式进入 "),n("code",[s._v("webserver")]),s._v(" 容器，并执行了 "),n("code",[s._v("bash")]),s._v(" 命令，也就是获得一个可操作的 Shell。")]),s._v(" "),n("p",[s._v("然后，我们用 "),n("code",[s._v("<h1>Hello, Docker!</h1>")]),s._v(" 覆盖了 "),n("code",[s._v("/usr/share/nginx/html/index.html")]),s._v(" 的内容。")]),s._v(" "),n("p",[s._v("现在我们再刷新浏览器的话，会发现内容被改变了。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(576),alt:" "}})]),s._v(" "),n("p",[s._v("我们修改了容器的文件，也就是改动了容器的存储层。我们可以通过 "),n("code",[s._v("docker diff")]),s._v(" 命令看到具体的改动。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" webserver\nC /root\nA /root/.bash_history\nC /run\nC /usr\nC /usr/share\nC /usr/share/nginx\nC /usr/share/nginx/html\nC /usr/share/nginx/html/index.html\nC /var\nC /var/cache\nC /var/cache/nginx\nA /var/cache/nginx/client_temp\nA /var/cache/nginx/fastcgi_temp\nA /var/cache/nginx/proxy_temp\nA /var/cache/nginx/scgi_temp\nA /var/cache/nginx/uwsgi_temp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("现在我们定制好了变化，我们希望能将其保存下来形成镜像。")]),s._v(" "),n("p",[s._v("要知道，当我们运行一个容器的时候（如果不使用卷的话），我们做的任何文件修改都会被记录于容器存储层里。而 Docker 提供了一个 "),n("code",[s._v("docker commit")]),s._v(" 命令，可以将容器的存储层保存下来成为镜像。换句话说，就是在原有镜像的基础上，再叠加上容器的存储层，并构成新的镜像。以后我们运行这个新镜像的时候，就会拥有原有容器最后的文件变化。")]),s._v(" "),n("p",[n("code",[s._v("docker commit")]),s._v(" 的语法格式为：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("docker commit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("容器ID或容器名"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("仓库名"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("标签"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("我们可以用下面的命令将容器保存为镜像：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker commit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --author "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Tao Wang <twang2218@gmail.com>"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --message "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"修改了默认网页"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    webserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    nginx:v2\nsha256:07e33465974800ce65751acc279adc6ed2dc5ed4e0838f8b86f0c87aa1795214\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("其中 "),n("code",[s._v("--author")]),s._v(" 是指定修改的作者，而 "),n("code",[s._v("--message")]),s._v(" 则是记录本次修改的内容。这点和 "),n("code",[s._v("git")]),s._v(" 版本控制相似，不过这里这些信息可以省略留空。")]),s._v(" "),n("p",[s._v("我们可以在 "),n("code",[s._v("docker image ls")]),s._v(" 中看到这个新定制的镜像：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker image "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" nginx\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nnginx               v2                  07e334659748        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" seconds ago       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("181.5")]),s._v(" MB\nnginx               "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.11")]),s._v("                05a60462f8ba        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" days ago         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("181.5")]),s._v(" MB\nnginx               latest              e43d811ce2f4        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("181.5")]),s._v(" MB\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("我们还可以用 "),n("code",[s._v("docker history")]),s._v(" 具体查看镜像内的历史记录，如果比较 "),n("code",[s._v("nginx:latest")]),s._v(" 的历史记录，我们会发现新增了我们刚刚提交的这一层。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" nginx:v2\nIMAGE               CREATED             CREATED BY                                      SIZE                COMMENT\n07e334659748        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),s._v(" seconds ago      nginx -g daemon off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("95")]),s._v(" B                修改了默认网页\ne43d811ce2f4        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         /bin/sh -c "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#(nop)  CMD ["nginx" "-g" "daemon    0 B')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("missing"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         /bin/sh -c "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#(nop)  EXPOSE 443/tcp 80/tcp        0 B")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("missing"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         /bin/sh -c "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -sf /dev/stdout /var/log/nginx/   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" B\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("missing"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         /bin/sh -c apt-key adv --keyserver hkp://pgp.   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("58.46")]),s._v(" MB\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("missing"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         /bin/sh -c "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#(nop)  ENV NGINX_VERSION=1.11.5-1   0 B")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("missing"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         /bin/sh -c "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#(nop)  MAINTAINER NGINX Docker Ma   0 B")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("missing"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         /bin/sh -c "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#(nop)  CMD ["/bin/bash"]            0 B')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("missing"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         /bin/sh -c "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#(nop) ADD file:23aa4f893e3288698c   123 MB")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("新的镜像定制好后，我们可以来运行这个镜像。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("docker run --name web2 -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("81")]),s._v(":80 nginx:v2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这里我们命名为新的服务为 "),n("code",[s._v("web2")]),s._v("，并且映射到 "),n("code",[s._v("81")]),s._v(" 端口。如果是 Docker Desktop for Mac/Windows 或 Linux 桌面的话，我们就可以直接访问 "),n("a",{attrs:{href:"http://localhost:81",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:81"),n("OutboundLink")],1),s._v(" 看到结果，其内容应该和之前修改后的 "),n("code",[s._v("webserver")]),s._v(" 一样。")]),s._v(" "),n("p",[s._v("至此，我们第一次完成了定制镜像，使用的是 "),n("code",[s._v("docker commit")]),s._v(" 命令，手动操作给旧的镜像添加了新的一层，形成新的镜像，对镜像多层存储应该有了更直观的感觉。")]),s._v(" "),n("h2",{attrs:{id:"慎用-docker-commit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#慎用-docker-commit"}},[s._v("#")]),s._v(" 慎用 "),n("code",[s._v("docker commit")])]),s._v(" "),n("p",[s._v("使用 "),n("code",[s._v("docker commit")]),s._v(" 命令虽然可以比较直观的帮助理解镜像分层存储的概念，但是实际环境中并不会这样使用。")]),s._v(" "),n("p",[s._v("首先，如果仔细观察之前的 "),n("code",[s._v("docker diff webserver")]),s._v(" 的结果，你会发现除了真正想要修改的 "),n("code",[s._v("/usr/share/nginx/html/index.html")]),s._v(" 文件外，由于命令的执行，还有很多文件被改动或添加了。这还仅仅是最简单的操作，如果是安装软件包、编译构建，那会有大量的无关内容被添加进来，如果不小心清理，将会导致镜像极为臃肿。")]),s._v(" "),n("p",[s._v("此外，使用 "),n("code",[s._v("docker commit")]),s._v(" 意味着所有对镜像的操作都是黑箱操作，生成的镜像也被称为 "),n("strong",[s._v("黑箱镜像")]),s._v("，换句话说，就是除了制作镜像的人知道执行过什么命令、怎么生成的镜像，别人根本无从得知。而且，即使是这个制作镜像的人，过一段时间后也无法记清具体的操作。这种黑箱镜像的维护工作是非常痛苦的。")]),s._v(" "),n("p",[s._v("而且，回顾之前提及的镜像所使用的分层存储的概念，除当前层外，之前的每一层都是不会发生改变的，换句话说，任何修改的结果仅仅是在当前层进行标记、添加、修改，而不会改动上一层。如果使用 "),n("code",[s._v("docker commit")]),s._v(" 制作镜像，以及后期修改的话，每一次修改都会让镜像更加臃肿一次，所删除的上一层的东西并不会丢失，会一直如影随形的跟着这个镜像，即使根本无法访问到。这会让镜像更加臃肿。")])])}),[],!1,null,null,null);e.default=t.exports}}]);