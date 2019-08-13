<template>
	<footer>
		<div class="guide">
			<div class="visit">参观</div>
			<div class="train">训练</div>
			<div class="profil">我的</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "BottomGuide",
	data() {
		return {};
	},
	components: {}
};
</script>

<style scoped lang="less">
footer {
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 0.5em 0;
	font-size: 14px;
	line-height: 1.5rem;
	.guide {
		display: flex;
		justify-content: space-around;
	}
}
</style>
