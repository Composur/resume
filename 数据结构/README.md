## 数据结构

> 在计算机中如何存储和组织数据

### 一.线性结构

#### 1.数组

​	线性结构，数组的插入、删除效率较低，通过下标值效率高。

#### 2.栈

​	受限的线性结构，只能在一端进行添加（进栈）、删除（出栈）操作，后进先出。

##### 2.1 栈的实现

​	利用数组

```javascript
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
console.log(s.peek()) //2
console.log(s.isEmpty()) //false
console.log(s.size()) //2
console.log(s.toString())//1,2
console.log(s)//Stack { itmes: [ 1, 2 ] }
```

##### 3.2 栈的应用

+ 十进制转二进制的计算过程，除2取余法。

<img src="/Users/haizhi/personal/resume/数据结构/img/stackq02.jpg" style="zoom:80%;" />

```javascript

const dec2bin = function (num) {
  // 定义一个栈
  const stack = new Stack()
  // 取模
  while (num > 0) {
    stack.push(num % 2)
    num = Math.floor(num / 2)
  }
  let result = ''
  while (!stack.isEmpty()) {
    result += stack.pop()
  }
  return result
}
console.log(dec2bin(10))//1010
```

+ 摊煎饼，摞到一起。

![栈](/Users/haizhi/personal/resume/数据结构/img/stack.jpg)

小测验：

![](/Users/haizhi/personal/resume/数据结构/img/stack_q01.jpg)

> 答案 C 。3 4 6 5 2 1->压入6，压入5，压入4，压入3，弹出3，弹出4，*弹出5，弹出6*，压入2，弹出2，压入1

  + 路由前进回退

    ```javascript
    history.pushState({},'','home')
    history.back() //回退
    history.forward() //前进
    ```

    

#### 3.队列

> 受限的线性结构，先进先出（FIFO）,例如：排队购票，打印机打印纸张。

##### 3.1 队列的实现

+ 数组的方式

  ```javascript
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
  
  ```
  

##### 3.2 队列的应用

+ 模拟击鼓传花

  ```javascript
  // 击鼓传花
  // 依次报数，1、2、3... 淘汰报数为5的人,返回最后获胜的人
  let queue = new Queue()
  const num = 5
  queue.enqueue(1, 2, 3, 4, 5, 6)
  while (queue.size() > 1) {
    // num-1 num 就是每轮要淘汰的那个人
    for (let i = 0; i < num - 1; i++) {
  		// 出列后入列    
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
    console.log(queue.toString())
  }
  // 第一轮：6,1,2,3,4
  // 第二轮：6,1,2,3
  // 第三轮：1,2,3
  // 第四轮：3,1
  // 第五轮：1
  ```

  

##### 3.3 队列的优选级

+ 每个元素不再仅仅是一个数据，且包含该元素的优先级 
  + 应用：
    + 飞机登机，头等舱优先级高于经济舱
    + 计算机操作系统线程处理任务的优先级

###### 3.3.1 实现优先级队列

#### 4. 链表

> 相比较数组，链表中的元素在内存中不必是一整块的空间。在插入、删除的时候效率高。
>
> 链表每个节点都保存的有数据，且保存链向下一个节点的指针。

链表的缺点：

+ 链表访问任何一个位置的元素时，都需要从头开始访问，*无法跳过第一个元素访问任何一个元素*。

##### 4.1 单向链表

*一个单向链表包含两个值: 当前节点的值和一个指向下一个节点的链接*

![Singly-linked-list.svg](/Users/haizhi/personal/vue-project/vue-delivery/client/doc/img/lb.png)

上图就是一个简单的单向链表

+ 缺点
  + 无法回到上一个节点（如文本编辑器的光标）

##### 4.2 双向链表

*相比较于单向链表多了一个向前的链接引用，有一个head指针指向头部，tail指针指向尾部*

![Doubly_linked_list](./img/Doubly_linked_list.jpg)

+ 优点，使用方便。

+ 缺点
  + 每次插入、删除的时候需要考虑四个节点，单向链表只需要考虑两个
  + 占用内存空间大

###### 4.2.1 双向列表插入

```javascript
  // 添加到指定位置
      insert(position, node) {
        let index = 0
        const insertNode = new Node(node)
        if (!this.head) {
          this.head = insertNode
          this.tail = insertNode
          return
        }
        if (position === 0) {
          let temp = this.head
          this.head = insertNode
          this.head.next = temp
          temp.prev = insertNode
          return
        } else if (this.length === position) {
          insertNode.prev = this.tail
          this.tail.next = insertNode
          this.tail = insertNode
          return
        }
        let currentNode = this.head
        let previous = null
        while (index++ < position) {
          previous = currentNode
          currentNode = currentNode.next
        }
        // 画个图帮助理解
        previous.next = insertNode
        insertNode.next = currentNode
        currentNode.prev = insertNode
        insertNode.prev = previous
      }
```





## 算法

算法（algorithm），解决问题的有限的步骤。

