

// 输入两个整数序列 第一个序列表示栈的压入顺序，判断第二个序列是否为该栈弹出顺序

/**
 * 思路分析
 * 
 * 遍历压栈顺序，先将第一个放入栈中，这里是1，然后判断栈顶元素是不是出栈顺序的第一个元素，这里是4，很显然1≠4，所以我们继续压栈，直到相等以后开始出栈，出栈一个元素，则将出栈顺序向后移动一位，直到不相等，这样循环等压栈顺序遍历完成，如果辅助栈还不为空，说明弹出序列不是该栈的弹出顺序。

首先1入辅助栈，此时栈顶1≠4，继续入栈2

此时栈顶2≠4，继续入栈3

此时栈顶3≠4，继续入栈4

此时栈顶4＝4，出栈4，弹出序列的位置向后移一位，此时为5，,辅助栈里面是1,2,3

此时栈顶3≠5，继续入栈5

此时栈顶5=5，出栈5,弹出序列向后一位，此时为3，,辅助栈里面是1,2,3

….

依次执行，最后辅助栈为空。如果不为空说明弹出序列不是该栈的弹出顺序
 */
/**
 * 获取栈顶元素
 * @param {stack} stack 
 */
 function getStackTop(stack){
     if(!Array.isArray(stack)){
         return null
     }
     if(!stack.length){
         return null
     }
     return stack[stack.length-1];
 }
/**
 * 
 * @param {Array} pushOrder 
 * @param {Array} popOrder 
 * @return {Boolean}
 */
 function check(pushOrder,popOrder){
     // 健壮性判断
    if(!pushOrder.length || !popOrder.length || pushOrder.length !== popOrder.length){
        return false
    }
    const stack = []; // 辅助栈 用于装载出入栈的序列 j=0相当于栈顶
    let j = 0; // 弹出序列索引
    for (let i =0; i<pushOrder.length; i++){
        stack.push(pushOrder[i]) // 先入栈
        while(stack.length && getStackTop(stack) === popOrder[j]){
            stack.pop(); // 相等就出栈 位置后移
            j++; // 索引后移 进行下一次比较
        }
    }
    console.log(stack,'不会数组出错了吧')
    // 如果最后输出的辅助栈为空 则是完整的出栈 不为空说明有个地方错了
    if(stack.length){
        return false
    } else {
        return true
    }
 }
    
 // 测试代码

 /**
 * 以下是测试代码
 */

console.log(check([1, 2, 3, 4], [4, 3, 2, 1]));

console.log(check([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));

console.log(check([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));