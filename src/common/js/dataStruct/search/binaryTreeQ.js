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
function searchBst(key,treeNode,ANode=null){
    
    if(treeNode.key==null|| key == treeNode.key){
        
        return treeNode
    }
    else if(key<treeNode.key){
        
      searchBst(key,treeNode.left) // 没人接收= =即使是递归也要好好写return啊
      
    }
    else if(key>treeNode.key){
      searchBst(key,treeNode.right)
      
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
        searchBst2(key,treeNode.left,treeNode)
    }
    if(key>treeNode.key){
        searchBst2(key,treeNode.right,treeNode)
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
            
        } else{
        insertBst(key,Node.left)
        }
    } else if(key > Node.key) {
        if(Node.right === null){
            console.log(Node,'最后结果')
            Node.right = new treeNode(key)
        } else{
          insertBst(key,Node.right)
        }
    } 
    
}

function insertBst2(key,Node){
    if(Node===null){
        let Node = new treeNode(key) // emmm好像是返回值大小写写错了
        console.log(Node,'结果')
        return Node
        
    }
    if(key == Node.key){ // 这里是有不同的 可以先进行一次查找看是否存在 不存在就不执行 也可以一边遍历一边对比吧
        return false
    }
    if(key<Node.key){
        
        Node.left=  insertBst2(key,Node.left) // 为什么去掉等号就没了 加入等号代表克隆？
        return Node
    } else if(key > Node.key) {
        
        Node.right = insertBst2(key,Node.right)
        return Node
    } 
    
}

/**
 * 二叉树的删除 主要是删除不该破坏原二叉树的结构
 * 分为三种情况
 * 1.本身就是叶子结点 直接删除
 * 2.只有左子树和右子树 那么直接替代
 * 3.既有左子树又有右子树 左子树找到最大的结点 右子树找到最小的结点
 * 首先先找到要删除的结点
 * JS里面地址的怪异现象 更改没问题 涉及到清空 就会出问题
 * @param {number} key 
 * @param {treeNode} Node 
 */
function deleteBst(key,Node){
    console.log(Node,'每次传入的Node',Node.key,key)
    if(Node == null){
        
        return false
    }
    if(key<Node.key){
      deleteBst(key,Node.left) // 效果是遍历 其实
      
    } else if(key>Node.key){
        
       deleteBst(key,Node.right)
      
    } else {
        let root = Node
        if(Node.left==null&&Node.right==null){
            console.log("移除的Node",Node)
            Node = null // 释放
        }
        if(root.left!=null&&root.right==null){
            // 不能Node = Node.left然后传递
            console.log(Node,Node.left,'改变前')
            let next= Node.left
            Node = next
            console.log(Node,Node.left,'更改后')
        }
        if(root.right!=null&&root.left==null){
            console.log(Node,Node.left,'改变前')
            let next = Node.right
            Node = next
            console.log(Node,Node.left,'更改后')
        }
        if(root.right&&root.left){
            while(root.left){
                root = root.left
            }
            console.log(Node,Node.left,'改变前')
            Node.key = root.key
            root = null
            console.log(Node,Node.left,'更改后')
        }
    }
}


/**
 * 测试代码
 */
const root = new treeNode(4)
    left = new treeNode(1)
    right = new treeNode(6);
    
    root.left = left
    root.right = right
    
console.time('时间')

 insertBst2(8,root)
insertBst2(5,root)
insertBst2(9,root)
deleteBst(5,root)
console.log(root,'删除后')
console.timeEnd("时间")
