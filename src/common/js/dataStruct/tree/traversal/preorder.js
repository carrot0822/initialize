class Node{
    constructor(val,left=null,right=null){
        this.val = val
        this.left = left
        this.right = right
    }
}
/**
 * 使用栈的目的是为了达到深度 这里是深度优先遍历
 */


function stackPreorder(root){
    var result = []
    var tempStack = []
    var curroot = root
    while(curroot != null || tempStack.length!=0){
        while(curroot != null){
            result.push(root.val)
            tempStack.push(curroot)
            curroot = curroot.left
        }
        curroot = tempStack.pop()// 回溯
        curroot = curroot.right // 再进入右侧深度 如果右侧还有左子树就继续压入重复 然后

    }
}