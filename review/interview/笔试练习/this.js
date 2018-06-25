const log=console.log.bind(console)
var obj = {
    fn: function(a, b){
        console.log(this)
    },
    child: {
        fn2: function(){
            // console.log(this)
        }
    }
 }
 obj.fn(1, 2)
 //等价于
 obj.fn.call(obj, 1, 2)         // 所以 this 是 obj
 obj.fn.apply(obj, [1, 2])
 
 obj.child.fn2()
 //等价于
 obj.child.fn2.call(obj.chid)    // 所以 this 是 obj.child

/*******************************************************************/

var number = 50;
var obj = {
    number: 60,
    getNum: function () {
    var number = 70;
    return this.number;
}
}; 

log(obj.getNum());//60
log(obj.getNum.call(obj))
log(obj.getNum.call());//50 浏览器环境
log(obj.getNum.call({number:20}));//20
