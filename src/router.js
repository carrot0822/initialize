import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/index.vue'
import Login from '../src/page/login.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:Index
        },
        {
            path:'/login',
            component:Login
        }
    ]
})