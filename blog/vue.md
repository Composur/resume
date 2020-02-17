### 运行机制

1. new MVVM()

   1. Compile，解析指令
   2. Observer，劫持监听所有属性。

2. 挂载`template` 到 vm.$options 然后解析

3. 生成抽象语法树，ast (abstract syntax tree)

4. 编译（complie）

   1. 判断传入的节点类型
      1. 元素节点
         1. 解析所有节点的 attributes的name，区分自有属性 vue指令等。
      2. 文本节点

5. ```javascript
   // 接收一个函数 ，函数渲染成 DOM 替换挂载的根节点 ,传入一个标签
   render((createElement)=>{ 
     return createElement('div',{class:'content'},['内容'，children(同理)])
   })
   
   // 传入一个组件
   import App form './App'
   render((createElement)=>{ 
     return createElement(App) // 这个App 对象是被 vue-template-compiler 解析过的 
   })
   ```

6. virtual dom

7. 虚拟 dom 转成真实的UI

### 生命周期

#### 生命周期钩子的 this 上下文指向调用它的 Vue 实例
### 指令
+ 一些指令能够接受一个参数，在指令明后以冒号表示
```HTML
<a v-bind:href="url">...</a> //该元素的 href 特性与表达式 url 的值绑定。
<a v-on:click="doSomething">...</a> //参数是监听的事件名
```

