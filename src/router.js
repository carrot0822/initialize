import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/index.vue'
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
            path:'/validate',
            component:()=>import('../src/components/validate.vue')
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
        
    ]
})