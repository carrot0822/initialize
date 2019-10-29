/**
 * 快速排序
 * 1.数组挑选基准 一般是第一个元素
 * 2.重新排列数列 大于基准元素的在左边 小于的在右边 每一趟走完后会有一个元素在最终位置
 * 3.分割的子数列再各自进行快排 直到结束
 * 最优O(nlogn)
 * 最差O(n2)
 * 平均情况 O(nlogn)
 */
/**
 * 
 * @param {array} arr 
 * @param {number} left  数组起始索引
 * @param {number} right  数组后备索引
 */
 function quickSort(arr,left,right){
    if(left < right){
        var x = arr[right],
            i = left -1,
            temp;
        for(var j = left; j<= right; j++){
            if(arr[j]<= x ){
                i++
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        quickSort(arr, left, i-1)
        quickSort(arr, i+1, right)
    } else{
        return 'xxxxx'
    }
 }
// 算法效率并不高
 function quickSort2(arr){
    if(arr.length <= 1){
        return arr
    }
    var pivotIndex = Math.floor(arr.length / 2) // 基准索引 选在了中间？ 哨兵呢？
    var pivot = arr.splice(pivotIndex, 1)[0]; // 改变了原数组 删除并返回
    var left = []
    var right = []
    // 遍历 左小右大
    for (var i =0; i<arr.length; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort2(left).concat([pivot],quickSort2(right))
 }