/**
 * 树的层次遍历 队列 怎么有种广度优先遍历的思想在里面。。。
 * 先访问根节点 把左子树和右子树添加到队列中
 * 左子树访问结束后把其左子树和右子树放入队列
 * 接着访问右子树 再把右子树的左子树与右子树进入队列
 * 一直递推下去 直到为空 就是层次遍历
 */

 class TreeNode {
     constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
     }
 }

/**
 * 
 * @param {TreeNode} root 
 */
 function levelTravel(root){
     const queue = [root] // 入队
     while (queue.length){
         let first = queue.shift(); // 出队 利用队列长度变相遍历
         console.log(first.value);
         if(first.left){
             queue.push(first.left);
         }
         if(first.right){
             queue.push(first.right);
         }
     }
 }

 const root = new TreeNode(
    10,
    new TreeNode(6, new TreeNode(4), new TreeNode(8)),
    new TreeNode(14, new TreeNode(12), new TreeNode(16))
  );
  
  levelTravel(root);