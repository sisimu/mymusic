import Vue from 'vue'
import Router from 'vue-router'
import Section from '../components/Recommend/findMusic.vue';//默认首页为发现音乐
import songList from '../components/Recommend/songList.vue';//歌单列表组件
import playlist from '../components/Recommend/playlist.vue';//歌单歌曲列表组件，详情页


Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Section',
      component: Section
    },
    {
      path:'/findMusic/playlist',
      //name: 'playlist',
      component: songList
    },
    {
      path:'/findMusic/playlist/:category',
      //name: 'playlist',
      component: songList
    },
    {
      path:'/playlist/:id',
      //name: 'playlist',
      component: playlist
    }
  ]
})
