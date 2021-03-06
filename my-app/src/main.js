// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
// 引用vuex
import {store} from './store/store'

import axios from 'axios'
Vue.prototype.axios = axios
Vue.use(ElementUI);
Vue.config.productionTip = false
// 引用mock文件夹
require("./mock")

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
  store

})
