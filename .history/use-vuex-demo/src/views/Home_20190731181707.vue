<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<ul>
			<li v-for="(item,index) in products" :key="index">
				{{item.name}}:{{item.price}}
				<input type="text" name />
				<span @click="aboutPrice(item.name,item.price)"></span>
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
		aboutPrice(_name,_price){
            return this.$store.commit('changeThisPrice',)
        }
    },
    mounted(){

    }
};
</script>
<style lang="less" scoped>
li {
	list-style: none;
}
</style>

