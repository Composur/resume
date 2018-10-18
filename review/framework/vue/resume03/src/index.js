import bar from './bar'
import Vue from 'vue'
// 存储服务
var AV = require('leancloud-storage');
var {Query, User} = AV;

var APP_ID = 'h5R9xmJctubVClpGtFgS9pzH-gzGzoHsz';
var APP_KEY = '5Dqsgus6gC6eaQKkbjizDT5c';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


var app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todoList: [],
        actionType: 'singUp',
        formData: {
            username: '',
            password: ''
        },
        currentUser: null
    },
   
    // created : function () {     let i=0     // setInterval(()=>{     //
    // this.newTodo=i     //     i=1     // },1000) }
    created: function () {
        // onbeforeunload文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbe
        // foreunload
        window.onbeforeunload = () => {
            let dataString = JSON.stringify(this.todoList) // JSON 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
            window
                .localStorage
                .setItem('myTodos', dataString) // 看文档https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage
        }
        let oldDataString = window
            .localStorage
            .getItem('myTodos')
        let oldData = JSON.parse(oldDataString)
        this.todoList = oldData || []
    },
    methods: {
        addTodo: function () {
            this
                .todoList
                .push({
                    title: this.newTodo, createdAt: new Date(),
                    // 创建done属性标记完成与否
                    done: false
                })
            // 输入完成后input的值清空
            this.newTodo = ''
        },
        removeTodo: function (todo) {
            let index = this
                .todoList
                .indexOf(todo)
            this
                .todoList
                .splice(index, 1)
        },
        signUp: function () {
            let user = new AV.User();
            user.setUsername(this.formData.username);
            user.setPassword(this.formData.password);
            user.signUp().then(function (loginedUser) {
              console.log(loginedUser);
              this.currentUser=this.currentUser()
            }, function (error) {
                alert(error)
            });
          },
          login() {
            AV.User.logIn(this.formData.username, this.formData.password).then(function (loginedUser) {
                // console.log(loginedUser);
                console.log(this.currentUser)
              }, function (error) {
                  alert(error)
              });
          },
          logout: function () {
            AV.User.logOut()
                this.currentUser = null
                window.location.reload()
            },
          getCurrentUser() {
            let current = AV.User.current()
                if (current) {
                let {id, createdAt, attributes: {username}} = current
                // 上面这句话看不懂就得看 MDN 文档了
                // 我的《ES 6 新特性列表》里面有链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
                return {id, username, createdAt} // 看文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#ECMAScript_6%E6%96%B0%E6%A0%87%E8%AE%B0
                } else {
                return null
            }
        }
    }
})
bar();