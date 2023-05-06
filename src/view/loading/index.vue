<template>
  <div>
    <van-overlay :show="isShow" :custom-style="{
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center',
          height:'100vh'
        }">
      <van-loading type="spinner" vertical size="16px" color="#4994df">
        <span style="color:#4994df">{{ title || '拼命加载中' }}</span>
      </van-loading>
    </van-overlay>
  </div>
</template>

<script>
  import {
    Overlay,
    Loading
  } from 'vant';
  export default {
    components: {
      [Overlay.name]: Overlay,
      [Loading.name]: Loading
    },
  }
</script>

<style>
</style>
