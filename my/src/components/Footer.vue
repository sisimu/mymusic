<!-- 以后项目的根组件 -->
<template>
    <div class='footer'>
       <!--我是底部播放组件-->
        <div class="content">
            <!--播放组-->
            <div class='left'>
                <span class='fa fa-arrow-left'></span>
                <span class='fa fa-play'></span>
                <span class='fa fa-arrow-right'></span>
            </div>
            <!--进度条-->
            <div class="barBox">
                <span>5:03:10临时</span>
                <!--<div class="bar"></div>-->
                <audio width='100px' height='60px' id="audio"  :src='$store.getters.changeSong' controls>lkkj</audio>
            </div>
            <div class='right'>
                <!--播放列表-->
                <span class='fa fa-list' @click='showList'></span>
                <div class="list" v-if='show'>
                    <!--播放列表-->
                    <ul>
                        <li>歌曲一</li>
                        <li>歌曲二</li>
                        <li>歌曲三</li>
                        <li>歌曲四</li>
                        <li>歌曲五</li>
                    </ul>
                </div>
            </div>
        </div>

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
                this.show=!this.show;
            }

        }
    }
</script>

<style scoped>
    ul{
        margin: 0;
        padding: 0;
    }
.fa{
    color: #fff;
}
.footer{
    width: 100%;
    position: fixed;
    background:#eee;
    height: 50px;
    bottom: 0px;
}
    .content{
        width: 80%;
        margin: 0 auto;
        background: red;
        height: 550px;
    }
    .content .left span{
        font-size: 20px;
        padding:0px  20px;
        color: #fff;
        margin-left: 10px;
        line-height: 50px;
        height: 50px;
        float: left;
    }
    .barBox{
        float:left;
    }
    .footer .right{
        float: right;
    }
    .footer .list{
        width: 200px;
        height: 200px;
        background: #007aff;
        position: fixed;
        bottom: 0px;
        right: 300px;
    }
    .footer .list li{
        height: 30px;
        list-style: none;
    }
    .footer .list li:nth-child(2n){
        background: #ccc;
    }


</style>
