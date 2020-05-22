<template>
  <div>
    <button v-copy="copyText">copy</button>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog v-drag title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <div class="box">
      <div
        v-tooltip="{content: tooltip, color:'white', bgColor: 'black', pos: 'left'}"
        class="testTool"
      >看一下有没有框框</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyText: "要 Copy 的内容",
      dialogVisible: true,
      tooltip: "要提示的内容",
    };
  },
  methods: {},
  created() {
    console.log("会有几个路径", this.$router);
  }
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>