<template>
	<label>
		{{ label }}
		<input
			v-bind="$attrs"
			v-bind:value="value"
			v-on="inputListeners"
		/>
	</label>
</template>

<script>
export default {
    name: "base-input",
    inheritAttrs:false,
    props:['label','value'],
	data() {
		return {};
    },
    computed
	components: {}
};
</script>

<style scoped lang="less">
</style>
