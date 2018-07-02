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
+ 200：服务器响应正常。表示请求成功,请继续发送请求。
+ 304：该资源在上次请求之后没有任何修改（这通常用于浏览器的缓存机制，使用GET请求时尤其需要注意）。
+ 400：无法找到请求的资源，请求有误，请求的内容无法被服务器执行。
+ 401：访问资源的权限不够，没有进行身份验证（或者无权访问）。
+ 403：没有权限访问资源。
+ 404：需要访问的资源不存在（没有找到）。
+ 405：需要访问的资源被禁止。
+ 407：访问的资源需要代理身份验证。
+ 414：请求的URL太长。
+ 500：服务器内部错误。
+ 502：网关错误。
+ 503：暂时不能处理请求，可以过些时候再试。
+ 505：HTTP版本不受支持,可以禁用此版本。
##### 总体说：
+ 400-499：问题出在客户端。
+ 500-599：问题出在服务器端。