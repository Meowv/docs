(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{839:function(a,s,e){"use strict";e.r(s);var t=e(11),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"kafka"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka"}},[a._v("#")]),a._v(" Kafka")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker pull wurstmeister/kafka\ndocker run -d --name kafka --publish "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("9092")]),a._v(":9092 --link zookeeper --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KAFKA_ZOOKEEPER_CONNECT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("zookeeper:2181 --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KAFKA_ADVERTISED_HOST_NAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.111 --env "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KAFKA_ADVERTISED_PORT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("9092")]),a._v(" wurstmeister/kafka\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);