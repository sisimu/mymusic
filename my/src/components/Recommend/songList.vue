<template>
  <!--歌单列表-->
  <div class='playlist'>
      <p>
        <span><a href="javascript:;" @click="getList('华语')">华语</a></span>
        <span><a href="javascript:;" @click="getList('韩语')">韩语</a></span>
        <span><a href="javascript:;" @click="getList('古风')">古风</a></span>
        <span><a href="javascript:;" @click="getList('欧美')">欧美</a></span>
        <span><a href="javascript:;" @click="getList('日语')">日语</a></span>
        <span><a href="javascript:;" @click="getList('怀旧')">怀旧</a></span>
      </p>
    <!--推荐歌单-->
    <div class="musicList clearfix">
      <!--推荐歌单-->
      <div class='more'>
        <span>当前分类歌单列表</span>
        <!--<a href="">更多音乐</a>-->
      </div>
      <ul>
        <li v-for='item in playList' >
          <router-link v-bind="{to:'/playlist/'+item.id}">
            <img :src="item.coverImgUrl" alt=""/>
            <p>{{item.name}}</p>
            <span class="playCount"><span class='fa fa-headphones' ></span>{{item.playCount}}</span>
            <div class="show">
              {{item.copywriter}}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <!--推荐歌单结束-->
  </div>
</template>
<script>
  export default{
    data(){
    return{

//      category:'',
      playList:[]

    }
  },
  created(){
//    this.getBanner();
//    this.getMUsicList();
//    this.category = this.$route.params.category;
//    console.log(this.category+'sss');
//    if(this.category==null){
//      //如果请求链接没有参数，加载全部歌单的ajax
//      this.getAllList();
//      console.log(1);
//    }else{
//      //如果带参数，请求参数分类下的歌单
////      this.getList();
//      console.log(2);
//    }
    this.getAllList();
  },
  methods:{
    //显示歌单列表 http://music.163.com/#/discover/playlist/?cat=韩语      分类
    getList(category){
      let url = '/api/top/playlist/highquality?limit=40&cat='+category;
      this.$http.get(url).then((response)=>{
          console.log(response.data.playlists);
      this.playList = response.data.playlists;
    });

  },
  getAllList(){
    let url = '/api/top/playlist/highquality?limit=40';
    this.$http.get(url).then((response)=>{
      console.log(response.data.playlists);
      this.playList = response.data.playlists;
  });
  }

  }
  }

</script>
<style>
  ul,li,p,div{
    margin: 0px;
    padding: 0px;
  }
  .playlist{
    width: 70%;
    float: right;
  }

  /*推荐歌单*/
  .musicList{
    padding: 0;
    margin: 0;
  }
  .musicList li{
    width: 130px;
    list-style: none;
    height: 175px;
    background: red;
    float: left;
    margin-left: 55px;
    margin-top: 5px;
    margin-bottom: 40px;
    position: relative;
    overflow: hidden;
  }
  /*end-banner*/
  .musicList li img{
    width: 130px;
    height: 130px;
    border: 1px solid #ccc;
  }
  .musicList .show{
    position: absolute;
    width: 130px;
    top: -50px;
    left: 0;
    height: 40px;
    background: rgba(0,0,0,0.7);
    color: #fff;
    font-size: 12px;
    overflow: hidden;
  }
  .musicList .show p{
  }
  .musicList li:hover .show {
    top: 0px;
    transition: all 1s;
  }
  .playCount{
    position: absolute;
    right: 10px;
    top: 3px;
    display:inline-block;
    font-size: 12px;
    color: #fff;
  }
  .more{
    border-button: 1px solid #ccc;
    height: 40px;
    line-height: 40px;
  }
  .more a{
    float: right;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: #fff;
    background: #eee;
  }

</style>
