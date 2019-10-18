// 部分请求拦截器
import axios from 'axios'
import {
    MessageBox,
    Message
} from 'element-ui'
import store from '@/store'
import {
    getToken
} from '../util/token'



const service = axios.create({
    baseURL: rocess.env.VUE_APP_BASE_API,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers['Token'] = getToken() // 修改请求头
        }
    },

    error => {
        console.error();
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    // 约定好状态码 进行一系列的操作
    response => {
        const res = response.data
        if (res.code !== 200) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            // 50008 不合法的token 50012其余用户登录了 50014 token过期
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                    // to re-login
                    MessageBox.confirm('你的账号在他处登录 你可以选择重登或者留在这个页面', {
                      confirmButtonText: '重新登录',
                      cancelButtonText: '退出',
                      type: 'warning'
                    }).then(() => {
                        // 清除用户token 不过我挂载到了全局 可以绕开这种做法
                      store.dispatch('user/resetToken').then(() => {
                        location.reload()
                      })
                    })
                  }
                return Promise.reject(new Error(res.message || 'Error'))
            }
        } else {
            return res
        }

    },

    error => {
        console.log('err' + error)
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service