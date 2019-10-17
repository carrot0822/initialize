// 全局拦截器 这里对根源做了修改
import axios from 'axios'
import message from '../setting/messageFix'


axios.interceptors.request.use(
    config => {

    },

    error => {

    }
)

axios.interceptors.response.use(
    config => {

    },

    error =>{

    }
)