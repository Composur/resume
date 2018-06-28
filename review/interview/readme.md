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
    -[七种写法](../垂直居中/)