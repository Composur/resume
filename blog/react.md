### react的context
+ 子组件要获取 context 里面的内容的话，就必须写 contextTypes 来声明和验证你需要获取的状态的类型，它也是必写的

```
class Child extends Component{
    static contextTypes={
        color:ProTypes.string
    }
}
```