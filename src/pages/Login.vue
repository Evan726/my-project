<template>
  <div class="login_bg">
    <div class="loginBox">
      <div class = "login-logo">
        <h1>VueJs and Element</h1>
      </div>
      <el-form :model="ruleForm2" ref="ruleForm2">
        <el-form-item >
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="username">
          </el-input>
        </el-form-item>
        <el-form-item >
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="password">
          </el-input>
        </el-form-item>
        <el-button type="primary"
                   @click="submitForm('ruleForm2')"
                   class="btn-block">登录</el-button>
      </el-form>


    </div>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    mounted: function () {
      console.log('1===>', document.getElementsByTagName('title').innerHTML)
    },
    methods: {
      submitForm: function (formName) {
        this.$router.push('/index')
      }
    }
  }
</script>

<style>
  .login_bg {
    background: url("../../static/images/loginbg.jpg") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .login-logo{
    position: absolute;
    margin-top: -130px;
    margin-left: -80px;
    width: 460px;
  }
  .login-logo h1{
    color: #fff;
    font-size: 42px;
    text-align: center;
  }
  .btn-block{
    width: 100%;
  }
  .loginBox {

    width: 300px;
    background: RGBA(255, 255, 255, 1);
    border-radius: 8px;
    border-bottom: 1px solid #2090ff;
    margin-top: -50px;
    padding: 60px 80px;
  }
</style>
