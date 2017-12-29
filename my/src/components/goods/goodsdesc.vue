<!-- 以后项目的根组件 -->
<template>
    <div id='tmpl'>
        <!--图文详情-->
        <h1> {{info.title}}</h1>
        <div class="detaist" v-html='info.content'>

        </div>
    </div>
</template>

<script>
    import common from '../../common/common.js'
    export default{
        data(){
        return {
            id:'',
            info:[],
//            imgList:[]
        }
    },
    created(){
        this.id=this.$route.params.param;
//        this.getImageInfo();
        this.getGoodsInfo();
    },
    methods:{

//        获取商品图文详情信息
        getGoodsInfo(){
            var url = common.apidomain+'/api/goods/getdesc/'+this.id
            this.$http.get(url).then(function(response){
                var data = response.body.message[0];
//                console.log(data);
                this.info=data;
                console.log(this.info);
            })
        }
//        jian(){
//            if(this.num<=1){
//                return;
//            }
//            this.num--;
//        },
//        add(){
//            if(this.num>=this.info.stock_quantity){
//                return;
//            }
//            this.num++;
//        }
    }
    }
</script>

<style scoped>

</style>