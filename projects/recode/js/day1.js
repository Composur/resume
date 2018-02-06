function sayHi(name) {
    console.log('hello ' + name + " !")
 
}
sayHi('李华')

const type=(args)=>{
    console.log(args+"  "+"is "+typeof args)
}
type(1)
type('s')
type(true)
type(undefined)
type(null)
type([])
type({})
type(function(){})


console.log(Object.prototype.toString.call(type) === '[object Array]')


var obj = {x : 1};
function foo(o) {
    o = 100;
}
foo(obj);
console.log(obj.x); 


// a>10?(b=a):(b=a-2)
var d = (a = 3, b = 4)
console.log("tt"+(a = 3, b = 4))
var d = a = 3, b = 4
console.log(d)
var a = typeof 3 + 4
console.log(a)
var a = typeof  typeof 4+4
console.log(a)


// var a=10
var b=2
// console.log(b=a++)
// console.log("c"+(b=++a))

console.log("?"+(a>10?(b=a):(b=a-2)))


let c = 1;  
c+++c;  
console.log(typeof c+2);


console.log(1+1);    
console.log("2"+"4");  
console.log(2+"4"); 
console.log(+"4");