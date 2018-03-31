const log = console
    .log
    .bind(console)
var i
var fnArr = []
for (var i = 0; i < 2; i++) {
    // for循环没有局部作用域,执行完毕i=20,再执行function fnArr[i]=function(){     return i }
    (function (i) {
        fnArr[i] = function () {
            return i
        }
    })(i)
    // 闭包 log(i)
}
// log(i) //20
function fn() {
    return i
}
// log(fn()) //20 log(fnArr[1]()) //20 fnArr[0]=function(){     return i }
// fnArr[1]=function(){     return i }

/**
 * 
 *fn 传递的函数，
 *content传递的作用域
 *arguments传递的参数
 */
function bind(fn, content) {
    // bind(返回的函数，绑定函数，传入的参数)
    var args=Array.prototype.slice.call(arguments,2)
    // 返回一个新的函数
    return function () {
        // 获取执行函数时传递的参数
        var lave=Array.prototype.slice.call(arguments)
        //把原来的参数与fn的参数拼接
        var nowArr=args.concat(lave)
        fn.apply(content, nowArr)
    }
}
bind('当前函数','绑定的作用域函数',arguments)

var test=bind(console.log,console)
test(`${test}`)

/**
 * 函数柯里化
 */

 function curry(fn,content){
    // 将传入的参数，转化为数组
    var args=Array.prototype.slice.call(arguments,1)
    return function(){

        // 剩余传递的参数用户添加的
        var laveArgs=Array.prototype.slice.call(arguments)

        // 数组拼接
        var  nowArr=args.concat(laveArgs)
        return fn.call(null.nowArr)
    }
 }



function Book(){
    this.title='hh'
}
Book.prototype.getTitle=function(){
    console.log(this.title)
}

/**
 * 1、
 * 
 */  
function create(obj){
    //寄生工厂模式
    // 实现寄生类
    function Fn(){}
    //让类的原型继承参数对象
    Fn.prototype=obj
    // 返回这个实例化对象
    return new Fn()
 }

var js=new Book()
log(js)

var css=Object.create(js)
log(css.getTitle()===js.getTitle())
log(css.title===js.title)
log(css.constructor===js.constructor)