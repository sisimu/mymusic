<!-- 以后项目的根组件 -->
<template>
	<div id='tmpl'>
        <ul class="mui-table-view">
            <li v-for='item in list' class="mui-table-view-cell mui-media">
                <router-link v-bind="{
                             to:'/news/newsinfo/'+item.id
                             }">
                    <img class="mui-media-object mui-pull-left"
                    :src="item.img_url">
                    <div class="mui-media-body">
                            {{item.title}}
                        <p class="mui-ellipsis">
                            {{item.zhaiyao}}
                        </p>
                        <p>
                            <span class='time'>时间{{item.add_time | datefmt('YYYY-MM-DD')}}</span>
                            <span class='hit'>点击：{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
	</div>
</template>

<script>
	export default{
        data(){
            return {
           list:[]
            }
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                  var url = 'http://vue.studyit.io/api/getnewslist';
                  this.$http.get(url).then(function(response){
                            var data = response.body;
                            if(data.status!=0){
                                console.log('请求出错');
                                return;
                            }
                            this.list = data.message;
                            console.log(data.message);
                            })
                  }
            }
        }
</script>

<style scoped>

</style>