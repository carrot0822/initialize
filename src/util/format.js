const test = 1570377600000
const Data = new Date(test)
function format(obj,fmt){
    var o = {
        "M+" : obj.getMonth()+1,                 //月份
        "d+" : obj.getDate(),                    //日
        "h+" : obj.getHours(),                   //小时
        "m+" : obj.getMinutes(),                 //分
        "s+" : obj.getSeconds(),                 //秒
        "q+" : Math.floor((obj.getMonth()+3)/3), //季度
        "S"  : obj.getMilliseconds()             //毫秒
      };
    
      if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (obj.getFullYear()+"").substr(4 - RegExp.$1.length));
      }
            
      for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
          fmt = fmt.replace(
            RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
        }       
      }
    
      return fmt;
}

console.log(format(Data,'yyyy-MM-dd'))