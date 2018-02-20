<template>
  <div class='findMusic'>
    发现音乐
    <p>推荐歌单
      <router-link to='/findMusic/playlist'> 推荐歌单</router-link>
    </p>
    <!--banner-->
    <div class='banner'>
      <swiper :options="swiperOption">
        <swiper-slide v-for='item in banners' :key='item.id' >
          <img :src='item.pic' alt="item.typeTitle" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <!--推荐歌单-->
    <div class="musicList clearfix">
      <!--推荐歌单-->
      <div class='more'>
        <span>推荐歌单</span>
        <router-link to='/findMusic/playlist'> 推荐歌单</router-link>
      </div>
      <ul>
        <li v-for='item in musicList.slice(0, 8)' >
          <router-link v-bind="{to:'/playlist/'+item.id}">
              <img :src="item.picUrl" alt=""/>
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
    <!--独家放送-->
    <div class="musicList privatecontent clearfix">
      <!--推荐歌单-->
      <div class='more'>
        <span>独家放送</span>
        <a href="#">更多音乐</a>
      </div>
      <ul class=''>
        <li v-for='item in privatecontent.slice(0, 3)' >
          <router-link v-bind="{to:'/privatecontent/'+item.id}">
            <img :src="item.picUrl" alt=""/>
            <p>{{item.name}}</p>
            <span class="playCount"><span class='fa fa-video-camera' ></span></span>
          </router-link>
        </li>
      </ul>
    </div>
    <!--独家放送结束-->
    <!--最新音乐-->
    <div class="musicList  clearfix">
      <div class='more'>
        <span>最新音乐</span>
        <a href="#">更多音乐</a>
      </div>
      <ul class='newPlayList clearfix'>
        <li v-for='item in newPlayList.slice(0, 5)' >
        <router-link v-bind="{to:'/privatecontent/'+item.id}">
          <div class="left">
            <img :src="item.song.album.blurPicUrl" alt=""/>
            <span class="play"><span class='fa fa-play-circle' ></span></span>
          </div>
          <div class="right">
            <p>{{item.name}} <span>{{item.song.album.alias[0]}}</span></p>
            <p>{{item.song.album.artists[0].name}}</p>
          </div>
        </router-link>
      </li>
      </ul>
      <ul class='newPlayList clearfix'>
        <li v-for='item in newPlayList.slice(5, 10)' >
          <router-link v-bind="{to:'/privatecontent/'+item.id}">
            <div class="left">
              <img :src="item.song.album.blurPicUrl" alt=""/>
              <span class="play"><span class='fa fa-play-circle' ></span></span>
            </div>
            <div class="right">
              <p>{{item.name}} <span>{{item.song.album.alias[0]}}</span></p>
              <p>{{item.song.album.artists[0].name}}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <!--最新音乐-->
    <!--推荐mv-->
    <div class="musicList privatecontent clearfix">
      <!--推荐歌单-->
      <div class='more'>
        <span>独家放送</span>
        <a href="#">更多音乐</a>
      </div>
      <ul class=''>
        <li v-for='item in mv.slice(0, 3)' >
          <router-link v-bind="{to:'/privatecontent/'+item.id}">
            <img :src="item.picUrl" alt=""/>
            <p>{{item.name}}</p>
            <p>{{item.artistName}}</p>
            <span class="playCount"><span class='fa fa-video-camera' ></span>{{item.playCount}}</span>

          </router-link>
        </li>
      </ul>
    </div>
    <!--推荐mv-->
    <!--主播电台-->
    <div class="musicList clearfix">
      <div class='more'>
        <span>主播电台</span>
        <a href="">更多音乐</a>
      </div>
      <ul class='djprogram clearfix'>
        <li v-for='item in djprogram.slice(0, 6)'>
          <router-link v-bind="{to:'/playlist/'+item.id}">
            <img :src="item.picUrl" alt=""/>
            <p>{{item.name}}</p>
            <p>{{item.program.dj.brand}}</p>
            <span class="playCount"><span class='fa fa-play-circle' ></span>{{item.playCount}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!--主播电台结束-->
  </div>
</template>
<script>
export default{
    data(){
        return{
          swiperOption: {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          },
          banners:[1,2,3,4],
          musicList:[1,2,3,4,5,6,7,8,9],
          privatecontent:[],
          newPlayList:[],
          mv:[],
          djprogram:[]

        }
    },
    created(){
    this.getBanner();
    this.getMUsicList();
  this.getPrivatecontent();
  this.getNewPlayList();
  this.getMv();
  this.getdj();

  },
  methods:{
    //banner的接口/banner
    getBanner(){
      let url = '/api/banner';
      this.$http.get(url).then((response)=>{
          this.banners=response.data.banners;
//          console.log(this.banners);
    })
    },
//    获取每日推荐歌单
    getMUsicList(){
         let url='/api/personalized';
          this.$http.get(url).then((response)=>{
//            this.banners=response.data.banners;
//
            this.musicList = response.data.result;
//            console.log(this.musicList);
        });
       },
//独家放送mv /personalized/privatecontent
    getPrivatecontent(){
          let url='/api/personalized/privatecontent';
          this.$http.get(url).then((response)=>{
            this.privatecontent = response.data.result;
//                    console.log(this.privatecontent);
        });
      },
//最新音乐///top/list?idx=6
    getNewPlayList(){
          let url='/api/personalized/newsong';
          this.$http.get(url).then((response)=>{
            this.newPlayList = response.data.result;
//            console.log(this.newPlayList);
        });
      },
//推荐mv/personalized/mv
    getMv(){
      let url='/api/personalized/mv';
      this.$http.get(url).then((response)=>{
        this.mv = response.data.result;
//      console.log(response);
    });
    },
//主播电台/personalized/djprogram
    getdj(){
      let url='/api/personalized/djprogram';
      this.$http.get(url).then((response)=>{
        this.djprogram = response.data.result;
      console.log(this.djprogram);
    });
    },

    }

  }

</script>
<style>
  ul,li,p,div{
    margin: 0px;
    padding: 0px;

  }
  .clearfix::before,
  .clearfix::after{
    content: "";
    display: block;
    height: 0;
    line-height: 0px;
    clear: both;
    visibility: hidden;
  }
  .findMusic{
    width: 70%;
    background:goldenrod;
    position: relative;
    height: 100%;
    float: left;
  }
  /*banner*/
  .banner{

  }
  .banner .swiper-container{
    height: 240px;
  }
  .banner .swiper-container img{
   width: 100%;
    height: auto;
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

  /*独家放送*/
  .privatecontent li{
    width: 230px;
    margin-left: 5px;
  }
  .privatecontent li img{
    width: 250px;
  }

  p{
    margin: 0;
    line-height: 20px;
    margin: 0;
  }

  /*最新音乐*/
  ul.newPlayList{
    /*border: 1px solid #ccc;*/
    height: 500px;
    overflow: hidden;
    width: 50%;
    float: left;
  }

  ul.newPlayList li{
    clear:both;
    width: 100%;
    height: 70px;
    margin: 0;
    padding:0;
  }
  ul.newPlayList li .left{
    width: 70px;
    height: 70px;
    float: left;
    position: relative;
  }
  ul.newPlayList li img{
    width: 70px;
    height: 70px;
  }
  ul.newPlayList li .play{
    top: 0;
    left:0;
    transform: translateX(50%);
    z-index: 1;
    /*width: 70px;*/
    /*height: 70px;*/
    position: absolute;
    color: rgba(0,0,0,0.6);
    /*background:rgba(0,0,0,0.5);*/
    font-size: 40px;
    line-height: 70px;
  }
/*推荐mv*/
  .musicList .mv li{
    width: 50%;
    height: 100px;
    float: left;
    border: 1px solid #eee;
    margin-right: 10px;
  }


  /*推荐主播电台*/
  .musicList .djprogram{
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .musicList .djprogram li{
    width: 45%;
    height: 100px;
    /*float: left;*/
    border: 1px solid #eee;
    margin-right: 5px;
    margin-left: 0;
    float: left;

  }
  .musicList .djprogram li img{
    height: 100px;
    width: 100px;
    float:left;
  }

</style>

