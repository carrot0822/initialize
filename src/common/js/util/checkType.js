// 检测数据类型
 function isFunction(obj){
     return typeof(obj) === 'function'
 }
 // 检测对象内是否含有某个属性
function checkProp(obj,key){
    // 第一种 使用.或者[]直接取到 判断是不是undifined 缺点在于 如果key属性 是undifined就无法判断
    if(obj.key === undefined){

    }else{

    }
    // 第二种 使用 in
}
// 原型链
 // 检查数组中是否包含某个值