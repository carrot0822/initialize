/**
 * 用栈实现队列 两个栈就行了 栈S1管理入队 栈S2管理出队
 * 出出队的时候 如果栈S2为空就把栈S1的数据压入S2 然后S2出栈
 * 不为空就先把S2出为空栈即可
 */

 class MyQueue{
     constructor(){
         this.Stack1 = []
         this.Stack2 = [] 
         this.top = null
         
     }
     
     push(x){
         //这里的边界判定很关键 主要JS没有栈顶和栈底指针给我调
         if(!this.Stack1.length){
            this.top = x
         } 
         this.Stack1.push(x)
     }
     pop(){
        var value 
         if(this.Stack2.length){
            value = this.Stack2.pop()
            return value
         }else{
             // 
             while(this.Stack1.length){
                this.Stack2.push(this.Stack1.pop())
             }
             value = this.Stack2.pop()
             return value
         }
     }
     peek(){
         if(this.Stack2.length){
             let length = this.Stack2.length
             return this.Stack2[length-1]
         }else{
             return this.top
         }
        
     }
     empty(){
        if(this.Stack2.length||this.Stack1.length){
            return false
        }else{
            return true
        }
     }
 }

let  queue = new MyQueue();

queue.push(1);
queue.push(2);
console.log(queue.Stack1)
console.log(queue.peek(),queue.pop(),queue.empty())  
  // 返回 1
   // 返回 1
 // 返回 false

