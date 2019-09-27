

// 输入两个链表 找出两者的第一个公共结点
/* 想错了两个链表有交叉结点 那么在公共结点之后的数值都会是相同的
思路一：愚蠢暴力双循环对比
思路二：栈  倒序遍历链表

*/

class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}
/**
 * 思路一： 利用栈实现 用栈存储 倒序输出 直到两者不相等的时候 就是最后一个相同节点 也就是第一个交叉结点 时间复杂度O(N)
 * @param {Node} list1 
 * @param {Node} list2 
 */
function method1(list1,list2){
    const stack1 = [], // js是真的耍赖
        stack2 = [];
    let node = list1;
    while(node){
        stack1.push(node);
        node = node.next;
    }

    node = list2;
    while(node){
        stack2.push(node);
        node = node.next;
    }

    node = null;
    while(stack2.length && stack1.length){
        let top1 = stack1.pop();
        let top2 = stack2.pop();
        if(top1 === top2){
            node = top1 // top1和top2都可以 因为两者相等
        } else {
            break
        }
    }

    return node

}
/**
 * diff双指针对比
 * @param {Node} list1 
 * @param {Node} list2 
 */
function method2(list1, list2){
    let length1 =0,
        length2 = 0;
    // 求双链表长度
    let node = list1
    while(node){
        length1++;
        node = node.next
    }

    node = list2

    while(node){
        length2++;
        node = node.next;
    }

    let diff = Math.abs(length1-length2)
    let longList = null,
        shortList = null;
    if(length1 < length2){
        shortList = list1;
        longList = list2;
    } else {
        shortList = list2;
        longList = list1;
    }
    while(diff){
        diff--;
        longList = longList.next
    }
    while(shortList && longList){
        if(longList === shortList){
            return shortList
        } else{
            shortList = shortList.next;
            longList = longList.next;
        }
    }
    return null
}

// 测试代码

const node4th = new Node(4);
const node3th = new Node(3, node4th);
const list1 = new Node(1, new Node(2, new Node(3, node3th)));
const list2 = new Node(5, new Node(6, node3th));

console.log(method1(list1, list2));