<template>
	<div class="login">
		<h3 class="brand">小白，你看是流星哎</h3>
		<div class="user-fill">
			<mt-field label="用户名:" placeholder="请输入用户名" v-model="username" state="success"></mt-field>
			<mt-field label="密码:" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			<div class="submit-btn" @click="submitFrom">一起去追流星吧！</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Login",
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
	methods: {
		submitFrom() {
			this.$store.state.nickName = this.username;
			// console.log(123);
			localStorage.setItem("hasLogin", "1");
			this.$router.push({ path: "/msite" });
		}
	},
	watch: {
		$router(to, from) {
			console.log(to.path);
		}
	},
	beforeRouteUpdate(to, from, next) {
		// 在当前路由改变，但是该组件被复用时调用
		// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
		// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
		// 可以访问组件实例 `this`
		console.log(to, from, next);
	}
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
	color: yellowgreen;
	.brand {
		width: 100%;
		text-align: center;
		font-size: 1.5rem;
		color: yellowgreen;
	}
	.user-fill {
		width: 100%;
		.mint-cell {
			background: transparent;
			.mint-cell-text {
				color: yellowgreen !important;
			}
		}
		.submit-btn {
			width: 80%;
			font-size: 1.5rem;
			margin: 0 auto;
			margin-top: 2rem;
			line-height: 2.5;
			background: lightcyan;
			color: rgba(47, 255, 186);
		}
	}
}
</style>
