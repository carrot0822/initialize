<template>
  <div class="redMoon">
    <div class="loading"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.redMoon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: black;
  .loading {
    position: relative;
    width: 8em;
    height: 8em;
    background: black;
    border-radius: 50%;
    box-shadow: inset 0.5em -0.5em crimson;
    animation: spin 2s linear infinite;
    &::before,
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      box-shadow: inherit;
    }
    &::before {
      filter: blur(5px);
    }

    &::after {
      filter: blur(10px);
    }
  }
}
@keyframes spin{
    to{
        transform: rotate(1turn); // 1turn就是一圈360deg
    }
}
</style>