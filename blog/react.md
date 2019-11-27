### React的思想 
+ 虚拟DOM 
+ 标签就是函数，标签的属性就是函数的参数
```
<Parent name={this.state.name}/>
```
+ 查找两次dom不同的过程叫DOM diff 


### state、props
> state 和 props 之间最重要的区别是：props 由父组件传入，而 state 由组件本身管理。组件不能修改 props，但它可以修改 state。**构造函数是唯一可以给 this.state 赋值的地方**


### 受控和非受控组件
1. 受控
  + 用 `props` 传入数据的话，组件可以被认为是受控
2. 非受控
  + 数据只保存在组件内部的 `state` 的话，是非受控组件（因为外部没办法直接控制 `state`)

### setState
#### 异步的
1. 出于性能考虑，React 可能会把多个 `setState()` 调用合并成一个调用,`State` 的更新可能是异步的
2. 要解决这个问题，可以让 `setState()` 接收一个函数而不是一个对象。这个函数用上一个 `state` 作为第一个参数，将此次更新被应用时的 `props` 做为第二个参数：
```
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
#### setState何时异步
1. 在`react`的监听回调中是异步的（React中的事件监听不是用的原生的事件监听，用的是合成的自定义的事件监听）
2. 在`react`的生命周期钩子函数中是异步的
#### setState何时同步(都在在render之后才执行setState)
1. 定时器中
2. 元素的DOM事件（ref获取到原生的dom）
3. promise(下面的data是实时更新的)
```
Promise.resolve().then(data=>{
  console.log(this.state.data)
  this.setState({data})
  console.log(this.state.data)
})
```

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

#### 高阶组件
  +  组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件。（接收一个组件再返回一个组件）

#### 父子传参

  + 父传子
    + 将父组件的方法以函数的形式传递给子组件，在子组件中调用
  + 子传父
    + 父组件中通过ref得到子组件的标签对象
    + 通过this.refs.current.xxx()得到子组件的方法
### react中的render()
>如果不在render()中使用某些东西，那么它就不应该在状态中

### redux
> 应⽤中所有的 state 都以⼀个对象树的形式储存在⼀个单⼀的 store 中。惟⼀改变 state 的办法是触发action,⼀个描述发⽣什么的对象。为了描述 action 如何改变 state 树，你需要编写 reducers。<br/>

+ 多个组件共享数据的时候可以考虑使用redux


#### action
1. 异步的 `action` （三种状态）
  + 异步操作进行中 `dispatch(loading)`
  + 异步操作完成 `dispatch(success)`
  + 异步操作失败 `dispatch(error)`
2. 同步的 `action`
  + 用上面的结果 `dispatch` 对应的三个同步 `action`
  ```
  export unAsync=(data)=>(type:import type,result:data)
  ```

#### actionType、action方法和reducer方法的命名
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
#### reducer
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

#### react-redux

+ connect()()是一个高阶函数执行后返回一个高阶组件，接收一个UI组件，返回一个容器组件



#### 扩展redux
1. 中间件
  > + 中间件是一些函数用于定制对特定请求的处理过程，
  > + 是一个函数，返回一个接收next参数的函数
```
function middleWare({dispatch,getState}){
  return function(next){
      return function(action){
         //do...
        return next(action)//处理完后调用下一个中间件
    }
  }
}

// es6写法
({dispatch,getState})=>next=>action=>next(action)
```
2. redux-thunk
+ 为了解决异步action问题
+ 检查传入的action是不是函数，不是就放行，是函数就执行把结果返回（用传进来的dispatch，和getState）



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


### react-router-dom 

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




+ 情景(Situation)
  + 业务的背景，价值。
    + 背景
      关于鄞州项目，当时的项目背景对于我来说是刚刚起步、百废待兴。大家的劲头都很足，因为是从头到尾要跟一个新的项目。
    + 价值
      + 鄞州银行智能CRM作为公司的CRM平台产品，目的是为鄞州银行客户经理对其客户全生命周期的营销管理、风险管理提供有力的帮助。
+ 任务(Task)
  + 你在这个工作中所承担的任务或者职责。
    + 当时我的工作是CRM前端开发，具体为对公客户详情模块、产品管理模块，以及和其它系统对接等
      + 
  + 当时遇到的问题和挑战点，难点。
    + 刚入职对公司的技术架构、编码规范、插件使用规则等等还未适应，加上内网办公资料查询较为不便自身因素
    + 行方的要求（自己把自己推翻、个别系统对接的时候大家对某一件事的认知的偏差，例如：当时有个其它系统的页面要嵌入到CRM中，对方系统比较老旧，给我一个jsp的单文件实现这个页面的功能，对放以为把这个页面放进CRM就完事特别简单，忽略了jsp文件执行的环境，它需要一个容器，我们没有这个容器，对方很坚持场面略微尴尬，对接人还在坚持，最后我叫上后端行方项目经理大家一起说了一下。我罗列了需要用到的，以及这样做的不合理性。最后的结论了这个功能放弃。）像这样的事情非常的多，以及电脑卡顿，浏览器打不开等等，这些无关系统的问题。都会找到前端去解决。行方大多操作系统老旧，ie版本混乱。
    对此的解决办法是：在不影响项目进度的情况下去解决，太无关的进行拒绝。编写代码的时候尽量考虑兼容性。