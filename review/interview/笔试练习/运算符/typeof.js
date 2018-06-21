const log=console.log.bind(console)

var str = new String("Hello");

// typeof 操作符返回一个字符串，表示未经计算操作数的类型

var result = typeof(str instanceof String);
log(result); //boolean

result = typeof typeof(str instanceof String);
log(result); //string

result = typeof typeof typeof(str instanceof String);
log(result); //	string





var result = (2..valueOf() + ({z : 10, x : 20}).x);//2+20
log(result)