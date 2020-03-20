<template>
  <div class="aniBox">
    <ul class="float-text-menu">
      <li>
        <a href="#" data-text="Home">Home</a>
      </li>
      <li>
        <a href="#" data-text="Achive">Achive</a>
      </li>
      <li>
        <a href="#" data-text="navie">navie</a>
      </li>
      <li>
        <a href="#" data-text="Rua">Rua</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  mounted() {
    let floatTextMenuLinks = document.querySelectorAll(".float-text-menu li a");
    floatTextMenuLinks.forEach(link => {
      let letters = link.textContent.split("");
      link.textContent = "";
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.transitionDelay = `${i / 20}s`;
        span.dataset.text = letter;
        link.append(span);
      });
    });
  }
};
</script>
<style lang="scss">
/**锁作用域会出问题 对于jsDOM生成的元素*/
// 利用伪类隐藏在-130%Y轴 然后对整体使用130%Y轴位移就刚好把另一个藏起来了 AE里的蒙版+父子联动
.aniBox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #1A1E23;
}

.float-text-menu {
  display: flex;
  flex-direction: column;
  list-style-type: none;

  li {

    a {
      display: flex;
      padding: 6px;
      color: white;
      font-family: Lato, sans-serif;
      text-decoration: none;
      overflow: hidden;

      span {
        position: relative;
        transition: 0.3s;

        &::before {
          position: absolute;
          content: attr(data-text);
          transform: translateY(130%);
        }
      }

      &:hover {
        span {
          transform: translateY(-130%);
        }
      }
    }
  }
}
</style>