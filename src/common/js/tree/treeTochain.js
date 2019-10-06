/**
 * 题目描述 输入一个二叉搜索树 将该二叉搜索树转换为一个排序的双向链表（提示使用中序遍历）
 * 不允许建造辅助结点（用于存储） 只能调整树中结点指针的指向
 */

/**
 * 思路分析
 */

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
/**
 * 将node和左右子树都转为双向链表
 * @param {TreeNode} node 待转化的结点
 * @param {TreeNode} lastNodeInList 已转换好的双向链表的尾结点
 */
function convertNode(node, lastNodeInList = null) {
    if (!node) {
        return null;
    }
    // 先处理左子树
    if (node.left) {
        lastNodeInList = convertNode(node.left, lastNodeInList)
    }

    // 底层逻辑 将当前节点与原双向链表拼接
    node.left = lastNodeInList;
    if (lastNodeInList) {
        lastNodeInList.right = node
    }

    // 处理右子树
    lastNodeInList = node;
    if (node.right) {
        lastNodeInList = convertNode(node.right, lastNodeInList)
    }

    // 返回新链表的尾节点
    return lastNodeInList
}

function convertTreeToList(root) {
    let lastNodeInList = convertNode(root);
    let headOfList = lastNodeInList;
    // 返回转化好的双向链表的头节点
    while (headOfList && headOfList.left) {
        headOfList = headOfList.left;
    }
    return headOfList;
}

// 双向链表没看懂orz