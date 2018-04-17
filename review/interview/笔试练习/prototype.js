
var log=console.log.bind(console)
// 构造函数
// Person中有个prototype
function Person(name,age){
        this.name=name
        this.age=age
}

Person.prototype.sayName=function(){
    console.log(this.name)
}

// new出来的p1中有个__proto__
// __porto__又指向Person的prototype
// 创建一个对象或是创建一个实例 new的过程给this赋值就是给这个对象赋值，完成以后把这个对象return出来赋值给p1
// 通过new方法创建的对象会有一个__proto__的属性
var p1=new Person('xiaoqi',18)
log(p1.sayName())

// es6

class PersonEs6{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sayName(){
        console.log(this.name)
    }
}

class p3 extends PersonEs6{
    
}

var p2=new PersonEs6('xiao',20)
log(p2.sayName())

var p4=new p3('hello',21)
log(p4.sayName())


var a=Object.create({a:1})
log(a.a)//1

var p5=Object.create(Person.prototype)



