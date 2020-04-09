## 基础动画属性
1. animation：

2. cubic-cubic-bezier

3. tranform-origin： 变形原点

4. keyframes
## 陌生的css样式
1. pointer-events

2. perspective相关 视距 px是设定离屏幕的距离 当未使用translateZ时好像没区别 但使用后就会有近大远小的效果

3. :root 声明全局css变量时 等同于css匹配文档树的根元素

4. ::backdrop 全屏样式用的

5. backdrop-filter：你为一个元素后面区域添加图形效果 也就是扭曲背景图片用的属性 在子元素上使用
6. filter：与5的属性方法一致 不过这个是改本身 上面那个是改自己背后的元素
drop-shadow:

6. mix-blend-mode：混合模式 同PS
## 熟悉的css样式但不常用
+ background:currentColor;


1. border-raduis: 10px 20px 30px 40px 代表左 右 下左 的圆角大小 等同于双组的 10px 20px 30px 40px/10px 20px 30px 40px 代表了四周形成弧的X轴和Y轴
这样能组合许多不同的效果
2. box-shadow:inset offsetX offsetY blur-raduis spread-radius color
+ inset 不设置默认是向外部出现阴影 offset偏移距离 blur-radius 模糊半径 阴影扩散半径 color 颜色

3.text相关 
+ text-shadow： 文字阴影
+ Text-Stroke：文本描边 IE不支持


4. animation： name duration timing-function delay iteration-count diretion fill-mode state
+ iteration： n次 infinite 无限次
+ direction： normal 正常执行1次 reverse 反向播放一次 alternate pop动画1 3 5正向播放 2 4 6反向播放
+ fill-mode: 动画不执行的时候 需要应用的样式 forwards backwards both？ 这个会改变设定的初始样式  forward会提取from的第一个样式作为初始关键帧 backward是提取to作为结束后的关键帧保存 both则是两者都有 用数据表示就是 
设定:translateX(20) 动画 from 50----》-100 forward 不使用动画初始属性 动画执行后保留最后一帧的属性 backward 执行前调用第一帧的样式 both 正常的动画关键帧 
+ play-state：设定后会暂停动画和启动动画 paused running

我有丶混淆动画和 过渡动画了 过渡动画是确切的结果  动画是执行之后会回归到原来的状态 fill-mode则是继承动画的结果达到过渡的目的
5. background属性相关
+ background

## 陌生的scss语法
append：整理数组用 像padding（）这种值是被算成数组的
comma：分割形式 与上面的append连用 这里是逗号分割
comma-spread：除开逗号还有空格分割 不过一般都是逗号
length()：返回一个列表中有几个值（1 2 3 4） 会返回4
## 新增的HTMLDOM属性
1. HTMLDOM.classList. add() remove() replace()  可以方便的查找删除替换某个类名

2. HTMLDOM.setProperty(name,value) 设置一个新的css属性值 也可以修改旧的css值 达到js与css的交互目的 用--var的变量命名


## 新增的js语法



## 忘记的JS函数
1. Math.random() 生成0~1的随机数 这里好像有精准度问题

## 有丶东西的小网站

1. https://www.html.cn/tool/css-clip-path/ 实现裁剪功能的