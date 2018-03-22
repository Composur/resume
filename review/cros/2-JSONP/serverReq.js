// var express = require('express'); // 引用express模块
// var app = express();  // 创建一个简单的服务器

// var requestPort = 3000;

// app.use(express.static(__dirname));

// app.listen(requestPort, function () {
//     console.log('Requester is listening on port '+ requestPort);
// });


var http=require('http')
var url=require('url')
var path=require('path')
var fs=require('fs')

var server=http.createServer(function(req,res){

var pathobj=url.parse(req.url,true)


    res.setHeader('Content-Type','text/html,character=utf-8')

    console.log(req.url)


    if(req.url==='/'){
        res.end( fs.readFileSync(__dirname + '/index.html') )
    }
})

server.listen(8088)