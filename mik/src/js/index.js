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
  context: document.querySelector('#canvas'),
  ctx: undefined,
  clear: false,
  init: function () {
    this.draw()
    this.getScreenSize()
    this.clearDraw()
    this.checkMobileAndPC()
  },
  $: function (ele) {
    return document.querySelector(ele)
  },
  draw: function () { //监听事件
    fn.context.addEventListener("mousedown", function (e) {
      fn.using = true //使用中的状态（画和清除等状态）
      if (fn.clear) { //清的时候就不能再画了
        fn.ctx.clearRect(e.clientX - 5, e.clientY - 5, 10, 10); //清除的时候减5是因为，清理坐标是左上角
      } else {
        fn.startX = e.clientX
        fn.startY = e.clientY
        console.log(fn.startX,fn.startY)
      }
    })
    fn.context.addEventListener('mousemove', function (e) {
      if (!fn.using) {
        return
      }
      // 鼠标移动的时候擦除
      if (fn.clear) {
        fn.ctx.clearRect(e.clientX, e.clientY, 10, 10);
      } else { 
        fn.endX = e.clientX
        fn.endY = e.clientY
        fn.drawLine(fn.startX, fn.startY, fn.endX, fn.endY)
        // 更新最后一个点的位置为当前的起始位置
        fn.startX = fn.endX
        fn.startY = fn.endY
      }
    })
    fn.context.addEventListener('mouseup', function (e) {
      fn.using = false
    })
  },
  drawLine: function (startX, startY, endX, endY) {
    fn.ctx = fn.context.getContext('2d')
    const ctx = fn.ctx
    ctx.lineWidth = 3
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke()
    ctx.closePath()
  },
  clearDraw: function () {
    // fn.$('#erase').addEventListener('click', function (e) {
    //   e.stopPropagation()
    //   fn.clear = !fn.clear
    //   // 这样写的坏处是需要控制clear的状态，逻辑不是很清晰
    //   if(fn.clear){
    //     fn.$('#erase').textContent='画笔'
    //   }else{
    //     fn.$('#erase').textContent='橡皮擦'
    //   }
    //   // 遵循一个按钮只做一件事，我们进行绑定两个事件
    //   // 1.启用按钮
    //   // 2.启用橡皮檫 
    // })
    // 平铺直出，没有明显的bug
    erase.onclick=function(){
      fn.clear=true
      this.className='erase'
      pen.className='erase active'
    }
    pen.onclick=function(){
      fn.clear=false
      this.className='erase'
      erase.className='erase active'
    }
  },
  getScreenSize: function () { //获取视口宽高，动态改变画板的宽高，根据屏幕的缩放
    window.onresize=function(){
      const screenSize = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
      console.log(screenSize)
      fn.context.width = screenSize.width
      fn.context.height = screenSize.height
    }
    const screenSize = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
    console.log(screenSize)
    fn.context.width = screenSize.width
    fn.context.height = screenSize.height
  },
  checkMobileAndPC:function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      fn.context.ontouchstart=function(e){
        console.log(e)
        fn.using = true //使用中的状态（画和清除等状态）
        if (fn.clear) { //清的时候就不能再画了
          fn.ctx.clearRect(e.touches[0].clientX - 5, e.touches[0].clientY - 5, 10, 10); //清除的时候减5是因为，清理坐标是左上角
        } else {
          fn.startX = e.touches[0].clientX
          fn.startY = e.touches[0].clientY
        }
      }
      fn.context.ontouchmove=function(e){
        if (!fn.using) {
          return
        }
        // 鼠标移动的时候擦除
        if (fn.clear) {
          fn.ctx.clearRect(e.touches[0].clientX - 5, e.touches[0].clientY - 5, 10, 10);
        } else { 
          fn.endX = e.touches[0].clientX
          fn.endY = e.touches[0].clientY
          fn.drawLine(fn.startX, fn.startY, fn.endX, fn.endY)
          // 更新最后一个点的位置为当前的起始位置
          fn.startX = fn.endX
          fn.startY = fn.endY
        }
      }
      fn.context.ontouchend=function (e) { 
        e.stopPropagation()
        fn.using = false
       }
     }
  }
}
fn.init()