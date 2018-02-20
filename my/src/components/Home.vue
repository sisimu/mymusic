<!-- 以后项目的根组件 -->
<template>
	<div class='right-cloud'>
            <banner :imgs='imgs'></banner>
        <div>
            <h4>推荐歌单</h4>
            <dl>
                <dd><img src="../../statics/imgs/1.png" alt="图标"/></dd>
                <dd>歌单名称</dd>
                <dt>最新华语</dt>
            </dl>
        </div>
	</div>
</template>
<script>
    import banner from './subcom/banner.vue';
//    import clound from './'
	export default{
        components:{
            banner : banner
        },
        data(){
            return {
           list:[],
            imgs:[]
            }
        },
        created(){
            this.getData();
            this.getData2();
//        console.log(this.imgs);
        },
        methods:{
            getData(){
                  var url = 'http://vue.studyit.io/api/getlunbo';
                  this.$http.get(url).then(function(response){
                            var data = response.body;
                            if(data.status!=0){
                                console.log('请求出错');
                                return;
                            }
                            this.imgs = data.message;
                            })
                  },
            getData2(){
                //从node后台获得可跨域请求
                var url = 'http://localhost:3000/comment/music?id=186016&limit=1';
                this.$http.get(url).then(function(response){
                    var data = response.body;
                    console.log(data);
//                    if(data.status!=0){
//                        console.log('请求出错');
//                        return;
//                    }
//                    this.imgs = data.message;
                })
            }
            }
        }
</script>

<style scoped>

</style>
