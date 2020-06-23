# reader
:bowtie:


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
额外欠缺API
git使用简介说明
npm简介说明
test error
--- 
后台系统快速启动模板 应该包括
登录到鉴权的一套配置
1.http拦截器 在所有请求加上token 不合理的请求回退到登录页
2.路由守卫 在含有token或者另类权限的时候守护路由
2.5 动态路由加载
3.存储 合理的数据存储在本地以及有必要存储在  vuex内
4.路由到基础接口的一套模板
5.登录成功后 获取的用户信息存储后 再映射到页面上 
面包屑 tabBar

其他的一些常用非业务配置
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
 内部组件-> echart组件 自适应mixin的写法
 关于书写echart组件的顺序
 count组件 √ 模仿echart启用事件监听也不是不行
 难点在路由配置的面包屑

4.表格模板API模板


## 文件目录说明

## common

### js
1. business 各大面试题常见的手撕算法题
2. 数据结构相关的算法题 大多来源于leetcode
3. ES6 学习ES6 联想到的封装和集成
4. util 非业务性的工具函数
changelog.md：暂时的每日记录
tips.md：各类基础函数的复习和预习
 
## components 组件
1. animation  抄的各类小动画
2. area 想玩地图没玩成功
3. date 跟日期有关的相关demo
4. Echarts 以后要画的各类图表
5. monitor 监控和直播流相关 但是没搞完
6. upload 文件上传和图片上传 以及裁剪 也没搞完
7. Tinymce 富文本编辑器
8. vidoe 视频处理相关

## directives vue指令
1. 复制粘贴
2. 指令管理文件
3. 拖拽

## document 
以后的文章区

## network
计算机网络相关

## page 页面


## setting
数据性能监控相关

## util 
通用函数 但是目前放的是数据监控


## 以后要填的坑
1. 数据收集 日志监控平台（现在缺少数据库设计和Curd 抓取的探针在utils文件夹里放着
2. 拖拽生成常用代码和图表的平台 （暂时有思路 可以找一个借鉴
3. websocket聊天室（加深对websocket的理解
4. 直播/监控（videoJs的自我封装和翻译 vue-video不好用
5. mock 等各个平台的搭建和控制 （详情见知乎）
6. 移动端 PC端常用脚手架的配置（掘金上有 填完就行）
7. vue-press 自己的博客搭建
8. 自动化部署（最难的坑）
9. 线条拉扯流程工具（
10. 经历总结（最优先的 一年过去了 我成长了多少 这周五来写吧 花一天复习vue文档）
11. 打印 excel PDF导出
## 需要刷完的书
1. 高程重刷+面试题+实际经验讲解
2. ES6重刷和使用
3. Node的应用实战
4. vue原理探究 探究之后  去看看react 看看所谓的语言
5. 文章博客填坑
6. 设计模式

## 6月前要做的事
1. 封存项目经验 把涉及到的知识点 使用过多的组件 使用过的框架全部整合一遍 不求能全部想起来 但应该有所记录
2. 重学vue 这次是为了涉及到原理和一些技巧 方便后续过渡到react
3. 复习高程和ES6 把底子磨好
4. 未完成的事 针对自己移动端和后端的弱点都记录下来 留待后续突破