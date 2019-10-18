const TokenKey = 'token'

export function getToken(){
    return sessionStorage.getItem(TokenKey)
}

export function setToken(token){
    return sessionStorage.setItem(TokenKey,'token')
}

export function removeToken(){
    return sessionStorage.removeItem(TokenKey)
}



// 关于登录流程
/**
 * 1.交付密码 获取token并存储 使用本地存储 外加vuex存储
 * 1.token还可用于书写路由守卫 当用户登录后仍然想要前往登录页时 再就是 用户刷新后重新获取信息 确认登录状态 如果未消失就静默登录
 * 2.依据token换取用户信息 换取后存于vuex内 用于映射用户数据 并方便后期做修改的时候动态更换
 * 3.每一次请求都取出token去验证权限 此处需要书写http拦截器
 */