(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{727:function(t,e,r){"use strict";r.r(e);var n=r(2),o=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"镜像的实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像的实现原理"}},[t._v("#")]),t._v(" 镜像的实现原理")]),t._v(" "),e("p",[t._v("Docker 镜像是怎么实现增量的修改和维护的？")]),t._v(" "),e("p",[t._v("每个镜像都由很多层次构成，Docker 使用 "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/UnionFS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Union FS"),e("OutboundLink")],1),t._v(" 将这些不同的层结合到一个镜像中去。")]),t._v(" "),e("p",[t._v("通常 Union FS 有两个用途, 一方面可以实现不借助 LVM、RAID 将多个 disk 挂到同一个目录下,另一个更常用的就是将一个只读的分支和一个可写的分支联合在一起，Live CD 正是基于此方法可以允许在镜像不变的基础上允许用户在其上进行一些写操作。")]),t._v(" "),e("p",[t._v("Docker 在 OverlayFS 上构建的容器也是利用了类似的原理。")])])}),[],!1,null,null,null);e.default=o.exports}}]);