function sayHi(name) {
    console.log('hello ' + name + " !")
 
}
sayHi('李华')

const type=(args)=>{
    console.log(args+"  "+"is "+typeof args)
}
type(1)
type('s')
type(true)
type(undefined)
type(null)
type([])
type({})
type(function(){})


console.log(Object.prototype.toString.call(type) === '[object Array]')