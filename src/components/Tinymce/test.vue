<template>
  <div>
    <textarea class="tinymce-textarea" id="mytextarea">Hello, World!</textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tinymceId: "mytextarea"
    };
  },
  methods: {},
  created() {
    console.log(window.tinymce, "是默认挂载到");

    console.log("会有几个路径", this.$router);
  },
  methods:{

  },
  mounted() {
    window.tinymce.init({
      selector: "#mytextarea",
      language:'zh_CN',
      plugins: "advlist autolink link image lists preview",
      init_instance_callback: editor => { // 初始化结束后的事件
          console.log(editor,'初始化编辑器')
					
          
					// 事件监听 当这些事件发生的时候 激发到自定义的input事件 并发送当前的内容
          editor.on('NodeChange Change KeyUp SetContent', () => {
            console.log(editor.getContent())
             
          })
        },
    });
  }
};
</script>

<style lang="scss" scoped>
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}
</style>

<style scoped>
.tinymce-container {
  position: relative;
  line-height: normal;
}
.tinymce-container>>>.mce-fullscreen {
  z-index: 10000;
}
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}
.editor-custom-btn-container {
  position: absolute;
  right: 4px;
  top: 4px;
  /*z-index: 2005;*/
}
.fullscreen .editor-custom-btn-container {
  z-index: 10000;
  position: fixed;
}
.editor-upload-btn {
  display: inline-block;
}
</style>