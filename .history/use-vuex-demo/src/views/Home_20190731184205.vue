<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<ul>
			<li v-for="(item,index) in products" :key="index">
				{{item.name}}:{{item.price}}
				<span>呵呵</span>
				<button @click="aboutPrice(item.name,$event)">+</button>
			</li>
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
	methods: {
		aboutPrice(_name, event) {
			console.log(event.target.previousSibling.in);
			event = event ? event : window.event;
			let obj = event.srcElement ? event.srcElement : event.target;
			console.log(event.target.previousElementSibling.innerHTML);
			// return this.$store.commit("changeThisPrice", _name);
		}
	},
	mounted() {}
};
</script>
<style lang="less" scoped>
li {
	list-style: none;
}
</style>

