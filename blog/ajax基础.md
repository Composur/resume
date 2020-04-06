### ajax基础知识
> **ajax：**是异步的javaScript+XML的简写，**能够像服务器取得数据而无需刷新页面，即无刷新的异步请求**。

#### 完整的ajax异步请求
> + 创建XMLHttpRequest实例
> + 发送HTTP请求（向服务器发送请求） 
> + 服务器响应，接收服务器回传的数据
> + 更新网页数据

```js
const xhr = new XMLHttpRequest();  // 创建XMLHttpRequest实例

xhr.onreadystatechange = function(){
  // 判断请求响应过程阶段，4 阶段代表已接收到数据
  if (xhr.readyState == 4){  
    // 校验HTTP状态码
    if (xhr.status >=200 && xhr.status < 300 || xhr.status == 304) {  
      console.log(xhr.responseText);   // 输出响应的文本
    } else {
      console.error(xhr.status, xhr.statusText); // 打印其他HTTP状态码
    }
  }
};

xhr.open('get', 'example.json', true); // 初始化xhr实例，或者说启动请求
xhr.send(null);  // 设置HTTP请求携带参数，null为不带参数     
```



#### 详细说明
> + 通过new的方式创建一个xhr对象
```js
const xhr =new XMLHttpRequest()
```
> + 实例创建好后，首先需要启动一个HTTP请求，使用XHR的open()方法，open方法接受三个参数(请求的方法get/poust等，请求的url，是否异步)
> + 调用open()方法后会启动一个http请求，但它不会立即发送请求，处于待命状态。需要注意的是：请求的url必须要跟请求源域(origin)同域，也就是说协议、域名、端口号要一致，跨域请求要使用别的方法。接着调用send()方法就会发出这个http请求。

```js
xhr.open('get', 'http://www.xxx.com/info', true) // true 表示异步
xhr.send(null)
```
#### 注意
+ ajax 只能向同源网址（协议、域名、端口号都相同）发请求。


### promise只是封装了异步操作

#### Promise.all()
+ all是与的关系，统一请求成功以后返回，返回的结果也是一个数组,是一种无脑的状态，不管先后

    Promise.all([
        fn1,fn2,fn3 //都是promise对象 
    ]).then(arr=>arr,err=>err)

#### Promise.race()
+ race

  Promise.race 竞速，是或者的关系，谁先完成用谁，那个快用哪个，除非都失败才返回error，返回的是一个对象


### async await

async function(){
    let results= await ajax() //等异步操作完成返回结果再往下执行
    console.log(results) //同步拿到结果
}