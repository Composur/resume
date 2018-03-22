var log=console.log.bind(console)
var app=require('http')

var path=require('url')

var server=app.createServer(function(req,res){
    res.setHeader('Content-Type','Application/json,character=utf-8')
    if(req.url==='server'){
       log(req)
    }

})



server.listen(3008,function(){
    console.log('3004')
})