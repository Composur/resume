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
let queue =  new Queue()

queue.enqueue(1,2,3,4,5)
console.log(queue.toString()) //1,2,3,4,5
console.log(queue.dequeue()) //1
console.log(queue.font()) //2
console.log(queue.isEmpty()) //false
console.log(queue.size()) //4




