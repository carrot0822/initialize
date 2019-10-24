import { getPriority } from "os";


/**
 * 统计用户信息
 * 浏览器类型 浏览器版本号
 * 用户操作系统 操作系统版本
 * 来访IP 来访城市
 * 访问时间 运营商
 * {
 *  name:value
 *  des:''
 * }
 */
export const user = {
     getIp,
     getClient,
     mobileType,
}


function mobileType() {
    // 用于匹配移动端浏览器版本信息
    var type = { // 移动终端浏览器版本信息
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        iPad: u.indexOf('iPad') > -1, //是否iPad
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/), //是否为移动终端
        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
    };
    var lists = Object.keys(type);
    console.log(lists)
    for(var i =0; i<lists.length; i++){
        console.log()
        if(type[lists[i]]){
            return lists[i]
        }
    }
}
// 获取用户浏览器信息
function getClient(){
    var userAgent = navigator.userAgent
    var app = navigator.appVersion;
    var appName = navigator.appName;
    var platForm = navigator.platform;
    var appCodeName = navigator.appCodeName
    let client = {
        userAgent,
        app,
        appName,
        platForm,
        appCodeName,
    }
    return client
}
// 似乎是模拟请求获取请求端IP
function findIP(callback) {
    // 判定是属于什么浏览器
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    // 
    var pc = new myPeerConnection({
            iceServers: []
        }),
        noop = function () {},
        localIPs = {},
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;

    function ipIterate(ip) {
        if (!localIPs[ip]) callback(ip);
        localIPs[ip] = true;
    }
    // 创建一个可以发送任意数据的数据通道
    pc.createDataChannel("");
    // 初始化连接 僧从描述信息的blob对象 帮助连接到本地机器
    pc.createOffer().then(function (sdp) {
        sdp.sdp.split('\n').forEach(function (line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(ipIterate);
        });
        pc.setLocalDescription(sdp, noop, noop);
    });
    pc.onicecandidate = function (ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(ipIterate);
    };
}
// 获取IP
function getIp(){
    findIP(function (ip) {
        console.log('got ip: ', ip);
        return ip
    });
}

