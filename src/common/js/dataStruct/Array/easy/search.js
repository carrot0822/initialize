// 搜索插入位置
/**
 * 在已排序的无重复数组中搜索目标值 如果目标值不存在 返回将会按顺序插入的位置 目标值存在返回索引 
 * 二分法
 * @param {array} nums 
 * @param {number} target 
 */
function searchInsert(nums,target){
    let left = 0, right = nums.length -1;
    while(left<= right){
        let mid = Math.floor((right + left) / 2) ; // 向上还是向下取整了
        if(nums[mid] == target){
            return mid
        } else if(nums[mid] <target){
            left = mid + 1
        } else{
            right = mid -1 
        }
    }
    return left
}

// 二分查找 在于left和right的边界处理 以及跳出循环
function moduleTwo(){
    let left = 0, right = nums.length -1;
    while(left<= right){
        let mid = (right + left) / 2;
        if(nums[mid] == target){
            // 相关逻辑
        } else if(nums[mid] <target){
            left = mid + 1
        } else{
            right = mid -1 
        }
    }
}