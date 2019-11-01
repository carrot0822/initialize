/**
 * 用队列实现栈
 * 单队列法 每次入队后就逆转一下队列的数据 这样也能达到先入后出的效果
 */

class QueueToStack{
    constructor(){
        this.q1 = []
        this.q2 = []
        this.top = null
    }
    push(x){
        this.q1.push(x)
        this.top = x
    }
    // 这里的pop他要个返回值= =
    pop(){
        while(this.q1.length > 1){
            this.top = this.q1.shift()
            this.q2.push(this.top)
        }
        let value = this.q1.shift()
        let temp = this.q1
        this.q1 = this.q2
        this.q2 = temp
        return value
    }
    gettop(){
        return this.top
    }
    empty(){
        return this.q1.length?true:false
    }
}

//test
let Stack = new  QueueToStack
Stack.push(1)
Stack.push(2)
console.log(Stack.gettop())
console