<template>
  <div id="login">
    <div class="loginBox">
      <div class="logoBox">
        <img :src="logoSrc" />
        <p class="title">robot实验室</p>
      </div>
      <div class="inputBox">
        <el-form :model="loginForm">
          <el-form-item prop="password">
            <el-input v-model="loginForm.name" placeholder="用户账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" placeholder="密码"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="bottonBox">
        <el-button style="width:100%" type="primary">点击登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        name: "",
        password: ""
      },
      logoSrc: require("../common/img/login/5.jpg")
    };
  },
  methods: {
    submit() {}
  }
};
</script>

<style lang="scss" scoped>
#login {
   background-image:url('../common/img/login/bg.jpg');
   background-size: cover;
   width: 100vw;
   height: 100vh;
  .loginBox {
    width: 300px;
    text-align: center;
    background-color: rgba(50, 50, 50, 0.6);
    padding: 20px 40px 60px 40px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%);
    .logoBox{
        text-align: center;
        margin-bottom: 10px;
        .title{
            color: antiquewhite;
            font-size: 16px;
            line-height: 28px;
        }
        img{
            width: 60px;
            height: 60px;
            object-fit: cover;
        }
    }
  }
}
</style>