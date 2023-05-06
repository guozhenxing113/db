import Vue from 'vue'
import Router from 'vue-router'
import Introduce from '@/view/Introduce.vue'
import lost from '@/view/404/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/introduce',
    meta: {
      title: '白熊',
    }
  }, {
    path: '/introduce',
    name: 'introduce',
    component: Introduce,
    meta: {
      title: '使用流程',
    }
  }, {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/view/Login.vue'),
    meta: {
      title: '账号登录',
    }
  }, {
    path: '/upload',
    name: 'upload',
    component: () => import(/* webpackChunkName: "upload" */ '@/view/Upload.vue'),
    meta: {
      title: '自我介绍',
    }
  }, {
    path: '/job',
    name: 'job',
    component: () => import(/* webpackChunkName: "job" */ '@/view/Jobs.vue'),
    meta: {
      title: '挑选岗位',
    }
  }, {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '@/view/User.vue'),
    meta: {
      title: '个人中心',
    }
  }, {
    path: '/report',
    name: 'report',
    component: () => import(/* webpackChunkName: "report" */ '@/view/ReportDetail.vue'),
    meta: {
      title: '报告分析结果',
    }
  }, {
    path: '*',
    name: '404',
    component: lost,
    meta: {
      title: '404',
    }
  }]
})
