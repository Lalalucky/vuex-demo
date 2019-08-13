<template>
	<div class="login">
		<div class="user-fill">
			<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
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
	.mint-cell {
		background: transparent;
    }
    .user-fill
}
</style>
