// 观察者
// 比较新值和旧值
class Watcher { // 什么时候绑定？ 在解析、更新数据的时候
  constructor(expr, vm, cb) {
    this.expr = expr
    this.vm = vm
    this.cb = cb
    this.oldValue = this.getOldValue()
  }
  update() {
    // 如何得到
    // 调用 watcher 的 update 方法后得到的就是新值
    const newValue = compilUtil.getVal(this.expr, this.vm)
    if (newValue !== this.oldValue) {
        this.cb(newValue)
    }
  }
  getOldValue() {
    // 如何得到？
    // compilUtil.getVal()

    Dep.target = this //这里定义当前数据的 watcher
    const oldValue = compilUtil.getVal(this.expr, this.vm)
    Dep.target = null  // 得到数据就销毁
    return oldValue
  }
}

class Observer {
  // 接收实例传过来的 this.$data
  constructor(data) {
    // 监视数据的更新
    this.observe(data)
  }
  observe(data) {
    if (data && typeof data === 'object') {
      Object.keys(data).forEach(key => {
        // 更新数据
        this.updateObserve(data, key, data[key])
      })
    }
  }
  updateObserve(data, key, value) {
    // 递归对象
    this.observe(value)
    const dep = new Dep()
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get() {
        // 数据劫持 和 Dep 关联起来
        Dep.target &&  dep.addSub(Dep.target)
        return value
      },
      set: (newValue) => {
        // 数据劫持
        this.observe(newValue) // 让修改后的值有 get set 方法
        if (newValue !== value) {
          // 调用监视者 去更新视图
          value = newValue
         
        }
         // 通知 Dep 让 Dep 在通知 watcher 
         dep.notify()
      }
    })
  }
}

// 1. 通知 observe(观察者)) 数据变化
// 2. 添加订阅（搜集 watcher）
class Dep {
  constructor() {
    this.subs = []
  }
  addSub(watcher) {
    this.subs.push(watcher)
  }
  notify() {
    // 遍历观察者
    console.log('所有的观察者',this.subs)
    this.subs.forEach(watcher => {
      // 在这里调用需要更新的观察者
      watcher.update()
    })
  }
}


