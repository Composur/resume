var express = require('express');
var app = express();

var responsePort = 3001;  // 请求页面跑在3001端口

app.use(express.static(__dirname + '/staticRes')); //3001端口的静态文件，即index.html

app.listen(responsePort, function () {
    console.log('Responser is listening on port '+ responsePort);
});

// var http=require('http')
// var path=require('path')
// var fs=require('fs')
// var url=require('url')
// var port=3001
// var app=http.createServer(function(req,res){
//    var pathObj=url.parse(req.url,true)
//     console.log(pathObj)
//    switch(pathObj.pathname){
//         case'/':
//         res.end(fs.readFileSync(__dirname+'/staticRes/index.html'))
//         break;

//         default:
//         res.end(fs.readdirSync(__dirname+'/staticRes/index.html'))
//    }
// },true)

// app.listen(port,function(e){
//     console.log(e)
//     console.log(port)
// })
