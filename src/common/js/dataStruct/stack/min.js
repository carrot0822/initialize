// 定义栈的数据结构 在该类型中实现一个能够得到栈的最小元素的min函数
// 在该栈中 调用min push pop的时间复杂度都是 O（1）
/*
思路：空间换时间 创建一个辅助栈  先把元素直接压入原栈 
第一次 先把数据压入辅助栈 第二次 与辅助栈内元素对比 如果小于其中就压入辅助栈 大于就复制辅助栈栈顶元素压入
保持与原栈一一对应 长度统一 这样就可以保证顶部永远是最小的值

*/

class MinStack{
    constructor(){
        this.stack = [];
        this.supStack = [];
    }

    push(item){
        const minLength = this.supStack.length // 求栈的长度 跟栈的遍历有关
        this.stack.push(item)

        if(minLength ===0){
            this.supStack.push(item)
        } else {
            if(item < this.supStack[minLength-1]){ // 查询元素值
                this.supStack.push(item)
            } else {
                this.supStack.push(this.supStack[minLength-1])
            }
        }
    }

    pop(){
        if(this.stack.length === 0){
            return null
        } else {
            this.stack.pop();
            return this.supStack.pop();
        }
    }

    min() {
        const minLength = this.supStack.length
        if(minLength ===0){
            return null;
        }

        return this.supStack[minLength-1];
    }
}

/**
 * 以下是测试代码
 */

const minStack = new MinStack();

minStack.push(3);
minStack.push(4);
minStack.push(2);
minStack.push(1);
console.log(minStack.supStack, minStack.min()); // output: [ 3, 3, 2, 1 ] 1

minStack.pop();
minStack.pop();
minStack.push(0);
console.log(minStack.supStack, minStack.min()); // output: [ 3, 3, 0 ] 0