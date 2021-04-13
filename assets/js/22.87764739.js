(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{683:function(a,e,t){a.exports=t.p+"assets/img/why-is-kafka-so-fast-01.45e5ef3f.jpg"},684:function(a,e,t){a.exports=t.p+"assets/img/why-is-kafka-so-fast-02.7791ca64.jpg"},685:function(a,e,t){a.exports=t.p+"assets/img/why-is-kafka-so-fast-03.db159428.jpg"},686:function(a,e,t){a.exports=t.p+"assets/img/why-is-kafka-so-fast-04.068b687d.png"},687:function(a,e,t){a.exports=t.p+"assets/img/why-is-kafka-so-fast-05.84be7a62.png"},688:function(a,e,t){a.exports=t.p+"assets/img/why-is-kafka-so-fast-06.f00c4eb1.png"},913:function(a,e,t){"use strict";t.r(e);var s=t(10),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"kafka为什么这么快"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka为什么这么快"}},[a._v("#")]),a._v(" Kafka为什么这么快")]),a._v(" "),s("p",[a._v("无论 kafka 作为 MQ 也好，作为存储层也罢，无非就是两个功能（好简单的样子），一是 Producer 生产的数据存到 broker，二是 Consumer 从 broker 读取数据。那 Kafka 的快也就体现在读写两个方面了，下面我们就聊聊 Kafka 快的原因。")]),a._v(" "),s("h2",{attrs:{id:"利用-partition-实现并行处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用-partition-实现并行处理"}},[a._v("#")]),a._v(" 利用 Partition 实现并行处理")]),a._v(" "),s("p",[a._v("我们都知道 Kafka 是一个 Pub-Sub 的消息系统，无论是发布还是订阅，都要指定 Topic。")]),a._v(" "),s("p",[a._v("Topic 只是一个逻辑的概念。每个 Topic 都包含一个或多个 Partition，不同 Partition 可位于不同节点。")]),a._v(" "),s("p",[a._v("一方面，由于不同 Partition 可位于不同机器，因此可以充分利用集群优势，实现机器间的并行处理。另一方面，由于 Partition 在物理上对应一个文件夹，即使多个 Partition 位于同一个节点，也可通过配置让同一节点上的不同 Partition 置于不同的磁盘上，从而实现磁盘间的并行处理，充分发挥多磁盘的优势。")]),a._v(" "),s("p",[a._v("能并行处理，速度肯定会有提升，多个工人肯定比一个工人干的快。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("可以并行写入不同的磁盘？那磁盘读写的速度可以控制吗？")]),a._v(" "),s("p",[a._v("硬盘性能的制约因素是什么？如何根据磁盘I/O特性来进行系统设计？")]),a._v(" "),s("p",[a._v("硬盘内部主要部件为磁盘盘片、传动手臂、读写磁头和主轴马达。实际数据都是写在盘片上，读写主要是通过传动手臂上的读写磁头来完成。实际运行时，主轴让磁盘盘片转动，然后传动手臂可伸展让读取头在盘片上进行读写操作。磁盘物理结构如下图所示：")]),a._v(" "),s("p",[s("img",{attrs:{src:t(683),alt:" "}})]),a._v(" "),s("p",[a._v("由于单一盘片容量有限，一般硬盘都有两张以上的盘片，每个盘片有两面，都可记录信息，所以一张盘片对应着两个磁头。盘片被分为许多扇形的区域，每个区域叫一个扇区。盘片表面上以盘片中心为圆心，不同半径的同心圆称为磁道，不同盘片相同半径的磁道所组成的圆柱称为柱面。磁道与柱面都是表示不同半径的圆，在许多场合，磁道和柱面可以互换使用。磁盘盘片垂直视角如下图所示：")]),a._v(" "),s("p",[s("img",{attrs:{src:t(684),alt:" "}})]),a._v(" "),s("p",[a._v("影响磁盘的关键因素是磁盘服务时间，即磁盘完成一个I/O请求所花费的时间，它由寻道时间、旋转延迟和数据传输时间三部分构成。")]),a._v(" "),s("p",[a._v("机械硬盘的连续读写性能很好，但随机读写性能很差，这主要是因为磁头移动到正确的磁道上需要时间，随机读写时，磁头需要不停的移动，时间都浪费在了磁头寻址上，所以性能不高。衡量磁盘的重要主要指标是IOPS和吞吐量。")]),a._v(" "),s("p",[a._v("在许多的开源框架如 Kafka、HBase 中，都通过追加写的方式来尽可能的将随机 I/O 转换为顺序 I/O，以此来降低寻址时间和旋转延时，从而最大限度的提高 IOPS。")]),a._v(" "),s("blockquote",[s("p",[a._v("磁盘I/O那些事 - "),s("a",{attrs:{href:"https://tech.meituan.com/2017/05/19/about-desk-io.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://tech.meituan.com/2017/05/19/about-desk-io.html"),s("OutboundLink")],1)])])]),a._v(" "),s("p",[a._v("磁盘读写的快慢取决于你怎么使用它，也就是顺序读写或者随机读写。")]),a._v(" "),s("h2",{attrs:{id:"顺序写磁盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顺序写磁盘"}},[a._v("#")]),a._v(" 顺序写磁盘")]),a._v(" "),s("p",[s("img",{attrs:{src:t(685),alt:" "}})]),a._v(" "),s("p",[a._v("Kafka 中每个分区是一个有序的，不可变的消息序列，新的消息不断追加到 partition 的末尾，这个就是顺序写。")]),a._v(" "),s("blockquote",[s("p",[a._v("很久很久以前就有人做过基准测试：《每秒写入2百万（在三台廉价机器上）》"),s("a",{attrs:{href:"http://ifeve.com/benchmarking-apache-kafka-2-million-writes-second-three-cheap-machines/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://ifeve.com/benchmarking-apache-kafka-2-million-writes-second-three-cheap-machines/"),s("OutboundLink")],1)])]),a._v(" "),s("p",[a._v("由于磁盘有限，不可能保存所有数据，实际上作为消息系统 Kafka 也没必要保存所有数据，需要删除旧的数据。又由于顺序写入的原因，所以 Kafka 采用各种删除策略删除数据的时候，并非通过使用“读 - 写”模式去修改文件，而是将 Partition 分为多个 Segment，每个 Segment 对应一个物理文件，通过删除整个文件的方式去删除 Partition 内的数据。这种方式清除旧数据的方式，也避免了对文件的随机写操作。")]),a._v(" "),s("h2",{attrs:{id:"充分利用-page-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#充分利用-page-cache"}},[a._v("#")]),a._v(" 充分利用 Page Cache")]),a._v(" "),s("p",[a._v("引入 Cache 层的目的是为了提高 Linux 操作系统对磁盘访问的性能。Cache 层在内存中缓存了磁盘上的部分数据。当数据的请求到达时，如果在 Cache 中存在该数据且是最新的，则直接将数据传递给用户程序，免除了对底层磁盘的操作，提高了性能。Cache 层也正是磁盘 IOPS 为什么能突破 200 的主要原因之一。")]),a._v(" "),s("p",[a._v("在 Linux 的实现中，文件 Cache 分为两个层面，一是 Page Cache，另一个 Buffer Cache，每一个 Page Cache 包含若干 Buffer Cache。Page Cache 主要用来作为文件系统上的文件数据的缓存来用，尤其是针对当进程对文件有 read/write 操作的时候。Buffer Cache 则主要是设计用来在系统对块设备进行读写的时候，对块进行数据缓存的系统来使用。")]),a._v(" "),s("p",[a._v("使用 Page Cache 的好处：")]),a._v(" "),s("ul",[s("li",[a._v("I/O Scheduler 会将连续的小块写组装成大块的物理写从而提高性能")]),a._v(" "),s("li",[a._v("I/O Scheduler 会尝试将一些写操作重新按顺序排好，从而减少磁盘头的移动时间")]),a._v(" "),s("li",[a._v("充分利用所有空闲内存（非 JVM 内存）。如果使用应用层 Cache（即 JVM 堆内存），会增加 GC 负担")]),a._v(" "),s("li",[a._v("读操作可直接在 Page Cache 内进行。如果消费和生产速度相当，甚至不需要通过物理磁盘（直接通过 Page Cache）交换数据")]),a._v(" "),s("li",[a._v("如果进程重启，JVM 内的 Cache 会失效，但 Page Cache 仍然可用")])]),a._v(" "),s("p",[a._v("Broker 收到数据后，写磁盘时只是将数据写入 Page Cache，并不保证数据一定完全写入磁盘。从这一点看，可能会造成机器宕机时，Page Cache 内的数据未写入磁盘从而造成数据丢失。但是这种丢失只发生在机器断电等造成操作系统不工作的场景，而这种场景完全可以由 Kafka 层面的 Replication 机制去解决。如果为了保证这种情况下数据不丢失而强制将 Page Cache 中的数据 Flush 到磁盘，反而会降低性能。也正因如此，Kafka 虽然提供了 flush.messages 和 flush.ms 两个参数将 Page Cache 中的数据强制 Flush 到磁盘，但是 Kafka 并不建议使用。")]),a._v(" "),s("h2",{attrs:{id:"零拷贝技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#零拷贝技术"}},[a._v("#")]),a._v(" 零拷贝技术")]),a._v(" "),s("p",[a._v("Kafka 中存在大量的网络数据持久化到磁盘（Producer 到 Broker）和磁盘文件通过网络发送（Broker 到 Consumer）的过程。这一过程的性能直接影响 Kafka 的整体吞吐量。")]),a._v(" "),s("blockquote",[s("p",[a._v("操作系统的核心是内核，独立于普通的应用程序，可以访问受保护的内存空间，也有访问底层硬件设备的权限。\n为了避免用户进程直接操作内核，保证内核安全，操作系统将虚拟内存划分为两部分，一部分是内核空间（Kernel-space），一部分是用户空间（User-space）。")])]),a._v(" "),s("p",[a._v("传统的 Linux 系统中，标准的 I/O 接口（例如read，write）都是基于数据拷贝操作的，即 I/O 操作会导致数据在内核地址空间的缓冲区和用户地址空间的缓冲区之间进行拷贝，所以标准 I/O 也被称作缓存 I/O。这样做的好处是，如果所请求的数据已经存放在内核的高速缓冲存储器中，那么就可以减少实际的 I/O 操作，但坏处就是数据拷贝的过程，会导致 CPU 开销。")]),a._v(" "),s("p",[a._v("我们把 Kafka 的生产和消费简化成如下两个过程来看：")]),a._v(" "),s("ul",[s("li",[a._v("网络数据持久化到磁盘 (Producer 到 Broker)")]),a._v(" "),s("li",[a._v("磁盘文件通过网络发送（Broker 到 Consumer）")])]),a._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/78335525",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://zhuanlan.zhihu.com/p/78335525"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"网络数据持久化到磁盘-producer-到-broker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络数据持久化到磁盘-producer-到-broker"}},[a._v("#")]),a._v(" 网络数据持久化到磁盘 (Producer 到 Broker)")]),a._v(" "),s("p",[a._v("传统模式下，数据从网络传输到文件需要 4 次数据拷贝、4 次上下文切换和两次系统调用。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 读取网络数据")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("File")]),a._v(" file "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 持久化到磁盘")]),a._v("\nfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("flush")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("这一过程实际上发生了四次数据拷贝：")]),a._v(" "),s("ol",[s("li",[a._v("首先通过 DMA copy 将网络数据拷贝到内核态 Socket Buffer")]),a._v(" "),s("li",[a._v("然后应用程序将内核态 Buffer 数据读入用户态（CPU copy）")]),a._v(" "),s("li",[a._v("接着用户程序将用户态 Buffer 再拷贝到内核态（CPU copy）")]),a._v(" "),s("li",[a._v("最后通过 DMA copy 将数据拷贝到磁盘文件")])]),a._v(" "),s("blockquote",[s("p",[a._v("DMA（Direct Memory Access）：直接存储器访问。DMA 是一种无需 CPU 的参与，让外设和系统内存之间进行双向数据传输的硬件机制。使用 DMA 可以使系统 CPU 从实际的 I/O 数据传输过程中摆脱出来，从而大大提高系统的吞吐率。")])]),a._v(" "),s("p",[a._v("同时，还伴随着四次上下文切换，如下图所示")]),a._v(" "),s("p",[s("img",{attrs:{src:t(686),alt:" "}})]),a._v(" "),s("p",[a._v("数据落盘通常都是非实时的，kafka 生产者数据持久化也是如此。Kafka 的数据并不是实时的写入硬盘，它充分利用了现代操作系统分页存储来利用内存提高 I/O 效率，就是上一节提到的 Page Cache。")]),a._v(" "),s("p",[a._v("对于 kafka 来说，Producer 生产的数据存到 broker，这个过程读取到 socket buffer 的网络数据，其实可以直接在内核空间完成落盘。并没有必要将 socket buffer 的网络数据，读取到应用进程缓冲区；在这里应用进程缓冲区其实就是 broker，broker 收到生产者的数据，就是为了持久化。")]),a._v(" "),s("p",[a._v("在此特殊场景下：接收来自 socket buffer 的网络数据，应用进程不需要中间处理、直接进行持久化时。可以使用 mmap 内存文件映射。")]),a._v(" "),s("blockquote",[s("p",[a._v("Memory Mapped Files：简称 mmap，也有叫 MMFile 的，使用 mmap 的目的是将内核中读缓冲区（read buffer）的地址与用户空间的缓冲区（user buffer）进行映射。从而实现内核缓冲区与应用程序内存的共享，省去了将数据从内核读缓冲区（read buffer）拷贝到用户缓冲区（user buffer）的过程。它的工作原理是直接利用操作系统的 Page 来实现文件到物理内存的直接映射。完成映射之后你对物理内存的操作会被同步到硬盘上。\n使用这种方式可以获取很大的 I/O 提升，省去了用户空间到内核空间复制的开销。")])]),a._v(" "),s("p",[a._v("mmap 也有一个很明显的缺陷——不可靠，写到 mmap 中的数据并没有被真正的写到硬盘，操作系统会在程序主动调用 flush 的时候才把数据真正的写到硬盘。Kafka 提供了一个参数——producer.type 来控制是不是主动flush；如果 Kafka 写入到 mmap 之后就立即 flush 然后再返回 Producer 叫同步(sync)；写入 mmap 之后立即返回 Producer 不调用 flush 就叫异步(async)，默认是 sync。")]),a._v(" "),s("p",[s("img",{attrs:{src:t(687),alt:" "}})]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("零拷贝（Zero-copy）技术指在计算机执行操作时，CPU 不需要先将数据从一个内存区域复制到另一个内存区域，从而可以减少上下文切换以及 CPU 的拷贝时间。")]),a._v(" "),s("p",[a._v("它的作用是在数据报从网络设备到用户程序空间传递的过程中，减少数据拷贝次数，减少系统调用，实现 CPU 的零参与，彻底消除 CPU 在这方面的负载。")]),a._v(" "),s("p",[a._v("目前零拷贝技术主要有三种类型："),s("a",{attrs:{href:"https://cllc.fun/2020/03/18/linux-zero-copy/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://cllc.fun/2020/03/18/linux-zero-copy/"),s("OutboundLink")],1)]),a._v(" "),s("ul",[s("li",[a._v("直接I/O：数据直接跨过内核，在用户地址空间与I/O设备之间传递，内核只是进行必要的虚拟存储配置等辅助工作；")]),a._v(" "),s("li",[a._v("避免内核和用户空间之间的数据拷贝：当应用程序不需要对数据进行访问时，则可以避免将数据从内核空间拷贝到用户空间")]),a._v(" "),s("li",[a._v("mmap")]),a._v(" "),s("li",[a._v("sendfile")]),a._v(" "),s("li",[a._v("splice && tee")]),a._v(" "),s("li",[a._v("sockmap")]),a._v(" "),s("li",[a._v("copy on write：写时拷贝技术，数据不需要提前拷贝，而是当需要修改的时候再进行部分拷贝。")])])]),a._v(" "),s("h3",{attrs:{id:"磁盘文件通过网络发送-broker-到-consumer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#磁盘文件通过网络发送-broker-到-consumer"}},[a._v("#")]),a._v(" 磁盘文件通过网络发送（Broker 到 Consumer）")]),a._v(" "),s("p",[a._v("传统方式实现：先读取磁盘、再用 socket 发送，实际也是进过四次 copy")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("buffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("read\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Socket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("这一过程可以类比上边的生产消息：")]),a._v(" "),s("ol",[s("li",[a._v("首先通过系统调用将文件数据读入到内核态 Buffer（DMA 拷贝）")]),a._v(" "),s("li",[a._v("然后应用程序将内存态 Buffer 数据读入到用户态 Buffer（CPU 拷贝）")]),a._v(" "),s("li",[a._v("接着用户程序通过 Socket 发送数据时将用户态 Buffer 数据拷贝到内核态 Buffer（CPU 拷贝）")]),a._v(" "),s("li",[a._v("最后通过 DMA 拷贝将数据拷贝到 NIC Buffer")])]),a._v(" "),s("p",[a._v("Linux 2.4+ 内核通过 sendfile 系统调用，提供了零拷贝。数据通过 DMA 拷贝到内核态 Buffer 后，直接通过 DMA 拷贝到 NIC Buffer，无需 CPU 拷贝。这也是零拷贝这一说法的来源。除了减少数据拷贝外，因为整个读文件 - 网络发送由一个 sendfile 调用完成，整个过程只有两次上下文切换，因此大大提高了性能。")]),a._v(" "),s("p",[s("img",{attrs:{src:t(688),alt:" "}})]),a._v(" "),s("p",[a._v("Kafka 在这里采用的方案是通过 NIO 的 transferTo/transferFrom 调用操作系统的 sendfile 实现零拷贝。总共发生 2 次内核数据拷贝、2 次上下文切换和一次系统调用，消除了 CPU 数据拷贝")]),a._v(" "),s("h2",{attrs:{id:"批处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批处理"}},[a._v("#")]),a._v(" 批处理")]),a._v(" "),s("p",[a._v("在很多情况下，系统的瓶颈不是 CPU 或磁盘，而是网络IO。")]),a._v(" "),s("p",[a._v("因此，除了操作系统提供的低级批处理之外，Kafka 的客户端和 broker 还会在通过网络发送数据之前，在一个批处理中累积多条记录 (包括读和写)。记录的批处理分摊了网络往返的开销，使用了更大的数据包从而提高了带宽利用率。")]),a._v(" "),s("h2",{attrs:{id:"数据压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据压缩"}},[a._v("#")]),a._v(" 数据压缩")]),a._v(" "),s("p",[a._v("Producer 可将数据压缩后发送给 broker，从而减少网络传输代价，目前支持的压缩算法有：Snappy、Gzip、LZ4。数据压缩一般都是和批处理配套使用来作为优化手段的。")]),a._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("ul",[s("li",[a._v("partition 并行处理")]),a._v(" "),s("li",[a._v("顺序写磁盘，充分利用磁盘特性")]),a._v(" "),s("li",[a._v("利用了现代操作系统分页存储 Page Cache 来利用内存提高 I/O 效率")]),a._v(" "),s("li",[a._v("采用了零拷贝技术")]),a._v(" "),s("li",[a._v("Producer 生产的数据持久化到 broker，采用 mmap 文件映射，实现顺序的快速写入")]),a._v(" "),s("li",[a._v("Customer 从 broker 读取数据，采用 sendfile，将磁盘文件读到 OS 内核缓冲区后，转到 NIO buffer进行网络发送，减少 CPU 消耗")])])])}),[],!1,null,null,null);e.default=r.exports}}]);