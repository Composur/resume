/**
 * 1.获取宽高
 * 2.画的时候记录当前的点为新的起点，两点成线
 * 3.清除的时候关闭画
 */
const fn = {
  using: false, //用户是否在使用画板，画或者擦
  startX: undefined,
  startY: undefined,
  endX: undefined,
  endY: undefined,
  context: undefined,
  ctx: undefined,
  clear: false,
  init: function () {
    window.onresize = function () {
        fn.getScreenSize()
      },
      this.draw()
    this.getScreenSize()
    this.clearDraw()
  },
  $: function (ele) {
    return document.querySelector(ele)
  },
  draw: function () {
    const context = this.$('#canvas')
    context.addEventListener("mousedown", function (e) {
      if (fn.clear) { //清的时候就不能再画了
        fn.ctx.clearRect(e.clientX, e.clientY, 10, 10);
      } else {
        fn.using = true
        fn.startX = e.clientX
        fn.startY = e.clientY
      }
    })
    context.addEventListener('mousemove', function (e) {
      // 鼠标移动的时候擦除
      if (fn.clear) {
        if (fn.using) {
          fn.ctx.clearRect(e.clientX, e.clientY, 10, 10);
        }
      } else {
        if (fn.using) {
          fn.endX = e.clientX
          fn.endY = e.clientY
          fn.drawLine(fn.startX, fn.startY, fn.endX, fn.endY)
          // 更新最后一个点的位置为当前的起始位置
          fn.startX = fn.endX
          fn.startY = fn.endY
        }
      }
    })
    context.addEventListener('mouseup', function (e) {
      e.stopPropagation()
      fn.using = false
    })
  },
  drawLine: function (startX, startY, endX, endY) {
    const ctx = fn.ctx
    ctx.lineWidth = 3
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke()
    ctx.closePath()
  },
  clearDraw: function () {
    fn.$('#erase').addEventListener('click', function (e) {
      e.stopPropagation()
      fn.clear = !fn.clear
    })
  },
  getScreenSize: function () { //获取视口宽高
    fn.context = fn.$('#canvas')
    fn.ctx = fn.context.getContext('2d')
    const canvas = fn.context
    const screenSize = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
    canvas.width = screenSize.width
    canvas.height = screenSize.height
  }
}
fn.init()