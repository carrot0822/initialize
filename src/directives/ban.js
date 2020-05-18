// 禁用表单按钮重复提交
const vBan = {
    inserted:function(el,binding){
        el.addEventListener('click',()=>{
            if(!el.disabled){
                el.disabled = true
                setTimeout(()=>{
                    el.disabled = false
                },binding.value||3000)
            }
        })
    }
}