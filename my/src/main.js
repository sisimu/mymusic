// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
//导入vue-resource
//import vueResource from 'vue-resource';
//Vue.use(vueResource);


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
//import '../statics/mui/css/mui.css';
//导入全局样式
//import '../statics/css/site.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
