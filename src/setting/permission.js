// 路由拦截器的权限
import NProgress from 'nprogress'
import router from '../router'
NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {

    NProgress.done()
})