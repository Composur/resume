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