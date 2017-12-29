<!-- 以后项目的根组件 -->
<template>
    <div id='tmpl'>
       <!--商品详情页进入评论-->
        <comment :id='id'></comment>
    </div>
</template>

<script>
    //    导入评论组件
    import comment  from '../subcom/subcom.vue';
    import common from '../../common/common.js'
    export default{
        //    定义组件
        components:{
            comment
        },
        data(){
        return {
//            num:1,
            id:'',
//            info:[],
//            imgList:[]
        }
    },
    created(){
        this.id=this.$route.params.param;
//        this.getImageInfo();
//        this.getGoodsInfo();
    },
    methods:{

        //获取商品信息
//        getGoodsInfo(){
//            var url = common.apidomain+'/api/goods/getinfo/'+this.id
//            this.$http.get(url).then(function(response){
//                var data = response.body.message[0];
////                console.log(data);
//                this.info=data;
//                console.log(this.info);
//            })
//        }
    }
    }
</script>

<style scoped>
    .box,.info{
        width: 98%;
        margin: 20px auto;
        height: 250px;
        border: 1px solid #aaa;
        border-radius: 10px;
        padding: 20px;
    }
    h3{
        font-size:18px;
        color: #007aff;
        height:50px;
        line-height: 50px;
        /*width: 98%;*/
        margin: 0 auto;
        border-bottom: 1px solid #aaa;
        padding: 0;
    }
    p{
        height: 50px;
        font-size: 16px;
        line-height: 50px;
    }
    .buyNum span,.buyNum input{
        float: left;
        background: #eee;
        border: 1px solid #aaa;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }

</style>