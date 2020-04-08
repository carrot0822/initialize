// 原理 使用src告诉服务器 生成一个js 里面要有 cb函数 函数里要传入生成的数据 服务器生成后返回给客户端 客户端调用这个函数拿数据即可
// 隐患 xss攻击
function jsonp(url, params, cb) {
    return new Promise((resolve, reject) => {
        // 声明全局变量
        window[cb] = function (data) {
            resolve(data)
            document.body.removeChild(script)

        }
        // 合并对象 这个写法比 object.assgin要快捷
        params = {
            ...params,
            cb
        }
        let arrs = []
        for (let key in params) {
            arrs.push(`${key}=${params[key]}`)
        }
        let script = document.createElement('script')
        script.src = `${url}?${arrs.join('&')}`
        document.body.appendChild(script)
    })
}
/* 对promise的理解还是不深
jsonp(url,params,cb).then(res=>{
    console.log(res)
})
*/ 
// cb函数的设计
/* 客户端
<script type="text/javascript"> 
    // 得到航班信息查询结果后的回调函数 
    var flightHandler = function(data){
        alert('你查询的航班结果是：票价 ' + data.price + ' 元，' + '余票 ' + data.tickets + ' 张。');
    }; 
    // 提供jsonp服务的url地址（不管是什么类型的地址，最终生成的返回值都是一段javascript代码） 
    var url = "跨域服务器/flightResult.php?code=CA1998&callback=flightHandler";
    // 创建script标签，设置其属性 
    var script = document.createElement('script'); 
    script.setAttribute('src', url); 
    // 把script标签加入head，此时调用开始 
    document.getElementsByTagName('head')[0].appendChild(script); 
</script>
// 服务器端
flightHandler({
    "code":"CA1998",
    "price": 1780,
    "tickets": 5
});

*/