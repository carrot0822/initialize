/**
 * 归并排序
 * 1.长度为n的输入序列分为两个长度为n/2的子序列
 * 2.对着连个子序列分别采用归并排序
 * 3.将两个排序好的子序列合成为一个最终的排序序列
 * 分洽递归的写法？
 * 不是很懂
 */

 function mergeSort(arr) {
     var len = arr.length;
     if(len < 2){
         return arr
     }
     var middle = Math.floor(len/2),
         left = arr.slice(0, middle)
         right = arr.slice(middle)
    return merge(mergeSort(left),mergeSort(right))
 }

 function merge(left, right){
     var result = [];
     while(left.length && right.length){
         if(left[0] <= right[0]){
             result.push(left.shift())
         } else {
             result.push(right.shift())
         }
     }
     while(left.length){
         result.push(left.shift())
     }
     while(right.length){
         result.push(right.shift())
     }

     return result
 }