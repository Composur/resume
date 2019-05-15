const log=console.log.bind(console)
{
    let a=1;
    var b=2;
}


// let const 存在于块作用域中
// log(a)// a not defined
// log(b)// 2


for(let i=0;i<5;i++){
    setInterval(function(){
        log(i)//循环打印
    },100000)
}

// let a=a //a is not defined


if(true){
    function fn(){

    }
}


function f() { console.log('I am outside!'); }

(function () {
    
  if (false) {
    function f() { console.log('I am inside!'); }
  }
  f();
}());