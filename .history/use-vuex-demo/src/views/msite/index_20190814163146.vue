<template>
	<div class="wrap">
		<!-- <div class="container">
			<head-top search='true'>
                <div class="history-back" slot="back"> &lt; </div>
                <div class="search-box" slot="search"><input type="text" ref="search-input"></div>              
            </head-top>
			<div class="guide"></div>
		</div>-->
		<baseCheckbox v-model="loginInfo"></baseCheckbox>
		<bottom-guide></bottom-guide>
	</div>
</template>

<script>
import headTop from "@/components/head/header.vue";
import bottomGuide from "@/components/BottomGuide/BottomGuide.vue";
import baseCheckbox from "@/components/base-checkbox.vue";
export default {
	name: "msite",
	data() {
		return {
			"search-text": "",
			"loginInfo": false
		};
	},
	components: {
		headTop,
		bottomGuide,
		baseCheckbox
	},
	mounted() {
		let wrap = document.getElementsByClassName("wrap")[0];
		let clientHeight = document.documentElement.clientHeight;
		wrap.style.height = clientHeight + "px";
    },
    methods:{
        change(flse){}
    }
};
</script>

<style scoped lang="less">
.wrap {
	position: relative;
}
</style>
