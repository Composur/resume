#### es6对必选参数的检查
```
{
    // es6可以避免检查默认参数
    // 对必选参数的检查
        function fn({a,b=1,c=2}={a:checkParameter()}){
            return a+b+c
        }
        console.log(fn({a:2,}))//5
        // 参数全为空的时候
        console.log(fn())//can\'t be empty

        function checkParameter(){
            throw new Error('can\'t be empty')
    }
}
```