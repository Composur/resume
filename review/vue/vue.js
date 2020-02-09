// compile（编译）
class Compile {
  constructor(el, vm) {
    this.el = document.querySelector(el)
    this.vm = vm

    // 1.放到文档碎片中，减少页面回流、重绘 
    const fragment = this.nodeFragment(this.el)
    // 2.编译
    this.compile(fragment)
    // 3. 渲染DOM
    this.el.appendChild(fragment)
  }
  compile(fragment) {
    const childNodes = fragment.childNodes;
    [...childNodes].forEach(child => {
      // 判断每个节点的类型，是元素还是文本，分别进行处理
      if (this.isNodeElement(child)) {
        console.log('元素',child)
        this.compileElement(child)
      } else {
        console.log('文本', child)
        this.compileText(child)
      }
      // 递归
      if (child.childNodes) {
        this.compile(child)
      }
    })
  }
  compileElement(node){

  }
  compileText(text){
    
  }
  // 是否是元素节点
  isNodeElement(node) {
    return node.nodeType === 1
  }
  // 节点碎片
  nodeFragment(el) {
    const f = document.createDocumentFragment()
    let node;
    while (node = el.firstChild) {
      f.appendChild(node)
    }
    return f
  }
}


// 入口
class Vue {
  constructor(options) {
    this.$el = options.el
    this.$data = options.data
    this.$options = options
    if (this.$el) {
      new Compile(this.$el, this)
    }
  }
}