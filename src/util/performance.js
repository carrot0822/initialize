// 页面性能获取js
// 统计页面性能
export function getPerforpage() {
    let result = {}
    if (!window.performance) return
    let timing = window.performance.timing
    result = {
        // DNS解析时间
        dnst: timing.domainLookupEnd - timing.domainLookupStart || 0,
        //TCP建立时间
        tcpt: timing.connectEnd - timing.connectStart || 0,
        // 白屏时间  
        wit: timing.responseStart - timing.navigationStart || 0,
        //dom渲染完成时间
        domt: timing.domContentLoadedEventEnd - timing.navigationStart || 0,
        //页面onload时间
        lodt: timing.loadEventEnd - timing.navigationStart || 0,
        // 页面准备时间 
        radt: timing.fetchStart - timing.navigationStart || 0,
        // 页面重定向时间
        rdit: timing.redirectEnd - timing.redirectStart || 0,
        // unload时间
        uodt: timing.unloadEventEnd - timing.unloadEventStart || 0,
        //request请求耗时
        reqt: timing.responseEnd - timing.requestStart || 0,
        //页面解析dom耗时
        andt: timing.domComplete - timing.domInteractive || 0,
    }
    return result
}
// 统计资源
export function getPerforResource() {
    if (!window.performance || !window.performance.getEntries) return false;
    let resource = performance.getEntriesByType('resource')

    let resourceList = [];
    if (!resource && !resource.length) return resourceList;

    resource.forEach((item) => {
        let json = {
            name: item.name,
            method: 'GET',
            type: item.initiatorType,
            duration: item.duration.toFixed(2) || 0,
            decodedBodySize: item.decodedBodySize || 0,
            nextHopProtocol: item.nextHopProtocol,
        }
        const name = item.name ? item.name.split('?')[0] : '';
        /* const ajaxMsg = conf.ajaxMsg[name] || '';
        if (ajaxMsg) {
            json.method = ajaxMsg.method || 'GET'
            json.type = ajaxMsg.type || json.type
            json.options = ajaxMsg.options || ''
            json.decodedBodySize = json.decodedBodySize || ajaxMsg.decodedBodySize;
        } */
        resourceList.push(json)
    })
    //conf.resourceList = resourceList
    return resourceList
}






