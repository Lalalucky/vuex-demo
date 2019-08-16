<template>
	<label>
		{{ label }}
		<input
			v-bind="$attrs"
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"
		/>
	</label>
</template>

<script>
export default {
    name: "base-input",
    in
	data() {
		return {};
	},
	components: {}
};
</script>

<style scoped lang="less">
</style>
