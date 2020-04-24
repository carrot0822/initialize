/**
 * 动态规划
 * 1. 将问题分解成最优子问题 数列求An 与An-1
 * 2. 写出子问题的递推关系 求出An与An-1的相关关系
 * 3. 计算顺序 自低向上为最优 备忘录和递归 排列组合一般不用
 * 4. 空间优化
 * 类型
 * 
 * 
 * 
 * 
 * 
 */

// 背包问题



//  爬台阶问题


// 分金矿问题


// 打家劫舍 
/**
 * 偷取金额 分为n-1 和n-2 + num两种 取max
 * 1. 分解子问题 把求第n分解成 n-1项的关系
 * 2. 找到出口或者说起始点 A0和 A1 然后根据递推公式求值
 * 3. 处理边界条件和转换 这里是边界条件 陷阱就是后面的n-2 所以给的 数组长度多了2个
 * 4. 优化 这里可以不必把全部都存储起来 而是分为两个变量存储 这样空间复杂度就变了O1
 * @param {*} nums 
 * 获取最大的金额 
 */
function rob(nums){
    const len = nums.length;
    if(len ==0){
        return 0
    }
    const dp = new Array(len+1);// 比房间多两个数字
    dp[0] = 0
    dp[1] = nums[0]
    for(let i =2;i<=len; i++){ // 循环出去条件和公式还是要记得
        dp[i] = Math.max(dp[i-1],dp[i-2] + nums[i-1])
    }
    return dp[len]
}

function robY(nums){
    let curr = 0
    let prev = 0
    for(i in nums){
        let temp = Math.max(curr,prev + i) // 这里转换有丶绕不过 curr就是dp[i-1] prev = dp[i-2]
        prev = curr
        curr = temp
    }
    return curr
}

// 打家劫舍2
/**
 * 首尾不能相连 抢第一家就不能抢最后一家 把1-n的房间拆成两种情况 0与n-1的打家劫舍   1与n的打家劫舍 两者做一次比较即可 把问题分解
 * 为已知问题 同时去除掉限制条件
 * 
 */
function rob2(nums){
    let front = nums.slice(1);// 不要第一家
    let end = nums.slice(0,-1)// 不要最后一家
    let result = Math.max(rob(front),rob(end))
}

// 复制指定位置的数组

function copyArray(arr){
    function test (){
        console.log('111')
    }
}
copyArray.list = function what(){
    console.log(111)
}
// prototype.a 与直接a
copyArray.prototype.a = 'b'
let test = new copyArray()
console.log(test.list)
