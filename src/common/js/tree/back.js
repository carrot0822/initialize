/**
 * 二叉搜索树的后续遍历序列
 * 题目： 输入一个整数数组 判断该数组是否是二叉搜索树的搜索遍历结果
 * 二叉搜索树的特点 左子树都小于根节点 右子树都大于根节点 最后一个数字是根节点
 * 后序遍历特点 前n个值是左子树 后面的则是右子树  n是由中序遍历出
 * 同理 前序遍历特点 也是前n-1个树为根节点的左子树 后面为右子树
 * 中序特点是一个递增序列
 * 那么查找序列就是个有意思的话题了 根节点的确立
 */

 function isBst(tailOrder) {
     if(tailOrder.length ===0){
        return true;
     }

     const length = tailOrder.length
     let root = tailOrder[length -1],i,j;
     // 寻找左子树
     for(i=0; i<length-1&&tailOrder[i]<root; ++i); // 可读性极差

     // 寻找右子树
     for(j=i; j<length-1&&tailOrder[j]>root;++j);
     // 如果没有遍历完 说明不说左边部分小 右边部分大的分布 就不是二叉排序树
     if(j !== length-1){
         return false
     }
     // 查找出左子树和右子树后 继续划分为更小的树进行判断 直到出口条件达成 遍历到最后一个叶节点
     let left = isBst(tailOrder.slice(0, i));
     let right = isBst(tailOrder.slice(i, length-1));
     return left && right; // 左右子树都符合条件时返回
 }

 /**
 * 以下是测试代码
 */
console.log(isBst([5, 7, 6, 9, 11, 10, 8]));
console.log(isBst([4, 3, 2, 1]));
console.log(isBst([7, 4, 6, 5]));