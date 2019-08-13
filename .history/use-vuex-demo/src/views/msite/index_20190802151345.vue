<template>
	<div class="wrap">
		<div class="container">
			<header-top></header-top>
			<div class="guide"></div>
			<bottom-guide></bottom-guide>
		</div>
	</div>
</template>

<script>
import headTop from "@/components/head/header.vue";
import bottomGuide from "@/components/foot/footer.vue";
export default {
	name: "",
	data() {
		return {};
	},
	components: {
		headTop,
		bottomGuide
	}
};
</script>

<style scoped lang="less">
.container {
	position: relative;
}
</style>
