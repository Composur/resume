<template>
    <div id="topbar" class="topbar">
       <div class="logo">
           <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-logo"></use>
            </svg>
       </div>
       <div class="actions">
            <div v-if="logined" class="userActions">
            <span class="welcome">你好，{{user.username}}</span>
            <a class="button" href="#" @click.prevent="signOut">登出</a>
          </div>
           <el-button type="primary" @click.prevent="signInDialogVisible = true">登录</el-button>
            <el-button type="success"  @click.prevent="signUpDialogVisible = true">注册</el-button>
            <el-button type="primary"  v-on:click="preview()">预览</el-button>
            <el-button type="success">下载</el-button>
       </div>
        <MyDialog title="注册" :visible="signUpDialogVisible" v-show="signUpDialogVisible" @close="signUpDialogVisible = false">
         <!-- 我就是 slot 内容 -->
          <SignUpForm @success="signIn($event)"/>
     </MyDialog>
     <MyDialog title="登录" :visible="signInDialogVisible" v-show="signInDialogVisible" @close="signInDialogVisible = false">
          <SignInForm @success="signIn($event)"></SignInForm>
     </MyDialog>
    </div>
</template>
<script>

import AV from '../lib/leancloud'
 import MyDialog from './topbar/MyDialog'

 
 import SignUpForm from './topbar/SignUpForm'
 import SignInForm from './topbar/SignInForm'

export default {
  name: "Topbar",
  data() {
    return {
      signUpDialogVisible: false, //false点击的时候注册框才会出现
      signInDialogVisible: false
    };
  },
  computed: {
    //computed相当于属性的一个实时计算,如果实时计算里关联了对象,那么当对象的某个值改变的时候,同事会出发实时计算
    user() {
    //   return this.$store.state.user;
    },
    logined() {
    //   return this.user.id;
    }
  },
  components: {
    MyDialog,
    SignUpForm,
    SignInForm
  },
  methods: {
    preview() {
      this.$emit("preview");
    },
    signOut() {
      AV.User.logOut();
      this.$store.commit("removeUser");
    },
    signIn(user) {
      this.signUpDialogVisible = false;
      this.signInDialogVisible = false;
      this.$store.commit("setUser", user);
    }
  }
};
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
.topbar .logo {
  color: red;
  font-size: 34px;
}
</style>
