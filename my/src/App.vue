<!-- 以后项目的根组件 -->
<template >
	<div class='layout'>
			<!--<mt-header fixed title="网易云音乐"></mt-header>-->
		<headerCloud></headerCloud>
		<div class='section'>
      <div class='leftList'>
        <!--我是左边播单列表组件-->
        <dl>
          <dt><a href="javascript:;">推荐</a></dt>
          <dd><router-link to="/">发现音乐</router-link></dd>
          <dd><a href="javascript:;">私人fm</a></dd>
          <dd><a href="javascript:;">mv</a></dd>
          <dd><a href="javascript:;">朋友</a></dd>
        </dl>
        <dl>
          <dt><a href="javascript:;">我的音乐</a></dt>
          <dd><a href="javascript:;">下载管理</a></dd>
          <dd><a href="javascript:;">我的音乐云盘</a></dd>
          <dd><a href="javascript:;">我的电台</a></dd>
          <dd><a href="javascript:;">我的收藏</a></dd>
        </dl>
        <dl>
          <dt><a href="javascript:;">创建歌单<span>+</span></a></dt>
          <dd><a href="javascript:;">我的歌单一</a></dd>
          <dd><a href="javascript:;">我的歌单二</a></dd>
          <dd><a href="javascript:;">我的歌单三</a></dd>
          <dd><a href="javascript:;">我的收藏三</a></dd>
        </dl>
      </div>
			<!--变化区域，放一个组件视图区-->
			<router-view></router-view>
		</div>
    <!--底部播放组件-->
		<footerCloud></footerCloud>
	</div>
</template>
<script>
	import headerCloud from './components/Header.vue';
	import footerCloud from './components/Footer.vue';
//	import leftCloud from './components/left/Left.vue';
	export default{
		components:{
			headerCloud,footerCloud
		}

	}
</script>

<style scoped>

	.layout{
		width: 100%;
		margin: 0 auto;
    padding-bottom: 50px;
    overflow: hidden;
	}
	.section{
		width: 80%;
		margin: 0 auto;
		background:green;
	}

  /*左侧*/
  .leftList a{
    color: #101010;
    border-left: 1px solid #101010;
  }
  .leftList {
    /*color: #101010;*/
    border-left: 1px solid #101010;
    width: 30%;
    float: left;
  }

</style>
