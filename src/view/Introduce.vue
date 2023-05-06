<template>
  <div class="Introduce">
    <div class="Introduce_start" v-if="flag">
      <img src="../../static/image/ai.jpg" alt="" />
      <button @click="btn" class="b">开始使用</button>
    </div>
    <!-- 轮播图 -->
    <div v-if="sw" class="swiper">
      <van-swipe @change="onChange" :initial-swipe="index"  indicator-color="orange">
        <van-swipe-item v-for="(item, index) in imgList" :key="index">
          <img :src="item.src" alt="" />
          {{item.title}}<br/>
          {{item.description}}
        </van-swipe-item>
      </van-swipe>
      <!-- 轮播向右箭头 -->
      <button class="btn" @click="right" v-show="s">jiaotou</button>
    </div>
    <button @click="bt" v-show="start" class="bt">开始使用</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 控制开始使用
      flag: true,
      // 控制轮播图隐藏
      sw: false,
      // 控制轮播箭头隐藏
      s: true,
      // 控制跳转按钮显示隐藏
      start: false,
      index: 0,
      imgList: [
        { src: require("../../static/image/a.jpeg") ,
        title:'欢迎使用白熊简历评估工具',
        description:'上传简历，您可以快速了解简历与目标岗位的匹配程度'},
        { src: require("../../static/image/b.jpeg") ,
        title:'欢迎使用白熊简历评估工具',
        description:'您可以免费获得基于人工智能与大数据的修改建议'},
        { src: require("../../static/image/d.jpeg") ,
        title:'欢迎使用白熊简历评估工具',
        description:'我们提供基于AIGC技术生成的模范简历,便于参考'},
      ],
    };
  },

  setup() {
    const onChange = (index) => showToast("当前 Swipe 索引：" + index);
    return { onChange };
  },
  methods: {
    btn() {
      this.flag = false;
      this.sw = true;
    },
    onChange() {},
    right() {
      this.index++;
      if (this.index >= 2) {
        this.s = false;
        this.start = true;
        return;
      }
    },
    bt() {
      this.$router.push({
        path: "/Login",
      });
    },
  },
};
</script>

<style scoped>
.Introduce {
  position: relative;
}
img {
  width: 100%;
  height: 100%;
}
/* 开始使用按钮 */
.b {
  width: 10.625rem;
  height: 2.7rem;
  position: absolute;
  left: 1.5rem;
  top: 34.4rem;
  border-radius: 1.3rem;
  background: #818bc2;
  border: none;
}
/* 轮播图 */
.swiper {
  margin-top: 200px;
  /* position: static; */
}
.swiper img {
  border: 1px solid redd;
}
/* 轮播按钮 */
.btn {
  border-radius: 1.3rem;
  border: none;
  color: #fff;
  width: 5rem;
  height: 2.5rem;
  position: absolute;
  top: 28rem;
  left: 17rem;
  background: #3f51b5;
}
/* 跳转按钮 */
.bt {
  color: #fff;
  width: 21rem;
  height: 2.4rem;
  position: absolute;
  left: 1.5rem;
  top: 26.4rem;
  border-radius: 1.3rem;
  background: #3f51b5;
  border: none;
}
/* 小圆点 */
.Introduce>>>.van-swipe__indicators{
  margin-left: 15rem;
  margin-top: 5rem;
  position: static;

}
img{
  width: 100%;
  height: 100%;
}

</style>
