function log(){
    var log=null
    return log=console.log.bind(console)
}
module.exports=log