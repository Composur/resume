### 运行机制

1. 挂载`template` 到 vm.$options 然后解析

2. 生成抽象语法树，ast (abstract syntax tree)

3. 编译（complie）

4. ```javascript
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

5. virtual dom

6. 虚拟 dom 转成真实的UI

### 生命周期

#### 生命周期钩子的 this 上下文指向调用它的 Vue 实例
### 指令
+ 一些指令能够接受一个参数，在指令明后以冒号表示
```
<a v-bind:href="url">...</a> //该元素的 href 特性与表达式 url 的值绑定。
<a v-on:click="doSomething">...</a> //参数是监听的事件名
```