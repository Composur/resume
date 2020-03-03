exports.hello = '我是a.js'
setTimeout(()=>{
  console.log(exports)
},1000)

module.exports=function test(){
  console.log('我是a.js导出的function')
}