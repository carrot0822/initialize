// 数组去重方法
// 性能测试函数
async function getFnRunTime(fn){
    let startTime = Date.now();
    let endTime = 0;
    let result = await fn();
    endTime = Date.now()
    console.log(`所有耗费时间：${endTime - startTime}ms`,'测试数组长度',result.length)
}

// 双重for循环去重 双重跳过 秘制跳跃 理解不了
function distinct1(arr = testArr){
    let result = [];
    let len = arr && arr.length;
    for(let i=0; i<len; i++){
        for(let j = i+1;j<len; j++){
            if(arr[i] === arr[j]){

                j = ++i; // 又重新进行归零循环了 跳过是这步进行的

            }
        }
 
        result.push(arr[i])
    }
    return result
}
// array.indexOf(v,i) v查找目标值，i 起始位置 这里原理是一样的 偏移 不存在返回-1
function distinct2(arr = testArr){
    let result = [];
    arr.forEach((v,i,array)=>{
        array.indexOf(v,i+1) === -1 && result.push(v)
    })
}



// 对象法 对象键名的唯一性
function distinct3(arr = testArr) {
    let result = [], resultObj = {}, len = arr.length;
    for(let i=0; i< len; i++) {
        let val = arr[i],
           type = typeof val;
        if(!resultObj[val]) {
            result.push(val);
            resultObj[val] = [type];
            console.log(val,'这里的情况')
        } else if(!resultObj[val].indexOf(type) < 0) {
            console.log(val,'这里的情况')
            result.push(val);
            resultObj[val] = [type];
        }
    }
    return result
}

let testArr = [1,1,1,2,2,1]

console.log(distinct3(testArr))
// filter
//arr.filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
function distinct4 (arr = testArr){
    return arr.filter((v,i,array) => array.indexOf(v,i+1) < 0)
}

// 利用索引的唯一性
function distinct5 (arr = testArr){
    return arr.filter((v,i,array)=> array.indexOf(v) === i)
}
// es6的 set
function distinct6 (arr = testArr){
    return [...new Set(arr)] // 转set后...转数组
}

// 上面都是用语法偷懒 应该有更好的去重技巧