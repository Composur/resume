class Queue {
  // 属性
  constructor() {
    this.items = []
  }

  // 进入队列
  enqueue(...arg) {
    this.items.push(...arg)
  }
  // 删除队列首个元素,并返回
  dequeue() {
    return this.items.shift()
  }
  // 返回第一个元素
  font() {
    return this.items[0]
  }
  // 是否为空
  isEmpty() {
    return this.items.lengthx === 0
  }
  size() {
    return this.items.length
  }
  toString() {
    return this.items.toString()
  }
}
let queue = new Queue()

// 淘汰 报数为5的人 返回最后获胜的人
const num = 5
queue.enqueue(1, 2, 3, 4, 5, 6)
while (queue.size() > 1) {
  for (let i = 0; i < num - 1; i++) {
    // 不是 num 的从新加入队列
    queue.enqueue(queue.dequeue())
  }
  queue.dequeue()
  console.log(queue.toString())
}
// 6,1,2,3,4
// 6,1,2,3
// 1,2,3
// 3,1
// 1
