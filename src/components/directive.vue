<template>
  <div>
    <button v-copy="copyText">copy</button>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog v-drag title="提示" :visible.sync="dialogVisible" width="30%" >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyText: "要 Copy 的内容",
      dialogVisible: true
    };
  },
  methods: {
    
  },
  created() {
    console.log("会有几个路径", this.$router);
  }
};
</script>

<style lang="scss" scoped>
</style>