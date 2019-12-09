// 笛卡尔积
// reduce

/**
 * 
 * @param {arr} arr 
 * 多维数组
 */
function cartesian(arr) {
    if (arr.length < 2) return arr[0] || [];
    // 对象冒充给了 reduce
    return [].reduce.call(arr, function (col, set) { 
        console.log(col,set)
        let res = [];
        // 迭代 比递归好看一些 其实
        col.forEach(c => {
            set.forEach(s => {
                let t = [].concat(Array.isArray(c) ? c : [c]); // 浅拷贝数组
                t.push(s);
                res.push(t);
            })
        });
        return res;
    });
}


let testArr = [[[1,5,],2,3],['a','b',],['是','我']]
console.log(cartesian(testArr))
