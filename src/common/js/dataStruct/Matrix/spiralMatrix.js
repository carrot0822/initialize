// 螺旋矩阵 给定一格mxn个元素的矩阵 按顺时针螺旋顺序 返回矩阵中的所有元素
function spiralOrder(matrix) {
    let result = []
    let m = matrix.length // 行数
    let n = matrix[0].length // 列数
    let count = parseInt((Math.min(m, n) + 1) / 2) // 出层数
    let i = 0 // 计数缓存
    // 开始循环
    while (i < count) {
        for (let j = i; j < n - i; j++) {
            result.push(matrix[i][j]) // 行不变 列在变 向左移动

        }
        for (let j = i + 1; j < m - i; j++) {
            result.push(matrix[j][n - 1 - i]) // 行在变 列不变 向下移动
            console.log(matrix[j][n - 1 - i], '下移')
        }
        for (let j = i + 1; j < n - i && m - 1 - i != i; j++) { // 向右移动  处理边界条件 当行数为1的时候
            result.push(matrix[m - 1 - i][n - 1 - j])
            console.log(matrix[m - 1 - i][n - 1 - j], '右移')
        }
        // 这里为什么比上面多减一个1问题  因为向上移动 会移动的到[0][0]的位置 
        // 左移带来的影响由i的增加抵消了 
        // 但是最上层右移的影响没有抵消 所以减少1 还有更直观的写法
        for (let j = i + 1; j < m - i - 1 && n - 1 - i != i; j++) { //向上移动 处理边界 当只有一列的时候 不需要循环 
            result.push(matrix[m - 1 - j][i])
            console.log(matrix[m - 1 - j][i], '上移')
        }

        i++ // 循环第一次结束

    }
    return result
}


function spiralOrderY(matrix) {
    let result = []
    let top =0,
        left =0,
        right = matrix[0].length-1,
        bottom = matrix.length-1;
    while(true){
        for(let i=top;i<=right;i++){
            result.push(matrix[top][i])
        }
        top++
        if(top>bottom){
            break
        }
        
        for(let i=top;i<=bottom;i++){
            result.push(matrix[i][right])
        }
        right--
        if(right<left) break;
    
        for(let i=right;i>=left;i--){
            result.push(matrix[bottom][i])
        }
        bottom--
        if(bottom<top) break;
    
        for(let i=bottom;i>=top;i--){
            result.push(matrix[i][left])
        }
        left++
        if(left>right) break;
    }
    
    return result

}
// 螺旋矩阵2 生成一个包含1到n2所有元素  且按顺时针螺旋排列
function generateMatrix(n) {
    // 分配一块nxn的二维数组
    let a = new Array()
    for (let i = 0; i < n; i++) {
        a[i] = new Array()
    }
    // 开始设定边界
    let num = 1
    let tar = n * n
    let left = 0, // 左边界
        right = n - 1,
        top = 0,
        bottom = n - 1;
    // 开始循环
    while(num <= tar){
        // 设定了四根线当边界 top在第一次左移完毕后 向下移动一格
        for(let i=left;i<=right; i++){
            a[top][i] = num++
            
        }
        top++;
        // 下移从top边线开始 向下移动完后 右边线向左减少一格
        for(let i = top; i<=bottom; i++){
            a[i][right] = num++
            
        }
        right--
        // 左移 从右边线开始 向右移动后 下边线上移减少一格
        for(let i =right; i>=left;i--){
            a[bottom][i] = num++
        }
        bottom--
        // 上移 从下边线开始 向上移动后 左边线右移
        for(let i =bottom;i>=top;i--){
            a[i][left] = num++
        }
        left++
    }
    
    return a
}

// 螺旋矩阵3


let testArr = [
    [1, 2, 3, 8],
    [4, 5, 6, 9],
    [7, 8, 9, 10],
    [1, 2, 3, 4]
]

console.log(spiralOrderY(testArr))

//console.log(generateMatrix(3))