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
    background: baes-bg;
	.history-back {
		width: 2rem;
		height: 2rem;
		font-size: 20px;
		line-height: 2rem;
		text-align: center;
	}
	.search-box {
		width: calc(100% - 4rem);
		input {
			width: 240px;
			margin: 0.4rem auto;
			line-height: 1.2rem;
		}
	}
}
</style>
