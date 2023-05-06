<template>
  <div class="box">
    <!-- 进来显示的 -->
    <div v-show="flag">
      <van-nav-bar
      :border="false"
      title="请用一段话描述一下自己"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="description">
      <p>包含教育经历,实习工作经历,校园活动与奖项等,让</p>
      <p>我们更好的了解你.如果您有简历则更好!可点击下方</p>
      <p>按钮上传</p>
      <br />
      <div class="textarea1"></div>
      <div class="textarea2">
        <p @click="upload">点击添加附件 (仅支持pdf格式)</p>
      </div>
    </div>
    <button class="bt">下一步</button>
    </div>
    <!-- 进来隐藏的 -->
    <div></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      flag:true
    }
  },
  methods: {
    onClickLeft() {},
    // 点击下一步隐藏
    upload(){},
  },
};
</script>

<style scoped>
.box {
  margin: 1.5rem;
}
.description {
  width: 100%;
  height: 32rem;
  background: #3f51b5;
  border-radius: 1rem;
}
.description p {
  margin-left: 1.7rem;
  color: #fff;
  font-size: 25px;
  text-align: left;
  margin-block-start: 0rem;
  margin-block-end: 0rem;
}
.bt {
  color: #fff;
  width: 20.6rem;
  height: 2.4rem;
  position: absolute;
  left: 1.5rem;
  top: 38rem;
  border-radius: 1.3rem;
  background: #ccc;
  border: none;
}
.textarea1 {
  margin-left: 1.5rem;
  background: #fff;
  border-radius: 1rem;
  width: 85%;
  height: 22rem;
}
.textarea2 {
  text-align: center;
  margin-top: 1rem;
  width: 85%;
  height: 4rem;
  margin-left: 1.5rem;
  background: #fff;
  border-radius: 0.5rem;
}
.textarea2 p {
  text-align: left;
  line-height: 4rem;
  color: black;
  font-size: 28px;
  margin-top: 1.5rem;
  border-bottom: black;
  text-decoration: underline;
}
</style>
