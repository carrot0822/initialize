/**
 * 实现一个二叉搜索树迭代器。你将使用二叉搜索树的根节点初始化迭代器。
   调用 next() 将返回二叉搜索树中的下一个最小的数。
   限制： 空间复杂度O(h)所以无法使用中序遍历 直接得到结果输出
   但是可以先一路存储最小的左子树节点压入栈中
   当调用next函数时弹出左子树的结点 同时压入他右子树及其左节点
   保证每一次弹出后 压入的值都比原本弹出的小
 */
 class Node{
     constructor(val,left=null,right=null){
         this.val = val
         this.left = left
         this.right = right
     }
 }
 class BSTIterator{
     constructor(Node){
        this.stack = this.initStack(Node)
     }

     initStack(Node){
        let arr = []
        while(Node){
            arr.push(Node)
            Node = Node.left
        }
        return arr
     }
     next(){
         let curr = this.stack.pop()
         let result = curr.val
         curr = curr.right
         while(curr){
             this.stack.push(curr)
             curr = curr.left
         }
         return result
     }
     hasNext(){
         
         return this.stack.length?true:false
     }
 }
 const root = new Node(4)
 left = new Node(1)
 right = new Node(6);
 root.left = left
 root.right = right
 var obj = new BSTIterator(root)
 var param_1 = obj.next()
 var param_2 = obj.hasNext()
 console.log(param_1,param_2)
