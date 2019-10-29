/**
 * 冒泡排序
 * 每一趟之后会使得最大的元素逐渐出现在末端 变成末端有序 或者说
 * 最终序列的位置 每走m趟 则后m个元素就会位于最终位置
 * 成为最终序列的比较趟数 n -1趟
 * 第m趟的比较次数 x = n -m
 * 第m趟的移动次数
 * 时间复杂度 最优 正序On 最差On2 平均 O n2
 * 空间复杂度  
 * @param {array} arr 
 */

function bubbleSort(arr) {
    var len = arr.length
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

let testArr = [3, 5, 7, 10, 22, 35, 16, 88]

function bubbleSort2(arr) {
    var i = arr.length - 1 // 第一趟交换的终点
    while (i > 0) {
        var pos = 0; // 每趟开始
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
                pos = j // 保留最后一次交换的位置
            }
        }
        i = pos
    }

}

function dubbleSort(arr) {
    var low = 0;
    var high = arr.length - 1 // 从头和尾两端冒泡
    var temp, j;
    
    while (low < high) {
        for (j = low; j < high; ++j) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j]
                arr[j] = temp
            }

        }
        --high;
        for (j = high; j > low; --j) {
            if (arr[j] < arr[j-1]) {
                temp = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = temp
            }
        }
        ++low;
    }
    return arr
}
console.time('2改进冒泡排序耗时') // 这两个要一致啊
console.log(dubbleSort(testArr));
console.timeEnd('2改进冒泡排序耗时')