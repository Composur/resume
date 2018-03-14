### 如何异步加载脚本
+ 一般的脚本后置可以使得页面更快的加载，如何当前执行的脚本比较耗时，就算后置它还是会阻塞后续脚本的加载，我们该怎么办
+ 通过defer延迟执行（告诉浏览器我不会修改DOM尽管加载） 一个带有defer属性的JavaScript文件下载时不会阻塞浏览器的其它进程，作用就是阻止脚本在加载完后立即执行，顺序加载延迟执行
+ 动态创建script标签添加属性值
+ 使用 XHR 对象下载 JavaScript 代码并注入页面中

```
var xhr = new XMLHttpRequest()
xhr.open('get', 'script.js',true)
xhr.onreadystatechange = function () {
    if (xhr.readyState = 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
            var script = document.createElement('script')
            script.src = 'script.js'
            document
                .body
                .appendChild('script')
        }
    }
}
xhr.send(null)

```

### 浏览器的渲染机制
+ 解析HTML标签，构建DOM树
+ 解析CSS标签,构建CSSOM树
+ 解析JavaScript脚本，主要是通过DOM API 和CSSOM API来操作DOM Tree 和CSS Rule Tree
+ 解析完成后通过DOMTree和CSSTree来构造Rendering Tree，它并不等同于DOM树，浏览器计算每个元素的位置这个又叫layout和reflow
+ 最后调用操作系统的Native GUI的API进行绘制
- 解析 HTML 标签, 构建 DOM 树
- 解析 CSS 标签, 构建 CSSOM 树
- 把 DOM 和 CSSOM 组合成 渲染树 (render tree)
- 在渲染树的基础上进行布局, 计算每个节点的几何结构
- 把每个节点绘制到屏幕上 (painting)

### Repaint和Reflow
+ 二者的目的都是展现一个新的页面样貌
+ 网页生成的时候至少会渲染一次，渲染就需要从新生成布局和从新绘制前者叫重排（reflow）后者叫重绘（repaint）
+ 从新渲染触发的条件（修改DOM、修改样式表、用户事件）
+ repaint针对屏幕的中的一部分重新绘制（背景颜色等等，不改变该元素的位置大小）
+ reflow是回流对整个页面重排改变元素的几何位置大小等
+ repaint不一定触发reflow但reflow一定触发repaint

### let和const
+ let的作用域为{let xx=xx} 在作用域中不能够在 let xx 不能再let xx 前调用 xx 
+ const和let一样除了cost是常量不能够重复赋值以外（只能够赋值一次且必须赋值）

### javascript中数据类型
+ 基本类型（值类型）指的的是可以直接存储的类型（null、undefined、Boolean、string、number、symbol）
+ 复杂类型（引用类型）
### NaN 
+ NaN(not a number)是一个全局对象的属性、不可配置、不可写在ES5中
+ typeof NaN是number 也是一种数字的特殊类型，代表不是一个数字，代表一些不能由数值范围表示的类型 NaN===NaN 结果为false 因为它们可能是不同的值
+ 一般用typeof value === 'number' && isNaN(value); 来判断一个值是否是NaN
### ==与===有什么区别？
+ “==”是比较强制类型转换之后的结果，“===”则是直接比较
+ “==”比较的时候会发生数据类型的转换当和一个Boolean值进行比较得时候javascript会将这个Boolean值转换为number类型再进行比较，赋值表达式不具有比较作用
+ “===”是严格相等运算符即判断等号两侧的数据类型是否一致（不一致直接返回false），又判断value是否相等，比较的时候不会发生数据类型的转换
+ 一些特殊的比较示例
    ```
    false == ""  // true
    false == []  // true
    false == {}  // false
    "" == 0      // true
    "" == []     // true
    "" == {}     // false
    0 == []      // true
    0 == {}      // false
    0 == null    // false

    ```
### null和undefined
+ 二者在if语句中会自动转换为false
### Boolean
+ 除了undefined、null、false、0、NaN、""/'' 都会转换为true
+ 空数组[]和空对象对应的Boolean值都是true


### 作用域

+ 在整个JavaScript中，全局变量的作用处处都存在。定义在script块中，在function函数外
+ 局部变量的作用是局部性的，在函数的内部或函数参数定义时，作用范围是从函数开始到结尾在{}中

### 立即执行函数表达式
+ 在JavaScript里每个函数，调用时，都会创建一个新的执行上下文，函数提供的上下文又提供了一个非常简单的方法去创建私有变量
+ 定义一个函数var fn=function(){}（这是函数表达式）;function fn(){}（这是函数声明）,当调用时需要在后面加上一个'()'使用不带圆括号的的函数名是访问函数的指针，而非调用的函数，因为函数是对象，函数名是指针
+ 函数声明和函数表达式除了什么时候可以通过变量访问函数这一点区别之外二者的语法是等价的
+ 将函数声明包含在圆括号里面构成了一个函数表达式(function(){})(),当圆括号出现在函数的末尾想要调用函数时。它将函数当成是声明函数
+ 当圆括号包裹函数时，它会默认将函数当作表达式去解析，而不是去声明
+ 它的作用就是隔离作用域（减少全局变量防止变量污染），es6之前JS不提供块级作用域只能用函数作用域模拟
+ 还有就是立即调用后就被回收了，var test(function(){doXXX return})()里面可以做事情不影响外面，就是一个块级作用域

#### 作用域链

我们先看一下闭包是如何工作的
```
var currentScope = 0; 
(function () {
  var currentScope = 1, one = 'scope1';
  alert(currentScope);
  (function () {
    var currentScope = 2, two = 'scope2';
    alert(currentScope);
    (function () {
      var currentScope = 3, three = 'scope3';
      alert(currentScope);
      alert(one + two + three); 
    }());
  }());
}());
```
- **上面的嵌套函数时会形成闭包，当父函数立即执行后，内部函数也可以引用其外部封闭函数中存在的变量**
- **JavaScript通过遍历的方式来查找变量**
- **在第三个函数中，第二个、第一个、和全局的声明的currentScope的变量被隐藏，其值保持不变，第三个又声明了currentScope当访问该范围的是此currentScope作为此立即执行函数表达式的作用域链中的第一个**
- 函数在执行的过程中，先从自己内部内部找变量
- 如果找不到，再从创建当前函数所在的作用域去找，以此往上
- 注意找的是变量当前的状态
+ 深拷贝和浅拷贝（首相明白基本类型，像number，string、Boolean。复杂类型array、object）
+ 浅拷贝拷贝和被拷贝对象的指针指向相同的地址，修改其中的任意一个值另一个值都会随之变化，这就是浅拷贝
+ 深拷贝（完全复制了一份）当拷贝对象放到了新的内存中有了新的地址，和被拷贝对象的不同，修改任意值另一个不会发生改变
```
var newObj=JSON.parse(JSON.stringify(oldObject))
```
#### JSON规范
+ 首先json是一种用于数据交换的文本格式，是一种文本格式
+ json类型对值和类型有严格的规范
+ 复杂类型不能是function、regexp、date
+ 简单类型只有四种基本类型，string、number、null、Boolean
+ 字符串必须使用双引号表示、不能使用单引号表示
+ 对象的键名必须放到双引号的后面
+ 数组或对象最后一个成员的后面,不能加逗号
+ 空数组和空对象也是合格的JSON值,null也是合格的json值
+ JSON对象提供了两种方法JSON.stringfiy()和JSON.parse()

#### 事件
+ javascript采用异步事件驱动编程模型
+ 事件的三种模型：事件冒泡、事件捕获、DOM事件流（事件捕获阶段、处于目标阶段、事件冒泡阶段，首先发生的是事件捕获、为截取事件提供机会、然后实际目标接受事件，最后是冒泡阶段）
+ 事件处理程序，事件侦听器（listener）就是响应某个事件的方法N
#### 事件传播机制
+ 事件冒泡（事件开始由较为具体的元素接收，然后逐级向上传播到较为不具体的元素）
+ 事件捕获（不太具体的结点更早的接收事件，最具体的元素最后接收到事件，和事件冒泡相反）
+ DOM2事件（DOM2事件的三个阶段，事件捕获阶段、处于目标阶段、事件冒泡阶段、首先发生事件捕获、然后为截取事件提供机会、然后是目标接收事件、最后事冒泡阶段）
![事件冒泡](http://7xpvnv.com2.z0.glb.qiniucdn.com/4bc08396-78b0-48e3-a8bb-f846e86e9d73) ![事件捕获](http://7xpvnv.com2.z0.glb.qiniucdn.com/0faaa7bb-5dcf-4f3c-93ff-62b134d987dd) ![DOM2事件流](http://7xpvnv.com2.z0.glb.qiniucdn.com/8ddedb2e-f55e-4872-bd36-79c44b71d3f1)


### 阻止传播
+ event.preventDefault() 如果事件可以取消，则取消该事件，但是不影响事件的下一步传播
+ event.stopPropagation()阻止捕获和冒泡阶段中当前事件的进一步传播
+ event.target()事件代理，或则事件委托在子元素的上级结点（一般是父节点）处理子元素的上的触发事件

### BOM
+ BOM有多个对象组成，其中window对象是BOM最顶层的对象，其它对象都是该对象的子对象
+ 判断浏览器的类型
```
/ Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

```