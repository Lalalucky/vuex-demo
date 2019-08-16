<template>
	<div class="base-checkox">
		<h3>{{textInfo}}</h3>
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
        checked:Bool
    }
	data() {
		return {};
	},
	components: {}
};
</script>

<style scoped lang="less">
</style>
