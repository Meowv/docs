(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{576:function(e,s,a){"use strict";a.r(s);var t=a(12),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"windows10-运行安卓模拟器蓝屏解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows10-运行安卓模拟器蓝屏解决方案"}},[e._v("#")]),e._v(" Windows10 运行安卓模拟器蓝屏解决方案")]),e._v(" "),a("p",[e._v("由于没有安卓机，想要测试一些东西，所以选择了安卓模拟器，可是一运行模拟器就导致电脑蓝屏，试了 N 次都不行。")]),e._v(" "),a("p",[e._v("于是在网上寻找解决方案，了解到导致蓝屏的原因都是因为虚拟化技术，我的系统是 Windows10 1903，加上之前开启了 Hyper-V 虚拟机，和 Windows 沙盒，再加上 Win10 对于安卓模拟器的虚拟化兼容不够才一直崩溃。")]),e._v(" "),a("p",[e._v("解决方案：关闭 Hyper-V 和 Windows 沙盒，运行以下命令，重启电脑。")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("DISM /Online /Disable-Feature /FeatureName:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Containers-DisposableClientVM"')]),e._v("\nDISM /Online /Disable-Feature /FeatureName:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Microsoft-Hyper-V-All"')]),e._v("\nDISM /Online /Disable-Feature /FeatureName:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"VirtualMachinePlatform"')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);