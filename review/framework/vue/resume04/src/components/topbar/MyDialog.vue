<template>
	<div class="dialogwrapper" v-show="visible">
		<div class="dialog">
			<header>{{title}}
				<span class="close" @click="close">X</span>
			</header>
			<main>
				<slot></slot><!--<slot> 就是外部调用时，标签中的内容。如果外部调用时没有提供内容的话，那么它就会使用自己默认提供的内容-->
			</main>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myDialog',
		props: ['title','visible'],//props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值。
		methods: {
			close(){
				this.$emit('close')//方法中的 this 自动绑定为 Vue 实例。$emit触发事件。
			}
		}
	}
</script>

<style scoped lang="scss">
	.dialogwrapper{
		position:fixed;
		top:0;
		left:0;
		bottom:0;
		right:0;
		margin:0;
		display:flex;
		justify-content:center;
		align-items:center;
		background:hsla(0, 0%,0%,0.25);
	}
	.dialog{
		background:#fff;
		min-height:4em;
		min-width:10em;
		> header{
			padding:16px;
			display:flex;
			justify-content:space-between;
		}
		> main{
			padding:16px;
		}
		.close{
			cursor: pointer;
		}
	}
</style>