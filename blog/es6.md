### let 和 const
+ let声明的变量的作用域是在他所在的块级作用域中，不存在变量提升
    ```
    const log=console.log.bind(console)
    {
        let a=1;
        var b=2;
    }
    log(a)// a not defined
    log(b)// 2
    ```
    + 应用
    ```
    for(let i=0;i<5;i++){
        setInterval(function(){
            log(i)//循环打印
        },1000)
    }
    ``` 
+ 暂时性死区，凡是声明之前使用都会报错
    ```
    let a=a //a is not defined
    ```
+ 不允许在同一个作用域内重复声明
+ es5有var和function两种声明变量的方法，es6有let、const、import、class共六种
#### global对象
+ 浏览器中顶层对象就是window，node中是global
+ 全局环境中this会返回顶层对象，node模块和es6中this返回当前模块

### 变量的结构赋值
