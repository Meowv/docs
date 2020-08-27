(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{791:function(e,s,a){"use strict";a.r(s);var r=a(12),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[e._v("#")]),e._v(" Redis")]),e._v(" "),a("h2",{attrs:{id:"基本信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[e._v("#")]),e._v(" 基本信息")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Redis",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis"),a("OutboundLink")],1),e._v(" 是开源的内存 Key-Value 数据库实现。")]),e._v(" "),a("p",[e._v("该仓库位于 "),a("code",[e._v("https://hub.docker.com/_/redis/")]),e._v(" ，提供了 Redis 3.x ~ 6.x 各个版本的镜像。")]),e._v(" "),a("h2",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[e._v("#")]),e._v(" 使用方法")]),e._v(" "),a("p",[e._v("默认会在 "),a("code",[e._v("6379")]),e._v(" 端口启动数据库。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run --name some-redis -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6379")]),e._v(":6379 redis\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("另外还可以启用 "),a("a",{attrs:{href:"https://redis.io/topics/persistence",target:"_blank",rel:"noopener noreferrer"}},[e._v("持久存储"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run --name some-redis -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6379")]),e._v(":6379 redis redis-server --appendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yes")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("默认数据存储位置在 "),a("code",[e._v("VOLUME/data")]),e._v("。可以使用 "),a("code",[e._v("--volumes-from some-volume-container")]),e._v(" 或 "),a("code",[e._v("-v /docker/host/dir:/data")]),e._v(" 将数据存放到本地。")]),e._v(" "),a("p",[e._v("使用其他应用连接到容器，可以用")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run --name some-app --link some-redis:redis -d application-that-uses-redis\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("或者通过 "),a("code",[e._v("redis-cli")])]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker run -it --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --link some-redis:redis "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    redis "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'exec redis-cli -h \""),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$REDIS_PORT_6379_TCP_ADDR")]),e._v('" -p "'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$REDIS_PORT_6379_TCP_PORT")]),e._v("\"'")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[e._v("#")]),e._v(" Dockerfile")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/docker-library/docs/tree/master/redis",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/docker-library/docs/tree/master/redis"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=t.exports}}]);