// 在CommonJS的模块系统中，module.exports可以输出一个函数，也可以输出一个对象
module.exports = {
    isEmail: function (str) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(str);        
    },
    isAllEnglish: function (str) {
        return /^[A-Za-z]+$/.test(str)
    }
}