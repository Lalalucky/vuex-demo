<template>
	<div class="wrap">
		<div class="container">
			<header-top></header-top>
			<div class="guide"></div>
		</div>
		<bottom-guide></bottom-guide>
	</div>
</template>

<script>
import headTop from "@/components/head/header.vue";
import bottomGuide from "@/components/Bott/footer.vue";
export default {
	name: "msite",
	data() {
		return {};
	},
	components: {
		headTop,
		bottomGuide
    },
    mounted(){
        let wrap = document.getElementsByClassName('.wrap')[0];
        wrap.style.height = document.clientHeight;
    }
};
</script>

<style scoped lang="less">
.wrap {
	position: relative;
}
</style>
