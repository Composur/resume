const {log}=console
let str='xutong'
log(str.padStart(7,'x'))
log(str.padEnd(7,'x'))
log(`${str}`)
log('---------')
var a = {n: 1}; // 第1行
var b = a; // 第2行
a.x = a = {n: 2}; // 第3行
console.log(a.x); // 第4行
console.log(b); // 第5行
