### 复习CSS基础
#### 垂直居中的各种写法
- 设置内容的上下padding相等；场景：父容器的高度不是固定的而是由内容决定的；只是看起来居中而已
- 绝对定位：父容器宽高固定
  ![](./img/绝对定位.jpg)
- 绝对定位当宽高不固定时用transform
  ![](./img/fix_width_height.jpg)
- vertical-align实现居中（div中的img）
  ![](./img/vertical-align.jpg)
- 设置父容器display:table-cell；vertical-align:middle(只对两种格式生效一种是行内元素另一种是表格元素)

#### BFC是什么
+ 块级格式化上下文（block formatting context)是盒模型的渲染区域，并且有自己的一套渲染规则，它定义了容器中的元素如何的定位以及和其它元素的相互作用关系；且与不影响容器外部的布局
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

 


