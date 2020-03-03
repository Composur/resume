const lib = require('./a')
console.log('我是b.js',lib)
lib.addNewProperty = '我是b.js中新增加的属性'
console.log(lib.hello)

 