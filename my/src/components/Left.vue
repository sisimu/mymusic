<!-- 以后项目的根组件 -->
<template>
    <div class='leftList'>
        <!--我是左边播单列表组件-->
        <dl>
            <dt><a href="javascript:;">推荐</a></dt>
            <dd><a href="javascript:;">发现音乐</a></dd>
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
</template>
<script>
    export default{
        data(){
        return {
            show: false
        }
    },
    methods: {
        showList(){
            //播放列表的展开和隐藏
//                var list = document.querySelector('.list');
//                list.style.display = 'block';
            this.show=!this.show;
//                console.log(this.show);
        }
    }
    }
</script>

<style scoped>

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
