<template>
  <div class="Login">
    <h2>账号登陆</h2>
    <van-form @submit="onSubmit">
      <van-field
        label="手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />
      <div class="box">
         <van-field
        label="验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"
      />
      <button class="btn">获取验证码</button>
      </div>
     
    </van-form>
        <button  class="bt" @click="toUpload">立即登录</button>

  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {},
    toUpload(){
      this.$router.push({
        path:'/Upload'
      })
    }
  },
};
</script>

<style scoped>
h2{
  color:#3F51B5 ;
  float: left;
}
.Login{
  margin-left: 2rem;
  /* border: 1px solid red; */
}
.van-form >>> .van-cell{
    padding: 0 0;
    display: inline-block;
}
.van-form >>> .van-cell__title{
  margin-top: 1rem;
}
.van-form >>> .van-cell__value{
  padding-left: 1rem;
  line-height: 2.5rem;
  margin-top: 1rem;
  width: 85%;
  height: 3rem;
  border-radius: 0.5rem;
  border: 1px solid #797979;
}
.van-form >>> .van-field__error-message{
   float: left;
   line-height: 0rem;
}
.van-form >>> :nth-child(2) .van-cell__value{
  width: 50%;
}
.box{
  position: relative;
}
.btn{
  font-size: 20px;
  border-radius: 0.5rem;
  color: #fff;
  width: 6rem;
  height: 2.5rem;
  border: none;
  background: #3f51b5;
  position: absolute;
  left: 13rem;
  top: 3.7rem;

}
.bt {
  color: #fff;
  width: 20.6rem;
  height: 2.4rem;
  position: absolute;
  left: 1.5rem;
  top: 27rem;
  border-radius: 1.3rem;
  background: #3f51b5;
  border: none;
}
</style>