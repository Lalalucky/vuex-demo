<template>
	<div class="base-checkox">
		<h3>{{checked}}</h3>
		<!-- <input type="checkbox" v-bind:checked="checked" v-bind:change="$emit('change',$event.target.checked)" /> -->
	</div>
</template>

<script>
export default {
	name: "base-checkbox",
	// props: ["textInfo"],
	model: {
		prop: "check",
		event: "change"
	},
	props: {
		checked: String
	},
	data() {
		return {};
	},
	components: {}
};
</script>

<style scoped lang="less">
</style>
