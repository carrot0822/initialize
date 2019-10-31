/**
 * 二叉树的锯齿遍历 本质是层次遍历 在偶数的时候逆转数组
 */

class Node{
    constructor(val,left=null,right=null){
        this.val = val
        this.left = left
        this.right = right
    }
}
/**
 * 层次遍历 锯齿遍历只需要根据层数的奇偶性来决定是否逆转
 * @param {Node} root 
 */
 function levelOrder2(root){
    if(!root){
        return false;
    }
    let queue = [root]
    let result = []
    let count = 1 // 高度
    while(queue.length){
        let level = queue.length
        let currArr = [] // 当前层级的数组
        for(let i=0; i<level;i++){
            let first = queue.shift()
            if(first.left){
                queue.push(first.left)
            }
            if(first.right){
                queue.push(first.right)
            }
            currArr.push(first)
        }
        if(count%2 ==0 ){
            currArr.reverse() // 这里也可以用栈来代替 逆转也可以两两交换
        }
        count++
        result.push(currArr)
    }
    return result
 }

/**
 * 层次遍历
 * @param {Node} root 
 */
 function levelOrder(root){
    if(!root){
        return false;
    }
    let queue = [root]
    let result = []
    let count = 1 // 高度
    while(queue.length){
        let level = queue.length
        let currArr = [] // 当前层级的数组
        for(let i=0; i<level;i++){
            let first = queue.shift()
            if(first.left){
                queue.push(first.left)
            }
            if(first.right){
                queue.push(first.right)
            }
            currArr.push(first)
        }
        result.push(currArr)
        
    }
    return result
 }