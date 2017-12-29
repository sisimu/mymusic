<!-- 以后项目的根组件 -->
<template>
    <div id='tmpl-num'>
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
    </div>
</template>
<script>
    import common from '../../common/common.js';

    export default{
        props:['imgs'],
        data(){
        return {
            num:8,
            info:[]
//            list:[]
        }
    },
    created(){
        this.getGoodsInfo();
    },
    methods:{
        getGoodsInfo(){
            var url = common.apidomain+'/api/goods/getinfo/'+this.id
            this.$http.get(url).then(function(response){
                var data = response.body.message[0];

                this.info=data;
//                console.log(this.info);
            })
        },
        jian(){
            if(this.num<=1){
                return;
            }
            this.num--;
            this.senddata();

        },
        add(){
            if(this.num>=this.info.stock_quantity){
                return;
            }
            this.num++;
            this.senddata();
        },
        senddata(){
            this.$emit('send',this.num);
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