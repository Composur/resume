var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')


function staticRoot(staticPath, req, res){
  console.log("staticPath"+staticPath)
  console.log(path.join(__dirname, 'static'))
  console.log('req.url '+req.url)//请求的一个路径 css文件 img图片
  var pathObj = url.parse(req.url, true)
  console.log(pathObj.pathname)
  
  
  if(pathObj.pathname === '/'){
    pathObj.pathname += 'index.html'
  }
  

  
 
  var filePath = path.join(staticPath, pathObj.pathname)
  
  // var fileContent = fs.readFileSync(filePath,'binary')
  // res.write(fileContent, 'binary')
  // res.end()
  
  // fs.readFile('<directory>', (err, data) =>
  fs.readFile(filePath, 'binary', function(err, fileContent){
    if(err){
      console.log('404')
      res.writeHead(404, 'not found')
      res.end('<h1>404 Not Found</h1>')
    }else{
      console.log('ok')
      res.writeHead(200, 'OK')
      res.write(fileContent, 'binary')
      res.end()      
    }
  })
  

}
// path.join([...paths]) path.join([paths]) 把全部特定的path连接到一起
console.log(path.join(__dirname, 'static'))

var server = http.createServer(function(req, res){
  staticRoot(path.join(__dirname, 'static'), req, res)
})
server.listen(8080)
console.log('visit http://localhost:8080' )



