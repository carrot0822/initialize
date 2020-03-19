<template>
  <div class="formBox">
    <div class="divForm">
      <form>
        <fieldset class="todo-list">
          <legend class="todo-list_title">todolist</legend>
          <label class="todo-list_label">
            <input type="checkbox" name id />
            <i class="check"></i>
            <span>复习css3</span>
          </label>
          <label class="todo-list_label">
            <input type="checkbox" name id />
            <i class="check"></i>
            <span>写css3动画</span>
          </label>
          <label class="todo-list_label">
            <input type="checkbox" name id />
            <i class="check"></i>
            <span>复习node.js</span>
          </label>
          <label class="todo-list_label">
            <input type="checkbox" name id />
            <i class="check"></i>
            <span>学习monggoDB</span>
          </label>
          <label class="todo-list_label">
            <input type="checkbox" name id />
            <i class="check"></i>
            <span>学习koa或者express</span>
          </label>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.formBox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #1a1e23;
  .todo-list {
    display: flex;
    flex-direction: column;
    padding: 0 75px 10px 30px;
    background: #162740;
    border: transparent;
    .todo-list_title {
      padding: 3px 6px;
      color: #f1faee;
      background-color: #264456;
    }
    .todo-list_label {
      display: flex;
      align-items: center;
      margin: 40px 0;
      font-size: 24px;
      font-family: Lato, sans-serif;
      color: #f1faee;
      cursor: pointer;

      input[type="checkbox"] {
        opacity: 0;
        appearance: none;
        // 选择相邻的替代元素
        & + .check {
          position: absolute;
          width: 25px;
          height: 25px;
          border: 2px solid #f1faee;
          transition: 0.2s;
        }
        &:checked + .check {
          width: 25px;
          height: 15px;
          border-top: transparent;
          border-right: transparent;
          transform: rotate(-45deg);
        }
        // 同级兄弟选择器
        & ~ span {
          position: relative;
          left: 40px;
          white-space: nowrap;
          transition: 0.5s;
          // 伪类生成线条 然后左右划动的动画
          &::before {
            position: absolute;
            content: "";
            top: 50%;
            left: 0;
            width: 100%;
            height: 1px;
            background: #f1faee;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.5s;
          }
        }

        &:checked ~ span {
            color: #585b57;
            &::before{
                transform: scaleX(1);
                transform-origin:left;
            }
        }
      }
    }
  }
}
</style>