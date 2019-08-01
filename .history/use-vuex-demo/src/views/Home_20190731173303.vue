<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<ul>
			<li v-for="(item,index) in products" :key="index">{{item.name}}:{{item}}</li>
		</ul>
	</div>
</template>

<script>
import { mapState, mapMutation } from "vuex";
export default {
	name: "home",
	data() {
		return {};
	},
	components: {},
	computed: {
		...mapState(["products"])
	},
	mounted() {
		// console.log(this.products);
	}
};
</script>
<style lang="less" scoped>
li {
	list-style: none;
}
</style>

