'use strict'
var log=console.log.bind(console)
log('call、apply、bind')
function fn(a,b){
    log(a,b)
}
fn(1,2)
//the same with
//在严格模式下fn的this就是call的第一个参数,非严格模式下会替换为window
fn.call(undefined,1,2)
log(fn.this) 
fn.apply(undefined,[1,2])

var obj={
    fn1:function(a,n){
        log(this)
    },
    fn2:{
        child:function(){
            log(this)
        }
    }
}
obj.fn1()
obj.fn1.call(obj,1,2)
obj.fn1.apply(obj,[1,2])

obj.fn2.child();

obj.fn2.child.call(obj.child)



