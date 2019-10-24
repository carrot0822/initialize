// 性能监控相关
/**
 * 还有地址来源 vue并不好监听可能要自己手动写hash监听
 * 加载耗时
 * 白屏耗时
 * 资源加载耗时
 * DOM构建耗时
 * 解析DOM耗时
 * 调用次数
 * DNS解析耗时
 * TCP连接耗时
 * 页面重定向耗时
 * upload耗时
 * 请求耗时
 * 页面准备耗时
 */
/**
 * 饼图
 * 浏览器分类统计
 * 系统分类统计
 * 用户地理位置分类统计
 */
/**
 * {
 *  name:'',
 *  des:"",
 *  time:""
 * }
 */
// 性能评测的数据点是那些
window.onload=function(){
    let times = {};
    let timesName = {
        blankTime:'白屏时间',
        redirectTime:'重定向时间',
        dnsTime:'DNS查询耗时',
        ttfbTime:'读取第一个字节时间',
        appcacheTime:'DNS缓存时间',
        uploadTime:'卸载页面时间',
        tcpTime:'tcp连接耗时',
        reqTime:'request请求耗时',
        analysisTime:'解析DOM树耗时',
        domReadyTime:'DOM准备时间'
    }
    let t = window.performance.timing;
    // 访问时间
  
    // 加载耗时
  
    // 白屏耗时
    times.blankTime = t.domComplete - t.domInteractive
  
    //重定向时间
    times.redirectTime = t.redirectEnd - t.redirectStart;
    
    //dns查询耗时
    times.dnsTime = t.domainLookupEnd - t.domainLookupStart;
    
    //TTFB 读取页面第一个字节的时间
    times.ttfbTime = t.responseStart - t.navigationStart;
    
    //DNS 缓存时间
    times.appcacheTime = t.domainLookupStart - t.fetchStart;
    
    //卸载页面的时间
    times.unloadTime = t.unloadEventEnd - t.unloadEventStart;
    
    //tcp连接耗时
    times.tcpTime = t.connectEnd - t.connectStart;
    
    //request请求耗时
    times.reqTime = t.responseEnd - t.responseStart;
    
    //解析dom树耗时
    times.analysisTime = t.domComplete - t.domInteractive;
    
    //domReadyTime
    times.domReadyTime = t.domContentLoadedEventEnd - t.fetchStart;
  
  
  function test(){
      for(var i in timesName){
          console.warn(timesName[i] + ':' + times[i] + 'ms')
      }
  }
  test();
  }

/*  logInfo = {};  //统计页面加载时间
 logInfo.openTime = performance.timing.navigationStart;
 logInfo.whiteScreenTime = +new Date() - logInfo.openTime;
  document.addEventListener('DOMContentLoaded',function (event) {
    window.logInfo.readyTime = +new Date() - window.logInfo.openTime;
  });
  window.onload = function () {
    logInfo.allloadTime = +new Date() - window.logInfo.openTime;
    logInfo.nowTime = new Date().getTime();
    var timname = {
      whiteScreenTime: '白屏时间',
      readyTime: '用户可操作时间',
      allloadTime: '总下载时间',
      mobile: '使用设备',
      nowTime: '时间',
    };
    (new Image()).src = '/action?' + logStr;
  }; */
  