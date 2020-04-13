/**
 * 股票买卖问题 寻找给定数组中股票买卖最大利润 不能先卖后买 
 * 变种 寻找数组中两个数字之间的最大差值 也可以用类似办法 一次循环 两个变量
 * @param {number arr} prices 
 * 利用变量缓存的办法 把最低价格 和最高利润缓存起来 每次变动的时候都更新一次利润 保证存储的是最大利润
 * 如果需要记录时间的话 可能需要两个变量来存储时间
 */

function maxProfit(prices) {
    let buy = prices[0]
    let sale = 0
    let price = 0
    let temp = 0
    for (num of prices) {

        if (num < buy) {
            temp = sale - buy
            sale = 0
            buy = num
            price = Math.max(temp,price)
        } else if (num > sale) {
            sale = num
            temp = sale - buy
            price = Math.max(temp,price)
        }
        console.log(sale,buy,price)
    }
    return price <0?0:price
}
maxProfit([[3,2,6,5,0,3]])


// 单调栈


// DP 动态规划