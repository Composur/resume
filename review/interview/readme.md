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
+ border-box:width=内容区宽度+padding宽度
#### css reset和normalize.css的区别
+ reset重置样式，抛弃之前的样式
+ normalize让所有的浏览器的标签都根规定的默认样式一致（Linux、window平台下）
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
               resolve()或者reject() 
            },3000)
        })
    }
    fn.then(...)
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

