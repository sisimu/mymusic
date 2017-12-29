// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


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
