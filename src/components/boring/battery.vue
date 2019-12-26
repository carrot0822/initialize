<template>
  <div id="animate">
    <section class="batteryBox">
      <div class="battery"></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#animate {
  background-color: black;
  .batteryBox {
    padding: 20px 0;
    width: 140px;
    position: relative;
    margin: auto;
    .battery {
      height: 220px;
      box-sizing: border-box;
      border-radius: 15px 15px 5px 5px;
      filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.22));
      background: #fff;
      z-index: 1;
      &::before {
        content: "";
        position: absolute;
        width: 26px;
        height: 10px;
        left: 50%;
        top: 0;
        transform: translate(-50%, -10px);
        border-radius: 5px 5px 0 0;
        background: rgba(240, 240, 240, 0.88);
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 90%;// top设定绝对定位未定义宽高的元素有丶炫酷
        background: linear-gradient(
          to bottom,
          #7abcff 0%,
          #00bcd4 44%,
          #2196f3 100%
        );
        border-radius: 0px 0px 5px 5px;
        box-shadow: 0 14px 28px rgba(33, 150, 243, 0),
          0 10px 10px rgba(9, 188, 215, 0.08);
         animation: charging 6s linear infinite;
        filter: hue-rotate(90deg);
      }
    }
  }
  @keyframes charging {
    50% {
      box-shadow: 0 14px 28px rgba(0, 150, 136, 0.83),
        0px 4px 10px rgba(9, 188, 215, 0.4);
    }

    95% {
      top: 5%;
      filter: hue-rotate(0deg);
      border-radius: 0 0 5px 5px;
      box-shadow: 0 14px 28px rgba(4, 188, 213, 0.2),
        0 10px 10px rgba(9, 188, 215, 0.08);
    }
    100% {
      top: 0%;
      filter: hue-rotate(0deg);
      border-radius: 15px 15px 5px 5px;
      box-shadow: 0 14px 28px rgba(4, 188, 213, 0),
        0 10px 10px rgba(9, 188, 215, 0.4);
    }
  }
}
</style>