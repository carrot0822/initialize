<template>
  <div id="login">
    <div class="bgPic"></div>
    <div id="particles-js"></div>
    <div class="loginBox">
      <div class="logoBox">
        <img :src="logoSrc" />
        <p class="title">robot实验室</p>
      </div>
      <div class="inputBox">
        <el-form :model="loginForm">
          <el-form-item prop="password">
            <el-input v-model="loginForm.name" placeholder="用户账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" placeholder="密码"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!-- 验证码 -->
    <div class="validate">
      <el-popover ref="popover" trigger="manual" v-model="visible">
        <div class="sliding-pictures">
          <div class="vimg">
            <canvas id="sliderBlock"></canvas>
            <canvas id="codeImg"></canvas>
          </div>
          <div class="slider">
            <div class="track" :class="{ pintuTrue: puzzle }">{{ tips }}</div>
            <div class="button el-icon-s-grid" @mousedown.prevent="drag"></div>
          </div>
          <div class="operation">
            <span title="关闭验证码" @click="visible = false" class="el-icon-circle-close"></span>
            <span title="刷新验证码" @click="canvasInit" class="el-icon-refresh-left"></span>
          </div>
        </div>
        <div slot="reference" class="bottonBox">
        <el-button style="width:100%" @click="visible=!visible" type="primary">点击登录</el-button>
      </div>
      </el-popover>
    </div>
      
    </div>
    
  </div>
</template>

<script>
import particlesJs from "particles.js";
import particlesConfig from "../assets/particles.json";
export default {
  data() {
    return {
      loginForm: {
        name: "",
        password: ""
      },
      logoSrc: require("../common/img/login/5.jpg"),
      /*验证码专属 */
      visible: false,
      puzzle: false, //滑动是否验证
      tips: "拖动滑块",
      //滑块x轴数据
      slider: {
        mx: 200,
        bx: 10
      }
    };
  },
  methods: {
    // p粒子初始化
    init(){
      particlesJS("particles-js", particlesConfig);
    },
    submit() {
      this.$router.push({ path: "/" });
    },
    // 画布初始化
    canvasInit() {
      // 生成指定区间的随机数 这里是随机生成  B站还有一个画错了回归原点的动画
      const random = (min, max) =>{
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      let mx = random(127,244),
          bx = 10,
          y = random(30,40);
        this.slider={mx, bx};
        this.draw(mx, bx, y);
    },
    drag(e) {
      console.log("拖动了", e);
      let dom = e.target; // dom滑块元素
      let sliderDom = document.getElementById("sliderBlock"); // canvas滑块DOM
      
      const downCoordinate = { x: e.x, y: e.y }; // 获取按下的鼠标x轴和y轴
      // 这里的差距 60 10 + 50 50是滑块大小 10是间距 60真的玄学
      let check = Number(this.slider.mx) - Number(this.slider.bx)+60; // 滑块与目标的X轴差距
      console.log(check,downCoordinate,'这里的值',e)
      // x轴数据
      let x = 0;
      let zx = 0;
      // 滑动函数
      const move = moveEV => {
        
        x = moveEV.x - downCoordinate.x; // 离远点滑动的距离
       console.log("moveEV", moveEV.x,moveEV);
        if (x >= 280 || x <= 0) { // 布局问题
          return false; // 限制滑动距离 这里可以改边界吧
        }
        dom.style.left = x + "px"; // 滑块和上面的slider同步距离
        sliderDom.style.left = x + "px";
      };

      const up = () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
        dom.style.left = ""; // 松开 下面滑块的距离就置空？
        console.log(x, check, "x轴差距");
        
        let max = check + 5;
        let min = check - 5;
        // 允许正负误差
        if ((max >= x && x >= min) || x === check) { // 这里的校检
          console.log("滑动解锁成功");
          this.puzzle = true;
          this.tips = "验证成功";
          setTimeout(() => {
            this.visible = false;
            // 这里调取函数
            this.submit()
          }, 500);
        } else {
          console.log("拼图位置不正确");
          this.tips = "验证失败，请重试";
          sliderDom.style.left =  "";
          
          this.puzzle = false;
          //this.canvasInit();
        }
      };
       document.addEventListener("mousemove", move);
       document.addEventListener("mouseup", up);
    },
    draw(mx = 200, bx = 10, y = 50) {
      let mainDom = document.getElementById("codeImg");
      
      let bg = mainDom.getContext("2d");
      let width = mainDom.width; // 宽度
      let height = mainDom.height;
      
      let blockDom = document.getElementById("sliderBlock");
      let block = blockDom.getContext("2d");
      // 重新赋值，canvas重新绘制？
      blockDom.height = height;
      mainDom.height = height;

      // HTML5新增img对象
      let imgSrc = require("../common/img/login/bg.jpg");
      let img = document.createElement("img");
      img.style.objectFit = "scale-down"; // ??
      img.src = imgSrc;
      img.onload = function() {
        bg.drawImage(img, 0, 0, width, height);
        block.drawImage(img, 0, 0, width, height); // 两者的长宽不一致
      };

      let mainxy = { x: mx, y: y, r: 9 };
      let blockxy = { x: bx, y: y, r: 9 };
      this.drawBlock(bg, mainxy, "fill");
      this.drawBlock(block, blockxy, "clip");
    },
    drawBlock(ctx, xy = { x: 254, y: 109, r: 9 }, type) {
      let x = xy.x,
        y = xy.y,
        r = xy.r,
        w = 40;

      let PI = Math.PI;
      // 绘制
      ctx.beginPath();
      // left
      ctx.moveTo(x, y);
      // top
      ctx.arc(x + w + 5, y + w / 2, r, 1.5 * PI, 0.5 * PI, false);
      ctx.lineTo(x + w + 5, y + w);
      // right
      ctx.arc(x + (w + 5) / 2, y + w, r, 0, PI, false);
      ctx.lineTo(x, y);
      // bottom
      ctx.arc(x + (w + 5) / 2, y + w, r, 0, PI, false);
      ctx.lineTo(x, y + w);
      ctx.arc(x, y + w / 2, r, 0.5 * PI, 1.5 * PI, true);
      ctx.lineTo(x, y);
      // 修饰
      ctx.lineWidth = 1;
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
      ctx.stroke();
      ctx[type]();
      ctx.globalCompositeOperation = "xor";
    }
  },
  mounted() {
    this.draw();
    this.init();
  },
  beforeDestroy() {
    if (pJSDom && pJSDom.length > 0) {
      pJSDom[0].pJS.fn.vendors.destroypJS();
      pJSDom = [];
    }
  },
};
</script>

<style lang="scss" scoped>
#particles-js {
  position: absolute;
  z-index: 4;
  min-width: 100vw;
  min-height: 100vh;
}
#login {
 
  min-width: 100vw;
  min-height: 100vh;
  &::before{
     background-image: url("../common/img/login/bg.jpg");
    background-size: cover;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    filter: blur(5px);
    // 绝对定位四个方位定完后 再设置宽度和margin就会自适应分配剩余的空间大小 伪类则是跟父类同等大小
  }
  .loginBox {
    width: 300px;
    text-align: center;
    background-color: rgba(50, 50, 50, 0.6);
    padding: 20px 40px 60px 40px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%);
    z-index:6;
    .logoBox {
      text-align: center;
      margin-bottom: 10px;
      .title {
        color: antiquewhite;
        font-size: 16px;
        line-height: 28px;
      }
      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
      }
    }
  }
}

/*该样式最终是以弹窗插入*/
.sliding-pictures {
  width: 100%;
  .vimg {
    width: 100%;
    height: 170px;
    #codeImg,
    #sliderBlock {
      padding: 7px 7px 0 7px;
      width: inherit;
      height: inherit;
    }
    #codeImg {
      //display: none;
    }
    #sliderBlock {
      position: absolute;
      z-index: 4000;
    }
  }
  .slider {
    width: 100%;
    height: 65px;
    border-bottom: #c7c9d0 1px solid;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .track {
      margin-left: 7px;
      width: 286px;
      height: 38px;
      background: rgba(28, 136, 188, 0.5);
      border-radius: 25px;
      font-size: 14px;
      line-height: 38px;
      padding-right: 15px;
      padding-left: 70px;
    }
    .pintuTrue {
      background: #67c23a;
      color: #ffffff;
    }
    .button {
      position: absolute;
      width: 50px;
      height: 50px;
      line-height: 48px;
      background: #ffffff;
      box-shadow: #b9bdc8 0 0 3px;
      border-radius: 50%;
      left: 0px;
      text-align: center;
      font-size: 28px;
      color: #3e5d8b;
      &:hover {
        color: #2181bd;
      }
    }
  }
  .operation {
    width: 100%;
    height: 40px;
    > span {
      color: #9fa3ac;
      display: inline-block;
      width: 40px;
      font-size: 25px;
      line-height: 40px;
      text-align: center;
      &:hover {
        background: #e2e8f5;
      }
    }
  }
}
</style>