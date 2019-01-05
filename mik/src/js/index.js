const fn = {
  startDraw: false,
  startX:undefined,
  startY:undefined,
  endX:undefined,
  endY:undefined,
  context: undefined,
  init: function () {
    window.onresize=function(){fn.getScreenSize()},
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
      fn.startDraw = true
      fn.startX=e.clientX
      fn.startY=e.clientY
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
  drawLine: function (startX,startY,endX,endY) {
    const ctx = fn.ctx
    fn.ctx=ctx
    ctx.lineWidth = 3
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke()
  },
  clearDraw:function(){
    fn.$('#erase').addEventListener('click',function(e){
      if(fn.startDraw){
        console.log(e)
      }
    })
    // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  },
  getScreenSize:function(){//获取视口宽高
    fn.context=fn.$('#canvas')
    fn.ctx=fn.context.getContext('2d')
    const canvas=fn.context
    const screenSize={
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
    }
    canvas.width=screenSize.width
    canvas.height=screenSize.height
  }
}
fn.init()