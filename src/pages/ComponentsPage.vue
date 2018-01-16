<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo, vue-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">组件首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">公共组件</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">表单组件</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">数据列表</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">消息提示</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">导航</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">其他组件</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>

    <router-view></router-view>


  </div>
</template>


<script>
  export default {
    name: 'ComponentsPage',
    date: function () {
      return {}
    },
    components: {},
    mounted: function () {},
    methods: {}
  }
</script>

<style scoped>
  .vue-menu{
    margin-bottom: 15px;
  }


</style>
