<template>
	<div class="base-checkox">
		<input type="text" v-model="loginInfo" />
	</div>
</template>

<script>
export default {
	name: "base-checkbox",
	props: ["loginInfo"],
	data() {
		return {};
	},
	components: {}
};
</script>

<style scoped lang="less">
</style>
