const log=console.log.bind(console)

var str = new String("Hello");

var result = typeof(str instanceof String);
log(result); //boolean

result = typeof typeof(str instanceof String);
log(result); //string

result = typeof typeof typeof(str instanceof String);
log(result); //	string