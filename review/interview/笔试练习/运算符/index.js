const log=console.log.bind(console)
var object1 = {
    valueOf: function () {
        return 1;
    },
    toString: function () {
        return "object1";
    }
};

var object2 = {
    valueOf: function () {
        return 2;
    },
    toString: function () {
        return "object2";
    }
};


// 对象在进行运算的时候会调用valueOf()方法

const objValueOf={
    valueOf:function(){
        return 123
    }
}

log(objValueOf+ '')

console.log((object2 > object1 +-- object1) + true); 

var object1 = {
    valueOf: function () {
	return 10;
    },
    toString: function () {
	return "object1";
    }
};

var object2 = {
    valueOf: function () {
	return 20;
    },
    toString: function () {
	return "object2";
    }
};

var object3 = {
    valueOf: function () {
	return 30;
    },
    toString: function () {
	return "object3";
    }
};
// 逗号操作符 对它的每个操作数求值（从左到右），并返回最后一个操作数的值
var result = (object2, object1, object3) + object1 +-- object1; 
log(result)



// !!运算符
var x = !!"Hello" + (!"world", !!"from here!!");
//var x=true+(true)=Number(true)+((Number(true)))=1+1
log(x)//20


// ~运算符,按位非(求反码)，转换为二进制后按位取反,计算规则先加一在取反
const arg=4;
log(arg)
log(arg.toString(2))
log(~arg)===log(-(arg+1))