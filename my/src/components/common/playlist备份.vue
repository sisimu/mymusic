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
    <div class='playList'>
      <ul>
        <li v-for='item in songList'>
          sss
          <a href="javascript:;" @click='play(item.id)'>{{item.dl}}</a>
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
//    console.log(this.id);
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
      this.songList = response.data.privileges;
      console.log(this.songList);
      })
    },
  //根据id播放歌曲，改变aduio src 的值
  play(id){
    console.log(id);
    var  playSong = document.getElementById('playSong');
//    //http://music.163.com/song/media/outer/url?id=id.mp3
    console.log(playSong);
    playSong.src='http://music.163.com/song/media/outer/url?id='+id+'.mp3';
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
