// exports.count = 0
// setTimeout(function () {
//   console.log('increase count to', ++exports.count, 'in counter.js after 500ms')
// }, 500)


setTimeout(()=>{ // 异步任务，先在当前执行栈注册一个回调函数，主线程继续往下执行，当这个异步任务有了结果就在任务队列放置一个事件
  console.log('setTimeout')
})

console.log('start') // 同步任务，首先打印输出’start‘

Promise.resolve(()=>{ // 异步任务，放到任务队列
  console.log('promise 1') 
  // 这里的promise返回了一个undefined 
}).then(()=>{ // 同样是异步任务为啥promise2先执行，因为Promise.then是微任务，优先级比较高
  console.log('promise 2') //同步任务
})

console.log('end') // 同步任务，打印输出

