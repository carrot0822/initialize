<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper">图标</div>
        <div class="card-panel-description">
          <div class="card-panel-text">报错数量</div>
          <div class="card-panel-num">
            <count :end="1000"></count>
          </div>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper">图标</div>
        <div class="card-panel-description">
          <div class="card-panel-text">访问量</div>
          <div class="card-panel-num">
            <count :end="1000"></count>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper">图标</div>
        <div class="card-panel-description">
          <div class="card-panel-text">首屏启动</div>
          <div class="card-panel-num">
            <count :end="1000"></count>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper">图标</div>
        <div class="card-panel-description">
          <div class="card-panel-text">接口访问失败</div>
          <div class="card-panel-num">
            <count :end="1000"></count>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import count from '../home/count'
export default {
  data(){
    return{
      endVal:1000, // 如果数据是异步的话 需要v-if处理
    }
  },
  components:{
    count
  }
};
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col {
    margin-bottom: 32px;
    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
      border-color: rgba(0, 0, 0, 0.05);

      .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0 14px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }

      .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;
        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }
        .card-panel-num {
          font-size: 20px;
        }
      }
    }
  }
}
</style>