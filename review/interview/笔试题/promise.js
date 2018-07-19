function fn1(callback) {
    setTimeout(()=>{
      console.log('fn1')
      callback()
    }, 1000)
  }
  
  function fn2(callback) {
    setTimeout(()=>{
      console.log('fn2')
      callback()
    }, 1000)
  }
  
  function fn3() {
    setTimeout(()=>{
      console.log('fn3')
    }, 1000)
  }
  
  
  
//   fn1(function(){
//     fn2(function(){
//       fn3()
//     })
//   })
var test=new Promise((resolve,reject)=>{
    
})

class Animal{
  constructor(){
    this.age=18
  }
  move(){}
}
class Person extends Animal{
  constructor(name){
    super()
    this.name=name
  }
  tools(){}
}

var f= new Person()



