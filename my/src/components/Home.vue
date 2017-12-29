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
    .right-cloud{
        width: 60%;
        float:left;
    }
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

    	.mui-icon-home:before{
    		background-image: url(../../statics/imgs/1.png);
    	}

    	.mui-icon-email:before{
    		background-image: url(../../statics/imgs/2.png);
    	}
    	.mui-icon-chatbubble:before{
    		background-image: url(../../statics/imgs/3.png);
    	}
    	.mui-icon-location:before{
    		background-image: url(../../statics/imgs/4.png);
    	}
    	.mui-icon-search:before{
    		background-image: url(../../statics/imgs/5.png);
    	}
    	.mui-icon-phone:before{
    		background-image: url(../../statics/imgs/6.png);
    	}
</style>