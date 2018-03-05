const log=require('./common')

function factorial(n){
    if(n === 1){
        return 1
    }
    return n * factorial(n-1)
}
log(factorial(3))



var target = {
    a: 1,
    b: 2,
    hello: function() { 
            console.log("Hello, world!");
    }
};
var copy = JSON.parse(JSON.stringify(target));
console.log(copy); 
function deepCopy(oldObj) {
    var newObj = {};
    for(var key in oldObj) {
        if(typeof oldObj[key] === 'object') {
            newObj[key] = deepCopy(oldObj[key]);
        }else{
            newObj[key] = oldObj[key];
        }
    }
    return newObj;
}
log(deepCopy(target))
