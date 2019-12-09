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
 function quickSort(arr,left=0,right = arr.length -1){
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
 
 function quickSort3(arr){
	const sort =(arr,left=0, right = arr.length -1) =>{
		if(left >= right){
			return
		}
		let i = left;
		let j = right;
		const key = arr[left] // 最后一位为基准判断 保留存储
		while(i<j){
			//  从后往前找  找到第一个比基准值大的交换
			while(i<j && key <= arr[j] ){
				j--; // 此时第一次j确认
			} 
			arr[i] = arr[j]
			while(i<j && key >= arr[i]){
				i++;
			}
			arr[j] = arr[i] 
		}
		arr[i] = key // 把保存的基准值还给中间的i
		sort(arr,left, i-1) // 然后左边分割重复上述
		sort(arr,i+1,right) // 右边数组分割重复上述
	}
	
	const newArr = arr.concat() // 拷贝一次数组 健壮性
	sort(newArr)
	return newArr
 }
 
 let testArr = [1,5,3,4,7,10,9]
 
console.time('快排耗时') // 
console.log(quickSort3(testArr));
console.timeEnd('快排耗时')
 
 