var express = require('express');
var app = express();
var requestPort = 3000;
app.use(express.static(__dirname + '/staticReq'));
//3000端口的静态文件，即index.html 
app.listen(requestPort, function () {
console.log('Requester is listening on port ' + requestPort);
});

// var http = require('http') var path = require('path') var fs = require('fs')
// var url = require('url') var port = 3000 var app = http.createServer(function
// (req, res) {     var pathObj = url.parse(req.url, true)
// console.log(pathObj)     switch (pathObj.pathname) {         case '/':
//      res.end(fs.readFileSync(__dirname + '/staticReq/index.html'))
//  break         default:             res.end(fs.readdirSync(__dirname +
// '/staticReq/index.html'))     } }, true) app.listen(port, function (e) {
// console.log(e)     console.log(port) })