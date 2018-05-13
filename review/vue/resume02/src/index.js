import bar from './bar'
import Vue from  'vue'
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
    methods:{
        addTodo:function(){
            this.todoList.push({
                title:this.newTodo,
                createdAt:new Date()
            })
            console.log(this.todoList)
        }
    }
})
bar();