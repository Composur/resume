function swap(x, y){
    var temp = x;
    x = y;
    y = temp;  
  }
  
  var a = 1
  var b = 2
  swap(a, b)
  console.log(a) //输出什么
  console.log(b) //输出什么
  
  var obj1 = {name: 'jirengu'}
  var obj2 = {age: 2}
  swap(obj1, obj2)//js中所有的参数传递的都是值，不可能通过引用来传递
  console.log(obj1)  //输出什么
  console.log(obj2)  //输出什么

