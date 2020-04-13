// 两数之和
/**
 * 暴力法
 * @param {array} nums 
 * @param {number} targer 
 */
function twoNums(nums,target){
    let result = []
    for(let i=0; i<nums.length; i++){
        for(let j =1; j<nums.length;j++){
            
            let add = nums[i] + nums[j]
            if(add == target){
                result.push(i)
                result.push(j)
                break
            }
        }
    }
    return result
}
/**
 * 哈希存储法 如果后续计算需要用到前者 那就可以缓存起来 
 * 哈希用于快速查找之前缓存后的结果 比数组快的多
 * @param {array} nums 
 * @param {number} target 
 */
function twoNums2(nums,target){
    let map = new Map()
    let result = []
    for(let i =0; i<nums.length;i++){
        let slice = target - nums[i]
        if(map.has(slice)){
            result.push[i]
            result.push[map.get(slice)]
        }else{
            map.set(nums[i],i)
        }
    }
}

/**
 * 两数之和链表
 */
function twoNumsLink(){
    
}