const {log}=console


const fn0=function(){}
const fn1=function fn2(){}
const fn2=new Function()


log(fn0.name) //fn0
log(fn1)
log(fn1.name)//fn2
log(fn2.name) //anonymous(匿名))
// log(fn2)//not defined 作用域只限于fn2内部，外部无法访问到

const fun={
  params:[],
  fbody:'console.log(123)'
}

fun.call=function(){
  return eval(fun.fbody)
}
fun.call()


const a=function(){ b.call(), console.log('a')}
const b=function(){ c.call() ,console.log('b')}
const c=function(){console.log('c')}

a.call() // c b a


// 4 3 2 1
setTimeout(() => {
  console.log(1)
}, 501);
setTimeout(() => {
  console.log(2)
}, 500);
setImmediate(()=>{
  console.log(3)
})
process.nextTick(()=>{
  console.log(4)
})