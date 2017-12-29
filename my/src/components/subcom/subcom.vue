<!-- 以后项目的根组件 -->
<template>
    <div >
        <!--提交评论-->
        <div class='tijiao'>
            <h3>提交评论</h3>
            <textarea  v-model='mypinglun' rows="5">

            </textarea>
            <button type="button" @click='postpinglun' class="mui-btn mui-btn-primary mui-btn-block">
                提交
            </button>
        </div>
        <div class="show">
            <!--显示评论-->
            <p>评论</p>
            <ul class='list'>
                <li v-for='(item,index) in pinglun'>
                    <div class="title">
                        第{{index+1}}楼:{{item.user_name}}
                        发表时间：{{item.add_time | datefmt('YYYY-MM-DD')}}
                    </div>
                    <div class="messge">
                        {{item.content}}
                    </div>
                </li>
            </ul>

        </div>
        <button @click='getMore' class='more'>加载更多</button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import common from '../../common/common.js';

    export default{

    props:['id'],
    data(){
        return {
            pageindex:1,
            pinglun:[],
            mypinglun:''
        }
    },
created(){
    this.getpinglun();
},
methods:{
    //提交评论
    postpinglun(){
//            /api/postcomment/43
        var content = this.mypinglun;
        var url = common.apidomain+'/api/postcomment/'+this.id;
        if(content==''){
            Toast('评论失败,请输入内容');
            return;
        };
        this.$http.post(url,{artid:this.id,content:content},{emulateJSON:true} ).then(function(response){
            var data = response.body;
            if(data.status!=0){
//                    console.log('发送评论失败');
                Toast('发送评论失败，请刷新重试');
                return;
            }
            //再重新渲染一下评论
//            把最新评论添加到最上面
//            this.getpinglun();
            this.pinglun=[{
                    'user_name':'用户',
                    'add_time': new Date(),
                    'content': content
                }
            ].concat(this.pinglun);
        })
    },
    getpinglun(pageindex){
//            /api/getcomments/43?pageindex=1
          pageindex = pageindex||1;
        var url = common.apidomain+'/api/getcomments/'+
                this.id+'?pageindex='+pageindex;
        this.$http.get(url).then(function(response){
            var data = response.body.message;
//            console.log(response.body);
            if(response.body.status!=0){
//           console.log('获取评论失败');
                Toast('获取评论失败');
                return;
            }
            this.pinglun=this.pinglun.concat(data);
//            console.log(data);
        })
    },
    getMore(){
        this.pageindex++;
        this.getpinglun(this.pageindex);

    }
}
}
</script>

<style scoped>
    .details{
        padding-bottom: 20px;
    }
    ul{
        list-style:none;
        padding: 0;
        margin: 0;
    }
    ul li{
        height: 60px;
        padding: 0 10px;
        line-height: 60px;
    }

    .messge{
        padding: 0;
        margin: 0;
        height: 30px;
        line-height: 30px;
    }
    ul .title{
        background: #ddd;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
    }
    .show{
        padding-bottom: 50px;
    }
    .more{
        width: 100%;
        height: 50px;
        line-height: 50px;
        border: 1px solid #c7254e;
        position: fixed;
        bottom: 50px;
    }

</style>