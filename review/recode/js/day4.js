
const log=require('./common')

// function factorial(n){
//     if(n === 1){
//         return 1
//     }
//     return n * factorial(n-1)
// }
// log(factorial(3))



// var target = {
//     a: 1,
//     b: 2,
//     hello: function() { 
//             console.log("Hello, world!");
//     }
// };
// var copy = JSON.parse(JSON.stringify(target));
// console.log(copy); 
// function deepCopy(oldObj) {
//     var newObj = {};
//     for(var key in oldObj) {
//         if(typeof oldObj[key] === 'object') {
//             newObj[key] = deepCopy(oldObj[key]);
//         }else{
//             newObj[key] = oldObj[key];
//         }
//     }
//     return newObj;
// }
// log(deepCopy(target))
// // 遍历 company 对象，输出里面每一项的值
// var company = {
//     name: '饥人谷',
//     age: 3,
//     sex: '男'
// }
// for(var companyValue in company){
//   console.log(company[companyValue])
// }

// //使用 JSON 对象实现一个简单的深拷贝函数(deepCopy)。

// //提示：JSON.stringify 与 JSON.parse
// var oldObject={};
// var newObject=JSON.parse(JSON.stringify(oldObject))

// //分别举例说明数组方法push、pop、shift、unshift、join、splice、sort、join、reverse、concat的作用？

// var array=[1,2,3,4,5]
// log("1 "+array.push(6))//在数组的末尾添加一项
// log("2 "+array)
// log("3 "+array.pop())//删除数组的最后一项并返回这一项
// log("4 "+array)
// log("5 "+array.shift())//删除数组的第一项并返回这一项
// log("6 "+array)
// log("7 "+array.unshift(1))//在数组的第一位新增
// log("8 "+array)
// log("9 "+array.join('-'))//将一个数组或则数组对象的所有元素连接成一个（按传入的参数分割）字符串并返回这个字符串join方法不会返回这个字符串
// log("10 "+array)
// log('11 '+array.splice(0,1,1))//传入的三个参数的代表开始的索引、删除元素的位置、插入的新元素，返回值是一个由删除元素组成的新数组
// log("12 "+array)
// log("13 "+array.sort())//sort用于对数组进行排序，会按照字母表中的顺序进行排序一般会传入一个方法进行排序
// log("14 "+array.reverse())//对数组进行倒序,返回倒序过的数组
// log('15 '+array)
// log('16 '+array.concat(array))//用于连接连个数组，
// log("17 "+array)

// //写一个函数，操作数组，返回一个新数组，新数组中只包含正数。
// function filterPositive(arr){
//     for(var i=0;i<arr.length;i++){
//         if(typeof arr[i]!=="number"||arr[i]<=0){
//             arr.splice(i,1)
//             i--
//         }
//     }
// }
// var arr = [3, -1,  2,  '饥人谷', true]
// filterPositive(arr)
// log(filterPositive(arr))
// console.log(arr) //[3,  2]

// //用 splice函数分别实现 push、pop、shift、unshift方法
var arr=[5,6,7,8]
function pushh(arr,value){
    arr.splice(arr.length,0,value)
    return arr
}
console.log(pushh(arr,12))
function popp(arr){
   arr.splice(arr.length-1,1)
   return arr
}
console.log(popp(arr))
function shiftt(arr,value){
    arr.splice(0,1)
    return arr
}

console.log(shiftt(arr))
function unshiftt(arr,value){
    arr.splice(0,0,value)
    return arr
}
console.log(unshiftt(arr,5))


// var users = [
//     { name: "John", age: 20, company: "Baidu" },
//     { name: "Pete", age: 18, company: "Alibaba" },
//     { name: "Ann", age: 19, company: "Tecent" }
//   ]

//   function byName(user1,user2){
//       return user1.name>user2.name
//   }
//   function byAge(user1,user2){
//       return user1.age>user2.age
//   }
//   function byCompany(user1,user2){
//     return  user1.company>user2.company
//   }
//   log(users.sort(byName))
//   log(users.sort(byAge))
//   log(users.sort(byCompany))


//   var arr=[7,8,7,9,10]
// //   log(arr.indexOf(7))//0
// //   log(arr.lastIndexOf(7))//2
//     arr.forEach(element => {
// //    log(element+1) 
// });
//     arr.map(function(ele){
//         // console.log(ele+3)
//     })
//     // console.log(arr)
//    var every= arr.every(ele=>{
//         return ele<1;
//     })
//     // log(every)

//     var some=arr.some(ele=>{
//         return ele>9
//     })
//     // log(some)

//     var filter=arr.filter(ele=>{
//         return ele>8
//     })
//     // log(filter)
//      var reduce=arr.reduce((ele1,ele2)=>{
//          return ele1+ele2
//      })
//      log(reduce)

var str=` 
我是第一行
你是第二行
他是第三行


`
log(str)

var longString = "Long \
long \
long \
string";



log(longString)

var str1='用反斜杠分行 \
反斜杠后面一定要紧跟换行符 \
这里是第三行,反斜杠后面紧跟的是换行符不要有空格，\
空格会报错 \
'

log(str1)

// var str = 'C:/\Users/\Document\/node/\index.js'
console.log(str)


var str = 'hello jirengu.com'

log(str[3])
log(str.charCodeAt(str[4]))
log(str.slice(str.indexOf('g')))
log(str.substr(str.indexOf('o'),4))
log(str.indexOf('l'))
log(str.charAt(3))
// log(str.charAt('g'))
// log(str.substring(str.charAt('g'),str.length))


// 随机IP

var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0);
console.log(ip)

function getRandIp(){
    var arrIp=[]
    for(var i=0;i<4;i++){
        arrIp[i]=Math.floor(Math.random()*256)
    }
    return arrIp.join('.')
}
var ip=getRandIp()
log(ip)

log('生成随机的颜色')
function getRandColor(){
    var color='#'
    var num='0123456789abcdef'
    for(var i=0;i<6;i++){
        color+=num[Math.floor(Math.random()*16)]
    }
    return color
}
var color = getRandColor()
console.log(color)   // #3e2f1b

// 随机数字
function getRadom(min,max){
    return parseInt(Math.random()*(max-min+1)+min)
}
var randon=getRadom(55,700)
log(randon)
// 随机字符串

function getRandStr(len){
    var allStr='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'
    var str=''
    for(var i=0;i<len;i++){
        str+=allStr.charAt(Math.floor(Math.random()*allStr.length))      
    }
    return str
}
var str=getRandStr(10)
log(str)

log('Date')

var setTime={
    atNow:60*1000,
    threeMin:60*60*1000,
    eighthour:60*60*24*1000,
    thirtyDays:60*60*24*30*1000,
    tewlveMouns:60*60*24*30*12*1000,
    eightYear:60*60*24*30*12*1000
}

function friendlyDate(time){
    var nowTime=Date.now()
    log(nowTime)
    log(time)
    var currentTime=nowTime-time
        if(currentTime<60000){
            return '不到一分钟'
        }else if(currentTime>=setTime.atNow&&currentTime<setTime.threeMin){
            return '3分钟前'
        }else if(currentTime>=setTime.threeMin&&currentTime<setTime.eighthour){
            return '8小时前'
        }else if(currentTime>=setTime.eighthour&&currentTime<setTime.thirtyDays){
            return '3天前'
        }else if(currentTime>=setTime.thirtyDays&&currentTime<setTime.tewlveMouns){
            return '2个月前'
        }else  if(currentTime>=setTime.eightYear){
            return '8年前'
        }
    // log(nowTime)

}
log(friendlyDate('1492350564250'))


log('实现一个reduce函数')



var arr=[1,2,3]
function reduce_c(arr,current,initial){
    var  temArr=(initial  ===undefined ? []:[initial]).concat(arr)
    while(temArr.length>1){
        temArr.splice(0,2,current(temArr[0],temArr[1]))

    }
    return temArr[0]
}

var sum=reduce_c(arr,function(num1,num2){
    return num1+num2
})
log(sum)


log('包括最小的不包含最大的')
function getMiddleNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
var test=getMiddleNum(299,899)
log(test)


