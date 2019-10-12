// 平衡二叉树
/**
 * 性能分析点
 * 时间复杂度
 * 空间复杂度
 * 树的深度
 * 树的结点
 * 数据结构定义没必要那么死..
 */
class Node {
    constructor(value,blance,deepth=null,left=null,right=null,parent){
        this.value = value
        this.blance = blance // 平衡因子
        this.deepth = deepth // 深度
        this.parent = parent // 父节点
        this.left = left
        this.right = right
    }
    
}
/**
 * 算法 二叉树插入的失衡调整- -那删除也是要失衡调整吧 维持平衡二叉树
 */
// LL型旋转 失衡节点的左子树的左子树插入了节点
//  先找到失衡节点 根据 deepth来找 deepth的计算 遍历深度
// 判定失衡节点属于四种类型的哪一种 然后选用对应的函数 如何判定 
 /**
  * 对LL型的失衡二叉树进行平衡操作 
  * @param {Node} TreeNode 
  */
function LLrotate(treeNode){
    var parent = null,son;
    parent = treeNode.parent
    // 获取失衡节点的左孩子 替代他在树中原有位置
    son = treeNode.left;
    // 获取失衡节点的右孩子并挂载失衡节点左子树上
    if(son.right!=null){
        son.right.parent = treeNode;
        
    }
    treeNode.left = son.right; 
    // 将失衡节点挂载为新结点的右节点
    son.right = treeNode
    treeNode.parent = son
    // 将新节点代替原先的父节点
    son.parent = parent
    if(parent!=null){
        if(parent.left == treeNode){
            parent.left = son
        } else {
            parent.right = son
        }
    }
    // update_depth 更新深度就有意思了 可以去leetcode上看看代码
    return son; // 返回这个节点就比较有意思了 返回值
}

// RR型旋转 失衡
/**
 * // 获取完失衡节点的父节点信息 子节点信息后 就可以开始嫁接了 右旋 逆时针 表示右边的子树层次上升
 * @param {Node} treeNode 
 */
function RRrotate(treeNode){
    var parent=null,son;
    // 保留父节点
    parent = treeNode.parent
    // 取得要变为根节点的右子树
    son = treeNode.right

    if(son.left!=null){
        son.left.parent = treeNode
    }
    treeNode.right = son.left

    son.left = treeNode
    treeNode.parent = son

    if(parent!=null){
        if(parent.left == treeNode){
            parent.left = son
        } else {
            parent.right = son
        }
    }
    // update_depth 更新深度就有意思了 可以去leetcode上看看代码
    return son; // 返回这个节点就比较有意思了 返回值

}

// LR型旋转 失衡