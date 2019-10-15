<template>
  <div id="appBox">
    <div class="slidebarBox">
      <slider></slider>
    </div>
    <div class="mainBox">
      <div class="header">
        <navbar></navbar>
      </div>
      <div class="tagsBox"></div>
      <div class="notice">向帅带丑比</div>
      <div class="body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import slider from "../layout/slider";
import navbar from "../layout/header";
export default {
  data() {
    return {};
  },
  components: {
    slider,
    navbar
  }
};
</script>

<style lang="scss" scoped>
#appBox {
  .slidebarBox {
    transition: width 0.28s;
    width: 210px !important;
    background-color: #304156;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
  }
  .mainBox {
    min-height: 100%;
    -webkit-transition: margin-left 0.28s;
    transition: margin-left 0.28s;
    margin-left: 210px; // 巧妙
    position: relative;
    .header {
    }
    .tagsBox {
      height: 34px;
      width: 100%;
      background: #fff;
      border-bottom: 1px solid #d8dce5;
      -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
        0 0 3px 0 rgba(0, 0, 0, 0.04);
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    }
    .notice {
      height: 50px;
      line-height: 50px;
      color: rgb(12, 12, 12);
      background-color: azure;
      text-align: left;
      padding-left: 30px;
    }
    .body {
      height: calc(100vh-135px);
      width: 100%;
      position: relative;
      overflow: hidden;
      
    }
  }
}
</style>