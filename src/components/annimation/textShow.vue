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
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Pacifico");
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
  }
  // 外发光文字
  .nexoText {
    height: 100vh;
    background-color: #333;
    .neon {
      color: #cce7f8;
      font-size: 2.5rem;
      font-family: uppercase;
      animation: shining 0.1s alternate infinite;
    }
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
</style>

