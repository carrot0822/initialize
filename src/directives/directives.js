import copy from './copy'
import drag from './drag'
const directives = {
    copy,
    drag
}

export default {
    install(Vue){
        Object.keys(directives).forEach((key)=>{
            Vue.directive(key,directives[key])
        })
    }
}