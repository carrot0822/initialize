<template>
  <div class="particlarBox">
    <div class="sonw" v-for="n in 1000" :key="n"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seed: []
    };
  },
  methods: {
    getSeed(value) {
      let result = [];
      for (let i = 0; i < value; i++) {
        result.push(value);
      }
      return result;
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.particlarBox {
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  filter: drop-shadow(0 0 10px white);
}
@function random_range($min, $max) {
  $rand: random(); // 生成随机数
  $random_range: $min + floor($rand * (($max - $min) + 1)); // 向下取整
  @return $random_range;
}
.sonw {
  $total: 200;
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;

  @for $i from 1 through $total {
    $random-x: random(1000000) * 0.001vw; // 随机X坐标
    $random-offset: random_range(-100000, 100000) *
      0.0001vw; // 偏移量 动画关键帧
    $random-x-end: $random-x + $random-offset;
    $random-x-end-yoyo: $random-x + ($random-offset / 2); // 这？
    $random-yoyo-time: random_range(30000, 80000) / 100000; // 时间
    $random-yoyo-y: $random-yoyo-time * 100vh; // y轴坐标
    $random-scale: random(10000) * 0.0001; // 粒子随机大小
    $fall-duration: random_range(10, 30) * 1s; // 粒子演出关键帧
    $fall-delay: random(30) * -1s; // 粒子延迟
    /**对每个粒子单独设计其透明度 x轴 大小 */
    &:nth-child(#{$i}) {
      opacity: random(10000) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }
    /* #{插值表达式} 避免运行表达式计算 而是直接编译转换 */
    // percentage()函数主要是将一个不带单位的数字转换成百分比形式
    /**
    动画 从随机百分比开始运动 移动x轴 逐渐移动y轴向下坠落 每个粒子的延时和生命周期随机 动画时间无限
    但这样可能会浪费dom 还是p粒子的方便 重点在学习scss
     */
    @keyframes fall-#{$i} {
      #{percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }
      
      to {
        transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
      }
    }
  }
}
</style>