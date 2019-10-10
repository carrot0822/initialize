/**
 *二叉树的构建 遍历 插入 删除 平衡二叉树 判空 初始化
 */
class treeNode{
    constructor(key,left=null,right=null){
        this.key = key
        this.left = left
        this.right = right
    }
}
/**
 * 排序二叉树的遍历
 * @param {number} key 
 * @param {treeNode} treeNode 
 */
function searchBst(key,treeNode){
    
    if(treeNode.key==null|| key == treeNode.key){
        
        return treeNode
    }
    else if(key<treeNode.key){
      return  searchBst(key,treeNode.left) // 没人接收= =即使是递归也要好好写return啊
    }
    else if(key>treeNode.key){
      return  searchBst(key,treeNode.right)
    }
}
/**
 * 能找到上一个根节点就会很方便插入 但是也可以不必要
 * @param {number} key // value 关键词
 * @param {treeNode} treeNode // 当前树节点
 * @param {treeNode} root // 上一个根节点  
 */
function searchBst2(key,treeNode,root=null){
    if(!treeNode){
        return root
    }
    if(key == treeNode){
        return treeNode
    }
    if(key<treeNode.key){
      return  searchBst2(key,treeNode.left,treeNode)
    }
    if(key>treeNode.key){
       return searchBst2(key,treeNode.right,treeNode)
    }
}
/**
 * 二叉树的插入
 * @param {Number} key 
 * @param {treeNode} treeNode 
 */
function insertBst(key,Node){
    if(key == Node.key){ // 这里是有不同的 可以先进行一次查找看是否存在 不存在就不执行 也可以一边遍历一边对比吧
        return false
    }
    if(key<Node.key){
        if(Node.left === null){
            Node.left = new treeNode(key)
            return Node
        } else{
            Node.left = insertBst(key,Node.left)
        }
    } else if(key > Node.key) {
        if(Node.right === null){
            console.log(Node,'最后结果')
            Node.right = new treeNode(key)
            return  Node
            
        } else{
            Node.right=insertBst(key,Node.right)
        }
    } 
    
}

function insertBst2(key,Node){
    if(Node===null){
        let node = new treeNode(key) // emmm好像是返回值大小写写错了
        return node
    }
    if(key == Node.key){ // 这里是有不同的 可以先进行一次查找看是否存在 不存在就不执行 也可以一边遍历一边对比吧
        return false
    }
    if(key<Node.key){
        
        Node.left = insertBst(key,Node.left)
        
    } else if(key > Node.key) {
        
         Node.right=insertBst(key,Node.right)
        
    } 
    
}

/**
 * 二叉树的删除 主要是删除不该破坏原二叉树的结构
 * 分为三种情况
 * @param {*} key 
 * @param {*} treeNode 
 */
function deleteBst(key,treeNode){

}


/**
 * 测试代码
 */
const root = new treeNode(3)
    left = new treeNode(1)
    right = new treeNode(4);
    root.left = left
    root.right = right
console.time('时间')
console.log(root)
insertBst2(6,root)
console.log(root)
console.timeEnd("时间")
