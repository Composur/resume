### moment
```
const moment = require('moment');
require('moment/locale/zh-cn.js')
moment(Date.now()).format('YYYY-MM-DD HH:mm')
```
### form
```
var formidable = require("formidable")
const form= new formidable.IncomingForm();
form.parse(req,function(err,fields,files){
    <!-- parse方法解析node.js中request请求中包含的form表单提交的数据 -->
    console.log(fields)
})
```