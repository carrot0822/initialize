<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons");
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
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    
  },
  data() {
    return {
      chart: null //
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
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
    this.chart.dispose(); // 销毁实例
    this.chart = null;
  },
  methods: {
    // 雷达图
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      console.log(this.$el, "这个父节点肯定是这个父组件");
      this.setOptions(this.chartData); // 传入数据
    },
    /**
     * 雷达图
     */
    setOptions(chartData = []) {
      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        radar: {
          radius: "66%",
          center: ["50%", "42%"], // 圆心相对容器的高宽
          splitNumber: 8, // 指示器轴的分割条数
          splitArea: { // 坐标轴在网格中的分割区域
            areaStyle: {
              color: "rgba(127,95,132,.3)",
              opacity: 1,
              shadowBlur: 45,
              shadowColor: "rgba(0,0,0,.5)",
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [ // 雷达图的指示器
            { name: "Sales", max: 10000 },
            { name: "Administration", max: 20000 },
            { name: "Information Techology", max: 20000 },
            { name: "Customer Support", max: 20000 },
            { name: "Development", max: 20000 },
            { name: "Marketing", max: 20000 }
          ]
        },
        legend: { // 图例
          left: "center",
          bottom: "10",
          data: ["Allocated Budget", "Expected Spending", "Actual Spending"]
        },
        // legend与data中的name需要对应
        series: [
          {
            type: "radar",
            symbolSize: 0,
            areaStyle: {
              normal: {
                shadowBlur: 13,
                shadowColor: "rgba(0,0,0,.2)",
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1
              }
            },
            data: [
              {
                value: [5000, 7000, 12000, 11000, 15000, 14000],
                name: "Allocated Budget"
              },
              {
                value: [4000, 9000, 15000, 15000, 13000, 11000],
                name: "Expected Spending"
              },
              {
                value: [5500, 11000, 12000, 15000, 12000, 12000],
                name: "Actual Spending"
              }
            ],
            animationDuration: 3000
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>