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
	padding: 0.5rem 0;
	font-size: 14px;
	line-height: 1.5rem;
	box-shadow: 0 5px 5px rgba(00, 00, 00, .5);
	.guide {
		display: flex;
		justify-content: space-around;
	}
}
</style>
