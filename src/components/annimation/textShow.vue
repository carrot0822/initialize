<template>
  <div id="textShow">
    <div class="textShadow">
      <h1 class="glowIn">Hello world</h1>
      <p
        class="glowIn"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. A lacus vestibulum sed arcu.</p>
    </div>

    <div class="nexoText">
      <h1>霓虹文字 这个辉光效果加了好多层阴影啊</h1>
      <div class="neon">yoshita sakura</div>
    </div>

    <div class="tDText">
      <h1 class>3d文字</h1>
      <div class="loading">Loading</div>
    </div>
    <div class="colorText">
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">archives</a>
        </li>
        <li>
          <a href="#">tags</a>
        </li>
        <li>
          <a href="#">categories</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let glowIntexts = document.querySelectorAll(".glowIn");
    glowIntexts.forEach(glowIntext => {
      let letters = glowIntext.textContent.split("");
      glowIntext.textContent = "";
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.05}s`;
        glowIntext.appendChild(span);
      });
    });

    let loading = document.querySelector(".loading");
    let letters = loading.textContent.split("");
    loading.textContent = "";
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${i / 10}s`;

      loading.append(span);
    });
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Pacifico");
@import url("https://fonts.googleapis.com/css?family=Baloo+Bhaijaan&display=swap");
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
#textShow {
  .textShadow {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: linear-gradient(
        rgba(16, 16, 16, 0.8),
        rgba(16, 16, 16, 0.8)
      ),
      url(https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg);
    background-size: cover;
    p {
      margin: 0em 5em 4em 5em;
    }
    h1,
    p {
      text-align: left;
      line-height: 1.8;
      font-family: Lora, serif;
    }
    .glowIn {
      color: white;
      span {
        animation: glow-in 0.8s both;
      }
    }
    @keyframes glow-in {
      from {
        opacity: 0;
      }
      65% {
        opacity: 1;
        text-shadow: 0 0 25px white;
      }
      75% {
        opacity: 1;
      }

      to {
        opacity: 0.7;
      }
    }
  }
  // 外发光文字
  .nexoText {
    height: 300px;
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    .neon {
      color: #cce7f8;
      font-size: 2.5rem;
      font-family: uppercase;
      animation: shining 0.1s alternate infinite;
    }
    @keyframes shining {
      from {
        text-shadow: 0 0 6px rgba(182, 211, 207, 0.9),
          0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(15, 115, 223, 0.5),
          0 0 21px rgba(15, 115, 223, 0.9), 0 0 34px rgba(15, 115, 223, 0.8),
          0 0 54px rgba(15, 115, 223, 0.9);
      }
      to {
        text-shadow: 0 0 6px rgba(182, 211, 207, 1),
          0 0 30px rgba(182, 211, 207, 0.4), 0 0 12px rgba(15, 115, 223, 0.6),
          0 0 22px rgba(15, 115, 223, 0.8), 0 0 38px rgba(15, 115, 223, 0.9),
          0 0 60px rgba(15, 115, 223, 1);
      }
    }
  }
  // 3D抖动文字
  .tDText {
    height: 300px;
    background-color: #2980b9;
    display: flex;
    justify-content: center;
    align-items: center;
    @function float-text-3d($shadow-color: #bbb, $depth: 10, $floating: false) {
      $shadows: (); // 这啥意思
      @for $i from 1 to $depth {
        @if ($floating == false and $i > $depth / 2) {
          $shadow-color: transparent;
        }
        $shadows: append(
          $shadows,
          0 ($i * 1px) $shadow-color,
          comma
        ); // comma代表分割数据使用逗号
        @if ($floating == false) {
          $shadows: append($shadows, 0 10px 10px rgba(0, 0, 0, 0.4), comma);
        } @else {
          $shadows: append($shadows, 0 50px 25px rgba(0, 0, 0, 0.2), comma);
        }

        @return $shadows;
      }
    }

    .loading {
      display: flex;
      color: white;
      font-size: 5em;
      font-family: "Baloo Bhaijaan", cursive;
      text-transform: uppercase;
      span {
        text-shadow: float-text-3d($floating: false);
        transform: translateY(20px);
        animation: bounce 0.3s ease infinite alternate;
      }
    }
    // 这里的抖动动画 简单的移动Y轴 改变阴影的效果有了3D的感觉
    @keyframes bounce {
      to {
        text-shadow: float-text-3d($floating: true);
        transform: translateY(-20px);
      }
    }
  }
  // 利用color:transparent
  .colorText {
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    background: #1a1e23;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style-type: none;
      li {
        padding: 6px 0;
        a {
          --fill-color: #198ce6;
          position: relative;
          display: block;
          padding: 4px 0;
          font-family: Raleway, sans-serif;
          font-size: 3em;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          -webkit-text-stroke: 2px var(--fill-color); // 谷歌专享了
          background: linear-gradient(
            90deg,
            var(--fill-color) 0%,
            var(--fill-color) 100%
          );
          background-size: 0;
          background-repeat: no-repeat;
          color: transparent;
          background-clip: text;
          transition: 0.5s linear;

          &:hover {
            background-size: 100%;
          }
        }
      }
    }
  }
}
</style>

