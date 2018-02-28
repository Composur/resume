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


