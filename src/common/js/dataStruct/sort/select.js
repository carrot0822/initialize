/**
 * 选择排序
 * 在未排列序列中找到最大（小）的元素 存放到排序序列的起始位置 再从剩余未排继续寻找直到找到
 * n个记录可以经过n-1趟完成
 * 无论什么数据都是On2时间复杂度 涉及的数据越小越好 并且不占用额外内存空间
 */

 function selectSort(arr){
    let len = arr.length
    var minIndex,temp;
    for(var i=0; i<len; i++){
        minIndex = i;
        // 选出本次循环最小的值
        for(var j =i+1;j<len; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        // 两者交换后  削减区域 进行下一次匹配
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
 }