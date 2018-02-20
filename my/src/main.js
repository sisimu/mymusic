// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';


import VueCookies from 'vue-cookies';
Vue.use(VueCookies);

//import vuex from 'vuex';
//Vue.use(vuex);

import vuex from 'vuex';
Vue.use(vuex);
//
//import MintUI from 'mint-ui';
//import 'mint-ui/lib/style.css';
//Vue.use(MintUI);

import '../static/mui/css/mui.css';

//在main.js里面加入以下代码
//import VueResource from 'vue-resource'
////Vue.use(VueResource)
//Vue.http.options.emulateJSON = true;  //http请求设置
//Vue.http.options.headers = {
//  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' //http请求头设置form表单提交
//};
//复制代码

// 引入axios
//下载并引入axios
// 引入axios
import axios from 'axios'
 // 创建基本的axios配置
var $http = axios.create({

  baseURL: 'http://localhost:3000',
  timeout: 1000,
  //withCredentials:true,
  headers: {'X-Custom-Header': 'foobar'}
});
 //挂载到vue的原型
Vue.prototype.$http = axios;
// 4.0 注册mint-ui
// 导入mint-ui的css文件
//import 'mint-ui/lib/style.min.css';
//// 导入mint-ui组件对象
//import mintui from 'mint-ui';
//// 在Vue中全局使用mintui
//Vue.use(mintui);

// 5.0 注册mui的css样式
import '../static/mui/css/mui.css';
//导入全局样式
import '../static/css/site.css';
Vue.config.productionTip = false;

//轮播图模块
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css';


const store = new vuex.Store({
  state:{
    song:{},
    playUrl:''
  },
  mutations:{
    //this.$store.commit('addSong');
      addSong(state,songInfo){
  //将歌单添加到播放器，将歌单信息存到store里
      //  state.song.push(songInfo);
      state.song = songInfo;
    },
//根据id播放歌曲，改变aduio src 的值
    play(state,id){
    //      var  playSong = document.getElementById('playSong');
    //      http://music.163.com/song/media/outer/url?id=id.mp3;


    //  playSong='http://music.163.com/song/media/outer/url?id='+id+'.mp3';
    state.playUrl='http://music.163.com/song/media/outer/url?id='+id+'.mp3';
    //  return playSong;
    }
  },
  getters:{
    // this.$store.getters.fn
    changeSong(state){
     // val Url = state.playUrl;
      return state.playUrl;
    }
  }
});
//
//const store = new vuex.Store({
//  state: {
//    count: 0,
//    songUrl:''
//  },
//  mutations: {
//    increment (state) {
//      //state.count++
//  //state.songUrl
//    }
//  }
//});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
