<template>
	<label>
		{{ label }}
		<input v-bind="$attrs" v-bind:value="value" v-on="inputListeners" />
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
    computed(){
        inputListeners:function () {
            return Object.assign(
                {},
                this.$listeners,
                {
                    input:function () {
                        this.$emit('input',event)
                    }
                })
        }
    },
	components: {}
};
</script>

<style scoped lang="less">
</style>
