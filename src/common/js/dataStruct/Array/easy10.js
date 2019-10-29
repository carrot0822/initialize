/**
 * 删除排序数组中的重复项 并返回移除后数组的长度
 * 限制空间复杂度为O(1)
 */
/**
 * 双指针法 慢指针指向不重复的地方
 * js并没有清除剩下的元素 并未改变数组的长度 可以把r+1后的元素全清除的
 * 慢指针只有在数据不相等的时候前移 记录新数组的长度
 * 快指针则是一直前移 遇到不相等的值 再更新新数组
 * 理解成虚拟的两个数组就可以了 本质是覆盖修改数组
 * @param {array} nums
 * @return {number} 
 */
 function removeDuplicate(nums){
    var j =0; // 慢指针
    var len = nums.length
    for(var i=1; i<len; i++){
        if(nums[i]!=nums[j]){
            j++
            nums[j] = nums[i]
        }
    }
    return j+1
 }

 function removeDuplicate2(nums){
     var count = 0
     var n = nums.length
     for(let i=1; i<n;i++){
         if(nums[i]==nums[i-1]){
             count++;
         }else{
             nums[i-count] = nums[i]
         }
     }
     return n - count
 }

 /**
  * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
  */
/**
 * 与上面不一样的是 这是从0开始 上面重复是从1开始 并且内部递增的元素发生了改变
 * @param {array} nums 
 * @param {number} val 
 */
  function removeElement(nums,val){
    var j =0;
    var len = nums.length
    for(var i=0;i<len;i++){
        if(nums[i]!=val){
            a[j] = nums[i]
            j++
        }
    }
    return j
  }

/**
 * 当设定的值很少 且在最前面的时候可以跟最后一个元素进行交换
 * @param {array} nums 
 * @param {number} val 
 */
  function removeElement2(nums,val){
      var i = 0;
      var n = nums.length
      while(i<n){
          // 这个循环就很巧妙 移动了n 没动i的距离 难怪是while不是for
          if(nums[i] == val){
              nums[i] = nums[n-1];
              n--
          }else{
              i++;
          }
      }
      return n
  }

  /**
   * 数组去重 去除所有重复的元素 空间换时间 使用一个map来对照 如果有相等就删除 那么 应该可以原地操作
   */