const log=console.log.bind(console)
// let {x:x,y:y}={x:1,y:2}
// log(x)//1
// log(y)//2
let {x:z}={x:1,y:2}
// log(x)//x is not defined
log(z)//1

let {length:len}='hello'
log(len)//5


let x=1,y=2;

[x,y]=[y,x];

log(x,y)//2,1

function back(){
    return [1,2]
}
let [a,b]=back()
log(a,b)

function obj(){
    return {
        a1:1,
        b1:2
    }
}

let {a1,b1}=obj()

log(a1,b1)