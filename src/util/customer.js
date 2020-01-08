
/**
 * 获取浏览器类型 版本 系统类型 版本 窗口大小
 */
export function customer() {
    var user = {
        system: '',
        systemVer: '',
        client: '',
        clientVer:'',
        screenWidth: '',
        screenHeight: '',
    }
    // 获取浏览器宽高
    user.screenWidth = window.screen.width
    user.screenHeight = window.screen.height
    // 
    user = Object.assign(user,getBrowser(),getOs())
    console.log(user)
    return user
}

// 获取浏览器及其版本
function getBrowser() {
    var UserAgent = navigator.userAgent.toLowerCase();
    console.log(UserAgent);
    console.log(window.ActiveXObject);
    var browser = {};
    var browserArray = {
        IE: window.ActiveXObject || "ActiveXObject" in window, // IE
        Chrome: UserAgent.indexOf('chrome') > -1 && UserAgent.indexOf('safari') > -1, // Chrome浏览器
        Firefox: UserAgent.indexOf('firefox') > -1, // 火狐浏览器
        Opera: UserAgent.indexOf('opera') > -1, // Opera浏览器
        Safari: UserAgent.indexOf('safari') > -1 && UserAgent.indexOf('chrome') == -1, // safari浏览器
        Edge: UserAgent.indexOf('edge') > -1, // Edge浏览器
        QQBrowser: /qqbrowser/.test(UserAgent), // qq浏览器
        WeixinBrowser: /MicroMessenger/i.test(UserAgent) // 微信浏览器
    };
    console.log(browserArray)
    for (var i in browserArray) {
        if (browserArray[i]) {
            var versions = '';
            if (i == 'IE') {
                versions = UserAgent.match(/(msie\s|trident.*rv:)([\w.]+)/)[2];
            } else if (i == 'Chrome') {
                for(var mt in navigator.mimeTypes){
                    //检测是否是360浏览器(测试只有pc端的360才起作用)
                    if (navigator.mimeTypes[mt]['type'] == 'application/360softmgrplugin') {
                        i = '360';
                    }
                }
                versions = UserAgent.match(/chrome\/([\d.]+)/)[1];
            } else if (i == 'Firefox') {
                versions = UserAgent.match(/firefox\/([\d.]+)/)[1];
            } else if (i == 'Opera') {
                versions = UserAgent.match(/opera\/([\d.]+)/)[1];
            } else if (i == 'Safari') {
                versions = UserAgent.match(/version\/([\d.]+)/)[1];
            } else if (i == 'Edge') {
                versions = UserAgent.match(/edge\/([\d.]+)/)[1];
            } else if (i == 'QQBrowser') {
                versions = UserAgent.match(/qqbrowser\/([\d.]+)/)[1];
            }
           // browser = i + " " + versions;
            browser.client = i
            browser.clientVer = versions
        }
    }
    return browser;
}

// 获取屏幕高宽
function getScreen(){
    let screen = {
        width:'',
        height:''
    }
    screen.width = window.screen.width
    screen.height = window.screen.height
}

// 遍历即可得到getOS的系统
function getOs() {
    // 检测平台
    // 保存主要浏览器属性
    var system = {
        win: false,
        mac: false,
        x11: false, // Unix Linux
        // 移动设备
        iphone: false,
        ipod: false,
        ipad: false,
        ios: false,
        android: false,
        nokiaN: false,
        winMobile: false,
        // 游戏系统
        wii: false,
        ps: false
    }
    let ua = navigator.userAgent
    let p = navigator.platform
    system.win = p.indexOf('Win') === 0
    system.mac = p.indexOf('Mac') === 0
    system.x11 = (p.indexOf('X11') === 0) || (p.indexOf('Linux') === 0)

    // 检测windows操作系统
    if (system.win) {
        if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
            if (RegExp['$1'] == 'NT') {
                switch (RegExp['$2']) {
                    case '5.0':
                        system.win = '2000'
                        break
                    case '5.1':
                        system.win = 'XP'
                        break
                    case '6.0':
                        system.win = 'Vista'
                        break
                    case '6.1':
                        system.win = '7'
                        break
                    default:
                        system.win = 'NT 10'
                        break
                }
            } else if (RegExp['$1'] == '9x') {
                system.win = 'ME'
            } else {
                system.win = RegExp['$1']
            }
        }
    }
    // 移动设备、 windows mobile、iOS、android
    system.iphone = ua.indexOf('iPhone') > -1
    system.ipod = ua.indexOf('iPod') > -1
    system.ipad = ua.indexOf('iPad') > -1
    system.nokiaN = ua.indexOf('NokiaN') > -1

    if (system.win == 'CE') {
        system.winMobile = system.win
    } else if (system.win == 'Ph') {
        if (/Windows Phone OS (\d+.\d+)/.test(ua)) {
            system.win = 'Phone'
            system.winMobile = parseFloat(RegExp['$1'])
        }
    }

    if (system.mac && ua.indexOf('Mobile') > -1) {
        if (/CPU (?:Phone)?OS (\d+_\d+)/.test(ua)) {
            system.ios = parseFloat(RegExp.$1.replace('_', '.'))
        } else {
            system.ios = 2
        }
    }

    if (/Android (\d+.\d+)/.test(ua)) {
        system.android = parseFloat(RegExp.$1)
    }

    // 游戏设备
    system.wii = ua.indexOf('Wii') > -1
    system.ps = /playstation/i.test(ua)
    // 返回对应的信息
    let obj = {}
    for(var key in system){
        if(system[key]){
            obj.system = key
            obj.systemVer = 'windows' +  system[key]
        }
    }
    return obj
}