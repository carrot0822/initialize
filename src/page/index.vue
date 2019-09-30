<template>
  <div id="search">
    <div class>这里是搜索框</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("http://106.54.204.4:3000/api/plugin/statismock/get_system_status")
      .then(res => {
        console.log(res);
      });
    
  }
};
</script>

