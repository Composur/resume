### react的context
+ 子组件要获取 context 里面的内容的话，就必须写 contextTypes 来声明和验证你需要获取的状态的类型，它也是必写的

```
calss Index extends Component{
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
+ reducer 是不允许有副作用的。你不能在里面操作 DOM，也不能发 Ajax 请求，更不能直接修改 state，它要做的仅仅是 —— 初始化和计算新的 state。