<template>
  <div>
    <el-row :gutter="15">
      <el-col :span="4" class="vue-col">
        <div class="grid-content">
          <el-button type="primary" class="vue-button">公共组件(base)</el-button>
        </div>
      </el-col>
      <el-col :span="4" class="vue-col">
        <div class="grid-content">
          <el-button type="success" class="vue-button">表单组件(form)</el-button>
        </div>
      </el-col>
      <el-col :span="4" class="vue-col">
        <div class="grid-content">
          <el-button type="success" class="vue-button">数据列表(data)</el-button>
        </div>
      </el-col>
      <el-col :span="4" class="vue-col">
        <div class="grid-content">
          <el-button type="info" class="vue-button">消息提示</el-button>
        </div>
      </el-col>
      <el-col :span="4" class="vue-col">
        <div class="grid-content">
          <el-button type="warning" class="vue-button">Navigation</el-button>
        </div>
      </el-col>
      <el-col :span="4" class="vue-col">
        <div class="grid-content">
          <el-button type="danger" class="vue-button">其他</el-button>
        </div>
      </el-col>

    </el-row>
    <el-row :gutter="15">
      <el-col :span="12" class="vue-col">
        <div class="grid-content">
          <base-title>饼状图 http://echarts.baidu.com/examples/index.html</base-title>
          <div>
            <div id="main" style="width: 100%;height:400px;"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="vue-col">
        <div class="grid-content">
          <base-title>线形图</base-title>
          <div>
            <div id="line" style="width: 100%;height:400px;"></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import BaseContent from '../base/BaseContent.vue'
  import BaseTitle from '../base/BaseTitle.vue'

  export default {
    name: 'VueComponentsIndexPage',
    components: {
      BaseContent,
      BaseTitle
    },
    mounted: function () {
      const myChart = echarts.init(document.getElementById('main'))
      const lineChart = echarts.init(document.getElementById('line'))
      myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: '10',
          top: '10',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
      lineChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: '10',
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    }
  }
</script>

<style>
  .grid-content {
    border-radius: 0px;
    background-color: #fff;
  }

  .vue-col {
    margin-bottom: 15px;
  }

  .vue-button {
    width: 100%;
    border-radius: 0;
    height: 60px;
  }
</style>
