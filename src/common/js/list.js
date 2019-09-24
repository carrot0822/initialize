class Node {
    /*
    value:任意值
    next Node类型的数据结构
    */
    constructor (value, next) {
        this.value = value;
        this.next = next;
    }
}
/*
链表 初始化 头插法 尾插法
    插入
    删除
    遍历
    查找
    求长度
*/
class List {
    constructor() {
        this.head = new Node(null,null)
    }
    length(){
        let current = this.head;
        let i = 0;
        while(current=null){
            current = current.next;
            i++;
        }
        return i
        
    }
    find(index) {
        let current = this.head;
        let length = this.length();
        let fixIndex = index
        if(fixIndex > length){
            console.log("超出索引 自动指向最后一个节点")
            fixIndex = length
        }
        for(let i=0; i<fixIndex; i++){
            current = current.next
        }
        return current
    }

    insert(value,index) {
        const prev = this.find(index);
        const next = new Node(value,prev.next);
        prev.next = next;
    }
    // 总感觉会因为JS的快速引用出问题
    remove(index){
        let length = this.length();
        
        if(index>length){
            console.log('删除失败，输入值大于链表长度')
        } else {
            let prev = this.find(index -1);
            let current = prev.next
            prev.next = current.next
            current = null
        }
    }
}
/*
输入一个链表，从尾到头打印链表每个节点的值。
先进后出 先遍历的最后打印 可以构造辅助栈来完成
优化 利用递归来进行类似于树的后续遍历 用递归走到最底层再放行打印操作 达到最底层的遍历效果
*/
function printFromTailToHead(node){
    if(node.next){
        printFromTailToHead(node.next)
    }
    node.value && console.log(node.value)
}
/*
给定单向链表的头指针和一个结点指针，定义一个函数在 $O(1)$ 时间删除该结点
从视觉上看 应该是a节点指向的后续链表直接前移覆盖了 O(1)就不能遍历了 要使用覆盖做法
*/
function deleteNode (head,toDelete) {
    // 
    if(head === toDelete || !toDelete || !head){
        return 
    }

    let nextNode = toDelete.next;
    if(!nextNode){
        // 判定是否是尾结点
        let node = head;
        while(node.next !== toDelete){
            node = node.next
        }
        node.next = null // 取到尾结点的前一个节点 然后清空节点
        toDelete = null
    } else {
        toDelete.value = nextNode.value;
        toDelete.next = nextNode.next;
        nextNode =null // 释放辅助节点
    }
}


/*
输出倒数第K个结点
思路一：先从头到尾遍历一次 统计长度，再从头到尾遍历length-k即可
思路二：准备两个指向头部结点的指针a，b  a先移动K个位置 b开始与a一起向后移动 两个指针的位置差为k
当a移动到尾的时候 b指向倒数第K个节点
@head头节点
@k 倒数顺序
*/
function findKtnFromTail(head,k){
    if(!head||k<=0){
        return null
    }
    let a =head,
        b = head;
    for(let i =0; i < k; i++){
        a = a.next;
        if(!a){ // 提高容错率 判定K大于链表长度
            return null
        }
    }
    // 当 a移动到前K个位置时 b开始与a一起移动
    while(a){
        b = b.next;
        a = a.next;
    }
    return b;
}

/*
翻转链表：输入一个链表的头结点，反转该链表并输出反转后链表的头结点
1.链表 链表头插法 把原链表当成输入结点 用头插法创建新结点 时间复杂度是 $O(N)$，但是空间复杂度也是 $O(N)$
2.链表原地操作，时间复杂度是 $O(N)$，但是空间复杂度只有 $O(1)$。
额外创建了一个辅助空间来存储前一个结点的位置信息（改变之后的） node则是当前结点
两者每循环一次往后移动一次 改变当前node的next指向 同时辅助空间存储改变后的地址 node则继续持有新结点信息
当走到最后的时候 node为null pre恰好保存最后一个结点成为头指针
*/

function reverseList(head){
    let node = head,
    pre = null;
    while(node){
        let next = node.next // 保存下一个结点
        node.next = pre; // 指向前一个结点
        pre = node // 保存当前结点用于下次使用
        node = next; // 保存新结点
    }
    return pre // 链表仍旧是原来的链表
}

function reverseListT(head){
    let reHead = new Node(null,null);
    let node = head,pre = null;
    while(node){
        let next = node.next
        node.next = pre;
        reHead.next = node
        pre = node; // 保存上一个结点
        node = next; // 结点更新

    }
    return reHead // 返回了一个新链表 多开辟了N个空间
}