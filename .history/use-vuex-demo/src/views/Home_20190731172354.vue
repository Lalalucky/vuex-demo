<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
        <ul>
            <li v-for="(item,index) in products" :key="index">{{iem.}}</li>
        </ul>
	</div>
</template>

<script>
import { mapState, mapMutation } from "@/store.js";
export default {
	name: "home",
	data() {
		return {};
	},
    components: {},
    computed:{
        ...mapState(['products'])
    }
};
</script>
