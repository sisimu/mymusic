<!-- 以后项目的根组件 -->
<template>
    <div id='tmpl'>
        <!--手机详情-->
        <!--轮播图-->
        <banner :imgs='imgs'></banner>
        <div class='box mui-clearfix'>
            <h3>{{info.title}}</h3>
            <p>
                市场价：<del>{{info.market_price}}</del>
                销售价： <span>{{info.sell_price}}</span>
            </p>
            <div class='choose'>
                <p>购买数量：</p>
                <div class="buyNum">
                    <span @click='jian' class='jian'>-</span>
                    <input v-model='num' class='num' />
                    <span @click='add' class='jia'>+</span>
                </div>
                <p>
                    <button>加入购物车</button>
                </p>
            </div>
            <!--//    购买数量方法二定义成计算组件-->
            <!--<carnum v-on:send='getData'></carnum>-->

        </div>
        <div class="info mui-clearfix">
            <h6>商品信息</h6>
            <p>
                商品货号：{{info.goods_no}}
            </p>
            <p>
                库存情况：{{info.stock_quantity}}
            </p>
            <p>
                上架时间：{{info.add_time|datefmt('YYYY-MM-DD')}}
            </p>
        </div>
        <!--商品详情跳转按钮-->
        <router-link v-bind='{
            to:"/goods/goodsdesc/"+id
        }' type="button" class="mui-btn mui-btn-primary mui-btn-block">
            图文详情
        </router-link>
        <router-link v-bind='{
            to:"/goods/goodscomment/"+id
        }' type="button" class="mui-btn mui-btn-primary mui-btn-block">
            评论
        </router-link>
    </div>
</template>

<script>
    import common from '../../common/common.js';
    import banner from '../subcom/banner.vue';
//    购买数量方法二定义成计算组件
//    import carnum from '../subcom/carnum.vue';
    export default{
        components:{
            banner
            //    购买数量方法二定义成计算组件
//            ,carnum
        },
        data(){
        return {
            num:1, //购物添加的数量
            id:'',//当前商品id
            info:[],//当前商品的信息
            imgs:[]//轮播图列表
        }
    },
    created(){
//        利用传递的参数赋值id
        this.id=this.$route.params.param;

        this.getGoodsInfo();
        this.getImgs();
    },
    methods:{

        //获取商品信息
        getGoodsInfo(){
            var url = common.apidomain+'/api/goods/getinfo/'+this.id
            this.$http.get(url).then(function(response){
                var data = response.body.message[0];

                this.info=data;
            })
        },
//    购买数量方法二定义成计算组件
//        获取子组件传递来的数据
//        getData(data){
////            data为子组件的购物数量
//            console.log(data);
//        },
//        减法按钮事件
        jian(){
            if(this.num<=1){
                return;
            }
            this.num--;
        },
        //        加按钮事件
        add(){
            if(this.num>=this.info.stock_quantity){
                return;
            }
            this.num++;
        },
//        获取轮播图图像列表数据
        getImgs(){
            var url  = common.apidomain + '/api/getthumimages/'+this.id;
            this.$http.get(url).then(function(res){
                this.imgs =res.body.message;
             });
        }
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