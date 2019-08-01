<template>
	<div class="login">
        <div class="user-fill">
		<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>

        </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: ""
		};
	},
	components: {}
};
</script>

<style scoped lang="less">
</style>
