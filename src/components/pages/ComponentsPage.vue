<template>
  <div>
    <el-menu :default-active="activeIndex"  :router="true" class="el-menu-demo, vue-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="home" route="/index/1/components/1-1-3/">组件首页</el-menu-item>
      <template v-for="item in menuData">
        <el-submenu :index="item.navId" >
          <template slot="title">{{ item.title }}</template>
          <template v-for="data in item.children">
            <el-menu-item
              :index="data.navId"
              :route='"/index/1/components/1-1-3/details/" + data.componentName'
            >{{ data.title }}</el-menu-item>
          </template>

        </el-submenu>
      </template>

    </el-menu>

    <router-view></router-view>


  </div>
</template>


<script>
  export default {
    name: 'ComponentsPage',
    data: function () {
      return {
        activeIndex: '',
        menuData: [{
          navId: '1',
          title: '公共组件',
          children: [{
            navId: '1-1',
            title: 'Layout 布局',
            path: 'details',
            componentName: 'layout'
          }, {
            navId: '1-2',
            title: 'Container 布局容器',
            path: 'details',
            componentName: 'container'
          }, {
            navId: '1-3',
            title: 'Icon 图标',
            path: 'details',
            componentName: 'icon'
          }, {
            navId: '1-4',
            title: 'Button 按钮',
            path: 'details',
            componentName: 'button'
          }]
        }, {
          navId: '2',
          title: '表单组件',
          children: [{
            navId: '2-1',
            title: 'Radio 单选框',
            path: 'details',
            componentName: 'radio'
          }, {
            navId: '2-2',
            title: 'Checkbox 多选框',
            path: 'details',
            componentName: 'checkbox'
          }, {
            navId: '2-3',
            title: 'Input 输入框',
            path: 'details',
            componentName: 'input'
          }, {
            navId: '2-4',
            title: 'InputNumber 计数器',
            path: 'details',
            componentName: 'inputnumber'
          }, {
            navId: '2-5',
            title: 'Select 选择器',
            path: 'details',
            componentName: 'select'
          }]
        }]
      }
    },
    components: {},
    mounted: function () {
      // 判断是否有componentName参数 并设置导航高亮
      if (this.$route.params.componentName) {
        for (let i = 0; i < this.menuData.length; i++) {
          const data = this.menuData[i].children
          for (let ii = 0; ii < data.length; ii++) {
            if (data[ii].componentName === this.$route.params.componentName) {
              this.activeIndex = data[ii].navId
              break
            }
          }
        }
      } else {
        this.activeIndex = 'home'
      }
    },
    methods: {
      handleSelect: function (key, keyPath) {
          // console.log('1===>222', key, keyPath)
      }
    },
    watch: {}
  }
</script>

<style scoped>
  .vue-menu{
    margin-bottom: 15px;
  }


</style>
