
import request from '../../setting/partHttp'

export function login(data){
    return request({
        url:"/user/login",
        method:'post',
        data
    })
}

export function logout(){
    return request({
        url:'/user/logout',
        method:'post'
    })
}

export function getInfo(token){
    return request({
        url:'/user/getInfo',
        method:"get"
    })
}