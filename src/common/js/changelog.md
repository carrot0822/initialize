##  2020年4月6日15:57:49
1. ajax 原生封装的还好 但是延伸的http2.0的特性 html formdata对象 fetch封装理解不深
2. jsonp promise的实际应用太浅 这里可以跟NodeJs的http模块连起来测试


## 2020年4月23日17:50:30
1. call bind allpy this 指向问题 new原理 箭头函数- -应该不会搞混了

## 2020年4月24日16:48:01
1. 手写了call bind apply 原理是 保存传递过来的context 在这个的基础上把Function挂载到context的属性中成为他的方法 再传入收到的参数 变成了 context.fn(args) 谁调用就指向谁 this就指向了context
bind与call apply的区别是 bind会生成一个新的函数 与call一样传递的是参数列表 apply传递的是数组
2. 变量声明提升的问题 封禁在函数内没有var和let的参数会抓到全局去命名 如果是函数的话 将会在调用的时候覆盖同名函数 一般在外部的var b = fn 都会覆盖掉 fn b  因为fn b会被提到顶部 var b =fn 只会把var b提到顶部 到执行到对应位置的时候 会进行赋值覆盖
3. 对象属性与挂载到prototype的问题 以及new执行过程与顺序
a.b与a.prototype.b确实是不一致
4. this指向问题
时刻注意是谁调用的 如果没有调用会指向windows 严格模式下会指向undifined

5. ES6 的rest与解构赋值的使用
rest...参数用来代替ES5的 argument类数组

## 2020年4月30日15:20:41
1. vue子组件传递多个参数给父组件的同时 父组件的回调函数又想多加一个参数进去的时候 如何取到子组件传递给父组件的值 使用arguments就可以接收到了 在vue issue上有

2. vue现在总共有11个钩子函数了 创建 生成 更新 销毁 使用keepalive 子组件出错

3. 移动端全屏 代码控制有丶不现实 但是可以通过自己手机设置完成 谷歌移动版确实拉稀

4. gulp的使用 如果要能吹的会 要记得那几个API webpack确实厉害一些