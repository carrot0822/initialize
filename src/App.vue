<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {customer } from "./util/customer";
import {getPerforpage,getPerforResource} from './util/performance'
export default {
  name: "app",
  components: {},
  created() {
  
    console.log(customer(),'报错吗')
    
  },
  mounted () {
    console.log(getPerforpage(),'数据')
    console.log(getPerforResource(),'资源')
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  color: #2c3e50;
}
</style>
