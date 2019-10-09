
/**
 * 二分查找
 */
let list = [1,2,3,4,5,6,7,8,9,10]
/**
 * 二分查找法 健壮性判定暂时略
 * 算法思想 逐个判断
 * 时间复杂度log2N
 * ASL成功log2(n+1) -1
 * ASL失败 log2(n+1) 小于树的深度
 * @param {number} key 
 * @param {Array} list  查找表
 */
function binaryChop(key,list){
    let low = 0
    let high = list.length-1
    let count = 0
    while(low <= high){
        let mid = parseInt((low+high)/2)
        count++
        console.log(`第${count}次查找,${low} + ${high} + 此时中间${mid}`)
        if(key==list[mid]){
            return mid
        } else if(key<list[mid]){
            high = mid -1
        } else if(key>list[mid]){
            low = mid + 1
        }
    }
    return -1
}
/**
 * 递归
 */
function binaryChop2(key, list,low,high){
    if(low >= high){
        return -1
    }
    let mid = (low + high) >>> 1
    if(list[mid] == key){
        return mid
    } else if(list[mid]>key){
        return binaryChop2(key,list,low,mid)
    } else if(list[mid]<key){
        return binaryChop2(key,list,mid,high)
    }
}
console.time('二分查找')
console.log(binaryChop2(9,list,0,list.length))
console.timeEnd('二分查找')

/**
 * 优化版二分查找
 */