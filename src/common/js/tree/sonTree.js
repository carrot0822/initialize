// 输入两棵树 看看b树是否为a树的子树
/**
 * 先遍历p1 当p1.value与p2.value相等时再调用判断子树的函数
 * 判断子树函数 一起遍历吗 先遍历比较当前的值 然后一起后移
 */
// 如何根据数据结构生成一棵树
 class Node {
     constructor(value, left = null, right =null){
         this.value = value;
         this.left = left;
         this.right = right
     }
 }