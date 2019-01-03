const fn = {
  startDraw: false,
  startX:undefined,
  startY:undefined,
  endX:undefined,
  endY:undefined,
  context: document.querySelector('#canvas'),
  init: function () {
    this.draw()
    this.getScreenSize()
  },
  $: function (ele) {
    return document.querySelector(ele)
  },
  draw: function () {
    const context = this.$('#canvas')
    context.addEventListener("mousedown", function (e) {
      fn.startDraw = true
      fn.startX=e.clientX
      fn.startY=e.clientY
      // fn.drawPoint(e.clientX, e.clientY)
    })
    context.addEventListener('mousemove', function (e) {
      if (fn.startDraw) {
        fn.endX=e.clientX
        fn.endY=e.clientY
        fn.drawLine(fn.startX,fn.startY,fn.endX,fn.endY)
        // 更新最后一个点的位置为当前的起始位置
        fn.startX=fn.endX
        fn.startY=fn.endY
      }
    })
    context.addEventListener('mouseup', function (e) {
      e.stopPropagation()
      fn.startDraw = false
    })

  },
  drawPoint: function (X, Y) {
    const ctx = fn.context.getContext('2d');
    ctx.beginPath()
    ctx.arc(X, Y, 1, 0, Math.PI * 2, true);
    ctx.fillStyle = '#000'
    ctx.fill()
  },
  drawLine: function (startX,startY,endX,endY) {
    const ctx = fn.context.getContext('2d');
    const size=fn.getScreenSize()
    // fn.context.width=size.width
    // fn.context.height=size.height
    ctx.lineWidth = 3
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke()
  },
  clearDraw:function(){

  },
  getScreenSize:function(){//获取视口宽高
    const canvas=fn.context
    const screenSize={
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
    }
    canvas.width=screenSize.width
    canvas.height=screenSize.height
    window.onresize=()=>{
      fn.getScreenSize()
    }
  }
}
fn.init()