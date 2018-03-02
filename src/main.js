// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'

import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import bus from './bus'
Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(WeVue)
/* eslint-disable no-new */

Vue.http.interceptors.push((request, next) => {
  console.log('1===this', 1)
  bus.$emit('Loading', true)
  next((response) => {
    console.log('1===this', 2)
    bus.$emit('Loading', false)
    return response
  })
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
