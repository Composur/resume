// var log = require('./common')

// var a = 2
// function fn1() {
//     function fn2() {
//         log(a)
//     }
//     function fn3() {
//         var a = 4
//         fn2()
//     }
//     var a = 2
//     return fn3


// }
// var fn = fn1()
// // log(fn)
// fn()
// eval(log('{a:1}')) 


// // Arry
// var arr=[1,2,3,4,5,6]
// arr.push(7)
// log(arr)
// arr.pop()
// log(arr)
// arr.splice(1,1,2)
// log(arr)
// // add

// var c=1,b=2,d=3
// var val=typeof c+b||d>0
// log(val)
// log(typeof val)

// var d = 5;
// var data = 5 && log('bb')
// log(5&&log('cc'))
// console.log(data)
// var arr = [3,4,5]
// // arr.forEach(function(e){
// //     console.log(e*e)
// // })
// arr.map(function(e){
//     log(Math.pow(e,2))
// })
// var a = 1;
// var b = 3;
// console.log( a+++b );


// function getInfo(name, age, sex){
//     console.log('name:',name);
//     console.log('age:', age);
//     console.log('sex:', sex);
//     console.log(arguments);
//     arguments[0] = 'valley';
//     console.log('name', name);
// }

// getInfo('饥人谷', 2, '男');
// getInfo('小谷', 3);
// getInfo('男');


// function sumOfSquares(){
  
//     var add=0
//     for(var i=0;i<arguments.length;i++){
//       if(typeof arguments[i] !=='number'){
//         return '请输入数字'
//       }else{
//         add += arguments[i]*arguments[i] 
//       }   
//     }
//    return add
// }
// var result = sumOfSquares(2,3,5)
// var result2 = sumOfSquares(1,2)
// console.log(result)  //29
// console.log(result2)  //10


// console.log(a);
// var a = 1;


function filterPositive(arr){
    var arr = [];
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number' && arr[i] > 0){
            arr.push(arr[i]);
        }
    }
    return arr;

}
var arr = [3, -1,  2,  '饥人谷', true]
var arr = filterPositive(arr)
console.log(arr) //[3, 2]
// console.log(arr) //[3, -1,  2,  '饥人谷', true]
