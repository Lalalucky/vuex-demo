<template>
	<header class="i-header">
		<slot name="back"></slot>
		<slot name="title"></slot>
		<slot name="search"></slot>
		<slot name="menu"></slot>
	</header>
</template>

<script>
export default {
	name: "top",
	data() {
		return {};
	},
	components: {}
};
</script>

<style scoped lang="less">
.i-header {
	display: flex;
	.history-back {
		width: 2rem;
		height: 2rem;
    }
    .search-box{
        width
    }
}
</style>
