// 五分钟监控系列测试
// 页面加载
const pMonitor = {}
const navTimes = performance.getEntriesByType('navigation')
console.log(navTimes,'测试')

pMonitor.getLoadTime = ()=>{
    const [{ domComplete }] = performance.getEntriesByType('navigation')
    return domComplete
}

// 获取资源
const [{ startTime, responseEnd }] = performance.getEntriesByType('resource')
const loadTime = responseEnd - startTime

// 获取超时资源
const SEC = 1000
const TIMEOUT = 10 * SEC
const setTime = (limit = TIMEOUT) => time => time >= limit
/**
 * 翻译成低级语法
 * function setTime(timeout){
 *  let limit = timeout
 *  return funtion(time){
 *  return time >= limit
 * }
 * }
 */
const getLoadTime = ({ requestStart, responseEnd }) =>{
    responseEnd - requestStart
}
  
const getName = ({ name }) => name
// 把超时资源过滤 并且只要名字
pMonitor.getTimeoutRes = (limit = TIMEOUT) => {
  const isTimeout = setTime(limit)
  const resourceTimes = performance.getEntriesByType('resource')
  return resourceTimes.filter(item => isTimeout(getLoadTime(item))).map(getName)
}


for(let i =0; i<10;i++){
    console.log(i)
    console.log(setTimeout(()=>{
        i++
    },1000))
}