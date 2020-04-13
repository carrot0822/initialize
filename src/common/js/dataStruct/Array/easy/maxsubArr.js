/**
 * 求出最大子序和
 * 求出最大子序列呢。。。 记录索引号 在sum小于0的时候记录入点 ans变化的记录出点
 * @param {number[]} nums 
 * @return {number}
 * 巧妙 ans永远保留的是最大值 无论后面负数多大 都改变不了这个问题 永远是最大值
 */
function maxsubArr(nums){
    let ans = nums[0]
    let sum = 0
    for(const num of nums){
        if(sum >0){
            sum += num
        }else{
            sum = num
        }
        ans = Math.max(ans,sum)
    }
}