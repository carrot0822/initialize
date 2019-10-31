/**
 * 最小栈
设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。
 */

 class Minstack{
    constructor(){
         this.stack = []
         this.minstack = []
    }
    push(item){
        this.stack.push(item)
        const length = mibnstack.length
        if(minstack.length){
            if(item<this.minstack[length-1]){
                this.minstack.push(item)
            } else {
                // 维持同等高度 避免最小栈被推出去了 这里还没退出去 使得这里的永远是最小的元素
                this.minstack.push(this.minstack[length-1]) 
            }
        } else{
            this.minstack.push(item)
        }
    }
    pop(){
        if(this.stack.length){
            stack.pop()
        }else {
            return false
        }
        if(this.minstack.length){
            this.minstack.pop()
        }
    }
    top(){
        return this.stack[length-1]
    }
    getMin(){
        return this.minstack[length-1]
    }
 }