<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
const animationDuration = 6000
export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "350px"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category", // 左边轴类型 类目轴 即自己定义data 下面的 x轴名
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false // Y轴右侧延伸的轴线
            }
          }
        ],
        series: [
          {
            name: "pageA",
            type: "bar",
            stack: "vistors",// 配置相同的stack值可以相互叠加在一起
            barWidth: "60%",// 
            data: [79, 52, 200, 334, 390, 330, 220],
            animationDuration
          },
          {
            name: "pageB",
            type: "bar",
            stack: "vistors",
            barWidth: "60%",// 一般柱形图都是平分的 这是实体柱形图占据的比例
            data: [80, 52, 200, 334, 390, 330, 220],
            animationDuration
          },
          {
            name: "pageC",
            type: "bar",
            stack: "vistors",
            barWidth: "60%",
            data: [30, 52, 200, 334, 390, 330, 220],
            animationDuration
          }
        ]
      });
    }
  }
};
</script>