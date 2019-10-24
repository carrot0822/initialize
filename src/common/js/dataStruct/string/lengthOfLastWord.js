/**
 * 寻找最后一个单词的长度
 *  
 */

/**
 * 思路一：把字符串按空格开始划分成数组 需要注意的是空格数组并没有像我想象中一样消失
 * 反而会生成一个空的”“ 这里就需要做判断
 * 从前到后遍历 不是空字符串就赋值给承载变量
 * 最后输出变量长度
 * 这里利用隐式转换 空字符串为false和长度为0的特点直接返回
 *  @param {string} s
 */
var lengthOfLastWord = function (s) {
    let arr = s.split(" ")
    let length = arr.length
    let str = ""
    if (length) {
        for (let i = 0; i < length; i++) {
            if (arr[i]) {
                str = arr[i]
            }
        }
        return str.length
    } else {
        return 0
    }
};
/**
 * 思路二 从后往前遍历
 * 1. 针对 'hello world    '这种多空格情况 必须先找到 第一个非空格字符 然后再从这里开始遍历
 * 找到下一个空格的位置 两个相减就是长度
 * @param {string} s 
 */
var lengthOfLastWord2 = function(s){
    let end = s.length - 1;
    while(end >=0 && s[end] ==" "){
        end--
    }
    if(end<0){
        return 0
    }
    let start = end 
    while(start>=0 && s[start]!= " "){
        start--
    }
    return end-start
}