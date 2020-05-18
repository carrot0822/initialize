import Vue from 'vue'
import Router from 'vue-router'

import Layout from 'page/layout.vue'
import Login from '../src/page/login.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            component: Login
        },
        {
            path: '/directive',
            component: () => import('../src/components/directive.vue')
        },
        {
            path: '/',
            component: Layout,
            redirect: "/home",
            children: [{
                path: '/home',
                component: () => import('../src/page/home.vue'),
                name: "home",
                meta: {
                    icon: "",
                    title: "首页",
                    affix: true
                }
            }]
        },
        // 动画图层
        {
            path: '/animation',
            component: Layout,
            redirect: '/animation/index',
            children: [{
                    path: 'index',
                    component: () => import('../src/components/annimation/loading.vue'),
                    name: 'loading',
                    meta: {

                    }
                },
                {
                    path: 'snow',
                    component: () => import('../src/components/annimation/particlar.vue'),
                    name: 'sonw',
                    meta: {

                    }
                },
                {
                    path: 'button',
                    component: () => import('../src/components/annimation/button.vue'),
                    name: 'button',
                    meta: {

                    }
                },
                {
                    path: 'slide',
                    component: () => import('../src/components/annimation/slide.vue'),
                    name: 'slide',
                    meta: {

                    }
                },
                {
                    path: 'floatText',
                    component: () => import('../src/components/annimation/floatText.vue'),
                    name: 'floatText',
                    meta: {

                    }
                },
                {
                    path: 'diyForm',
                    component: () => import('../src/components/annimation/form.vue'),
                    name: 'diyForm',
                    meta: {

                    }
                },
                {
                    path: 'card',
                    component: () => import('../src/components/annimation/card.vue'),
                    name: 'card',
                    meta: {

                    }
                },
                {
                    path: 'tab',
                    component: () => import('../src/components/annimation/tab.vue'),
                    name: 'tab',
                    meta: {

                    }
                },
                {
                    path: 'redMoon',
                    component: () => import('../src/components/annimation/redMoon.vue'),
                    name: 'redMoon',
                    meta: {

                    }
                },
                {
                    path: 'textShow',
                    component: () => import('../src/components/annimation/textShow.vue'),
                    name: 'textShow',
                    meta: {

                    }
                },
                {
                    path: 'dialog',
                    component: () => import('../src/components/annimation/dialog.vue'),
                    name: "dialog",
                    meta: {

                    }
                },
                {
                    path: 'filter',
                    component: () => import('../src/components/annimation/filter.vue'),
                    name: 'filter',
                    meta: {
                        des: '滤镜'
                    }
                },
                {
                    path: 'clip',
                    component: () => import('../src/components/annimation/clipPath.vue'),
                    name: 'clip',
                    meta: {
                        des: '滤镜'
                    }
                }
            ]
        },
        {
            path: '/common',
            component: Layout,
            redirect: '/common/index',
            children: [{
                path: 'index',
                component: () => import('../src/components/common/pagination/page.vue'),
                name: 'page',
                meta: {

                }
            }]
        },
        {
            path: '/copy',
            component: Layout,
            redirect: '/copy/index',
            children: [{
                path: 'index',
                component: () => import('../src/components/directive.vue'),
                name: 'copy',
                meta: {

                }
            }]
        },
        {
            path: '/test',
            component: Layout,
            redirect: '/test/index',
            children: [{
                path: 'index',
                component: () => import('../src/components/date/date.vue'),
                name: 'test',
                meta: {

                }
            }]
        },
        // echarts图层
        {
            path: '/area',
            component: Layout,
            redirect: '/area/index',
           
        }
        {
            path: '/demo',
            component: Layout,
            redirect: '/area/index',
           children:[{
               path:'index',
               component:()=> import('../src/components/translate/move.vue')
           }]
        }
    ]
})