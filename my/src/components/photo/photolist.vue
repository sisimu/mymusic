<!-- 以后项目的根组件 -->
<template>
    <div id='tmpl'>
        <div class="fenlei">
            <ul>
                <li>
                    <a @click='getImageList(0)' href='javascript:;'>
                    全部</a>
                </li>
                <li v-for='item in list'>
                    <a href="javascript:;" @click='getImageList(item.id)'>
                        {{item.title}}
                    </a>
                </li>
            </ul>
        </div>
        <!--图片列表-->
        <div class='ptlist'>
            <ul>
                <li v-for='item in imgList'>
                    <router-link  v-bind='{
                    to:"/photo/photoinfo/"+item.id
                }'>
                 <img v-lazy="item.img_url" alt=""/>
                    </router-link>
                    <div class="info">
                        <h6>{{item.title}}</h6>
                        <p>{{item.zhaiyao}}</p>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    import common from '../../common/common.js'
    export default{
        data(){
        return {
            list:[],
            imgList:[]
        }
    },
    created(){
        this.getFenlei();
//        this.getImageList(1);
    },
    methods:{
        //获取顶部分类信息
        getFenlei(){
            ///api/getimgcategory
            var url = 'http://vue.studyit.io/api/getimgcategory';
            this.$http.get(url).then(function(response){
                var data = response.body;
                if(data.status!=0){
                    console.log('加载图片失败');
                    return;
                }
                this.list = data.message;
//                console.log(123);
                console.log(data.message);
            })
        },
        //初始图片列表

        ///api/getimages/23
        getImageList(id){
//            console.log(id);
            var url = 'http://vue.studyit.io/api/getimages/'+id;
            this.$http.get(url).then(function(response){
                var data = response.body;
                if(data.status!=0){
                    console.log('加载图片失败');
                    return;
                }
                this.imgList = data.message;
//                console.log(123);
//                console.log(this.imgList);
            })
        }
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
        padding:5px;
        margin: 0;
    }
    .fenlei{
        width: 100%;
        /*overflow: hidden;*/
        overflow-x:scroll;
    }
    .fenlei ul{
        height: 30px;
        width: 1000px;

    }
    .fenlei li{
        float: left;
        width: 80px;
    }
    .ptlist{
        width: 100%;
        background: red;

    }
    .ptlist ul{
        width: 100%;

    }
    .ptlist li{
        height: 300px;
        /*width: 50px;*/
        position: relative;
    }
    img{
        display: inline-block;
        width: 100%;
    }
    .info{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        color: #fff;
        background:rgba(0,0,0,0.5)
    }
    h6,p{
        color: #fff;
    }
</style>