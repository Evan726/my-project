<template>

  <el-container v-bind:style="{height: clientHeight + 'px' }">
    <template v-if="isSide">
      <el-aside width="200px" v-bind:style="{height: clientHeight + 'px' }"
                style="background-color: #545c64; overflow-x: hidden;">
        <el-menu
          :router=true background-color="#545c64"
          :default-active="sideDefaultActive"
          text-color="#fff"
          style="border-right: none">
          <template v-if="navData.length > 0">
            <el-submenu :index="data.navId" v-bind:key="data.navId" v-for="data in navData[sideDataIndex].children">
              <template slot="title"><i class="el-icon-message"></i>{{ data.title }}</template>
              <el-menu-item
                :key="item.navId"
                :index="item.navId"
                v-for="item in data.children"
                :route="{path: '/index/' + sideDataIndex + '/' + item.route + '/' + item.navId}">{{ item.title }}
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </el-aside>
    </template>


    <el-main style=" background-color: #EBEEF5;">
      <template>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 15px">
          <template v-for="item in breadcrumb">
            <el-breadcrumb-item :to="{ path: item.path }">{{item.title}}</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
        <template v-if="!isDefault">
          <home-page></home-page>
        </template>
        <template v-else>
          <router-view></router-view>
        </template>
      </template>
    </el-main>
  </el-container>
</template>

<script>
  import nav from '../data/navData'
  import HomePage from './pages/HomePage.vue'
  import bus from '../bus'
  export default {
    name: 'MainPage',
    data: function () {
      return {
        /* 屏幕默认高度 */
        isSide: false,
        isDefault: false,
        clientHeight: 500,
        sideDefaultActive: '',
        sideDataIndex: 0,
        navData: [],
        breadcrumb: []
      }
    },
    components: {
      HomePage
    },
    created () {
      bus.$on('uid', (uid) => {
        this.breadcrumb.push(uid)
      })
    },
    mounted: function () {
      this.navData = nav
      let breadcrumb = [{
        title: '网站首页',
        path: '/index'
      }]
      if (this.$route.params.pages) {
        this.sideDataIndex = this.$route.params.pages
        this.isSide = !!this.navData[this.$route.params.pages].children

        // 设置面包屑导航第一层数据
        breadcrumb.push({
          title: this.navData[this.$route.params.pages].title,
          path: '/index/' + this.$route.params.pages
        })

        // 设置side导航高亮
        if (this.$route.params.componentId) {
          this.sideDefaultActive = this.$route.params.componentId
          this.isDefault = true
        } else {
          this.sideDefaultActive = ''
          this.isDefault = false
        }
      } else {
        this.sideDataIndex = nav[0].navId
      }
      this.breadcrumb = breadcrumb
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
        let breadcrumb = [{
          title: '网站首页',
          path: '/index'
        }]
        if (to.params.pages) {
          this.sideDataIndex = to.params.pages
          this.isSide = !!this.navData[to.params.pages].children

          // 设置面包屑导航第一层数据
          breadcrumb.push({
            title: this.navData[to.params.pages].title,
            path: '/index/' + to.params.pages
          })

          // 设置side导航高亮
          if (to.params.componentId) {
            this.sideDefaultActive = to.params.componentId
            this.isDefault = true
          } else {
            this.sideDefaultActive = ''
            this.isDefault = false
          }
        } else {
          this.sideDataIndex = nav[0].navId
        }
        this.breadcrumb = breadcrumb
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

<style>
  .el-col {
    margin-bottom: 15px;
  }

  .bg-purple {
    background: #409EFF;
    color: #fff;
  }

  .grid-content {
    border-radius: 0px;
    min-height: 40px;
  }
</style>
