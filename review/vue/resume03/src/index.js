import bar from './bar'
import Vue from  'vue'
// 存储服务
var AV = require('leancloud-storage');
var { Query, User } = AV;
// 实时消息服务
var { Realtime, TextMessage } = require('leancloud-realtime');
var app = new Vue({
    el: '#app',
    data: {
        newTodo:'',
        todoList:[]
    },
    // created : function () {
    //     let i=0
    //     // setInterval(()=>{
    //     //     this.newTodo=i
    //     //     i+=1
    //     // },1000)
    // }
    created: function(){
        // onbeforeunload文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
        window.onbeforeunload = ()=>{
          let dataString = JSON.stringify(this.todoList) // JSON 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
          window.localStorage.setItem('myTodos', dataString) // 看文档https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage
        }
        let oldDataString = window.localStorage.getItem('myTodos')
        let oldData = JSON.parse(oldDataString)
        this.todoList = oldData || []
      },
    methods:{
        addTodo:function(){
            this.todoList.push({
                title:this.newTodo,
                createdAt:new Date(),
                // 创建done属性标记完成与否
                done:false
            })
            // 输入完成后input的值清空
            this.newTodo=''
        },
        removeTodo:function(todo){
            let index=this.todoList.indexOf(todo)
            this.todoList.splice(index,1)
        }
    }
})
bar();