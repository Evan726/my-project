<template>
  <div class="vue-panel">
    <slot>
      <div>
        标题
      </div>
    </slot>
    <slot>
      只有在没有要分发的内容时才会显示。
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'BaseContent'
  }
</script>

<style>
  .vue-panel {
    background-color: #fff;
  }

  .vue-content {
    padding: 15px;
  }
</style>
