// // var log = require('./common')

// // var a = 2
// // function fn1() {
// //     function fn2() {
// //         log(a)
// //     }
// //     function fn3() {
// //         var a = 4
// //         fn2()
// //     }
// //     var a = 2
// //     return fn3


// // }
// // var fn = fn1()
// // // log(fn)
// // fn()
// // eval(log('{a:1}')) 


// // // Arry
// // var arr=[1,2,3,4,5,6]
// // arr.push(7)
// // log(arr)
// // arr.pop()
// // log(arr)
// // arr.splice(1,1,2)
// // log(arr)
// // // add

// // var c=1,b=2,d=3
// // var val=typeof c+b||d>0
// // log(val)
// // log(typeof val)

// // var d = 5;
// // var data = 5 && log('bb')
// // log(5&&log('cc'))
// // console.log(data)
// // var arr = [3,4,5]
// // // arr.forEach(function(e){
// // //     console.log(e*e)
// // // })
// // arr.map(function(e){
// //     log(Math.pow(e,2))
// // })
// // var a = 1;
// // var b = 3;
// // console.log( a+++b );


// // function getInfo(name, age, sex){
// //     console.log('name:',name);
// //     console.log('age:', age);
// //     console.log('sex:', sex);
// //     console.log(arguments);
// //     arguments[0] = 'valley';
// //     console.log('name', name);
// // }

// // getInfo('饥人谷', 2, '男');
// // getInfo('小谷', 3);
// // getInfo('男');


// // function sumOfSquares(){
  
// //     var add=0
// //     for(var i=0;i<arguments.length;i++){
// //       if(typeof arguments[i] !=='number'){
// //         return '请输入数字'
// //       }else{
// //         add += arguments[i]*arguments[i] 
// //       }   
// //     }
// //    return add
// // }
// // var result = sumOfSquares(2,3,5)
// // var result2 = sumOfSquares(1,2)
// // console.log(result)  //29
// // console.log(result2)  //10


// var a = 1
// var c = { name: 'jirengu', age: 2 }

// function f1(n){
//   ++n
// }
// function f2(obj){
//   ++obj.age
// }

// f1(a) 
// f2(c) 
// f1(c.age) 
// console.log(a) 
// console.log(c)
// function n(i){
//     if(i<2){
//         return 1
//     }else{
//         return i*n(i-1)
//     }
// }
// console.log(n(10))

// (function(){
//     console.log('function')
// })()
(function(){console.log('test')})()


var currentScope = 0; // global scope
(function () {
  var currentScope = 1, one = 'scope1';
  console.log(currentScope);
  (function () {
    var currentScope = 2, two = 'scope2';
    console.log(currentScope);
    (function () {
      var currentScope = 3, three = 'scope3';
      console.log(currentScope);
      console.log(one + two + three); // climb up the scope chain to get one and two
    }());
  }());
}());