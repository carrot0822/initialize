import Vue from 'vue'
import Router from 'vue-router'

import Layout from 'page/layout.vue'
import Login from '../src/page/login.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/login',
            component:Login
        },
        {
            path:'/directive',
            component:()=>import('../src/components/directive.vue')
        },
        {
            path:'/',
            component:Layout,
            redirect: "/home",
            children:[
                {
                    path:'/home',
                    component:()=> import('../src/page/home.vue'),
                    name:"home",
                    meta:{
                        icon:"",
                        title:"首页",
                        affix:true
                    }
                }
            ]
        },
        {
            path:'/copy',
            component:Layout,
            redirect: '/copy/index',
            children:[
                {
                    path:'index',
                    component:()=>import('../src/components/directive.vue'),
                    name:'copy',
                    meta:{

                    }
                }
            ]
        },
        {
            path:'/test',
            component:Layout,
            redirect: '/test/index',
            children:[
                {
                    path:'index',
                    component:()=>import('../src/components/Tinymce/test.vue'),
                    name:'test',
                    meta:{

                    }
                }
            ]
        }
    ]
})