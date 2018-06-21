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

