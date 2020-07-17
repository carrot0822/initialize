// promise
// async
// eventLoop  微队列  宏队列promise




async function async1(){
    console.log('async1 start')
    await async2().then(()=> console.log('这个才是后续执行的')) // await会先执行一次后面的函数 根据结果放入不同的执行队列里
    console.log("async1 end") // 这一步所有微队列执行完执行
}

async function async2(){
    console.log('async2')
    
}

console.log('script start')

setTimeout(()=>{
    console.log('定时器')
})

async1()

new Promise(function(resolve){
    console.log('promise1')
    resolve()
}).then(()=>{
    console.log('promise2')
})

console.log('script end')

/* 预测
执行栈
script start
async1 start
async2
promise1
sricpt end
微队列

async1 end
promise2
宏队列
定时器 
*/