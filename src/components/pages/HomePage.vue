<template>
  <div>组件首11页</div>
</template>

<script>
  export default {
    name: 'HomePage',
    data: function () {
      return {}
    },
    mounted: function () {
//      this.$http.interceptors.push(function (request, next) {
//        console.log('1===>', 1111111)
//        next(function (response) {
//          console.log('1===>', 3333333)
//        })
//      })
      this.AppHttp()
    },

    methods: {
      AppHttp: function () {
        this.$http.interceptors.push(function (request, next) {
          // ...
          // 请求发送前的处理逻辑
          // ...
          console.log('1===>', 11111)
          next()
        })

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
