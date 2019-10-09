class Node{
    constructor(val,next){
        this.val = val
        this.next = next
    }
}
/**
 * 递归翻转链表
 * @param {Node} head 
 */
function reveseList(head){
    if(head == null || head.next == null){
        return head
    }
    
    var newList = reveseList(head.next)

    console.log(head,'难顶')
    return newList
}

const node1 = new Node("a"),
  node2 = new Node("b"),
  node3 = new Node("c"),
  node4 = new Node("d");

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(reveseList(node1),'敲'); 