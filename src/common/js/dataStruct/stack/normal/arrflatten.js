/**
 * 数组扁平化列表迭代器
 */
/**
 * 思路
 * 1.初始化直接拍平数组 迭代拍平 检测到数据类型为数组就继续迭代 直到数据类似为常规数据类型
 * 2.用队列代替 就跟队列层次遍历一样  这里运行速度超了。。。
 */

 class NestedIterator{
     constructor(NestedIterator){
        
        this.list = []
        this.init(NestedIterator)
        
     }
     init(arr){
        let len = arr.length
        for(let i=0; i<len; i++){
            let val = arr[i]
            if(arr[i] instanceof Array){
                this.init(val)
            }else{
                this.list.push(val)
            }
        }
     }
     next() {
        return this.list.shift() 
     }
     hasNext(){
        return this.list.length > 0
     }
 }

 let test = [1,1,2,1,1]
 let obj = new NestedIterator(test)
 let a = []
 while(obj.hasNext()){
    a.push(obj.next())
    console.log(a,'神奇的事情出现了')
 }
 
 function flatten(params) {
     
 }