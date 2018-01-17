<template>
  <div class="login_bg">
    <div class="loginBox">
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
        <el-button type="primary">登录</el-button>
      </el-form>

      <router-link to="/index/javascript/vue/article">登录</router-link>
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
    }
  }
</script>

<style>
  .login_bg {
    background: url("../assets/loginbg.jpg") no-repeat;
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

  .loginBox {
    height: 300px;
    width: 400px;
    background: RGBA(255, 255, 255, 0.2);
    border-radius: 4px;
    border-bottom: 1px solid #2090ff;
    margin-top: -50px;
    padding: 50px;
  }
</style>
