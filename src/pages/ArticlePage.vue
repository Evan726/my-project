<template>
  <el-row :gutter="15">
    <el-col :span="4"><div class="grid-content bg-purple">123</div></el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'ArticlePage'
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
