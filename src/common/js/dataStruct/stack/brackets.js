
/*给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
*/
/**
 * 
 * 思路
 * 辅助栈 左括号压入栈内 直到遇到第一个右括号 如果第一个右括号与顶部的的不匹配则直接失败 匹配则出栈 继续下一个匹配
 * 典型的 先遭遇后处理 先进后出应用
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var map = {
        "(":")",
        "[":"]",
        "{":"}",
        "?":"?"
    }
    // hash的用法 在很多个if判定值是否对应并且返回ture和false时可以很简便的返回一些值
    var leftArr = ["?"] // 其实是个栈
    // 边界问题 当第一个为右括号时 pop会报错 此时为空栈
    for(var ch of s){
        if(ch in map){
            leftArr.push(ch)
        } else if(ch!=map[leftArr.pop()]){
            return false
        }
    }
    return !(leftArr.length > 1)
};