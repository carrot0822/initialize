<template>
  <div class="buttonBox">
    <div class="slideButton">
      <button
        data-text="Start"
        class="btn btn-primary btn-ghost btn-border-stroke btn-text-float-up"
      >
        <div class="btn-borders">
          <div class="border-top"></div>
          <div class="border-right"></div>
          <div class="border-bottom"></div>
          <div class="border-left"></div>
        </div>
        <span class="btn-text">Start</span>
      </button>

      <button
        data-text="Start"
        class="btn btn-multiple-border-stroke btn-primary btn-ghost btn-border-stroke btn-text-float-up"
      >
        <div class="btn-borders">
          <div class="border-top"></div>
          <div class="border-right"></div>
          <div class="border-bottom"></div>
          <div class="border-left"></div>
        </div>
        <div class="btn-borders">
          <div class="border-top"></div>
          <div class="border-right"></div>
          <div class="border-bottom"></div>
          <div class="border-left"></div>
        </div>
        <div class="btn-borders">
          <div class="border-top"></div>
          <div class="border-right"></div>
          <div class="border-bottom"></div>
          <div class="border-left"></div>
        </div>
        <span class="btn-text">Start</span>
      </button>
    </div>
    <div class="shineButton">
      <button class="btn btn-primary btn-ghost btn-shine">touch me</button>
    </div>
    <div class="danceButton">
      <button class="btn btn-pink btn-bubbles">click me</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);
.buttonBox {
  display: flex;

  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1a1e23;
}
.slideButton {
  .btn {
    --hue: 190;
    --ease-in-duration: 0.25s;
    --ease-in-exponential: cubic-bezier(0.95, 0.05, 0.795, 0.035); // 贝塞尔指数
    --ease-out-duration: 0.65s;
    --ease-out-delay: var(--ease-in-duration);
    --ease-out-exponential: cubic-bezier(0.19, 1, 0.22, 1);
    position: relative;
    padding: 1rem 3rem;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
    text-decoration: none;
    background-color: hsl(var(--hue), 100%, 41%);
    border: 1px solid hsl(var(--hue), 100%, 41%);
    outline: transparent;
    overflow: hidden;
    cursor: pointer;
    user-select: none; //? 不允许用户选中文字
    white-space: nowrap; //?
    transition: 0.25s;
    &:hover {
      background: hsl(var(--hue), 100%, 31%);
    }
    &-primary {
      --hue: 171;
    }

    &-ghost {
      color: hsl(var(--hue), 100%, 41%);
      background-color: transparent;
      border-color: hsl(var(--hue), 100%, 41%);
      &:hover {
        color: white;
      }
    }

    &-border-stroke {
      border-color: hsla(var(--hue), 100%, 41%, 0.35);

      .btn-borders {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .border-top {
          position: absolute;
          top: 0;
          width: 100%;
          height: 1px;
          background: hsl(var(--hue), 100%, 41%);
          transform: scaleX(0);
          transform-origin: left;
        }
        .border-right {
          position: absolute;
          right: 0;
          width: 1px;
          height: 100%;
          background: hsl(var(--hue), 100%, 41%);
          transform: scaleY(0);
          transform-origin: bottom;
        }
        .border-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: hsl(var(--hue), 100%, 41%);
          transform: scaleX(0);
          transform-origin: left;
        }
        .border-left {
          position: absolute;
          left: 0;
          width: 1px;
          height: 100%;
          background: hsl(var(--hue), 100%, 41%);
          transform: scaleY(0);
          transform-origin: bottom;
        }
        // when unhover, ease-out left, bottom; ease-in right, top
        .border-left {
          transition: var(--ease-out-duration) var(--ease-out-delay)
            var(--ease-out-exponential);
        }
        .border-bottom {
          transition: var(--ease-out-duration) var(--ease-out-delay)
            var(--ease-out-exponential);
        }

        .border-right {
          transition: var(--ease-in-duration) var(--ease-in-exponential);
        }
        .border-top {
          transition: var(--ease-in-duration) var(--ease-in-exponential);
        }
      }
      &:hover {
        color: hsl(var(--hue), 100%, 41%);
        background-color: transparent;
        .border-top,
        .border-bottom {
          transform: scaleX(1);
        }
        .border-left,
        .border-right {
          transform: scaleY(1);
        }

        // when hover, ease-in left, bottom; ease-out right, top 加上运动曲线后就不同了 应该是延迟等于动画时间就接一起了

        .border-left {
          transition: var(--ease-in-duration) var(--ease-in-exponential);
        }
        .border-bottom {
          transition: var(--ease-in-duration) var(--ease-in-exponential);
        }

        .border-right {
          transition: var(--ease-out-duration) var(--ease-out-delay)
            var(--ease-out-exponential);
        }
        .border-top {
          transition: var(--ease-out-duration) var(--ease-out-delay)
            var(--ease-out-exponential);
        }
      }
    }

    &-text-float-up {
      &::after {
        position: absolute;
        content: attr(data-text);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transform: translateY(35%);
        transition: 0.25s ease-out;
      }

      // when hover, ease-in top-text; ease-out bottom-text
      .btn-text {
        display: block;
        transition: 0.75s 0.1s var(--ease-out-exponential);
      }

      &:hover {
        .btn-text {
          opacity: 0;
          transform: translateY(-25%);
          transition: 0.25s ease-out;
        }

        &::after {
          opacity: 1;
          transform: translateY(0);
          transition: 0.75s 0.1s var(--ease-out-exponential); // 渐隐渐现
        }
      }
    }

    &-multiple-border-stroke {
      .btn-borders {
        &:nth-child(1) {
          left: -8px;
          padding: 0 8px;
        }

        &:nth-child(2) {
          top: -8px;
          padding: 8px 0;
        }

        &:nth-child(3) {
          top: -4px;
          left: -4px;
          padding: 4px;
        }
      }
    }
  }
}
/**
  基础元素搭建 
    无边框的按钮  
    滑动的渐变块
  动画：无边框按钮  边框处阴影 主要是无背景的边框设计
      滑动渐变块   在hover后做tranlate 平移动画
 */
.shineButton {
  .btn {
    --hue: 190;
    position: relative;
    padding: 1rem 3rem;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    background-color: hsl(var(--hue), 100%, 41%);
    border: 1px solid hsl(var(--hue), 100%, 41%);
    outline: transparent;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    transition: 0.25s;

    &:hover {
      background: hsl(var(--hue), 100%, 31%);
    }

    &-primary {
      --hue: 187;
    }
    // 清空背景色
    &-ghost {
      color: hsl(var(--hue), 100%, 41%);
      background-color: transparent;
      border-color: hsl(var(--hue), 100%, 41%);
      &:hover {
        color: white;
      }
    }
    &-shine {
      color: white;
      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          120deg,
          transparent,
          hsla(var(--hue), 100%, 41%, 0.5),
          transparent
        );
        transform: translateX(-100%);
        transition: 0.6s;
      }
      &:hover {
        background: transparent;
        box-shadow: 0 0 20px 10px hsla(var(--hue), 100%, 41%, 0.5);
      }
      &:hover::before {
        transform: translateX(100%);
      }
    }
  }
}
.danceButton {
  @function sample($list) {
    @return nth($list, random(length($list)));
  }

  @function bubbles($color, $count: 16) {
    $bubbles: ();
    $bubble-types: (
      radial-gradient(circle, $color 20%, transparent 20%),
      radial-gradient(circle, transparent 20%, $color 20%, transparent 30%)
    );

    @for $i from 1 through $count {
      $bubbles: append($bubbles, sample($bubble-types), comma);
    }
    @return $bubbles;
  }

  @function random_range($min, $max) {
    $rand: random();
    $random_range: $min + floor($rand * (($max - $min) + 1));
    @return $random_range;
  }

  @function random_sizes($count: 16) {
    $sizes: ();
    @for $i from 1 through $count {
      $sizes: append(
        $sizes,
        (random_range(10, 20) * 1%) (random_range(10, 20) * 1%),
        comma
      );
    }
    @return $sizes;
  }
  .btn {
    --hue: 190;
    --btn-bg-color: hsl(var(--hue), 100%, 50%);
    --btn-bg-color-darker: hsl(var(--hue), 100%, 45%);
    position: relative;
    padding: 0.75rem 1.5rem;
    margin: 1rem;
    font-size: 1rem;
    font-family: Lato, sans-serif;
    line-height: 1.5;
    color: white;
    text-decoration: none;
    background-color: var(--btn-bg-color);
    border: 1px solid var(--btn-bg-color);
    border-radius: 4px;
    box-shadow: 0 0.1px 0.7px rgba(233, 30, 99, 0.141),
      0 0.1px 1.7px rgba(233, 30, 99, 0.202),
      0 0.3px 3.1px rgba(233, 30, 99, 0.25),
      0 0.4px 5.6px rgba(233, 30, 99, 0.298),
      0 0.8px 10.4px rgba(233, 30, 99, 0.359), 0 2px 25px rgba(233, 30, 99, 0.5);
    outline: transparent;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    transition: 0.25s;

    &-pink {
      --hue: 330;
    }

    &-bubbles {
      overflow: visible;
      transition: transform ease-in 0.1s, background-color ease-in 0.1s,
        box-shadow ease-in 0.25s;

      &::before {
        position: absolute;
        content: "";
        left: -2em;
        right: -2em;
        top: -2em;
        bottom: -2em;
        transition: ease-in-out 0.5s;
        background-repeat: no-repeat;
        background-image: bubbles(var(--btn-bg-color)); // 背景颜色 背景位置
        background-size: random_sizes();
        background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%,
          57% 30%, 65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%,
          50% 70%, 64% 70%, 80% 71%;
        animation: bubbles ease-in-out 0.75s forwards;
      }
      &:active {
        transform: scale(0.95);
        background: var(--btn-bg-color-darker);
        &::before {
          // when the clicked mouse is up, trigger the animation.
          animation: none;
          background-size: 0;
        }
      }
    }
  }
// 利用背景可以叠加来生成小点和气泡 颜色接近用来遮盖 这些参数不是随机生成 反而有点耐人寻味
  @keyframes bubbles {
    0% {
      background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
        65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
        64% 70%, 80% 71%;
    }

    50% {
      background-position: 10% 44%, 0% 20%, 15% 5%, 30% 0%, 42% 0%, 62% -2%,
        75% 0%, 95% -2%, 0% 80%, 95% 55%, 7% 100%, 24% 100%, 41% 100%, 55% 95%,
        68% 96%, 95% 100%;
    }

    100% {
      background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%,
        80% 0%, 100% -2%, -5% 80%, 100% 55%, 2% 100%, 23% 100%, 42% 100%,
        60% 95%, 70% 96%, 100% 100%;
      background-size: 0% 0%;
    }
  }
}
</style>