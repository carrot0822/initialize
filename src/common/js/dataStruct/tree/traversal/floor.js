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
     
     if(!root){
         return []
     }
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


  /**
   * 树的层次遍历 从上往下遍历， 并按节点划分出二维数组存储
   * [3,[21,22],[24,25,26]]这样
   */


   /**
 * 思路分析
 * 第一个循环 按出队入队的方式去遍历树 广度优先遍历正常操作
 * 第二个循环 输出这一层的所有树节点 并压入当这层的数组 同时将下一层子节点
 * 压入队列中 形成新的循环
 * 广度优先没问题 关键在于第二个循环卡了一个判定  输出当前层数的节点并存储
 * 就变成了每一次跳出循环刚好存储这一个数组 如果是一颗树 一样可以这样输出
 * @param {TreeNode} root 
 */
 function levelTravel2(root){
     
    if(!root){
        return []
    }
    const queue = [root] // 入队
    const result = [] // 输出结果

    while (queue.length){
        const level = queue.length // 当前树层节点个数才对
        
        const currLevel = [] // 当前节点的数组
        console.log(first.value);
        for(let i=0; i<level; i++){
            let first = queue.shift(); // 出队 利用队列长度变相遍历
            if(first.left){
                queue.push(first.left);
            }
            if(first.right){
                queue.push(first.right);
            }
            currLevel.push(first) // 压入当前层数数组
        }
        result.push(currLevel) // 压入最终数组
        
    }
    return result
}
/**
 * 增加一个参数来标记层次 递归 难顶
 * @param {treeNode} root 
 * @param {number} floor 
 * @param {Array} arr 
 * 1.增加层级标记 每次进入一下层节点的时候就 增加一层
 * 2.传入公共数组 当递归结束的时候 将得到一个长度为n的二维数组 n就是树的层级
 * 3.在每次递归弹出步骤做判断 如果没有层级 就创建新数组 如果有层级就添加
 * 由于这里是从左到右遍历 所以最后结果就是上到下
 * 深度优先遍历 先走到一个左子树的根节点 执行后 开始回溯到右节点 再回溯回去
 * 树的递归 都是左右节点分别进行
 * 需要搞清楚弹出步骤的目的和结果
 */
function levelTravel3(root, floor=0, arr=[]){
    if(!root){
        return arr
    }

    levelTravel3(root.left,floor+1,arr)
    if(arr[floor]){
        arr[floor].push(root.value)
    } else {
        arr[floor] = [root.value];
    }

    levelTravel3(root.right,floor+1,arr)
    return arr
}

