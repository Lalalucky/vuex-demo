<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
	</div>
    <ul>
        <li v-for=""></li>
    </ul>
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
