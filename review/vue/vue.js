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
      // 根据 nodeType 进行节点类型的判断 1元素 
      // 判断每个节点的类型，是元素还是文本，分别进行处理
      if (this.isNodeElement(child)) {
        // 处理 v-modal
        this.compileElement(child)
      } else {
        // 文本节点
        // 处理插值
        this.compileText(child)
      }
      // 递归
      if (child.childNodes) {
        this.compile(child)
      }
    })
  }
  compileElement(node) {
    // 在这里处理指令 v-text v-html
    [...node.attributes].forEach(ele => {
      // console.dir(ele)
      const {
        name,
        value
      } = ele
      // 判断是否是指令
      if (this.isVueDirective(name)) {
        // 处理 vue 指令
        const [, directive] = name.split('-')
        const [vueName, eventName] = directive.split(':')
        // 处理传入的 数据
        compilUtil[vueName](node, value, this.vm, eventName)

        // 删除指令 v- ??
        node.removeAttribute('v-' + directive)
      } else {

      }
    })

  }
  compileText(node) {
    const {
      textContent
    } = node
    // 处理双大括号 {{}} '.+' 表示匹配任意字符 ’()‘ 表示分组
    if (/\{\{(.+?)\}\}/.test(textContent)) {
      compilUtil['text'](node, textContent, this.vm)
    }
  }
  isVueDirective(name) {
    return name.startsWith('v-')
  }
  // 是否是元素节点
  isNodeElement(node) {
    return node.nodeType === 1
  }
  // 节点碎片-把节点移动到内存中
  // 操作好这个 dom 后再 innerHtml 到页面上，减少了页面的 重绘 和 回流
  nodeFragment(el) {
    const f = document.createDocumentFragment()
    let node;
    while (node = el.firstChild) {
      // appendChild 具有移动性每移动一个 el节点就或少一个子元素直到没有
      // 这样页面中就少一个元素 内存中就多一个元素
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
      // 1.数据劫持 observe
      new Observer(this.$data)
      // 2.指令解析 compile
      new Compile(this.$el, this)
      // 3. 代理一下 this.$data.obj === this.obj
      this.proxyData(this.$data)
    }
  }
  proxyData(data) {
    for (const key in data) {
      Object.defineProperty(this, key, {
        get() {
          return data[key]
        },
        set(value) {
          data[key] = value
        }
      })
    }
  }
}

const compilUtil = {
  text(node, expr, vm) {
    //  {{text}} 
    if (expr.indexOf('{{') === -1) {
      new Watcher(expr, vm, (newValue) => {
        node.textContent = newValue
      })
      node.textContent = this.getVal(expr, vm)
    } else {
      //获取字符串中 {{obj.key}} 的key 进行替换
      expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
        new Watcher(expr, vm, (newValue) => {
          node.textContent = this.getContent(expr, vm)
        })
        node.textContent = this.getVal(args[1], vm)
      })
    }

  },
  html(node, expr, vm) {
    new Watcher(expr, vm, (newValue) => {
      node.innerHTML = newValue
    })
    node.innerHTML = this.getVal(expr, vm)

  },
  model(node, expr, vm) {
    // new Watcher(expr, vm, (newValue) => {
    //   node.value = newValue
    // })
    node.value = this.getVal(expr, vm)
    node.addEventListener('input', e => {
      this.setVal(expr, vm, e.target.value)
    })
  },
  on(node, expr, vm, eventName) {
    const fn = vm.$options.methods[expr]
    // 注意这里要绑定一下 vm 实例 
    node.addEventListener(eventName, fn.bind(vm))
  },
  getVal(expr, vm) {
    return expr.split('.').reduce((pre, current) => {
      return pre[current]
    }, vm.$data)
  },
  getContent(expr, vm) {
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getVal(args[1], vm)
    })
  },
  setVal(expr, vm, inputVal) {
    return expr.split('.').reduce((pre, current) => {
      pre[current] = inputVal
    }, vm.$data)
  }
}