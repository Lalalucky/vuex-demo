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
            password:""
		};
	},
	components: {}
};
</script>

<style scoped lang="less">
.login{
    width:100%;
    height: 100
}
</style>
