/**
 * 验证二叉排序树的前序遍历 带#号代表空结点那种
 * 逐步进栈 当一个数字之和达到两个#的时候 连续出栈三次并压入一个#再继续进栈 开始重复 当最后栈长度为1的或者为#且输出true
 * 这种重复规模变小就该想到递归了 那递归怎么改迭代
 */
/**
 * 
 * @param {string} preOrder 
 */
function isValidSerialization(preorder) {
    if (preorder == "#") {
        return true
    }
    let pre = preorder.split(',');
    console.log(pre, '拆分之后')
    let stack = []
    
    for (let i = 0; i < pre.length; i++) {
        // 这里就包含了 消除
        let val = pre[i]
        stack.push(val)
        if(val=='#'){
            jc(stack)
        }
    }
    if (stack.length == 1 && stack[0] == "#") {
        return true
    }
    return false

    
}
function jc(arr) {
    if(arr.length>2){
        if(arr[arr.length-1]=='#'&&arr[arr.length-2]=='#'&&arr[arr.length-3]!=='#'){
            arr.pop();
            arr.pop();
            arr.pop();
            arr.push('#');
            jc(arr);
        }
    }
}
let str = "9,3,4,#,#,1,#,#,2,#,6,#,#"
console.log(isValidSerialization(str))
/**
 * 思路二偷鸡技巧 遍历完满二叉树或者左右子树齐全的完全二叉树 叶子结点比非叶子结点数目+1
 * 单这个也有问题。。。如果9###1直接GG不靠谱 额 不过 可以来一次判断 如果在结尾前 就大于1就直接报错
 * "#,#,3,5,#" 看起来靠谱。。。实际没卵用 #这个空结点也过不了 # 1 #也怕是过不了
 * 不到最后 叶子结点的数目不可能比非叶子结点大 这个判定很重要
 */
function model2(preOrder) {
    let pre = preOrder.split(',')
    let length = pre.length
    let count = 0;
    let node = 0;
    // 抛开特殊情况

    for (let i = 0; i < length - 1; i++) {
        // 
        if (count > node) {
            return false
        }
        if (pre[i] == '#') {
            count++;
        } else {
            node++;
        }
    }
    if (count != node) {
        return false
    } else if (pre[length - 1] == "#") {
        return true
    } else {
        return false
    }
}

/**
 * 无单支完全二叉树
 * 思路三偷鸡技巧 出度入度的问题 出度与入度 各个结点加起来为0
 * 树的出入度 树的结点 树的高度 深度 树的出度与入度是相等的
 */

 function degreeN(preorder) {
    let pre = preorder.split(',')
    let degree = 1 // 根节点入度为0 出度为2  叶子结点入读为-1出度为0 非叶子结点入度为-1 出度为2 根节点特殊
    for(let i=0;i<pre.length;i++){
        // 在最后一个判定走完前 两者是不可能为0的
        if(degree==0){
            return false
        }
        if(pre[i] == '#'){
            degree--
        }else{
            degree++
        }
        
    }
    return degree == 0
 }