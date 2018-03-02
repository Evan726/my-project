<template>
  <div class="vue-title">
    <slot>标题</slot>
  </div>
</template>

<script>
  export default {
    name: 'BaseTitle'
  }
</script>

<style>
  .vue-title {
    padding:10px 15px;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
  }
</style>
