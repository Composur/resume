<template>
	<div>
		<form @submit.prevent="signIn"><!-- 提交事件不再重载页面 -->
			<div class="row">
				<!-- <label>用户名</label> -->
				<input type="text" placeholder="请输入用户名" v-model="formData.username" required>
			</div>
			<div class="row">
				<!-- <label>密码</label> -->
				<input type="password" placeholder="请输入密码" v-model="formData.password" required>
			</div>
			<div class="actions">
				<input class="btnLogin" type="submit" value="登录">
				<span>{{errorMessage}}</span>
			</div>
		</form>
	</div>
</template>

<script>
	import AV from '../../lib/leancloud'
	import getErrorMessage from '../../lib/getErrorMessage'
	import getAVUser from '../../lib/getAVUser'
	export default {
		name:'signInForm',
		data(){
			return {
				formData:{
					username: '',
					password: ''
				},
				errorMessage: ''
			}			
		},
		methods:{
			signIn(){
				let{username, password} = this.formData
				AV.User.logIn(username,password).then(()=>{
					this.$emit('success',getAVUser())
				}, (error) =>{
					this.errorMessage = getErrorMessage(error);
				})
			}
		}
	}
</script>

<style lang="scss">
	.row{
		margin-bottom:10px;
		> input{
			height: 30px;
		    width: 200px;
		    border-radius: 5px;
		}
	}
	.actions{
	    > input{
	    	border:none;
	    	color:#fff;
	    	border-radius:5px;
	    	height:30px;
	    	width:200px;
	    }
	}
	.btnLogin{
		background:#3da2f3;
	}
</style>