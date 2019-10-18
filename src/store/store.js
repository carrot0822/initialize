import Vuex from 'vuex'
import Vue from 'vue'
import createLogger from 'vuex/dist/logger'
import {getToken, setToken, removeToken} from '../util/token'
import {login,logout,getInfo} from '../request/login/user'


Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const state={
    token:getToken(),
    name:"",
    avatar:"",
    introducation:'',
    roles:[]
}

const getter={

},

const mutations={
    SET_TOKEN:(state,token) =>{
        state.token = token
        setToken(token)
    },
    SET_NAME:(state,name)=>{
        state.token = name
    },
    SET_AVATAR:(state,avatar)=>{
        state.avatar = avatar
    }
}
// 在这里可以把异步请求写入 虽然会耦合在一起 但确实是异步执行了
const actions={
    getInfo({commit,state}){
        return new Promise((resolve,reject) =>{
            getInfo(state.token).then((res)=>{
                const {data} = res

                // 如果值正常
                const { roles, name, avatar, introduction } = data
                commit('SET_NAME',name);
                commit('SET_AVATAR',avatar);
                resolve(data)
            }).catch(err=>{
                reject(errs)
            })
        })
    },

    login({commit},userInfo){
        const {username,password} = userInfo
        return new Promise((resolve, reject)=>{
            // promise对象里面套promise对象 这是正常流程 不过我们这边= =基本没有报错这个说法
            login({username:username.trim(),password:password}).then((res)=>{
                const {data} = res
                commit("SET_TOKEN", data.token)
                setToken(data.token)
                resolve()
            }).catch(err=>{
                reject(err)
            })
        })
    },
    logout({commit,state}){
        return Promise((resolve,reject)=>{
            logout(state.token).then(()=>{
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                removeToken()
                // 这里还要回到登录页
                resolve() // 放行
            }).catch((error)=>{
                reject(error)
            })
        })
    },
    resetToken({commit}){
        return new Promise(resolve =>{
            commit('SET_TOKEN','');
            commit('SET_ROLES',[]);
            removeToken()
            resolve()
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})