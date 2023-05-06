<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    provide() {
      return {
        reload: this.reload,
        docmHeight: document.documentElement.clientHeight || document.body.clientHeight,
        showHeight: document.documentElement.clientHeight || document.body.clientHeight,
      }
    },
    data() {
      return {
        isRouterAlive: true
      }
    },
    watch: {
      //监听显示高度
      showHeight() {
        if (this.docmHeight > this.showHeight) {
          //隐藏
          this.$store.commit('utils/editHide', false)
        } else {
          //显示
          this.$store.commit('utils/editHide', true)
        }
      }
    },
    mounted() {
      document.body.ondrop = event => {
        event.preventDefault()
        event.stopPropagation()
      }
      //监听事件
      window.onresize = () => {
        return (() => {
          this.showHeight = document.documentElement.clientHeight || document.body.clientHeight;
        })()
      }
      let height = document.body.clientWidth;
      this.$store.commit('utils/addPullheight', height)
      document.body.ondrop = event => {
        event.preventDefault()
        event.stopPropagation()
      }
      // window.addEventListener('beforeunload', () => {
      //   localStorage.setItem('user',123456);
      // });
    },
    methods: {
      reload() { //页面重加载的方法
        this.isRouterAlive = false
        this.$nextTick(() => {
          this.isRouterAlive = true
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
