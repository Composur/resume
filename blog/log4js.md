### log4js是一个功能强大的NodeJS日志处理模块
> 例如
```
// file: simplest.js
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.debug("Time:", new Date());
```