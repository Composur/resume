
module.exports={
    log=function(){
        return console.log.bind(console)
    },
    $=function($){
        return document.queryselector($)
    }
}