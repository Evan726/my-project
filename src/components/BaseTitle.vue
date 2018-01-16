<template>
  <div class="vue-title">
    <slot>
      标题
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'BaseTitle'
  }
</script>

<style>
  .vue-title {
    padding:0 15px;
    height:46px;
    border-bottom: 1px solid #ddd;
    line-height: 46px;
    font-size: 18px;
  }
</style>
