<template>
  <div class="index">
    <header-nav :title="'标题'" />
    <div class="content">
      这是首页
      <van-pull-refresh class="pull-content" :head-height="pullHeight" pull-distance="100" v-model="refreshing" pulling-text="下拉刷新" loosing-text="释放更新" success-text="刷新成功"
        @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" :error.sync="error" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
  import headerNav from '@/components/headNav/index.vue'

  export default {
    name: 'index',
    components: {
      headerNav
    },
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        error: false,
        refreshing: false,
      }
    },
    computed: {
      pullHeight() {
        let num = this.$store.state.utils.pullHeight / 7.5
        return num
      }
    },
    mounted() {
      // let str = window.localStorage.getItem('user')
      // console.log('str',str)
      // this.$toast('刷新了')
      // this.$loading.show();
    },
    methods: {
      onLoad() {
        setTimeout(() => {
          if (this.refreshing) {
            this.list = [];
            this.refreshing = false;
          }

          for (let i = 0; i < 20; i++) {
            this.list.push(this.list.length + 1);
          }
          this.loading = false;

          if (this.list.length >= 80) {
            this.finished = true;
          }
        }, 1000);
        //数据加载失败，点击再次发送请求
        // fetchSomeThing().catch(() => {
        //   this.error = true;//
        // });
      },
      onRefresh() {
        // 清空列表数据
        this.finished = false;
        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.onLoad();
      },
    },
    destroyed() {
      window.localStorage.setItem('user','123456')
    }
  }
</script>

<style lang="less" scoped="scoped">
  .index {
    color: #0570DB;

    .asd {
      color: #ED6A0C;
    }
  }
</style>
