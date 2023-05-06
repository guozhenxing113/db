<template>
  <div class="box">
    <!--  -->
    <van-nav-bar
      :border="false"
      title="请填写你感兴趣的工作岗位"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 请输入信息 -->
    <div class="jobs">
      <p>请您添加目标岗位的JD文案,或勾选下方的推荐JD,</p>
      <p>系统将智能分析您的简历与岗位要求的匹配程度</p>
      <div class="jobs_information"></div>
    </div>
    <!-- 字节跳动 -->
    <div class="box2">
       <!-- 轮播图 -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in imgList" :key="index">
        {{item.title}}
        <img :src="item.img" alt="" width="240px" />
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {title:'字节跳动交互设计师',
          img: "../../static/image/a.jpeg",
          cntname: "错嫁良缘之一代军师",
        },
        {title:'字节跳动交互设计师',
          img: "../../static/image/b.jpeg",
          cntname: "鬼墓迷灯",
        },
        {title:'字节跳动交互设计师',
          img: "../../static/image/d.jpeg",
          cntname: "九霄灵帝",
        },
      ],
    };
  },
  methods: {
    onClickLeft() {},
  },
  mounted() {
    // this.$loading.show ()
    new Swiper(".swiper-container", {
      slidesPerView: 2, //设置slider容器能够同时显示的slides数量
      spaceBetween: 20, //slide之间的距离（单位px）
      centeredSlides: true, //设定为true时，active slide会居中，而不是默认状态下的居左。
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      // loop: true,
       coverflowEffect: {
        rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
        stretch: 0, //每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
        depth: 80, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
        modifier: 2,
        slideShadows: true, //开启slide阴影。默认 true。
      },
    },
   

    );
    
  },
};
</script>

<style scoped>
.box {
  margin-right: 1rem;
  margin-left: 1rem;
}
.jobs {
  width: 100%;
  height: 16rem;
  background: #3f51b5;
  border-radius: 1rem;
}
.jobs p {
  margin-top: 0.5rem;
  margin-left: 1.7rem;
  color: #fff;
  font-size: 27px;
  text-align: left;
  margin-block-start: 0rem;
  margin-block-end: 0rem;
}
.jobs_information {
  margin-top: 1rem;
  margin-left: 1rem;
  width: 90%;
  height: 11rem;
  background: #fff;
  border-radius: 1rem;
}

/* 轮播图 */
.box2{
  border: 1px solid red;
}
.swiper-container {
  position: relative;
  width: 100%;
  height: 360px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1.1);
  transition: 0.5s;
  z-index: 2001;
}
</style>
