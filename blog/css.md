## CSS布局
+ 一般要遵循横向布局和纵向布局
+ 横向布局一般给所有的子元素加上float父元素清除浮动，尽量不要用inline-block；
+ 可以多加div尽量把页面布局分为横向布局、和纵向布局、不要写复杂布局，
## 元素的高度是谁决定的
> 高度由其内部文档流元素高度总和决定的
+ 文档流就是文档内元素流动方向
+ 内联元素从左往右流动（类似于一个挨着一个）
+ 块级元素从上往下流动 （设定宽度后仍独立占一行，每个宽度独立占一行）
+ 当父元素不能加padding时（父元素固定了宽度）加上padding会变大；可以再写一个div，给这个div加padding
### 文档流是什么
+ 文档内元素的流动方向
+ 内联元素从左往右；块级元素从上往下，每个块级元素另起一行；
### 复习CSS基础
####  px、rem、em
  + px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。在缩放页面时无法调整那些使用它作为单位的字体、按钮等的大小；
  + em是相对长度单位。em 的值并不是固定的，会继承父级元素的字体大小，代表倍数；
  + rem是CSS3新增的一个相对单位（root em，根em）,rem 的值并不是固定的，始终是基于根元素 <html> 的，也代表倍数。
#### 垂直居中的各种写法
- 设置内容的上下padding相等；场景：父容器的高度不是固定的而是由内容决定的；只是看起来居中而已
- 绝对定位：父容器宽高固定
  ![](./img/绝对定位.jpg)
- 绝对定位当宽高不固定时用transform
  ![](./img/fix_width_height.jpg)
- vertical-align实现居中（div中的img）
  ![](./img/vertical-align.jpg)
- 设置父容器display:table-cell；vertical-align:middle(只对两种格式生效一种是行内元素另一种是表格元素)
- 文字的垂直居中,如果有n行文字，行高设置为容器高度的n分之一
  ```
    .selector{
      height:20px;
      line-height:20px;
    }
  ```

#### BFC是什么
+ 块级格式化上下文(block formatting context)是盒模型的渲染区域，并且有自己的一套渲染规则，它定义了容器中的元素如何的定位以及和其它元素的相互作用关系；且与不影响容器外部的布局
#### 如何产生BFC
+ 页面的根元素
+ float不为none
+ position为absolute或fixed
+ display为inline-block，table-cell等
+ overflow不为visible
#### BFC的作用
+ 清除浮动
+ 防止margin重叠
+ [Demo](http://js.jirengu.com/mameforafe/1/edit?html,output)
#### 外边距发生场景
+ 相邻元素，当两个元素相邻时，上元素margin-bottom与下元素的margin-top会进行合并
+ 父子元素，父元素的margin-top和第一个子元素的margin-top；父元素的margin-bottom和最后一个子元素的margin-bottom
+ 空元素，自身的margin-top和自身的margin-bottom会发生合并
#### 外边距如何合并
+ 取其二者的最大值
#### 阻止外边距合并
+ 当两个元素分属于不同的BFC的时候不会发生生合并
+ 给发生合并的元素中间加上一个空div用border或则设置display:table/flex
```
<div style='border:0.1px solid red'></div>
```
+ 1[Demo](http://js.jirengu.com/faveyijubi/1/edit)
#### css hack
+ 由于不同厂商和版本的不同，导致了不同浏览器对css的渲染不完全一样，针对不同的浏览器写不同的css使页面在不同的浏览器展现相同的效果
+ [https://caniuse.com/](https://caniuse.com/)
#### 常见的兼容处理工具
+ 条件注释主要针对于低版本的IE浏览器，用来想对应版本的ie浏览器提供隐藏代码
```
<!--[if IE 6]>
<p>我是IE6</p>
<![endif]-->
```
+ ie hack 针对ie浏览器的特性进行一些兼容性的处理
+ js能力检测；check当前浏览器不支持哪些属性
+ html5shiv.js 利用DOM去创建元素替换低版本浏览器无法识别的HTML5元素
+ response.js让低版本（ie6-it8）版本的浏览器支持媒体查询
+ css reset 重置浏览器的默认样式
+ normalize.css有限制的定制css的样式文件
+ modernizr用来检测HTML5和css3的新特性，在页面加载的时候会检测浏览器支持和不支持的特性且在html中会加入对应的类名,方便我们针对不兼用的样式hack
+ postcss 一个插件提供了一种方式用JavaScript来处理css；需要和其它打包、构建工具一起使用

### 宽度与高度
+ 自然流中div中的默认的高是由它内部文档流中（内联元素从左到右依次排列）高度的总和决定的
+ 如果父元素没有什么东西（没有border）挡住子元素的margin那么会发生上下margin合并
+ 脱离文档流的含义就是在计算元素高度的时候不计算脱离元素的高度（position:absolute/fixed; float:; ）
+ span元素的高度是由行高决定的，span元素的宽度是由content、margin、border、padding决定的
+ 1:1的div
```
div{border:1px solid red;padding-top:100%;}
```

### 文字超过div（或者input框等）宽度用省略号显示css
```
input{
    width: 50px;  /*必须设置宽度*/
    overflow: hidden;  /*溢出隐藏*/
    text-overflow: ellipsis; /*以省略号...显示*/
    white-space: nowrap;  /*强制不换行*/
}
```
### 一般hover状态下，页面抖动可能是有border的边框的缘故
+ 让边框占位，设置边框为透明，hover的时候再显示
### a标签与li
+ a设置padding等样式后的高度和li的高度不一致
+ 设置a的display:block;
```
<li><a></a></li>
```


