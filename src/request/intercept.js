// 全局拦截器 这里对根源做了修改
// 对于多次数据点击取消的方案
import axios from 'axios'
import message from '../setting/messageFix'
// 定时器不停获取数据时 如果一个处于pending
const pending = [] // 声明一个数组用于存储每个ajax请求对列
const cancelToken = axios.CancelToken // 初始化取消请求的构造函数
let arr = [] // 区分是请求还是响应的头部
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