/**
 * 逆波兰表达式求值
 * 
 */


const SIGN = {
    '*' : (a, b) => a * b,
    '/' : (a, b) => Math.trunc(a / b),
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b
}
var evalRPN = function(tokens) {
    const stack = [];
    tokens.forEach(item => {
        if (item in SIGN){
            const b = stack.pop();
            const a = stack.pop();
            const res = SIGN[item](a, b);
            stack.push(res);
        }
        else stack.push(Number(item));
    })
    return stack.pop();
};

 /**
  * 中缀表达式转后缀表达式
  */
 let test = ["2","1","+","3","*"]
 console.log(evalRPN(test))

 /* 
es6失败写法 这里的匿名箭头函数估计有问题。。 这里的括号 不能乱加
function evalRPN (tokens){
    
    let SIGN = {
        '*':(a,b)=>{
            a*b
        },
        '/':(a,b)=>{
            Math.trunc(a/b)
        },
        '+':(a,b) =>{
            a + b
        },
        '-':(a,b)=>{
            a-b
        }
    }
    const stack = [];
    tokens.forEach(item => {
        if (item in SIGN){
            const b = stack.pop();
            const a = stack.pop();
            const res = SIGN[item](a, b);
            stack.push(res);
        }
        else stack.push(Number(item));
    })
    return stack.pop();
} */