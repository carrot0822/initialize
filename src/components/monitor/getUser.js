export function getUser() {
    let params = {}
    // document 文档说明
    if (document) {
        params.domain = document.domain || ''; // 获取域名
        params.url = document.URL || ''; // 当前 url地址
        params.title = document.title || ''; // 当前页面标题
        params.referrer = document.referrer || ''; // 上一个访问页面URL地址 
    }

    // window
    if (window && window.screen) {
        params.sh = window.screen.height || 0; // 屏幕高度
        params.sw = window.screen.width || 0; // 屏幕宽度
        params.cd = window.screen.colorDepth || 0; // 屏幕颜色深度
    }

    // navigator
    if (navigator) {
        params.lang = navigator.language || ''; // 语言
    }

    // 拼接参数
    let args = ''
    for (let i in params) {
        if (args !== '') {
            args += '&';
        }
        args += `${i}=${params[i]}`
    }
    console.log(params,'参数获取')
    console.log(args,'拼装过后')
    // 通过伪装为 Image对象 传递给后端 只能作为get请求 注意参数过长会被截断
    // encodeURIComponent() 对字符串作为URI组件编码 返回一个复本 某些字符被16进制转义序列替换
    let img = new Image(1, 1);
    let src = `http://www.funlee.cn/api/test.jpg?args=${encodeURIComponent(args)}`;
    img.src = src;
}
/**
 * 获取web各项性能参数 通过Performance
 */
function getWeb(){
    let timing = performance.timing,
    start = timing.navigationStart,
    dnsTime = 0,
    tcpTime = 0,
    firstPaintTime = 0,
    domRenderTime = 0,
    loadTime = 0;

    dnsTime = timing.domainLookupEnd - timing.domainLookupStart; // dsn解析时间
    tcpTime = timing.connectEnd - timing.connectStart; // ntcp建立时间
    firstPaintTime = timing.responseStart - start; // n首屏时间
    domRenderTime = timing.domContentLoadedEventEnd - start; // ndom渲染完成时间
    loadTime = timing.loadEventEnd - start; // n页面onload时间
    console.log('DNS解析时间:', dnsTime, 
            '\nTCP建立时间:', tcpTime, 
            '\n首屏时间:', firstPaintTime,
            '\ndom渲染完成时间:', domRenderTime, 
            '\n页面onload时间:', loadTime);
}


// 这些代码可以不写在项目中
// 可通过script动态加载的方式插入
/**
 * (function() {
    let hm = document.createElement("script");
    hm.type = "text/javascript";
    hm.async = true;
    hm.src = "http://www.funlee.cn/testAnalyze.js";
    let s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
})();
 */
// css埋点能处理简单的事情 但是无法被禁用