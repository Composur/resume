\##### BFC的产生条件

\1. verflow不为visible；

\2. 浮动（float样式不为none ）；

\3. 绝对定位（position样式为absolue或者fixed ）；

\4. display为inline-block / table-cell / table-caption / flex / table-flex；



\##### BFC特性（作用）

\1. 在BFC中，内部的Box会在垂直方向，一个接一个地放置；

\2. Box垂直方向的距离由margin决定，同一个BFC下相邻两个Box的margin会发生重叠；

\3. 在BFC中，每一个盒子的左外边缘（margin-left）会触碰到容器的左边缘(border-left)（对于从右到左的格式来说，则触碰到右边缘），即使存在浮动也是如此。(即不会发生margin穿透)

\4. 形成了BFC的区域不会与float box重叠（可阻止因浮动元素引发的文字环绕现象）；

\5. 计算BFC高度时，浮动元素也参与计算（BFC会确切包含浮动的子元素，即闭合浮动）。原本浮动元素应该是脱离文档流的，但BFC中会计算其高度。





综上特性所述，BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。



\##### BFC特性的一些应用

\1. 实现自适应两栏布局

应用了“BFC的区域不会与float box重叠”的特性；一边浮动，另一边自适应的部分形成BFC，那么两者就不会重叠，避免了出现文字环绕及类似情形。



\2. 解决父元素高度塌陷（也就是闭合内部浮动 ）

应用了“计算BFC高度时，浮动元素也参与计算在内”的特性；



\3. 解决垂直方向上兄弟元素的margin重叠

应用了“属于同一个BFC的两个相邻Boc的margin会发生重叠”的特性。意味着如果相邻兄弟元素不属于同一个BFC，就不会发生margin重叠了；



\# 2.不知道子元素的宽和高，如何垂直居中？知道子元素的宽和高如何垂直居中



\- flex 的方式



\```

.wrapper {

 display: flex;

 justify-center:center;  

 align-items: center;

}

\```

\- CSS3 的方式

\```

.parent {

 position: relative;

}

.childern {

 position: absolute;

 top: 50%;

 left: -50%;

 transform: translate(-50%, -50%);

}

\```



\- grid布局

.parent {

  display: grid;

  align-items:center;

  justify-content: center;

  width: 200px;

  height: 200px;

  background: skyblue;



}

.child {

  width: 10px;

  height: 10px;

  border: 1px solid red

}



\# 3.手写Promise 的原理



Promise 是异步编程的一种解决方案,解决传统的回调嵌套问题



（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。



\##### step1:先写个极简版的

\```js

function Promise(executor) {

  this.data = undefined; //promise的值

  this.onResolvedCallback = []; //promise状态变为resolve时的回调函数集，可能有多个

 

  function resolve(value) {

​      this.data = value;

​      for(var i = 0; i < self.onResolvedCallback.length; i++) {

​        this.onResolvedCallback[i](value);

​      }

  }

  executor(resolve);

};

Promise.prototype.then = function (resolve) {

  this.onResolvedCallback.push(resolve);

};

\```



\##### step2:加入状态

\```js

this.status = 'pending'; //promise当前的状态



function resolve(value) {

  if(this.status === 'pending') {

​    this.status = 'resolved';

​    this.data = value;

​    for(var i = 0; i < self.onResolvedCallback.length; i++) {

​      this.onResolvedCallback[i](value);

​    }

  }

}

\```



\##### step 3: 加入失败和异常处理

\```js

function reject(reason) {

​    if(self.status === 'pending') {

​      self.status = 'rejected';

​      self.data = reason;

​      for(var i = 0; i < self.onRejectedCallback.length; i++) {

​        self.onRejectedCallback[i](reason);

​      }

​    }

  }



executor(resolve, reject);

\```

\##### step4:加入延时机制

\>如果executor自执行函数中的resolve函数立即触发时，发现Promise失效

解决办法：需要将promise的resolve和reject异步执行。

\```js

function resolve(value) {

  setTimeout(()=>{

​    if(this.status === 'pending') {

​      this.status = 'resolved';

​      this.data = value;

​      for(var i = 0; i < this.onResolvedCallback.length; i++) {

​        this.onResolvedCallback[i](value);

​      }

​    }

  })

}



function reject(reason) {

  setTimeout(()=>{

​    if(this.status === 'pending') {

​      this.status = 'rejected';

​      this.data = reason;

​      for(var i = 0; i < this.onRejectedCallback.length; i++) {

​        this.onRejectedCallback[i](reason);

​      }

​    }

  })

}

\```





\# 4.Promise 的 all 和 race分别是什么作用？Promise.all 中有一个失败了还会不会触发 then 函数？

`Promise.all`可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。



\# 5.如何改变 this 的指向



用new调用函数，改变指向new的实例对象



\# 6.什么场景不能使用箭头函数？箭头函数的 this 指向哪里



\# 7.ES6 有哪些新语法

\1. const和let



\# 8.vue 双向绑定的原理

Vue 则采用的是数据劫持与发布订阅相结合的方式实现双向绑定，数据劫持主要通过 Object.defineProperty 来实现。



\# 9.nextTick 是如何实现的



\# [11.http1.0](11.http1.0)、http1.1、http2.0 的区别 

\##### HTTP1.0

HTTP1.0最早在网页使用是1996年，那时候只是使用较为简单的网络请求。有如下缺陷：

1、无法复用链接，完成即断开。

2、heead of line blocking：线头阻塞，导致请求之间互相影响。



\##### HTTP1.1

HTTP1.1则在1999年开始广泛应用于现在的各大浏览器网络请求，同时也是当前使用最广泛的HTTP协议。和HTTP1.0相比，有了如下改进：

1、**长连接**（默认开启Connection:keep-alive）

2、**host头处理**。随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机，并且他们共享一个ip地址。HTTP1.1的请求消息和响应消息都应支持host头域，且请求消息中如果没有host头域会报告一个错误（400 Bad Request）。

3、**缓存处理**：

\- Cache-Control

\- Expires

\- Last-Modified

\- Etag

4、**带宽优化及网络连接的使用**：HTTP1.0存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传的功能；在HTTP1.1则在请求头引入了range头域，它只允许请求资源的某个部分，即返回码是206（Partial Content），这样就充分利用带宽和连接。

5、**错误通知的管理**：在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。



\##### HTTP2.0

1、**多路复用**：即连接共享，即每一个request都是是用作连接共享机制的。一个request对应一个id，这样一个连接上可以有多个request，每个连接的request可以随机的混杂在一起，接收方可以根据request的 id将request再归属到各自不同的服务端请求里面。

2、**二进制格式**：HTTP1.x的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮。

3、**首部压缩**：HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。

4、**服务端推送（server push）**：例如网页有一个style.css的请求，在客户端收到style.css数据的同时，服务器端会将style.js的文件推送给客户端，当客户端再次尝试获取style.js时，就可以直接从缓存中获取，不用再发起请求了

参考：https://mp.weixin.qq.com/s/GICbiyJpINrHZ41u_4zT-A



\# 12.状态码 301，302 的区别

301 永久重定向，今后任何新的请求都应该使用新的 URI 代替

301 Moved Permanently，永久重定向。被请求资源已永久移动到新位置，并且将来任何对该资源的引用都使用本响应返回的若干个 URI 之一。301 资源除非额外指定，否则都是可缓存的。



\>注意：对于某些使用 HTTP/1.0 协议的浏览器，当它们发送的 POST 请求得到了一个 301 响应的话，接下来的重定向请求将会变成 GET 方式。



302 临时重定向，资源只是临时移动。客户端应继续使用原有 URI

302 Found 表示临时重定向 Moved Temporarily。由于这样的重定向是临时的，客户端应继续向原有地址发送以后的请求，只有在 Cache-Control 或 Expires 中进行了指定的情况下，这个响应才是可缓存的。



\>注意：虽然 RFC1945 和 RFC 2068 规范不允许客户端在重定向时改变请求的方法，但是很多现存的浏览器将 302 响应视作为 303 响应，并且使用 GET 方式访问在 Location 中规定的 URI，而无视原先请求的方法。因此状态码 303 和 307 被添加了进来，用以明确服务器期待客户端进行何种反应。



\##### 301 和 302 相同点



由于 301 重定向是永久的重定向，搜索引擎在抓取新内容的同时也将旧的网址替换为重定向之后的网址。

302 重定向是临时的重定向，搜索引擎会抓取新的内容而保留旧的网址。因为服务器返回 302 代码，搜索引擎认为新的网址只是暂时的。



都表示资源重定向。

新的 URI 地址都是在响应的 Location 中返回。

如果原始请求不是 GET 或者 HEAD 请求的话，浏览器会禁止自动进行重定向，除非得到用户的确认，因为请求的条件可能因此发生变化。



所以 301 是对搜索引擎更加友好的重定向，建议只要不是资源临时转移，都可以使用 301 的方式。

\# 13.说一下 flex 布局的原理



其他跟项目相关的面试题就没总结了