/**
 * 输入某二叉树的前序遍历和中序遍历结果 还原二叉树
 */

 /**
  * 思路分析：先前序遍历第一个元素必定是根节点 然后终须遍历找到该节点 左边是左子树
  * 右边是右字树
  * 然后根据左右子树长度再次划分
  * 要点是知道 中序遍历序列左边的n个数左子树与前序遍历前n个数据一一对应 知道了n就可以在前序后续序列中分割出更小的左右字树了
  */

  class Node {
      constructor(value,left = null, right = null){
          this.value = value;
          this.left = left;
          this.right = right;
      }
  }

  function reConstruct(preOrder,inOrder){
      // 原来这是出口条件
    if(!preOrder.length || !inOrder.length){
        return ;
    }

    let node = new Node(preOrder[0]);// 前序遍历  第一个一定是树/子树根节点
    let i =0;
    // 在中序遍历序列中寻找出 前序遍历的根节点所在位置 那么左边就是左子树 右边是右子树
    // 关于位置 i i的大小确定了左子树元素的个数 无论是在先序遍历还是中序遍历都可以计算出范围
    for (; i<inOrder.length; i++){
        if(inOrder[i] === preOrder[0]){
            break;
        }
    }
    // 1 i+1 由于slice（a，b）截取 a 到 b 位置 但是不包括b 所以是 i+1  中序遍历 0到i就是左子树 i+1就是右字树
    // 递归原理 拆分原序列为更小的序列 减少问题规模 再设置最小规模问题的出口
    node.left = reConstruct(preOrder.slice(1, i+1), inOrder.slice(0, i));
    node.right = reConstruct(preOrder.slice(i+1), inOrder.slice(i+1));
    return node
  }


// 后序遍历和中序遍历求原树
function backConstruct(backOrder,inOrder){
    if(!backOrder.length || !inOrder.length){
        return;
    }
    let length = backOrder.length
    let node =new Node(backOrder[length -1]);
    let i =0;
    for(; i< inOrder.length; i++){
        if(inOrder[i] === backOrder[length -1]){
            break
        }
    }
    
     node.left = backConstruct(backOrder.slice(0,i), inOrder.slice(0, i));
    node.right = backConstruct(backOrder.slice(i,backOrder.length-1),inOrder.slice(i+1)); 
    return node
}

const backArr = [7 ,4,2,5,8,6,3,1];
const midArr = [4, 7, 2, 1, 5, 3, 8, 6];
const preArr = [1, 2, 4, 7, 3, 5, 6, 8];

console.log('真的执行了吗')
const XbinTree = reConstruct(preArr, midArr); // 前中遍历
console.log(XbinTree);
console.log('真的执行了吗123')
const binTree = backConstruct(backArr, midArr); // 后中遍历
console.log(binTree);