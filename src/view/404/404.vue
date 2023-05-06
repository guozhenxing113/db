<template>
  <div class="index">
    <van-empty class="custom-image" image="../../../static/image/404.png" description="页面不小心走丢了!" />
  </div>
</template>

<script>
  export default {
    name: 'Not_Found',
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped="scoped">
  .index {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
</style>
