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
链表 初始化
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