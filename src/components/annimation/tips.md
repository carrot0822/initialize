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
## 熟悉的css样式但不常用
1. border-raduis: 10px 20px 30px 40px 代表左 右 下左 的圆角大小 等同于双组的 10px 20px 30px 40px/10px 20px 30px 40px 代表了四周形成弧的X轴和Y轴
这样能组合许多不同的效果
2. box-shadow:inset offsetX offsetY blur-raduis spread-radius color
+ inset 不设置默认是向外部出现阴影 offset偏移距离 blur-radius 模糊半径 阴影扩散半径 color 颜色

3.text相关 
+ text-shadow： 文字阴影
+ Text-Stroke：文本描边 IE不支持


4. animation：
5. background属性相关
+ background

## 陌生的scss语法
append：整理数组用 像padding（）这种值是被算成数组的
comma：分割形式 与上面的append连用 这里是逗号分割
comma-spread：除开逗号还有空格分割 不过一般都是逗号

## 新增的HTMLDOM属性
1. HTMLDOM.classList. add() remove() replace()  可以方便的查找删除替换某个类名

2. HTMLDOM.setProperty(name,value) 设置一个新的css属性值 也可以修改旧的css值 达到js与css的交互目的 用--var的变量命名


## 新增的js语法

## 有丶东西的小网站

1. 