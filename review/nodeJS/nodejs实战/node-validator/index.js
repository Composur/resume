module.exports=require('./lib')

var validator = require('validator-test');

validator.isEmail('foo@bar.net'); // true