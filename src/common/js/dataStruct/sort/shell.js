/**
 * 希尔排序 
 * 数据总量为n
 * 选择一个增量序列t1...tk tk =1
 * 根据增量序列k 把数据分k组 每组n/k个数据 进行k次比较交换 
 */

/**
 * 1.确定增量序列gap
 * 2.根据增量序列gap 将数据进行两两比较 如增量序列为5就变为 a[0]与a[5]比较 依次类推 为了方便跳出轮回 
 *  代码是从gap开始 然后开始进行插入排序 最后一个for循环是插入排序 增量序列越小 分组越小 所以第三层for循环越多
 *  直接增量序列为1带入就好理解了
 *  为1的时候就是典型的插入排序了 由于前几次分块排序 导致部分有序 这样执行时间会小于直接插入
 *  这就是j为什么是 i-gap 为什么每次j=j-gap了
 */

function shellSort(arr) {
    var len = arr.length,
        temp, // 暂存
        gap = 1; // 间隔序列
    // 这里的划分也有问题
    while(gap< len/5){
        gap = gap*5 + 1
    }
    // 每一次都减少间隔序列
    for(gap; gap > 0; gap = Math.floor(gap/5)){
        // 每一次都只插入排序一组 根据 分割序列
        for (var i=gap; i<len; i++){
            temp = arr[i];
            // 从0开始比较 当j>=0 并且a[j] 大于 arr[gap]元素的时候交换
            //  这个j-gap  只有交换之后才会运行 是为了后面的交换 那么这个循环明显可以改写
            for(var j = i -gap; j>=0 && arr[j] > temp; j = j - gap){
                arr[j+gap] = arr[j]
            }
            // 开始第二个分组
            arr[j+gap] = temp
        }
    }
}

const testArr = [10,8,22,4,5,9,12,15,18,29]