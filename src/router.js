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
            path:'/animation',
            component:Layout,
            redirect:'/animation/index',
            children:[
                {
                    path:'index',
                    component:()=>import('../src/components/annimation/loading.vue'),
                    name:'loading',
                    meta:{
                        
                    }
                },
                {
                    path:'snow',
                    component:()=>import('../src/components/annimation/particlar.vue'),
                    name:'sonw',
                    meta:{

                    }
                },
                {
                    path:'button',
                    component:()=>import('../src/components/annimation/button.vue'),
                    name:'button',
                    meta:{
                        
                    }
                },
                {
                    path:'slide',
                    component:()=> import('../src/components/annimation/slide.vue'),
                    name:'slide',
                    meta:{

                    }
                },
                {
                    path:'floatText',
                    component:()=>import('../src/components/annimation/floatText.vue'),
                    name:'floatText',
                    meta:{

                    }
                },
                {
                    path:'diyForm',
                    component:()=>import('../src/components/annimation/form.vue'),
                    name:'diyForm',
                    meta:{

                    }
                },
                {
                    path:'card',
                    component:()=>import('../src/components/annimation/card.vue'),
                    name:'card',
                    meta:{
                        
                    }
                },
                {
                    path:'tab',
                    component:()=>import('../src/components/annimation/tab.vue'),
                    name:'tab',
                    meta:{

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
                    component:()=>import('../src/components/date/date.vue'),
                    name:'test',
                    meta:{

                    }
                }
            ]
        }
    ]
})