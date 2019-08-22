const {log}=console


const fn0=function(){}
const fn1=function fn2(){}
const fn2=new Function()


log(fn0.name) //fn0
log(fn1)
log(fn1.name)//fn2
log(fn2.name) //anonymous(匿名))
// log(fn2)//not defined 作用域只限于fn2内部，外部无法访问到