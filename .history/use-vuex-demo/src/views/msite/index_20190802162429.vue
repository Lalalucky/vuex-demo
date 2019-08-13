<template>
	<div class="wrap">
		<div class="container">
			<head-top>
                <slot name="search"> <input type="text" v-model="search"> </slot>
            </head-top>
			<div class="guide"></div>
		</div>
		<bottom-guide></bottom-guide>
	</div>
</template>

<script>
import headTop from "@/components/head/header.vue";
import bottomGuide from "@/components/BottomGuide/BottomGuide.vue";
export default {
	name: "msite",
	data() {
		return {};
	},
	components: {
		headTop,
		bottomGuide
	},
	mounted() {
		let wrap = document.getElementsByClassName("wrap")[0];
        let clientHeight = document.documentElement.clientHeight;
        console.log(clientHeight)
		wrap.style.height = clientHeight+'px';
	}
};
</script>

<style scoped lang="less">
.wrap {
	position: relative;
}
</style>
