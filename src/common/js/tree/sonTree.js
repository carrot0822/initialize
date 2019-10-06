// 输入两棵树 看看b树是否为a树的子树
/**
 * 先遍历p1 当p1.value与p2.value相等时再调用判断子树的函数 寻找到父子树第一个根节点相同的子树
 * 判断子树函数 一起遍历吗 先遍历比较当前的值 然后一起后移 父节点选取下来的子树 一起遍历并往后迁移 一旦其中有值不同或者父子树先迁移完就说明
 * 不是子树
 */
// 如何根据数据结构生成一棵树
 class Node {
     constructor(value, left = null, right =null){
         this.value = value;
         this.left = left;
         this.right = right
     }
 }

 function hasSubTree(p1, p2){
     let result = false;
     // 第一个节点 如果这时开始相同 说明为根节点
     // 先进行非空判断
     if(p1 && p2){
         if(p1.value == p2.value){
             result = doesTree1HaveTree2(p1, p2);
         }
     }
     // 否则 左子树开始找
     if(!result){
         result = hasSubTree(p1.left, p2)
     }

     if(!result){
         result = hasSubTree(p1.right,p2)
     }
     return result
 }

 function doesTree1HaveTree2(p1, p2){
     // 如果P2在P1之前遍历结束  说明为子节点
     if(!p2){
         return true
     }
     if(!p1|| p1.value !== p2.value){
        return false
     }
     return(doesTree1HaveTree2(p1.left,p2.left)&&doesTree1HaveTree2(p1.right,p2.right))
 }

 /**
 * 以下是测试代码
 */

const tree1 = new Node(0, new Node(1, new Node(3)), new Node(2));

const tree2 = new Node(1, new Node(3));

console.log(hasSubTree(tree1, tree2));