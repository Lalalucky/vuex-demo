<template>
	<div class="login">
		<h3 class="brand">小白，你看是流星哎</h3>
		<div class="user-fill">
			<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			<div @click="submitFrom">一起去追流星吧！</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: "",
			password: ""
		};
	},
	mounted() {
		let loginstyle = document.getElementsByClassName("login")[0];
		loginstyle.style.height = window.innerHeight + "px";
	},
	components: {}
};
</script>

<style scoped lang="less">
.login {
	width: 100%;
	background: url("~@/images/login-bg.gif") no-repeat center;
	background-size: 100% 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	color: ;
	.brand {
		width: 100%;
		text-align: center;
		font-size: 1.5rem;
		color: yellowgreen;
	}
	.user-fill {
		.mint-cell {
			background: transparent;
			.mint-cell-text {
				color: yellowgreen !important;
			}
		}
	}
}
</style>
