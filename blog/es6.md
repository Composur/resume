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
+ es5有var和function两种声明变量的方法，es6（包含上两种）有let、const、import、class共六种
#### global对象
+ 浏览器中顶层对象就是window，node中是global
+ 全局环境中this会返回顶层对象，node模块和es6中this返回当前模块

### 变量的结构赋值
+ 解构对象
>对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
    ```
    var o = {p: 42, q: true};
    var {p, q} = o; //对象的属性没有次序，变量必须与属性同名，才能取到正确的值。


    console.log(p); // 42
    console.log(q); // true
    ```

### class
+ es6中的class可以理解为构造函数的一种写法，必须使用new来调用，
    ```
        class Point{

        }
        typeof Point //function
        Point===Point.prototype.constructor //true

        使用的时候直接 new
        let a=new Point()
    ```
+ 一个类必须有constructor方法，constructor方法默认返回实例对象（即this），没有定义的话会被默认的添加

#### super

```
class A {}
class B extends A {
  constructor() {
    super();  // ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错。
  }
}
```
> 在 constructor 中必须调用 super 方法，因为子类没有自己的 this 对象，而是继承父类的 this 对象，然后对其进行加工,而 super 就代表了父类的构造函数。super 虽然代表了父类 A 的构造函数，但是返回的是子类 B 的实例，即 super 内部的 this 指的是 B，因此 super() 在这里相当于 ```A.prototype.constructor.call(this, props)``。
处。


#### export 和 export default
 + export 导出的对象或函数是具名的 需要import对应的名称,如果想重新命名需要使用as import 原名称 as 新名称
 + export default 导出的对象或函数是匿名的 import的时候无需关心导出的对象或函数名称，重新命名即可

 + 一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。

    ```
    // 第一组
    export default function crc32() { // 输出
    // ...
    }

    import xxx from 'crc32'; // 输入

    // 第二组
    export function crc32() { // 输出
    // ...
    };

    import {crc32} from 'crc32'; // 输入
    ```
