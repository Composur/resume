// 写一个函数execTime,参数：时间毫秒，作用：什么都不做，但函数执行的时候会耗时参数传递的毫秒数
const log=console.log.bind(console)
function execTime(time){  
    // let currentTime=new Date().getTime()
    let endTime=new Date().getTime()
    // while(currentTime<=endTime){
    //     currentTime=new Date()
    // }
    while(new Date().getTime()-endTime<=time){
        // do
    }
}
log(1)//1
execTime(3000)//3秒后输出2
log(2)//2



var syncFun = function(callback) {
    var start = new Date();
    while(new Date() - start < 1000) { // delay 1 sec
        ;
    }
    callback();
    console.log('同步方法返回'); // 2
};

syncFun(function() {
    console.log('这是同步回调'); // 1
});
console.log('同步方法会阻塞当前逻辑'); // 3



/****************** 异步回调 ************************/
var asyncFun = function(callback) {
    setTimeout(callback, 1000); // delay 1 sec
    console.log('异步方法返回'); // 4
};
asyncFun(function() {
    console.log('这是异步回调'); // 6
});
console.log('异步方法不会阻塞当前逻辑'); // 5