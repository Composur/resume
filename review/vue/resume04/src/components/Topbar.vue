<template>
    <div id="topbar" class="topbar">
       <div class="logo">
           <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-logo"></use>
            </svg>
       </div>
       <div class="actions">
           <el-button type="primary">登录</el-button>
            <el-button type="success">注册</el-button>
            <el-button type="primary"  v-on:click="preview()">预览</el-button>
            <el-button type="success">下载</el-button>
       </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            preview(){
                this.$emit('preview')
            }
        }
    }
</script>
<style>
.topbar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  font-size: 20px;
  -webkit-box-shadow: 2px 2px 2px 2px #ccc;
  -moz-box-shadow: 2px 2px 2px 2px #ccc;
  box-shadow: 2px 2px 2px 2px #ccc;
}
.topbar .logo{
    color: red;
    font-size: 34px;
}
</style>
