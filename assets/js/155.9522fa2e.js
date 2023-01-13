(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{762:function(a,e,s){"use strict";s.r(e);var r=s(2),t=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[a._v("#")]),a._v(" Redis")]),a._v(" "),e("h2",{attrs:{id:"基本信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[a._v("#")]),a._v(" 基本信息")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Redis",target:"_blank",rel:"noopener noreferrer"}},[a._v("Redis"),e("OutboundLink")],1),a._v(" 是开源的内存 Key-Value 数据库实现。")]),a._v(" "),e("p",[a._v("该仓库位于 "),e("code",[a._v("https://hub.docker.com/_/redis/")]),a._v(" ，提供了 Redis 3.x ~ 6.x 各个版本的镜像。")]),a._v(" "),e("h2",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),e("p",[a._v("默认会在 "),e("code",[a._v("6379")]),a._v(" 端口启动数据库。")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" some-redis "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6379")]),a._v(":6379 redis\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("另外还可以启用 "),e("a",{attrs:{href:"https://redis.io/topics/persistence",target:"_blank",rel:"noopener noreferrer"}},[a._v("持久存储"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" some-redis "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6379")]),a._v(":6379 redis redis-server "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--appendonly")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yes")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("默认数据存储位置在 "),e("code",[a._v("VOLUME/data")]),a._v("。可以使用 "),e("code",[a._v("--volumes-from some-volume-container")]),a._v(" 或 "),e("code",[a._v("-v /docker/host/dir:/data")]),a._v(" 将数据存放到本地。")]),a._v(" "),e("p",[a._v("使用其他应用连接到容器，可以用")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" some-app "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--link")]),a._v(" some-redis:redis "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" application-that-uses-redis\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("或者通过 "),e("code",[a._v("redis-cli")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--rm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--link")]),a._v(" some-redis:redis "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    redis "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'exec redis-cli -h "$REDIS_PORT_6379_TCP_ADDR" -p "$REDIS_PORT_6379_TCP_PORT"\'')]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h2",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[a._v("#")]),a._v(" Dockerfile")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/docker-library/docs/tree/master/redis",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/docker-library/docs/tree/master/redis"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=t.exports}}]);