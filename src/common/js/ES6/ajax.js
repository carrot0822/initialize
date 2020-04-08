// ajax的封装 初始版本
// http2.0新增 timeout timeout超时处理函数 文件上传监测周期函数 同时可以根据 
// html5 新增formdata对象上传文件 fetch函数 cors跨域
// promise版本 promise 规范

/**
 * 
 * @param {Object} optios 
 * method
 * params
 * data
 * url
 * async
 * headers
 */
function ajax(optios) {
    // 参数解析
    let method = options.method || 'GET',
        params = options.params,
        data = options.data,
        url = options.url + (params ? '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&') : ''),
        async = options.async === false ? false : true,
        timeout = options.timeout?options.timeout:'2000ms',
        ontimeout = options.ontimeout
        error = options.error
            success = options.success, 
            headers = options.headers;

    // xhr对象
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    /**
     * readyState的五种状态详解：
     * 0 未初始化 没有调用send方法
     * 1 载入 已调用send方法
     * 2 send方法执行完成 已接收完成
     * 3 交互
     * 4 响应内容解析完成
     */
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            success && success(xhr.responseText)
        } else{
            error && error(xhr)
        }
    }
    // 设置请求类型
    xhr.open(method, url, async)
    // 设置请求头
    if (headers) {
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key])
        })
    }
    // 设置延时
    xhr.timeout = timeout
    xhr.ontimeout = ontimeout(e)
    // 发送数据
    method === 'GET' ? xhr.send() : xhr.send(data)
    
}

// ajax封装 promise版本




// 拼接字符如串
/**
 * 
 * @param {object} params 
 */

// 额外知识
// array.map ： 创建一个数组 传入一个函数 将运用过该函数后得到的值放进数组内 并返回一个新数组
// array.join：方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符
/**
 * 参数解析 method
 * get和post delete put
 * get发送数据量有限不安全 获取信息可缓存
 * post发送数据增大放body 获取信息不缓存
 */