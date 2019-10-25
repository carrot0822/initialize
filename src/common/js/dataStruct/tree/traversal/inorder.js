/**
 * 中序遍历 与我熟悉的那套写法好像不是很类似
 */
class Node{
    constructor(val,left=null,right=null){
        this.val = val
        this.left = left
        this.right = right
    }
}
/**
 * 
 * @param {Node} root 
 * return {number[]}
 * 时间复杂度： O(n) 递归函数 T(n) = 2 * T(n/2)+1
 * 空间复杂度: 最坏O(n) 平均情况 O(logn)
 */
 function inorder(root){
    var result = []
    function pushRoot(root){
        if(root != null){
            if(root.left != null){
                pushRoot(root.left)
            }
            result.push(root.val)
            if(root.right != null){
                pushRoot(root.right)
            }
        }
    }
    pushRoot(root)
    return result
 }

 function anthInorder(root){
     var result = []
     function pushRoot(root){
         if(root == null){
             return
         }
         pushRoot(root.left)
         result.push(root.val)
         pushRoot(root.right)
     }
     pushRoot(root)
     return result
     
 }
/**
 * 开始分析巧妙点 栈的本质是先进后出 递归的本质是无限嵌套 最后进入的反而最先执行 这一点跟栈倒是类似 先进入的最后处理
 * 
 * @param {Node} root 
 */
 function stackInorder(root){
    var result = []
    var tempStack = []
    var currNode = root
    while(currNode != null || tempStack.length!=0){
        while(currNode != null){
            tempStack.push(currNode)
            currNode = currNode.left
        }
        currNode = tempStack.pop() // 拿到顶层元素 最底层的左子树结点
        result.push(currNode.val) // 回溯到根节点
        currNode = currNode.right // 送右子树去遍历 然后重复上述
    }
 }

 /**
  * 线索二叉树？
  */