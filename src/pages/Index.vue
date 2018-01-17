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
              v-for="item in navData"
              :route="{path: item.route}"> {{ item.title }}
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </el-header>

    <el-container v-bind:style="{height: clientHeight + 'px' }">
      <el-aside width="200px" v-bind:style="{height: clientHeight + 'px' }"
                style="background-color: #545c64; overflow-x: hidden;">
        <el-menu :default-openeds="openNav"
                 :router=true background-color="#545c64"
                 :default-active='sideDefaultActive'
                 text-color="#fff"
                 style="border-right: none">
          <template v-if="navData.length > 0">
            <el-submenu :index="data.navId" v-bind:key="data.navId" v-for="data in navData[sideDataIndex].children">
              <template slot="title"><i class="el-icon-message"></i>{{ data.title }}</template>
              <el-menu-item
                :key="item.navId"
                :index="item.navId"
                v-for="item in data.children"
                :route="{path: item.route}">{{ item.title }}
              </el-menu-item>
            </el-submenu>
          </template>


        </el-menu>
      </el-aside>

      <el-main style=" background-color: #EBEEF5;">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 15px">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>

        <router-view></router-view>
      </el-main>

    </el-container>


  </el-container>


</template>


<script>
  import nav from '../data/navData'
  export default {
    name: 'Index',
    data: function () {
      return {
        /* 屏幕默认高度 */
        clientHeight: 500,
        openNav: [],
        mainDefaultActive: '',
        sideDefaultActive: '',
        sideDataIndex: 0,
        navData: []
      }
    },
    mounted: function () {
      this.navData = nav
      // const _seft = this
      // 设置默认页导航数据
      for (let i = 0; i < this.navData.length; i++) {
        if (this.navData[i].bigName === this.$route.params.bigName) {
          this.sideDataIndex = i
          this.mainDefaultActive = this.navData[i].navId
          const sideData = this.navData[i].children
          for (let ii = 0; ii < sideData.length; ii++) {
            if (sideData[ii].smallName === this.$route.params.smallName) {
              this.openNav = [sideData[ii].navId]
              // 设置side导航选中项
              const sideList = sideData[ii].children
              for (let iii = 0; iii < sideList.length; iii++) {
                if (sideList[iii].route === this.$route.path) {
                  this.sideDefaultActive = sideList[iii].navId
                }
              }
            }
          }
        }
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
        // 监听路由变化
        for (let i = 0; i < this.navData.length; i++) {
          if (this.navData[i].bigName === to.params.bigName) {
            this.sideDataIndex = i
            this.mainDefaultActive = this.navData[i].navId
            const sideData = this.navData[i].children
            for (let ii = 0; ii < sideData.length; ii++) {
              if (sideData[ii].smallName === to.params.smallName) {
                this.openNav = [sideData[ii].navId]
                // 设置side导航选中项
                const sideList = sideData[ii].children
                for (let iii = 0; iii < sideList.length; iii++) {
                  if (sideList[iii].route === to.path) {
                    this.sideDefaultActive = sideList[iii].navId
                  }
                }
              }
            }
          }
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
    flex-basis: 200px;
    background-color: #409EFF;
  }

  .el-aside {
    color: #333;
  }
</style>
