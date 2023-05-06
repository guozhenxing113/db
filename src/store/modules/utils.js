//其他地方使用 
//添加 this.$store.dispatch('user/editUserData', this.form)
//获取 this.$store.state.user.userInfo
export default {
  namespaced: true, //子模块必须添加命名空间
  state: {
    userInfo: {}, //用户信息
    hideshow: true ,//控制页面底部使用fixed定位弹起输入框fixed失效问题
    pullHeight: 375 //设置下拉的高度
  },
  actions: {
    editUserData(state, edit) { //用户信息函数
      state.commit('addUserData', edit);
    }
  },
  mutations: {
    addUserData(state, data) { //增加用户信息到vuex中
      state.userInfo = data;
    },
    editHide(state, bool) {
      state.hideshow = bool
    },
    // 设置下拉的高度
    addPullheight(state, data) {
      state.pullHeight = data
    }
  },
  getters: {}
}
