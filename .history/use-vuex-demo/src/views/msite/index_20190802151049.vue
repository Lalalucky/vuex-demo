<template>
    <div>
        <header-top></header-top>
        <div class="guide">
            
        </div>
        <footer></footer>
    </div>
</template>

<script>
import headTop from '@/components/head/header.vue';
import bottomGuide from '@/components/foot/footer.vue';
export default {
	name: "",
	data() {
		return {};
	},
	components: {
        headTop,bottomGuide
    }
};
</script>

<style scoped lang="less">
</style>
