<template>
	<header>
		<slot name="back">&lt;</slot>
		<slot name="title"></slot>
        <slot name="search"></slot>
	</header>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {};
	},
	components: {}
};
</script>

<style scoped lang="less">
</style>
