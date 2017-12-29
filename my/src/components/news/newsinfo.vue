<!-- 以后项目的根组件 -->
<template>
    <div id='tmpl'>
        <h1>
            {{id}} {{details.title}}
            <span>发布时间：{{details.add_time}}</span>
            <span>点击{{details.click}}</span>
        </h1>
        <div v-html='details.content' class='details'>

        </div>

        <comment v-bind:id='id'></comment>
    </div>
</template>

<script>
//    import {}

import { Toast } from 'mint-ui';
import comment  from '../subcom/subcom.vue';
export default {

//    定义组件
    components:{
        comment
    },
    data(){
    return {
        details:[],
        id:'',
    }
},
created(){
    this.id = this.id=this.$route.params.param;
    this.getData();
},
methods: {
    getData(){
        var url = 'http://vue.studyit.io/api/getnew/'+this.id;
        this.$http.get(url).then(function(response){
            var data = response.body;
            if(data.status!=0){
                Toast('请求出错');
//                    console.log('请求出错');
                return;
            }
            this.details = data.message[0];
        })
    },
}

};
</script>

<style scoped>
    h1{
        font-size: 16px;
        /*font-weight: 600*/
    }

</style>