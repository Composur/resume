var log = require('./common')

var a = 2
function fn1() {
    function fn2() {
        log(a)
    }
    function fn3() {
        var a = 4
        fn2()
    }
    var a = 2
    return fn3
}
var fn = fn1()
// log(fn)
fn()
eval(log('{a:1}')) 


// Arry
var arr=[1,2,3,4,5,6]
arr.push(7)
log(arr)
arr.pop()
log(arr)
arr.splice(1,1,2)
log(arr)