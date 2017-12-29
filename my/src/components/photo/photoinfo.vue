<!-- 以后项目的根组件 -->
<template>
    <div id='tmpl'>
        <!--图片详情-->
       <h1>{{info.title}}</h1>
        <p>
            <span>{{info.add_time|datefmt('YYYY-MM-DD')}}</span>
            <span>浏览：{{info.click}}</span>
        </p>
        <div class='ptlist mui-content'>
                <ul class="mui-content-padded">
<li  v-for="(item, index) in list" class="">
 <img class="preview-img"  :src="item.src" height="100"
      @click="$preview.open(index, list)" >
                    </li>
                </ul>
        </div>
        <div >
            <p>{{info.content}}</p>
        </div>
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
            id:'',
            info:[],
            list:[],
            list1:[
                {
						src: 'https://placekitten.com/600/400',
						w: 600,
						h: 400
					}, {
						src: 'https://placekitten.com/1200/900',
						w: 1200,
						h: 900
					}
            ]
        }
    },
    created(){
            this.id=this.$route.params.param;
            this.getImageInfo();
            this.getImageList();
    },
    methods:{

        //获取图片信息
        getImageInfo(){
            var url = common.apidomain+'/api/getimageInfo/'+this.id
            this.$http.get(url).then(function(response){
                var data = response.body.message[0];
                console.log(data);
                this.info=data;
                console.log(this.info)
            })
        },
        //获取图片缩略图列表
        ///api/getthumimages/:imgid
        getImageList(){
            var url = common.apidomain+'/api/getthumimages/'+this.id
            this.$http.get(url).then(function(response){
                var data = response.body.message;
                data.forEach(function(item){
                    var img = document.createElement('img');
                    img.src=item.src;
                    img.onload=function(){
                       item.w=img.width;
                       item.h=img.height;
                    }
                })
                this.list=data;
            })
        }
    }
}
</script>

<style scoped>
    h1{
        font-size: 18px;
        height: 30px;
        line-height:30px;
        padding: 5px;
        color:#007aff;
        margin-top: 10px;
    }
    ul{
        list-style: none;
        width: 100%;

    }
    li{
        float: left;
        width: 280px;
        height: 280px;
        background: red;
        float: left;
        margin-left: 10px;
        background: #007aff;
    }
    p{
        width: 100%;
        padding: 10px;
    }
    .ptlist{
        height: 320px;
        box-sizing: border-box;
        padding: 10px 0;
    }
</style>