<template>
  <div class="nav-wrap">
    <van-nav-bar :fixed="true" :placeholder="true" :safe-area-inset-top="true" :title="title" :left-text="leftLext"
      :left-arrow="leftShow" :border="false" @click-left="onClickLeft" @click-right="onClickRight">
      <template #right v-if="rightLext.length || iconType.length">
        <span v-if="rightLext.length">{{rightLext}}</span>
        <van-icon v-if="iconType.length" :name="iconType" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
  export default {
    props: {
      path: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      leftLext: {
        type: String,
        default: ''
      },
      leftShow: {
        type: Boolean,
        default: true,
      },
      rightLext: {
        type: String,
        default: ''
      },
      iconType: {
        type: String,
        default: ''
      },
      rightCallBack: {
        type: Function,
        default: () => {}
      }
    },
    data() {
      return {}
    },
    methods: {
      // 点击返回
      onClickLeft() {
        if (this.path.length) {
          this.$router.push(this.path)
        } else {
          this.$router.go(-1)
        }
      },
      // 点击右边操作
      onClickRight() {
        this.rightCallBack()
      }
    },
  }
</script>

<style>
</style>
