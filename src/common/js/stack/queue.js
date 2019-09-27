

// 两个栈实现队列 一个栈先压栈 再放入另一个栈 再出栈 顺序就与数组相同了 先进 先出

class Queue{
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }

    appendTail(value){
        this.stack1.splice(0,0, value); // 真正的压栈
    }

    deleteHead(){
        // 健壮性判定 只有当stack2空了才再次压入 这就保证了输出顺序的唯一性
        if(this.stack2.length ===0){
            let length = this.stack1.length
            for (let i = 0; i<length; i++){
                this.stack2.splice(0,0, this.stack1.shift());
            }
        }

        return this.stack2.length === 0 ? null : this.stack2.shift();
    }
}

// 测试代码

let queue = new Queue();
queue.appendTail(1);
queue.appendTail(2);
queue.appendTail(3);
queue.appendTail(4);
queue.appendTail(5);

console.log(queue.deleteHead());

queue.appendTail(6);
console.log(queue.deleteHead())




