/**
 * 二叉树镜像 除开根节点外 逐步交换左右子树 递归深入人心
 */

class Node {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function mirrorBinaryTree(root) {
    // 出口条件
    if(root === null){
        return
    }

    let left = root.left;
    root.left = root.right;
    root.right = left;

    if(root.left){
        mirrorBinaryTree(root.left)
    }

    if(root.right){
        mirrorBinaryTree(root.right)
    }

}

const root = new Node(0, new Node(1, new Node(3)), new Node(2));

mirrorBinaryTree(root);

console.log(root);