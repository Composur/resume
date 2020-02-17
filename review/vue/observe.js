class Observer{
  // 接收实例传过来的 this.$data
  constructor(data){
    // 监视数据的更新
    this.observe(data)
  }
  observe(data){
    if(data && typeof data === 'object'){
      Object.keys(data).forEach(key=>{
        // 更新数据
        this.updateObserve(data,key,data[key])
      })
    }
  }
  updateObserve(data, key, value) {
    // 递归对象
    this.observe(value)

    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get() {
        return value
      },
      set: (newValue) => {
        // 数据劫持
        this.observe(newValue) // 让修改后的值有 get set 方法
        if (newValue !== value) {
          // 调用观察者 去更新视图
          value = newValue
        }
      }
    })
  }
}