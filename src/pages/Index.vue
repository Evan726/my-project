<template>
  <el-container
    v-loading="allloading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <el-header style="padding: 0">
      <div style="display: flex; flex-direction: row">
        <div class="logo">
          <router-link to="/index">VUEJS AND ELEMENTUI</router-link>
        </div>
        <div style="flex: 1">
          <el-menu :router=true :default-active="mainDefaultActive" class="el-menu-demo" mode="horizontal">
            <el-menu-item
              :index="item.navId"
              :key="item.navId"
              v-for="(item, index) in navData"
              :route="{path: index===0 ? '/index' : '/index/' + item.navId}"> {{ item.title }}
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </el-header>

    <template v-if="isHome">
      <el-main style=" background-color: #EBEEF5; padding: 0" v-bind:style="{height: clientHeight + 'px' }">
        <index-page></index-page>
      </el-main>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </el-container>
</template>
<script>
  import nav from '../data/navData'
  import IndexPage from './pages/IndexPage.vue'
  import bus from '../bus'

  export default {
    name: 'Index',
    data: function () {
      return {
        /* 屏幕默认高度 */
        clientHeight: 500,
        mainDefaultActive: '',
        navData: [],
        isHome: false,   // 是否显示首页
        allloading: false
      }
    },
    components: {
      IndexPage
    },
    created () {
      bus.$on('Loading', (show) => {
        this.allloading = show
      })
    },
    mounted: function () {
      this.navData = nav
      if (this.$route.params.pages) {
        this.mainDefaultActive = this.$route.params.pages
        this.isHome = false
      } else {
        this.mainDefaultActive = nav[0].navId
        // 没有pages 参数是显示首页
        this.isHome = true
      }
      // 首先在渲染页面后，设置下主区域的高度．
      this.clientHeight = document.body.clientHeight - 60
      // 然后监听window的resize事件．在浏览器窗口变化时再设置下页面显示区域的高速度．
      const that = this
      window.onresize = function temp () {
        that.clientHeight = document.body.clientHeight - 60
      }
    },

    watch: {
      '$route' (to, tofrom) {
        if (to.params.pages) {
          this.mainDefaultActive = to.params.pages
          this.isHome = false
        } else {
          this.mainDefaultActive = nav[0].navId
          this.isHome = true
        }

        // 首先在渲染页面后，设置下主区域的高度．
        this.clientHeight = document.body.clientHeight - 60
        // 然后监听window的resize事件．在浏览器窗口变化时再设置下页面显示区域的高速度．
        const that = this
        window.onresize = function temp () {
          that.clientHeight = document.body.clientHeight - 60
        }
      }
    },
    methods: {}
  }
</script>

<style lang='less'>
  @import '../../static/style/index.less';
</style>
