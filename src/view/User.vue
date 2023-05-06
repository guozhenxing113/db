<template>
  <div class="box">
    <van-nav-bar
      class="box"
      :border="false"
      title="个人中心"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 宇宙探索 -->

    <div class="user_title">
      <div class="user_img">
        <div class="user_left">
          <img src="../../static/image/img1.jpg" alt="" />
          <h2>宇宙探索</h2>
          <button class="user_right">编辑简历</button>
        </div>
      </div>
      <div class="user_tit">
        <p>点击添加辅导老师，快速查找简历问题</p>
      </div>
    </div>
    <!-- 求职分析报告 -->
    <div class="analysis">
      <div class="analysis_title">
        <img src="../../static/image/img1.jpg" alt="" />
        <span>求职分析报告</span>
      </div>
      <!-- 字节跳动 -->
      <div class="analysis_con">
        <div class="analysis_left">
          <span>字节跳动-交互设计师</span><br />
          <span>2022.06.21</span>
        </div>
        <div class="analysis_right">
          <span>91%</span>
        </div>
      </div>

      <div class="analysis_con">
        <div class="analysis_left">
          <span>字节跳动-交互设计师</span><br />
          <span>2022.06.21</span>
        </div>
        <div class="analysis_right">
          <span>91%</span>
        </div>
      </div>
      <div class="analysis_con">
        <div class="analysis_left">
          <span>字节跳动-交互设计师</span><br />
          <span>2022.06.21</span>
        </div>
        <div class="analysis_right">
          <span>91%</span>
        </div>
      </div>
      <div class="analysis_con">
        <div class="analysis_left">
          <span>字节跳动-交互设计师</span><br />
          <span>2022.06.21</span>
        </div>
        <div class="analysis_right">
          <span>91%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onClickLeft() {},
    };
  },
  methods: {},
};
</script>

<style scoped>
/* 宇宙探索 */
.box {
  width: 100%;
  height: 100%;
  background: #3f51b5;
}
.user_title {
  width: 100%;
  height: 8rem;
  /* border: 1px solid red; */
}
.user_img {
  width: 100%;
  height: 5rem;
  /* border: 1px solid #ccc; */
}
.user_tit {
  width: 100%;
  height: 3rem;
  /* border: 1px solid #ccc; */
}
img {
  width: 2rem;
  height: 2rem;
}
.user_left {
  margin-left: 2rem;
  margin-top: 1rem;
  margin-right: 2rem;
  display: flex;
  justify-content: row;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.user_left h2 {
  color: #fff;
}
.user_right {
  width: 5rem;
  margin-left: 6rem;
  font-size: 0.5rem;
  background: #6679e4;
  color: #ccc;
  border-radius: 1rem;
  border: none;
}
.user_tit p {
  margin-left: -8rem;
  font-size: 0.5rem;
  color: #ccc;
}
/* 求职分析报告 */
.analysis {
  height: 25rem;
  background: #fff;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
}
.analysis_title {
  height: 5rem;
  /* border: 1px solid red; */
  display: flex;
  justify-content: row;
  align-items: center;
  margin-left: 2rem;
}
.analysis_title img {
  border-radius: 50%;
}
.analysis_content {
  margin-left: 2rem;
  margin-right: 2rem;
  height: 20rem;
  /* border: 1px solid red; */
}
/* 字节跳动 */
.analysis_con {
  /* width: 100%; */
  margin-left: 2rem;
  margin-right: 2rem;
  height: 4rem;
  background: #3f51b5;
  border-radius: 1rem;
}
.analysis_left {
  font-size: 0.8rem;
  width: 70%;
  height: 4rem;
  background: #ccc;
  float: left;
  border-radius: 1rem;
  text-align: left;
  padding-left: 1rem;
}
.analysis_left span{
  display: inline-block;
  margin-top: 0.2rem;
}
.analysis_right {
  float: right;
  text-align: center;
  width: 20%;
  height: 4rem;
}
.analysis_right span {
  display: inline-block;
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #fff;
}
.analysis_con{
  margin-top: 1.5rem;
}
</style>
