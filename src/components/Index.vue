<template>
  <el-container>
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
  export default {
    name: 'Index',
    data: function () {
      return {
        /* 屏幕默认高度 */
        clientHeight: 500,
        mainDefaultActive: '',
        navData: [],
        isHome: false   // 是否显示首页
      }
    },
    components: {
      IndexPage
    },
    mounted: function () {
      console.log('1===>同21', this.$route)
      console.log('1===>同21', !!this.$route.params.pages)
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
        console.log('1===>123123', to, tofrom)
        if (to.params.pages) {
          this.mainDefaultActive = to.params.pages
          this.isHome = false
        } else {
          this.mainDefaultActive = nav[0].navId
          this.isHome = true
        }
      }
    },
    methods: {

    }
  }
</script>

<style>
  .el-header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
    border-bottom: 1px solid #EBEEF5;
  }

  .logo {
    height: 60px;
    flex-basis: 200px;
    background-color: #409EFF;
  }

  .el-aside {
    color: #333;
  }
</style>
