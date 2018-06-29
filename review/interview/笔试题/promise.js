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

