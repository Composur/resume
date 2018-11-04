// 写一个函数 isEmptyObject，判断一个对象是不是空对象
function isEmptyObject(obj){
  // todo...
    for(var item in obj){
        return false
    }
    {
        return true
    }
}
console.log(isEmptyObject( {} )); //true
console.log(isEmptyObject( {a:1} )); //false



// 如果可以用 ES5，那么你会如何写这个函数？

function isEmptyObjectES5(obj){
    if(Object.keys(obj).length===0){
        return true
    }else{
        return false
    }
}

console.log(isEmptyObjectES5( {} )); //true
console.log(isEmptyObjectES5( {a:1} )); //false

function isOorNotEmpty(obj){
    return JSON.stringify(obj)==="{}"
}
console.log(isOorNotEmpty( {} )); //true
console.log(isOorNotEmpty( {a:1} )); //false