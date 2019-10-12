<template>
  <div id="search">
    <div class>这里是搜索框</div>
    <img :src="srcA" width="180px" height="180px" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      srcA: ""
    };
  },
  created() {
    axios
      .get("http://192.168.2.29:8088/equipmentmodule/guideMachine/qrCode", {
        
        responseType: "arraybuffer"
      })
      .then(res => {
        console.log(res);
        this.srcA ='data:image/png;base64,' + new Buffer(res.data, 'binary').toString('base64')
          
        console.log(this.srcA);
      });
  }
};
</script>

