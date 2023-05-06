// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as api from './assets/api'
import utils from './assets/utils/utils'
import loading from './assets/utils/loading'

import './plugins/vant'
// 兼容桌面端
import '@vant/touch-emulator';

import '../static/css/vant-reset.css'

import '../static/css/public.css'

Vue.prototype.$http = api;
Vue.prototype.$util = utils;
Vue.prototype.$loading = loading;
Vue.config.productionTip = false

// 路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (to.name === 'login' || from.name === 'login') {
    next()
  } else {
    next()
    // let result;
    // result = JSON.parse(storage.getItem('token'))
    // result ? next() : next('/login')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})