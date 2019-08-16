<template>
	<div class="base-checkox">
		<h3>{{checked}}</h3>
        <input type="checkbox" :checked="checked" :change="$emit">
	</div>
</template>

<script>
export default {
	name: "base-checkbox",
    // props: ["textInfo"],
    model:{
        prop:'check',
        event:'change'
    },
    props:{
        checked:Boolean
    },
	data() {
		return {};
	},
	components: {}
};
</script>

<style scoped lang="less">
</style>
