<template>
	<header>
		<slot name="back">&lt;</slot>
		<slot name="title"></slot>
        <slot name="search"></slot>
        <slot name="menu"></slot>
	</header>
</template>

<script>
export default {
    name:'top',
	data() {
		return {};
	},
	components: {}
};
</script>

<style scoped lang="less">

</style>
