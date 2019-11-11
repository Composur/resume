### React的思想 
+ 虚拟DOM 
+ 标签就是函数，标签的属性就是函数的参数
```
<Parent name={this.state.name}/>
```
+ 查找两次dom不同的过程叫DOM diff 


### state、props
> state 和 props 之间最重要的区别是：props 由父组件传入，而 state 由组件本身管理。组件不能修改 props，但它可以修改 state

### react的context
+ 子组件要获取 context 里面的内容的话，就必须写 contextTypes 来声明和验证你需要获取的状态的类型，它也是必写的

```
class Index extends Component{
    static childContextTypes={
        color:ProTypes.string
    }
    constructor(){
        super()
        this.state={
            color:'red'
        }
    }
}


class Child extends Component{
    static contextTypes={
        color:ProTypes.string
    }
    render(){
        return(
            <div>
                <h1 style={color:this.context.color}></h1>
            </div>
        )
    }
}
```
### reducer
+ reducer 是不允许有副作用的。你不能在里面操作 DOM，也不能发 Ajax 请求，更不能直接修改 state，它要做的仅仅是 —— 初始化和计算新的 state. 就是根据老的state和传入的action生成一个新的state，会有好多个reducer函数

```
export function loginUserInfo (previousState = {}, action) {
  if (action.type === GET_LOGIN_USER_INFO || action.type === LOGIN) {
    return action.data.userInfo || {}
  } else if (action.type === LOGOUT) {
    return {}
  } else {
    return previousState
  }
}
```

### redux
> 应⽤中所有的 state 都以⼀个对象树的形式储存在⼀个单⼀的 store 中。惟⼀改变 state 的办法是触发action,⼀个描述发⽣什么的对象。为了描述 action 如何改变 state 树，你需要编写 reducers。

### react中的render()
>如果不在render()中使用某些东西，那么它就不应该在状态中



### actionType、action方法和reducer方法的命名
1. actionType常量采用下划线命名法
2. action、reducer采用驼峰命名法，适当可使用下划线
3. actionType名称与action的名称，结构都动宾结构：‘V+N’
4. reducer方法的命名为action名去掉动词部分的宾语（名词）部分

以获取登录用户信息为例子：
```
// actionType常量
GET_LOGIN_USER_INFO = 'GET_LOGIN_USER_INFO'

// action方法
export function getLoginUserInfo () {
  ...
}

//reducer
export function loginUserInfo (previousState = {}, action) {
  if (action.type === GET_LOGIN_USER_INFO || action.type === LOGIN) {
    return action.data.userInfo || {}
  } else if (action.type === LOGOUT) {
    return {}
  } else {
    return previousState
  }
}
```


#### react-redux

+ connect()() 一个函数接收两个参数,前一个执行后return出来一个继续执行



#### react-loadable库的用法
> 它可以帮助我们按需加载组件

1. 首先准备一个loading组件

```
/**
 * @desc 借助 react-loadable 进行 code-splitting 时的loading组件
 */
import React from 'react'

 function Loading({ error }) {
  if (error) {
    console.log('react-loadable error')
    console.log(error)
    return 'error';
  } else {
    return <div></div>;
  }
}

export default Loading

```


2. 然后引入react-loadable

```
import Loadable from 'react-loadable'
import RouteLoading from 'components/RouteLoading/index'

const Home = Loadable({
  loader: () => import('./children/Home'),  //注意是import()方法，不是import关键字
  loading: RouteLoading,
})

```

3. 使用

```
 <Route path="/" exact component={Home} /> //这里就是home组件，路由匹配的时候才引入，而不是一开始全部引入
```


#### react-router-dom 

+ Router
  + 所有路由组件共用的底层接口，在 4.x 中，你可以将各种组件及标签放进  <Router>  组件中 ,它只能有一个子元素
+ BrowserRouter
  + HTML5 history API 
+ HashRouter
  + HashRouter 是一种特定的 <Router> ,用于支持传统浏览器
  + 使用window.location.hash来保持 UI 和 url 的同步
+ Route的用法

  + <Route component> 当访问地址和路由匹配时，一个 React component 将会被渲染
  + <Route render>  此方法适用于内联渲染，而且不会产生重复装载问题
+ Switch
  + 该组件只渲染第一个与当前访问地址匹配的  <Route>  或  <Redirect>
  + <Switch> 下的子节点只能是 <Route> 或 <Redirect>


#### 高阶组件
  +  组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件。（接收一个组件再返回一个组件）

#### 父子传参

  + 父传子
    + 将父组件的方法以函数的形式传递给子组件，在子组件中调用
  + 子传父
    + 父组件中通过ref得到子组件的标签对象