<!-- 以后项目的根组件 -->
<template >
	<div class='layout'>
			<!--<mt-header fixed title="网易云音乐"></mt-header>-->
		<headerCloud></headerCloud>
		<div class='section'>
			<leftCloud></leftCloud>
			<!--变化区域，放一个组件视图区-->
			<router-view></router-view>
		</div>
			<!--//头部组件-->
			<!--<router-view></router-view>-->
		<!--底部组件-->
		<footerCloud></footerCloud>

	</div>
</template>
<script>
	import headerCloud from './components/Header.vue';
	import footerCloud from './components/Footer.vue';
	import leftCloud from './components/Left.vue';
	export default{
		components:{
			headerCloud,footerCloud,leftCloud
		}

	}
</script>

<style scoped>
	.layout{
		width: 100%;

		margin: 0 auto;
	}
	.section{
		width: 60%;
		margin: 0 auto;
		background:green;
	}

</style>