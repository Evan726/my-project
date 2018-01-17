<template>
  <div>
    <el-row :gutter="15">
      <el-col :span="12" class="vue-col">
        <div class="vue-content">
          <base-title>基础布局
            <small style="color: #666">使用单一分栏创建基础的栅格布局。</small>
          </base-title>
          <div style="padding: 15px">
            <el-row class="vue-row">
              <el-col :span="24">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row">
              <el-col :span="12">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row">
              <el-col :span="8">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row">
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row">
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
            </el-row>
            <div>通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。</div>
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="vue-col">
        <div class="vue-content">
          <base-title>分栏间隔
            <small style="color: #666">分栏之间存在间隔。</small>
          </base-title>
          <div style="padding: 15px">
            <el-row class="vue-row" :gutter="15">
              <el-col :span="12">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row" :gutter="15">
              <el-col :span="8">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row" :gutter="15">
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row" :gutter="15">
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row" :gutter="15">
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="13">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <div>Row 组件 提供了 gutter 属性  默认间隔为0  :gutter="12"</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="12" class="vue-col">
        <div class="vue-content">
          <base-title>对齐方式
            <small style="color: #666">通过 flex 布局来对分栏进行灵活的对齐。</small>
          </base-title>
          <div style="padding: 15px">
            <el-row class="vue-row" :gutter="15">
              <el-col :span="12" :offset="6">
                <div class="grid-content bg-purple">:offset="6"</div>
              </el-col>
            </el-row>
            <el-row class="vue-row" :gutter="15">
              <el-col :span="8" :offset="8">
                <div class="grid-content bg-purple">:offset="8"</div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row" :gutter="15">
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="6" :offset="6">
                <div class="grid-content bg-purple">:offset="6"</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row" :gutter="15">
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="4" :offset="12">
                <div class="grid-content bg-purple">:offset="12"</div>
              </el-col>
            </el-row>
            <el-row class="vue-row" :gutter="15">
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <div>通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数</div>
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="vue-col">
        <div class="vue-content">
          <base-title>对齐方式
            <small style="color: #666">通过 flex 布局来对分栏进行灵活的对齐。</small>
          </base-title>
          <div style="padding: 15px">
            <el-row class="vue-row" :gutter="15" type="flex">
              <el-col :span="5">
                <div class="grid-content bg-purple">默认为start</div>
              </el-col>
              <el-col :span="5">
                <div class="grid-content bg-purple">居左显示</div>
              </el-col>
              <el-col :span="5">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row" :gutter="15" type="flex" justify="center">
              <el-col :span="5">
                <div class="grid-content bg-purple">justify="center"</div>
              </el-col>
              <el-col :span="5">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="5">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row" :gutter="15" type="flex" justify="end">
              <el-col :span="5">
                <div class="grid-content bg-purple">justify="end"</div>
              </el-col>
              <el-col :span="5">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="5">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row" :gutter="15" type="flex" justify="space-between">
              <el-col :span="8">
                <div class="grid-content bg-purple">justify="space-between"</div>
              </el-col>
              <el-col :span="5">
                <div class="grid-content bg-purple">两端对其</div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row class="vue-row" :gutter="15" type="flex" justify="space-around">
              <el-col :span="8">
                <div class="grid-content bg-purple">justify="space-around"</div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <div>
              将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import BaseTitle from '../BaseTitle.vue'

  export default {
    name: 'BaseLayout',
    data: function () {
      return {}
    },
    components: {
      BaseTitle
    },
    mounted: function () {},
    methods: {}
  }
</script>

<style>
  .vue-row {
    margin-bottom: 10px;
  }

  .vue-col {
    margin-bottom: 15px;
  }

  .vue-content {
    border-radius: 0px;
    background-color: #fff;
  }

  .grid-content {
    height: 30px;
    text-align: center;
    line-height: 30px;
  }

  .bg-purple {
    background-color: aqua;
  }

  .bg-purple-light {
    background-color: aquamarine;
  }
</style>
