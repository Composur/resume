// var assert=require('assert')
// var validator=require('validator')


// describe('validator',function(){
//     describe('#isEmail',function(){
//         it('should return true when the string is an email address',function(){
//             if(validator.isEmail('test')!==true){
//                 throw new error('validator not right')
//             }
//         })
//     })
// })
// 为每一个validator，中的函数编写测试用例，最好能够覆盖到所有的情况
var assert = require('assert');
var validator = require('validator-test');

describe('Validator', function () {
    describe('#isEmail', function () {
        it('should return true when the string is an email address', function () {
            if (validator.isEmail('foo@bar.net') !== true) {
                throw new Error('Validator not right');
            }
        });
    });
});

describe('validator',function(){
    describe('#isAllEnglish',function(){
        it('should return true when the string isAllEnglish',function(){
            if(validator.isAllEnglish('dfaGFHREIHFf')!==true){
                throw new Error('isNotALLEnglish!')
            }
        })
    })
})