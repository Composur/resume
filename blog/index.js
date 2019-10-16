const count = require('./test')
setTimeout(function () {
  console.log('read count after 1000ms in commonjs is', count)
}, 1000)
