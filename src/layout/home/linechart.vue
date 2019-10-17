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
    chartData: {
      type: Object,
      required: true // 必须吗
    }
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
    // 两条折线 多折线图
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      console.log(this.$el, "这个父节点肯定是这个父组件");
      this.setOptions(this.chartData); // 传入数据
    },
    /**
     * 双折线图
     */
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          boundaryGap: false, // 两边留边策略
          axisTick: {
            // 坐标轴刻度
            show: false
          }
        },
        grid: {
          // 网格距离容器的位置
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true // 是否包含刻度标签
        },
        tooltip: {
          // 提示框
          trigger: "axis",
          axisPointer: {
            type: "cross"
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ["访问量", "开屏事件"] // 对应series的name
        },
        series: [
          {
            name: "访问量",
            itemStyle: {
              // 折线拐点的样式 itemStyle
              normal: {
                // 这个nomal参数
                color: "#FF005A",
                lineStyle: {
                  // 折线样式
                  color: "#FF005A",
                  width: 2
                }
              }
            },
            smooth: true,
            type: "line",
            data: expectedData,
            animationDuration: 2800,
            animationEasing: "cubicInOut"
          },
          {
            name: "开屏事件",
            itemStyle: {
              normal: {
                color: "#3888fa",
                lineStyle: {
                  color: "#3888fa",
                  width: 2
                },
                areaStyle: {
                  color: "#f3f8ff"
                }
              }
            },
            smooth: true,
            type: "line",
            data: actualData,
            animationDuration: 2800,
            animationEasing: "quadraticOut"
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>