import Vue from 'vue'
import App from './App.vue'
import '../src/common/css/reset.css'
import router from './router' 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'nprogress/nprogress.css'
import './setting/permission'
import Directives from './directives/directives'
import 'echarts-extension-amap'
import 'video.js/dist/video-js.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Directives)
window.vm = new Vue({ // 挂载到全局
  router,
  render: h => h(App),
}).$mount('#app')
