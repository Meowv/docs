(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{742:function(s,t,e){"use strict";e.r(t);var a=e(12),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"add-更高级的复制文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-更高级的复制文件"}},[s._v("#")]),s._v(" ADD 更高级的复制文件")]),s._v(" "),e("p",[e("code",[s._v("ADD")]),s._v(" 指令和 "),e("code",[s._v("COPY")]),s._v(" 的格式和性质基本一致。但是在 "),e("code",[s._v("COPY")]),s._v(" 基础上增加了一些功能。")]),s._v(" "),e("p",[s._v("比如 "),e("code",[s._v("<源路径>")]),s._v(" 可以是一个 "),e("code",[s._v("URL")]),s._v("，这种情况下，Docker 引擎会试图去下载这个链接的文件放到 "),e("code",[s._v("<目标路径>")]),s._v(" 去。下载后的文件权限自动设置为 "),e("code",[s._v("600")]),s._v("，如果这并不是想要的权限，那么还需要增加额外的一层 "),e("code",[s._v("RUN")]),s._v(" 进行权限调整，另外，如果下载的是个压缩包，需要解压缩，也一样还需要额外的一层 "),e("code",[s._v("RUN")]),s._v(" 指令进行解压缩。所以不如直接使用 "),e("code",[s._v("RUN")]),s._v(" 指令，然后使用 "),e("code",[s._v("wget")]),s._v(" 或者 "),e("code",[s._v("curl")]),s._v(" 工具下载，处理权限、解压缩、然后清理无用文件更合理。因此，这个功能其实并不实用，而且不推荐使用。")]),s._v(" "),e("p",[s._v("如果 "),e("code",[s._v("<源路径>")]),s._v(" 为一个 "),e("code",[s._v("tar")]),s._v(" 压缩文件的话，压缩格式为 "),e("code",[s._v("gzip")]),s._v(", "),e("code",[s._v("bzip2")]),s._v(" 以及 "),e("code",[s._v("xz")]),s._v(" 的情况下，"),e("code",[s._v("ADD")]),s._v(" 指令将会自动解压缩这个压缩文件到 "),e("code",[s._v("<目标路径>")]),s._v(" 去。")]),s._v(" "),e("p",[s._v("在某些情况下，这个自动解压缩的功能非常有用，比如官方镜像 "),e("code",[s._v("ubuntu")]),s._v(" 中：")]),s._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" scratch\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("xenial"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cloudimg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("amd64"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("root.tar.gz /\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("但在某些情况下，如果我们真的是希望复制个压缩文件进去，而不解压缩，这时就不可以使用 "),e("code",[s._v("ADD")]),s._v(" 命令了。")]),s._v(" "),e("p",[s._v("在 Docker 官方的 "),e("RouterLink",{attrs:{to:"/stack/docker/best_practices/"}},[s._v("Dockerfile 最佳实践文档")]),s._v(" 中要求，尽可能的使用 "),e("code",[s._v("COPY")]),s._v("，因为 "),e("code",[s._v("COPY")]),s._v(" 的语义很明确，就是复制文件而已，而 "),e("code",[s._v("ADD")]),s._v(" 则包含了更复杂的功能，其行为也不一定很清晰。最适合使用 "),e("code",[s._v("ADD")]),s._v(" 的场合，就是所提及的需要自动解压缩的场合。")],1),s._v(" "),e("p",[s._v("另外需要注意的是，"),e("code",[s._v("ADD")]),s._v(" 指令会令镜像构建缓存失效，从而可能会令镜像构建变得比较缓慢。")]),s._v(" "),e("p",[s._v("因此在 "),e("code",[s._v("COPY")]),s._v(" 和 "),e("code",[s._v("ADD")]),s._v(" 指令中选择的时候，可以遵循这样的原则，所有的文件复制均使用 "),e("code",[s._v("COPY")]),s._v(" 指令，仅在需要自动解压缩的场合使用 "),e("code",[s._v("ADD")]),s._v("。")]),s._v(" "),e("p",[s._v("在使用该指令的时候还可以加上 "),e("code",[s._v("--chown=<user>:<group>")]),s._v(" 选项来改变文件的所属用户及所属组。")]),s._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("chown=55"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("mygroup files* /mydir/\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("chown=bin files* /mydir/\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("chown=1 files* /mydir/\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("chown=10"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("11 files* /mydir/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);