/**
 * 实现顺序查找
 */
 // 无哨兵
 function search1(key){
    let list = [1,2,3,4,5,6,7,8,9,10]
    for(let i =0;i<list.length;i++){
        if(list[i]==key){
            return i
        }
    }
    return -1
 }
 // 主要是哨兵 加入哨兵 放到头部就很微妙了 那么C是怎么直接放的 好吧他们用串--
 /**
  * 效率提高的原因 是比上面少了一个 i与length的对比
  * @param {number} key 
  */
 function search2(key){
    let list = [1,2,3,4,5,6,7,8,9,10]
    let len = list.length
    list.unshift(key)
    console.log(list)
    while(list[len]!= key){
        len--
    }
    return len
 }
// 有序表的顺序查找 主要应对查找失败的情况 ASL(失败) = n/2 + n/n+1

 function search3(key){

 }
 console.time('search1')
 console.log(search1(2)) 
 console.timeEnd('search1')
 console.time('search')
 console.log(search2(2))
 console.timeEnd('search')