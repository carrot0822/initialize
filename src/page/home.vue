<template>
  <div id="home">
    <!-- 数据卡片 展示线形图总数据 -->
    <section class="countBox">
      <panel-group></panel-group>
    </section>
    <!-- 双重折线图 -->
    <section class="lineChartBox">
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <line-chart :chartData="lineChartData"></line-chart>
      </el-row>
    </section>
    <!-- 雷达图  饼图 柱形图 -->
    <section class="chartsBox">
      <el-row style="background:#fff padding:16px 16px 0;margin-bottom:32px;" :gutter="32">
        <el-col  :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
              <radar-chart></radar-chart>
          </div>
        </el-col>
        <el-col  :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
              <pie-chart></pie-chart>
          </div>
        </el-col>
        <el-col  :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
              <bar-chart></bar-chart>
          </div>
        </el-col>
      </el-row>
    </section>
    <!-- 其他浏览的图表 -->
    <el-row style="background:#fff padding:16px 16px 0;margin-bottom:32px;" :gutter="8">
        <el-col :xs="24" :sm="24" :lg="8">
            <div class="tableData">

            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from "../layout/home/panelGroup";
import LineChart from "../layout/home/linechart";
import RadarChart from "../layout/home/rardachart"
import PieChart from "../layout/home/piechart"
import BarChart from '../layout/home/barchart'
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
};



export default {
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    };
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    }
  },
  components: {
    PanelGroup,
    LineChart,
    RadarChart,
    PieChart,
    BarChart
  }
};
</script>

<style lang="scss" scoped>
#home {
  padding: 30px 20px;
  background-color: #f0f2f5;

  .chart-wrapper {
    background-color: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>