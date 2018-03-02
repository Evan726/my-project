<template>
  <div>组件首11
    <wv-button type="primary" @click="WebToast">页面主要操作 Normal</wv-button>
    <el-button type="primary" @click="AppHttp">{{show}}</el-button>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data: function () {
      return {
        show: '你好'
      }
    },

    mounted: function () {
      // this.AppHttp()
    },

    methods: {
      WebToast: function () {
        require.ensure([], function () {
//          let ceshi = require('./ceshi.js')  // baidumap.js放在我们当前目录下
//          const a = ceshi.default()
//          console.log('1===>', a.a())
        })
      },
      AppHttp: function () {
        this.$http.post('http://211.159.159.175:8080/user/pub/login?sign=sign', {
          'phone': '13488235789',
          'password': 'e10adc3949ba59abbe56e057f20f883e'
        }).then((response) => {
          console.log('1===>', response.body.message, response.body)
        })
      }
    }
  }
</script>

<style>

</style>
