// call手写
// 模仿loadsh写函数判定
Function.prototype.testCall = function(context, ...args){
    if(typeof this !== 'function'){
        throw new TypeError('not a function')
    }
    const key = Symbol() // es6独一无二的标志 防止 覆盖可能有的属性
    context[key] = this //
    console.log(this,'指向函数自身')
    const result = context[key](...args) // 作用域转移完毕
    delete context[key] // 删除添加的属性
    return result
}

Function.prototype.testApply = function(context=window,args){
    if(typeof this !== 'function'){
        throw new TypeError('not a function')
    }
    const key = Symbol() // es6独一无二的标志 防止 覆盖可能有的属性
    context[key] = this //
    console.log(this,'指向函数自身')
    const result = context[key](...args) // 作用域转移完毕
    delete context[key] // 删除添加的属性
    return result
}

Function.prototype.testBind = function(contet = window, ...args){
    const fn = this
    args = args?args:[]
    return function newFn(...newFnArgs){
        if(this instanceof newFn){
            return new fn(...args, ...newFnArgs)
        }
        return fn.apply(context,[...args,...newFnArgs])
    }
}

var a={}

var testStr = '指向全局'
    var a={
        testStr:'指向局部'
    }
    function myCall(name,age){
        this.name= name
        this.age = age
        console.log(this.testStr)
    }


myCall.testApply(a,['55','66'])    
console.log(a)


function test(...params){
    console.log(add(...params))//1,2,3
    console.log(add(params)) //[1 2 3] 
}
function add (a,b,c){
    return a+b+c
}
//test(1,2,3)

// ES6 arguments被rest参数代替 他是一个数组 如果去掉... 这两个例子不错

// instance jiace