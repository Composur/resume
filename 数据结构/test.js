class Stack {
  constructor(){
    this.itmes=[]
  }
  // 压栈
  push(ele){
    this.itmes.push(ele)
  }
  // 出栈，同时返回这个元素
  pop(ele){
    return this.itmes.pop(ele)
  }
  // 返回栈顶元素，不修改栈
  peek(){
    return this.itmes[this.itmes.length-1]
  }
  // 是否为空 boolean
  isEmpty(){
    return this.itmes.length === 0
  }
  // 获取个数
  size(){
    return this.itmes.length
  }
  toString(){
   return this.itmes.toString()
  }
}
const s = new Stack()
s.push(1)
s.push(2)
s.push(3)
s.pop()
console.log(s.peek())
console.log(s.isEmpty())
console.log(s.size())
console.log(s.toString())
console.log(s)