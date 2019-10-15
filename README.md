# reader

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

--- 开始总结
涉及到的技术 常用性质
    HTML
    CSS
    JS
    Vue
http： axios---》 拦截器配置 封装
 websocket
练习：从底层封装一个类axios异步请求

UI框架： elementUI
常用模块
用到的模块排名
外置插件
    1.count.js 数字跳动动画 自封装组件
    2.Echarts/V-charts 饼图柱状图
    3.vue-image-crop-upload 头像上传裁剪 练习 自封装上传裁剪
    4.vue-quil-editor 富文本编辑器 
        练习 1.0自己封装自定义图片上传 视频上传 拉伸  延申另一个富文本
            2.0 wxParse转义映射到小程序
    5.carouse3D.js 3D轮播图 练习 自己封装一次
    6.nprogress 进度条配合守卫使用 练习：调查其原理 自制上传进度条
    7.driver.js 制作引导说明
    8.particularly 花里胡哨的粒子插件
自封装复用插件

额外配置
sass使用 quill-editor配置出现的问题
0. 项目目录的搭建

1.项目基础文件的配置
 路由配置
 别名配置
 状态管理
2.
 登陆页 √
 token携带 // 练习 复习http知识
 路由权限 
 权限控制
3.
 首页
 头部组件-》 头像 -》个人中心-》修改密码 修改头像 上传头像功能
 侧边组件-》 路由 -》树形组件
 内部组件-> echart组件 count组件
 难点在路由配置的面包屑
