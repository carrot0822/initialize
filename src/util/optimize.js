// 函数抖动
// 一定时间内未触发事件才会调用函数 再最后一次触发的时候 才会真正的触发函数
/**
 * 
 * @param {function} func  函数
 * @param {number} wait  1000 1s
 * @param {Bolean} immediate  开始边界还是结束边界触发  true开始边界触发 false 结束边界触发
 */
function debounce(func,wait,immediate) {
    // 闭包了  后面触发的函数会把定时器直接清除掉上一次的定时器ID
    let result = null,
        timeout = null; // 定时器ID
    return function(...args){
        let context = this // 获取作用域指向
        let now = immediate && !timeout; // timeout是判定是否执行过了
        clearTimeout(timeout); // 清除之前的定时器
        timeout = setTimeout(()=>{
            timeout = null
            if(!immediate){
                retult = func.call(context, ...args)
            }
        },wait)
        if(now){
            retult = func.call(context,...args)
        }
        return result
    }
}

function debounce2(func,delay) {
    // 闭包了  后面触发的函数会把定时器直接清除掉上一次的定时器ID
    let timeout = null; // 定时器ID
    return function(...args){
        let context = this // 获取作用域指向
        console.log(args) // 获取传入参数的所有数据
        clearTimeout(timeout); // 清除之前的定时器
        timeout = setTimeout(()=>{
                 func.call(context, ...args)
        },delay)
        
    }
}

// 在时间开始触发一段时间后执行一次
function throttle2(func,time) {
    var timeout
    var start = new Date();
    var time = time || 160

    return function (...args) {
        var context = this // this指向
        console.log(args,'传递的参数',context,'传递的上下文')
        var curr = new Date() -0 // 隐式转换为number类型
        clearTimeout(timeout) // 处理掉上一次回调 频繁触发的话
        if(curr - start >= time){
            func.apply(context, args)
            start = curr
        } else {
            time = setTimeout(()=>{
                func.apply(context, args)
            },time)
        }
        
    }
}
// 函数节流 一定时间内只执行一次
function throttle(func, wait) {
    let timeout = null,
        result = null;
        previous = 0;
        return function (...args) {
            let now = new Date(),
                context = this;
            // 如果remaining小于等于0 上次执行到此间隔时间已经超过了
            let remaining = wait - (now - previous) 
            if(remaining <=0){
                clearTimeout(timeout);
                previous = now
                timeout = null
                result = func.apply(context, args)
            } else if(!timeout){
                timeout = setTimeout(()=>{
                    previous = new Date()
                    timeout = null
                    result = func.apply(context,args)
                },remaining)
            }
            return result
        }
}
