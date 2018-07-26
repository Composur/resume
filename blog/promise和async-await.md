### await关键字使用时有哪些注意点？
+ 只能放在async函数内部使用，不能放在普通函数里面，否则会报错。
    比如拿到一个表单返回的数据
```
  

```
+ await是async wait的意思，wait的是resolve(data)消息，并把数据data返回。比如，下面代码中，当Promise对象由 Pending变为Resolved的时候，变量a就等于data；然后再顺序执行下面的语句console.log(a);
这真的是等待，真的是顺序执行，表现和同步代码几乎一模一样。
```
const a = await new Promise((resolve, reject) => {
    // async process ...
    return resolve(data);
});
console.log(a);
```
+ await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中。
```
  const exitUser = await UserModel.findOne({mobile}).catch(err=>{
                console.log(err)
            })
```
    