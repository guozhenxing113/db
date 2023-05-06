import axios from 'axios';
import QS from 'qs';
import utils from "./sign.js";
import { Notify } from 'vant';

import loading from "./loading";

// 默认请求域名
// let root;
// if (process.env.NODE_ENV === 'development') {
//   root = '/apis'
// } else {
//   root = process.env.VUE_BASE_API
// }
var root = process.env.VUE_BASE_API
axios.defaults.baseURL = root

//跨域是否自定携带cookies
axios.defaults.withCredentials = true;

//格式化参数
axios.defaults.transformRequest = [
  function(data) {
    data = utils.sign(data)
    data = QS.stringify(data)
    return data
  },
]
axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// http request 拦截器
axios.interceptors.request.use(config => {
    // 加载动画
    loading.showLoading()
    return config
  },
  (err) => {
    return Promise.reject(err)
  })

// response 响应拦截器
axios.interceptors.response.use(response => {
  // 结束动画
  loading.cancelLoading()
  if (response.data.code !== 1 && response.data.code !== 2) {
    Notify('页面开了一个小差，请稍后重试');
  }
  return response.data;
}, error => {
  // 结束动画
  loading.cancelLoading()
  return Promise.reject(error);
})

export default axios;
