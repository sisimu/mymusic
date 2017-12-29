// 1.0 导入vue核心包
import Vue from 'vue';


// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
// 3.0.1 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);


// 4.0 注册mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);

// 5.0 注册mui的css样式
import '../statics/mui/css/mui.css';
//导入全局样式
import '../statics/css/site.css';
//import '../statics/font/css/font-awesome.css';

// 3.0.2 导入路由规则对应的组件对象
import home from './components/Home.vue';
import car from './components/shopcar/car.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';
import photolist from './components/photo/photolist.vue';
import photoinfo from './components/photo/photoinfo.vue';
import goodslist from './components/goods/goodslist.vue';
import goodsinfo from './components/goods/goodsinfo.vue';
import goodsdesc from './components/goods/goodsdesc.vue';
import goodscomment from './components/goods/goodscomment.vue';
//import car from './components/shopcar/car.vue';

///goods/goodslist


//import user from './components/shopcar/user.vue';
//import search from './components/shopcar/search.vue';

// 3.0.2 定义路由规则
var router1 = new vueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/Home',component:home},
		{path:'/car',component:car},
		{path:'/news/newslist',component:newslist},
		{path:'/news/newsinfo/:param',component:newsinfo},
		{path:'/photo/photolist',component:photolist},
		{path:'/photo/photoinfo/:param',component:photoinfo},
		{path:'/goods/goodslist',component:goodslist},
		{path:'/goods/goodsinfo/:param',component:goodsinfo},
		{path:'/goods/goodsdesc/:param',component:goodsdesc},
		{path:'/goods/goodscomment/:param',component:goodscomment}
	],
	linkActiveClass:'mui-active'
});

//导入vue-resource
import vueResource from 'vue-resource';
Vue.use(vueResource);

import moment from 'moment';
Vue.filter('datefmt',function(input,ftmString){
	return moment(input).format(ftmString);
});

//导入图片预览组件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);


//导入vuex
//import vuex from 'vuex';
//vue.use(vuex);

//导入字体图标样式
//import '../statics/font/css/font-awesome.min.css';

//import
// 5.0 利用Vue对象进行解析渲染



// 引入axios
import axios from 'axios';
//// // 创建基本的axios配置
//var $http = axios.create({
//
//
//});
// 挂载到vue的原型
//Vue.prototype.$http = $http;
Vue.prototype.$ajax=  axios;


new Vue({
	el:'#app',
	// 使用路由对象实例
	router:router1,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});