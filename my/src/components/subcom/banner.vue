<!-- 以后项目的根组件 -->
<template>
    <div id='tmpl'>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for='item in imgs'>
                <img :src='item.img||item.src'>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default{
        props:['imgs'],
        data(){
        return {

            list:[]
        }
    },
    created(){
//        this.getData();
//    console.log(this.imgs);
    },
    methods:{

    }
    }
</script>

<style scoped>
    .mint-swipe{
        background: red;
        height: 400px;
        width: 100%;
    }
    .mint-swipe img{
        width: 100%;
    }

    .mui-content,.mui-content ul{
        background-color: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-right:0px;
        border-bottom:0px;
    }
    .mui-grid-view.mui-grid-9{
        border-top:0px;
        border-left:0px;
    }
    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before{
        content: '';
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: round;
    }

    /*.mui-icon-home:before{*/
        /*background-image: url(../../statics/imgs/1.png);*/
    /*}*/

    /*.mui-icon-email:before{*/
        /*background-image: url(../../statics/imgs/2.png);*/
    /*}*/
    /*.mui-icon-chatbubble:before{*/
        /*background-image: url(../../statics/imgs/3.png);*/
    /*}*/
    /*.mui-icon-location:before{*/
        /*background-image: url(../../statics/imgs/4.png);*/
    /*}*/
    /*.mui-icon-search:before{*/
        /*background-image: url(../../statics/imgs/5.png);*/
    /*}*/
    /*.mui-icon-phone:before{*/
        /*background-image: url(../../statics/imgs/6.png);*/
    /*}*/
</style>