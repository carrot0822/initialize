/**
 * 输入一颗二叉树和整数 打印二叉树中结点值得和为输入整数的所有路径
 * 根节点一直到叶节点所经过的结点形成一条路径 这里的路径与我理解的不一样
 * 这里变动一下 存储 所有符合值的路径（图的定义 最终点可以不是叶子结点
 * 这里用到了回溯思想
 * 以及DFS深度优先遍历
 */

class Node {
    constructor(value,left=null,right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
/**
 * 
 * @param {Node} root 
 * @param {Number} target 
 */
function findPath(root,target){
    const paths = []; // 存放所有满足条件的路径
    let sum = 0;

    function _findPath(node, path){
        if(node === null){
            return;
        }

        sum = sum + node.value
        path.push(node) // 记录到路径中 如果已经是叶节点了
        const isLeaf = node.left === null && node.right === null;
        // 是叶子结点并且符合满足条件
        if(isLeaf && sum === target){
            paths.push([...path]) // 解构赋值拷贝新数组
        }

        // 当前节点有左子树
        if(node.left !== null){
            _findPath(node.left, path);
        }

        if(node.right !== null){
            _findPath(node.right, path);
        }
        // 明白这一步是回溯 但是原理？ 回收掉已经符合条件的node
        // 移除掉自身节点 在路径中达到回溯结果
        // 如果使用栈的思想 把执行的关键代码压栈后出栈执行应该就好理解一点
        sum = sum - node.value;
        path.pop(node)
        console.log(path,'移除前的路径')

    }
    _findPath(root, [])
    return paths
}


/**
 * 以下是测试代码
 */
const root = new Node(1, new Node(2), new Node(3, null, new Node(-1)));

console.log(findPath(root, 3));