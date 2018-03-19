// 轮播图显示区域
var carousel=document.getElementById('carousel');
// all轮播图片
var carousel_items=carousel.getElementsByClassName("carousel-item")
// 切换数字
var carousel_nums=carousel.getElementsByClassName('carousel-dot')[0].getElementsByTagName('span')
// arrow
var carousel_prev=carousel.getElementsByClassName('carousel-arrow')[0]
var carousel_next=carousel.getElementsByClassName('carousel-arrow')[1]

var clickFlag=true; //设置左右的标记防止重复点击
var time //设置自动计时器
var index=0 //初始化下标
var Distence=carousel.offsetWidth //展示区的宽度
// 定义图片滑动的函数
function carousel(){
    var start=carousel_items.offsetLeft;
}

