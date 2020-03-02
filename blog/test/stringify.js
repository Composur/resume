/**
 * @description 实现一个 JSON.stringify()
 * @param {Object} obj 
 * Boolean | Number| String 类型会自动转换成对应的原始值。
    undefined、任意函数以及symbol，会被忽略（出现在非数组对象的属性值中时），或者被转换成 null（出现在数组中时）。
    不可枚举的属性会被忽略
    如果一个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性也会被忽略
 */
const stringify = (obj) => {
  const type = typeof obj
  if (type !== 'object') {
    if (/string|boolean|function/.test(type)) {
      obj = `"${obj}"`
    }
    return String(obj)
  } else {
    let json = []
    let arr = Array.isArray(obj)
    for (let k in obj) {
      const type = typeof obj[k]
      let v = obj[k]
      if (/string|undefined|function/.test(type)) {
        v = `"${v}"`
      } else if (type === 'object') {
        v = stringify(v)
      }
      json.push((arr ? "" : '"' + k + '":') + String(v));
    }
    return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
  }
}
const obj = {
  a: {
    aa: 'aa',
  },
  b: undefined,
  c: Symbol('c'),
  d: this.a,
  c:1
}
const log = console.log.bind(console)
log(stringify(obj)) //{"a":{"aa":"aa"},"b":"undefined","c":1,"d":"undefined"}
log(JSON.stringify(obj)) //{"a":{"aa":"aa"},"c":1}