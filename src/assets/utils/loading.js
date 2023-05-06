import Vue from 'vue'
import loadingComponent from '@/view/loading/index.vue'

const LoadingConstructor = Vue.extend(loadingComponent)

let toastDom;
let el;

function showLoading(param) {
  let title = param && param.title ? param.title : ''
  if (!el && !toastDom) {
    el = document.createElement('div');
    toastDom = new LoadingConstructor({
      el,
      data() {
        return {
          isShow: true, // 是否显示
          title // 文本内容
        };
      }
    });
    // 添加节点
    document.body.appendChild(toastDom.$el);
  } else {
    toastDom.isShow = true;
  }
  document.documentElement.style.overflow = 'hidden';
}

function cancelLoading() {
  if (toastDom) {
    toastDom.isShow = false;
  }
  document.documentElement.style.overflow = 'auto';
}
// 蒙层
export default {
  show: showLoading,
  cancel: cancelLoading
};
