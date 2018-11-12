### ajax基础知识
> **ajax：**是异步的javaScript+XML的简写，**能够像服务器取得数据而无需刷新页面，即无刷新的异步请求**。

#### 完整的ajax异步请求
> + 创建XMLHttpRequest实例
> + 发送HTTP请求（向服务器发送请求） 
> + 服务器响应，接收服务器回传的数据
> + 更新网页数据


```
   const xhr = new XMLHttpRequest();  // 创建XMLHttpRequest实例

    xhr.onreadystatechange = function(){
    if (xhr.readyState == 4){   // 判断请求响应过程阶段，4 阶段代表已接收到数据
        if (xhr.status >=200 && xhr.status < 300 || xhr.status == 304) {  // 校验HTTP状态码
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
```
const xhr =new XMLHttpRequest()
```
> + 实例创建好后，首先需要启动一个HTTP请求，使用XHR的open()方法，open方法接受三个参数(请求的方法get/poust等，请求的url，是否异步)
> + 调用open()方法后会启动一个http请求，但它不会立即发送请求，处于待命状态。需要注意的是：请求的url必须要跟请求源域(origin)同域，也就是说协议、域名、端口号要一致，跨域请求要使用别的方法。接着调用send()方法就会发出这个http请求。

```
xhr.open('get', 'http://www.baidu.com', true)
xhr.send(null)
```
#### 注意
+ ajax只能像同源网址（协议、域名、端口号都相同）