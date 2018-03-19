var log=require('./common')
// valueOf的优先级大于toString
var obj={
    toString:function(){
        return "ff"
    },
    valueOf:function(){
        return '200'
    }
}

log(obj*20)//4000

log(''==true)
log(null)
if(null){
    log([]==true)
}
// log(Boolean)
log(!2)
log(!2*0)
log(!0)
log(5&&"p")
log(5&&0)   
log(3||0)   
log('')   
log('oo')   
log(Object==Object)   
log(Number(true)===1)   
log(Number(" "))

log("null array"+[].valueOf())
