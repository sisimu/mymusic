<template>
  <div class='playlist'>
    <!--歌单歌曲列表-->
    <div class="top">
      <div class="left">
        <img :src="songinfo.coverImgUrl" alt=""/>
      </div>
      <div class="right">
        <h2>{{songinfo.name}}</h2>
        <p>
          <!--创建者:{{songinfo.creator.nickname}} -->
          时间 {{songinfo.createTime}}</p>
        <p>标签: <span v-for='item in songinfo.tags'>{{item}}/</span></p>
        <p>{{songinfo.description}}</p>
      </div>
    </div>
    <div>
      <p>
        <span>歌曲列表</span>
        <span>评论</span>
        <span>收藏者</span>
        <a href="javascript:;" @click='addSong()'>添加到播放器</a>
      </p>
    </div>
    <div class='playList'>
      <ul>
        <li v-for='item in songList'>
          <a href="javascript:;" @click="$store.commit('play',item.id)">{{item.name}}</a>
        </li>
      </ul>
    </div>

    <div class="barBox">
      <span>5:03:10临时</span>
      <!--<div class="bar"></div>-->
      <audio id='playSong' width='100px' height='60px' src='' controls>lkkj</audio>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
    return{

      id:'',
      songinfo:[],
      songList: []

    }
  },
  created(){
//    this.getBanner();
//    this.getMUsicList();
    this.id = this.$route.params.id;
    console.log(this.id);
    this.getList();

  },
  methods:{
    //显示歌单列表
    getList(){
      let url = '/api/playlist/detail?id='+ this.id;
      this.$http.get(url).then((response)=>{
//        this.songList=response.data.banners;
//          console.log(response);
      this.songinfo = response.data.playlist;
      this.songList = JSON.parse(response.request.response).playlist.tracks;
      console.log(JSON.parse(response.request.response).playlist);//这个是歌单详情信息，妈妈呀我终于找到了！！
      })
    },
  //根据id播放歌曲，改变aduio src 的值
//  play(id){
//    console.log(id);
//    var  playSong = document.getElementById('playSong');
////    //http://music.163.com/song/media/outer/url?id=id.mp3
//    console.log(playSong);
//    playSong.src='http://music.163.com/song/media/outer/url?id='+id+'.mp3';
//  },
  addSong(){
    var songInfo = this.songList;
    this.$store.commit('addSong',songInfo);
  }

  }
}

</script>
<style>
  ul,li,p,div{
    margin: 0px;
    padding: 0px;
  }
  ul{
    list-style: none;
  }
  .playlist{
    width: 70%;
    float: right;
  }
  .top h2{
    font-size: 19px;
    font-weight:600;
  }
  .top{
    /*border: 1px solid #ccc
    */
    background: #42b983;
    overflow: hidden;
    height: 300px;
  }
  .top .left{
    float: left;
    width: 40%;
  }

  .top .left img{
    width: 100%;
    height: 100%;
  }
  .top .right{
    float: right;
    width: 50%
  }
</style>
