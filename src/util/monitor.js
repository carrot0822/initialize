// 五分钟监控系列测试
// 页面加载
const pMonitor = {}
const navTimes = performance.getEntriesByType('navigation')
console.log(navTimes,'测试')





// 获取超时资源

// 资源加载上报 fetch XMP对象
// 生成表单数据
const convert2FormData = (data = {}) =>
  Object.entries(data).reduce((last, [key, value]) => {
    if (Array.isArray(value)) {
      return value.reduce((lastResult, item) => {
        lastResult.append(`${key}[]`, item)
        return lastResult
      }, last)
    }
    last.append(key, value)
    return last
  }, new FormData())

// 上报数据
pMonitor.log = (url, data = {}, type = 'POST') => {
  const method = type.toLowerCase()
  const urlToUse = method === 'get' ? `${url}?${makeItStr(data)}` : url
  const body = method === 'get' ? {} : { body: convert2FormData(data) }
  const option = {
    method,
    ...body
  }
  fetch(urlToUse, option).catch(e => console.log(e))
}

/*------ 实际调用的方法 业务函数 ------*/
//0. 初始化init
/*------ 获取数据的方法 ------*/

// 获取资源的加载时间
function getResourceTime(){
  const [{ startTime, responseEnd }] = performance.getEntriesByType('resource')
  const loadTime = responseEnd - startTime
  return loadTime
}
// 获取DOM加载时间
function getLoadTime() {
  // navigation返回了一个数组
  const [{ domComplete }] = performance.getEntriesByType('navigation')
  return domComplete
}

// 获取超时资源
function getTimeoutRes (limit = 1000*10) {
  const isTimeout = setTime(limit)
  const resourceTimes = performance.getEntriesByType('resource')
  return resourceTimes.filter(item => isTimeout(getLoadTime(item))).map(getName)
}

/*------ 通用方法业务 ------*/
// 生成一个判定是否超时的函数 const setTime = (limit = TIMEOUT) => time => time >= limit
function setTime(timeout){
  let limit = timeout
  return function(time){
    return time >= limit
  }
}
// 获取资源名 简略写法const getName = ({ name }) => name
function getName({ name }){
  return name
}
// 获取两段时间差 简略写法 const getLoadTime = ({ startTime, responseEnd }) => responseEnd - startTime
function getLoadTime({ startTime, responseEnd }){
  return responseEnd - startTime
}
/*------ 通用方法非业务 ------*/
 // 0.拼接 GET 时的url
 /*
const makeItStr = (data = {}) =>
Object.entries(data)
  .map(([k, v]) => `${k}=${v}`)
  .join('&')
  */
function makeItStr(data = {}){
  Object.entries(data).map((key,value)=>`${key}=${value}`).join('&')
  // Arr.map() 对数组中每个元素执行其中的函数同时组合后返回新的数组
}
 // 1.生成表单方法并上传 fetch 提交接口数据

 // 2. 把参数转成XML请求 也就是所谓的重新封装请求