<template>
  <div>
    <div class="md-subhead">
      <span>rtmp flash / 流媒体</span>
    </div>
    <div class="item">
      <div class="player">
        <video-player class="vjs-custom-skin" :options="playerOptions"></video-player>
      </div>
    </div>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
import "videojs-flash";
export default {
  data() {
    return {
      playerOptions: {
        height: "360",
        sources: [
          {
            type: "rtmp/mp4",
            src: "rtmp://192.168.2.29:1935/live/2"
          }
        ],
        techOrder: ["flash"],
        autoplay: false,
        controls: true,
        poster:
          "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-9.jpg"
      }
    };
  },
  components:{
     videoPlayer 
  }
};
</script>