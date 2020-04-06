<template>
  <div id="filterBox" class="filter">
    <div class="sonwFilter">
      <p>Emilia</p>
      <!--100个拼起来的？ -->
      <div class="card">
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
        <div class="snow"></div>
      </div>
    </div>
    <!-- 滤镜模糊标题 -->
    <div class="filterBk">
      <div class="frosted-glass">
        <h1 class="title">Sakura</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Lato);
// 对比度和模糊的滤镜 看不懂就弄出了融合
#filterBox {
  .sonwFilter {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: black;
    .card {
      $snow-size: 3em;
      width: $snow-size * 10;
      height: $snow-size * 10;
      padding: 10em;
      display: flex;
      flex-wrap: wrap;
      background: black;
      filter: blur(15px) contrast(30);
      .snow {
        position: relative;
        width: $snow-size;
        height: $snow-size;
        border-radius: 100%;

        &::after {
          position: absolute;
          content: "";
          left: 0;
          width: inherit;
          height: inherit;
          background: white;
          transition: 30s cubic-bezier(0.19, 1, 0.22, 1);
        }
        &:hover::after {
          transform: scale(0);
          transition-duration: 0.3s;
        }
      }
    }
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 9999;
      color: white;
      font-family: Lato, sans-serif;
      font-size: 4em;
      line-height: 1em;
      letter-spacing: 0.1em;
      transform: translate(-47%, -160%);
      pointer-events: none;
      filter: blur(1px) contrast(20); //模糊对比度
    }
  }
  .filterBk {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    background: url(https://i.loli.net/2019/11/17/GAYyzeKsiWjP5qO.jpg);
    background-size: cover;
    background-position: center;
    // 有东西的是这个阴影写法
    .frosted-glass {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 72vw;
      height: 36vh;
      box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
        0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
        0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(20px);
      transition: 0.5s ease;
      &:hover {
        box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157),
          0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28),
          0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5);
      }
      .title {
        padding-left: 0.375em;
        font-size: 3.6em;
        font-family: Lato, sans-serif;
        font-weight: 200;
        letter-spacing: 0.75em;
        color: white;

        @media (max-width: 640px) {
          font-size: 2em;
        }
      }
    }
  }
}
</style>