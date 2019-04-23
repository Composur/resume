const {log}=console
let str='xutong'
log(str.padStart(7,'x'))
log(str.padEnd(7,'x'))
log(`${str}`)
log('---------')
var a = {n: 1}; // 第1行
var b = a; // 第2行
a.x = a = {n: 2}; // 第3行
console.log(a.x); // 第4行
console.log(b); // 第5行

log(['1','2','3'].map(parseInt))
log('\'map\'')
const  map=new Map([['a',2],['b',3]])
log([...map])

// function debounce(func, await){
//     var timeout
//     return function(){
//         log(timeout)
//         clearTimeout(timeout)
//         timeout=setTimeout(func, await);
//     }    
// }

function debounce(func, wait) {
    var timeout;
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(func, wait);
    }
}
debounce(function(){
    console.log(1)
},5000)


function throttle(func,wait){
    var now=+new Date()
    var previous=0
    var _this=this
    var args=arguments
    if(now-previous>wait){ //在特定的时间间隔一直执行
        func.apply(_this,args)
        previous=now
    }
}
