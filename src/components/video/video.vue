<template>
  <div id="animate">
    <section class="batteryBox">
      <div class="battery"></div>
      <video
        id="my-video"
        class="video-js"
        controls
        preload="auto"
        width="640"
        height="264"
        poster="MY_VIDEO_POSTER.jpg"
        data-setup="{}"
      >
        <!-- <source src="MY_VIDEO.mp4" type='video/mp4'> -->
        <source v-bind:src="videoObj.videoServer" type="rtmp/vlc" />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web browser that
          <a
            href="https://videojs.com/html5-video-support/"
            target="_blank"
          >supports HTML5 video</a>
        </p>
      </video>
      <video
        id="video"
        class="video-js"
        controls
        preload="auto"
        width="640"
        height="264"
        poster="MY_VIDEO_POSTER.jpg"
        data-setup="{}"
      >
        <!-- <source src="MY_VIDEO.mp4" type='video/mp4'> -->
        <source src="rtmp://106.54.204.4:1935/live/2" type="rtmp/vlc" />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web browser that
          <a
            href="https://videojs.com/html5-video-support/"
            target="_blank"
          >supports HTML5 video</a>
        </p>
      </video>
      <button @click="check()">点击切换</button>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      videoObj: {
        videoServer: "rtmp://192.168.2.29:1935/live/2"
      }
    };
  },
  methods: {
    check() {
      var player = window.videojs("my-video");
      player.src("rtmp://192.168.2.29:1935/live/4");
      player.play();
      console.log('这啥')
    },
    flashOpen(){
      var hasFlash = 0 // 是否安装了flash

      var flashVersion = 0 // flash版本
      var isValid = 0 // 是否过期
      // IE浏览器
      if("ActiveXObject" in window){
        try{
          var swf = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
          hasFlash = 1;
          isValid = 1;
          VSwf = swf.GetVariable("$version");
          flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
        }catch(e){}
      // 非IE浏览器
      }else{
        try {
				if (navigator.plugins && navigator.plugins.length > 0) {
          console.log(navigator.plugins,'插件列表')
					var swf = navigator.plugins["Shockwave Flash"];
					if (swf) {
						hasFlash = 1;
            isValid = 1;
            // 描述
            				
            var words = swf.description.split(" ");
            console.log(words,'查看描述')	
						for (var i = 0; i < words.length; ++i) {
							if (isNaN(parseInt(words[i]))) continue;
							flashVersion = parseInt(words[i]);
						}
						if(swf.filename && swf.filename == 'internal-not-yet-present'){ //过期
							isValid = 0;
						}
					}
				}
      } catch (e) {}
        console.log(hasFlash,isValid,'是否按照flash')
        return { flash: hasFlash, version: flashVersion, vaild: isValid };
      }
    }
  },
  mounted() {
     this.flashOpen()
     console.log(window.videojs,'这啥')
  }
};
</script>

<style lang="scss" scoped>
</style>