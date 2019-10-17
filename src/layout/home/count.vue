    
<template>
  <span ref="countup"></span>
</template>

<script>
import { CountUp } from "countup.js";
export default {
  name: "countup-demo",
  props: {
    end: {
      type: Number,
      default: 0
    },
    options: {
      type: Object
    }
  },
  data() {
    return {
      numAnim: null
    };
  },
  mounted() {
    this.initCountUp()
  },
  methods: {
    initCountUp() {
      this.numAnim = new CountUp(this.$refs.countup, this.end,this.options);
      this.numAnim.start();
      
    }
  }
};
</script>
