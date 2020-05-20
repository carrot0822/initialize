import copy from './copy'
import drag from './drag'
import tooltip from './tooltip'
const directives = {
    copy,
    drag,
    tooltip
}

export default {
    install(Vue){
        Object.keys(directives).forEach((key)=>{
            Vue.directive(key,directives[key])
        })
    }
}