<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<ul>
			<li v-for="(item,index) in products" :key="index">
				{{item.name}}:{{item.price}}
				<input type="text" name value />
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
		return {
            originData:[]
        };
	},
	components: {},
	computed: {
		...mapState(["products"])
	},
	methods: {
		aboutPrice(_name, event) {
			let newPrice = event.target.previousSibling.value;
            return this.$store.commit("changeThisPrice", _name, newPrice);
                     
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

