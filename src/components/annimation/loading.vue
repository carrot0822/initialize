<template>
  <div class="allLoading">
    <div class="loading1">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="textAn">
      <h2>文字动画的原理 是把字符串拆分成数组后 用新的span标签组合生成 再配上对应的进入动画</h2>
      <p class="landIn">Ano hi watashitachi mada shiranai no Fushigi no monogatari desu</p>
      <span>?</span>
    </div>
    <div class="revertText">
      <h2>文字翻转</h2>
      <div class="reveal">sword art online</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let landInTexts = document.querySelectorAll(".landIn");
    landInTexts.forEach(landInTexts => {
      let letters = landInTexts.textContent.split("");
      landInTexts.textContent = ""; // 消除原来的
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.05}s`;
        landInTexts.append(span);
      });
    });
    console.log("这。。动画呢,虽然不知道为啥没成功 不过可以用js在这里加动画");
    // vue可能由于渲染的问题导致动画没产生
    let duration = 0.8;
    let delay = 0.3;
    let revealText = document.querySelector(".reveal");
    let letters = revealText.textContent.split("");
    revealText.textContent = "";
    let middle = letters.filter(e => e !== " ").length / 2;
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
      revealText.append(span);
    });
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
.allLoading {
  margin: 0 auto;
  height: 100vh;
}
.loading1 {
  padding: 10px;
  $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
  display: flex;
  animation-delay: 1s;
  .dot {
    position: relative;
    width: 2em;
    height: 2em;
    margin: 0.8em;
    border-radius: 50%;
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: wave 2s ease-in-out infinite;
    }
    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        background: nth($colors, $i); // nth从数组中选取值 nth这里是函数
        @if $i%3 == 0 {
          top: 0px;
        } @else if $i%3 == 1 {
          top: 10px;
        } @else if $i%3 == 2 {
          top: -10px;
        }
        &::before {
          animation-delay: $i * 0.2s;
        }
      }
    }
  }
}
.textAn {
  background-image: linear-gradient(
      rgba(16, 16, 16, 0.8),
      rgba(16, 16, 16, 0.8)
    ),
    url(https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg);
  background-size: cover;
  p {
    margin: 0 9em;
    font-size: 2em;
    font-weight: 600;
  }
  .landIn {
    display: flex;
    flex-wrap: wrap;
    line-height: 1.8;
    color: white;
    font-family: lora, serif;
    white-space: pre;
  }
}
.revertText {
  .reveal {
    position: relative;
    display: flex;
    color: #6ee1f5;
    font-size: 2em;
    font-family: Ralewap;
    letter-spacing: 3px;
    text-transform: uppercase; // 大写？
    white-space: pre;
    span {
      opacity: 0;
      transform: scale(0);
      animation: fadeIn 2.4s forwards;
    }

    &::before,
    &::after {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      width: 2px;
      height: 100%;
      background: white;
      opacity: 0;
      transform: scale(0);
    }
    &::before {
      left: 50%;
      animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
    }
    &::after {
      right: 50%;
      animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
    }
  }
}
@keyframes landIn {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes wave {
  50%,
  75% {
    transform: scale(2.5);
  }
  80%,
  100% {
    opacity: 0;
  }
}
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes slideLeft {
  to {
    left: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}
@keyframes slideRight {
  to {
    right: -6%;
    opacity: 1;
  }
}
</style>
