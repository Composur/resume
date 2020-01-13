function Super() {}
Super.prototype.getNumber = function () {
  return 1
}

function Sub() {}

Sub.prototype = Object.create(Super.prototype, {
  constructor: {
    value: Sub,
    enumerable: false,
    writable: true,
    configurable: true
  }
})
let s = new Sub()
console.dir(s)