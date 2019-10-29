/**
 * 插入排序
 * 构建有序序列 对未排序的序列 在已排序的序列 从后往前扫描 进行比较
 */
/**
 * 
 * @param {array} arr 
 * 1.从第一个元素开始 该元素可以认为已经被排序
 * 2.取出下一个元素 在已经排序的元素序列中从后向前扫描
 * 3.如果该元素大于新元素 则把该元素移动到下一个位置
 * 4.重复步骤3 知道找到已排序的元素小于等于新元素的位置
 * 5.将新元素插入到该位置后
 * 
 * 每一趟排序与最终序列的关系
 * 每一趟的特点
 * 每一趟的比较次数
 * 每一趟的移动次数
 */
 function insertSort(arr){
     for(var i =1; i<arr.length; i++){
         var key = arr[i]; // 保存起来 如果有哨兵这个位置的话 这个key应该就是哨兵了
         var j = i -1;
         // j代表已排序好的序列 然后与哨兵对比 找到比哨兵值小的位置
         while(j>=0 && arr[j] > key){
             arr[j+1] = arr[j]; // 这里就是直接空出了一个位置 用j占据j+1 j的位置就出来了就是往后移动覆盖了
             j--;
         }
         arr[j+1] = key
     }
     return arr
 }

 /**
  * 改进 二分查找插入 二分查找 这人写的怪怪的
  */

  function binaryInsert(arr){
    for(var i =1; i<arr.length; i++){
        var key = arr[i], left =0, right = i-1;
        // 缩小范围
        while(left <= right){
            var middle = parseInt((left + right) /2);
            if(key < arr[middle]){
                right = middle -1
            } else {
                left = middle + 1
            }
        }
        // 这里有丶问题
        for(var j=i-1; j>=left; j--){
            arr[j+1] = arr[j]
        }
        arr[left] = key
    }
  }
  