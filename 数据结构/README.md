## 数据结构

> 在计算机中如何存储和组织数据

#### 1.线性结构

+ 数组

  + 线性结构
  + 数组的插入、删除效率较低
  + 通过下标值效率高

+ 栈

  - 受限的线性结构，只能在一端进行添加（进栈）、删除（出栈）操作。

  - 后进先出。

  - 例如：十进制转二进制的计算过程，除2取余法。

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

    

    

  - 例如：摊煎饼，摞到一起。

  ![栈](/Users/haizhi/personal/resume/数据结构/img/stack.jpg)

  小测验：

  ![](/Users/haizhi/personal/resume/数据结构/img/stack_q01.jpg)

  > 答案 C 。3 4 6 5 2 1->压入6，压入5，压入4，压入3，弹出3，弹出4，*弹出5，弹出6*，压入2，弹出2，压入1

+ 用数组模拟一个栈

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

+ 

+ 队列

+ 链表

#### 2.哈希表



#### 3. 树



#### 4.图



## 算法

算法（algorithm），解决问题的有限的步骤。

