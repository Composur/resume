<template>
	<div>
		<form @submit.prevent="signUp"><!-- 提交事件不再重载页面 -->
			<div class="row">
				<!-- <label>用户名</label> -->
				<input type="text" placeholder="请输入用户名" v-model="formData.username" required>
			</div>
			<div class="row">
				<!-- <label>密码</label> -->
				<input type="password" placeholder="请输入密码" v-model="formData.password" required>
			</div>
			<div class="actions">
				<input class="btnRegister" type="submit" value="注册">
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
		name:'signUpForm',
		data(){
			return {
				formData:{
					username: '',
					password: ''
				},
				errorMessage: ''
			}			
		},
		created(){
		},
		methods:{
			signUp(){
				let{username, password} = this.formData
				var user = new AV.User();
				user.setUsername(username);
				user.setPassword(password);
				// user.signUp().then((loginedUser) =>{
				// 	this.$emit('success', {
				// 		username: loginedUser.attributes.username,
				// 		id: loginedUser.id
				// 	})
				user.signUp().then(() =>{
				}, (error)=> {
					this.errorMessage = getErrorMessage(error);
				});
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
	.btnRegister{
		background: #42c02e;
	}
</style>