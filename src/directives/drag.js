// 拖动指令
const getAttr = (obj, key) => {
    // 有意思的API和点
    console.log(window.getComputedStyle(obj, false)[key],'这是')
   let item = obj.currentStyle ? obj.currentStyle[key] : window.getComputedStyle(obj, false)[key]
    let value = item.replace(/\px/g, '');
    console.log(value)
    return value
}
// 原理大致清楚了 现在就是解决边界问题和拖曳问题
/**
 * 思路：
 * 1.mousedown的时候 记录目标此时的left,top位置 clientX和clientY的位置 然后事件委托给document或者活动的区域
 * 2.计算出边界范围 即目标上下移动或者左右可移动的最大距离
 * 3.每一次移动都判定边界范围 然后 根据 每次移动事件出发的e 事件对象中的clientX和clientY来计算出每次需要添加移动的距离
 * 4.更改left即可
 * 5.在松开的时候 解绑move事件和down事件监听
 */
/**
 * 额外基础解释
 * BOM对象的长度
 * document.documentElement document.body
 * 0.innerWidth/innerWidth 浏览器窗口可视距离//不包含控制台 工具栏 菜单 IE9以上才能使用
 * 1.clientWidth/clientHeight 可视区域的宽度和高度
 * 2.scrollWidth/scrollHeight 内容不超出外层高宽的时候为clientWidth和clientHeight
 * 2.offsetWidth/offsetHeight 本体width + padding +border 盒子模型高宽 真正的宽高
 * 3.offsetLeft/offsetTop 离父元素left/top定位点的距离
 * 
 * 这些长度似乎都是指明鼠标的 浏览器兼容度
 * 1.clienX/clientY 鼠标相对浏览器可视区域的X Y轴左标（浏览器左边缘和上边缘的距离） 都满足
 * 2.pageX/pageY 相对于文档的定位 左上角为0 0 右为正 下为正 
 * 3.offsetX/offsetY 鼠标相对于源元素（被点击元素）的X与Y坐标 IE？
 * 4.screenX/screenY 鼠标相对于用户左上角X，Y坐标 在全屏的时候 client和screen相等   // 包含工具栏和滚动条
 * 事件委托机制
 * 事件绑定 onXXX addEventListener(type,fn,usecape) 根据true和false选择是事件捕获还是事件冒泡的机制运行 IE好像有差距
 * 根据事件冒泡机制 可以在同类的子元素下 所有执行的事件放到父元素下 再利用e.target的触发特性 来完成
 * 事件对象的长度 e
 * 1.clientWidth/clientHeight 可视区域的宽度和高度
 * 2.scrollWidth/scrollHeight 滚动后元素真正的高度 内容不超出外层高宽的时候为clientWidth和clientHeight
 * 2.srcollTop/scrollLeft  相对父文档滚动条 滚动的距离  scrollTop = (scrollTop-clientHeight,scrollTop+offsetHeight)
 * 3.offsetWidth/offsetHeight 本体width + padding +border 盒子模型高宽 真正的宽高
 * 4.offsetLeft/offsetTop 离父元素left/top定位点的距离
  * 延伸
  * dragAPI
 * 应用 B站的楼梯
 * 移动端手势库
 */
const vDrag = {
    inserted(el) {

        const target = el.children[0]; // 组件的容器元素
        const header = target.children[0]; // 头部区域

        // 鼠标手型设置
        header.style.cursor = 'move';
        header.onmousedown = (e) => {
            // 记录按下时鼠标的坐标
            const sty = target.currentStyle || window.getComputedStyle(target, null); // 返回的是一个实时且计算的值
            const currentX = e.clientX;
            const currentY = e.clientY
            let left, top
            if (sty.left.includes('%')) { // IE
                left = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100);
                top = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100);
              } else {
                left = +sty.left.replace(/\px/g, '');
                top = +sty.top.replace(/\px/g, '');
              };
            // 计算临界值
            const targetDomWidth = target.offsetWidth
            const targetDomHeight = target.offsetHeight
            const screenWidth = document.body.clientWidth
            const screenHeight = document.body.clientHeight
            const minLeft = target.offsetLeft; // 可以左移的最大距离
            const maxLeft = screenWidth - target.offsetLeft - targetDomWidth  ; // 还要减去本身
            const minTop = target.offsetTop;
            const maxTop = screenHeight - targetDomHeight - target.offsetTop - 50
            console.log(screenHeight,targetDomHeight,target.offsetTop,'这就NMD离谱')
            console.log(minLeft,'最左最小',maxLeft,left)
            console.log(minTop,maxTop,'最上最小',top)
            // 鼠标移动产生距离统计 并改变拖曳元素的定位
            console.log(left,top,'原先的位置')
            document.onmousemove = (event) => { // 事件委托
                // 鼠标移动时计算每次移动的距离，并改变拖拽元素的定位
                 const disX = event.clientX - currentX;
                const disY = event.clientY - currentY;
                console.log(disX,disY,'移动的距离')
                
                // 判断左、右边界
                if (disX < 0 && disX <= -minLeft) {
                    target.style.left = `${left - minLeft}`;
                } else if (disX > 0 && disX >= maxLeft) {
                    target.style.left = `${left + maxLeft}px`;
                } else {
                    target.style.left = `${left + disX}px`;
                }

                // 判断上、下边界
                if (disY < 0 && disY <= -minTop) {
                    target.style.top = `${- minTop}px`
                } else if (disY > 0 && disY >= maxTop) {
                    target.style.top = `${top + maxTop}px`
                } else {
                    target.style.top = `${top + disY}px`
                }
                console.log(left,top,'更改后位置')
                return false;
            };

            // 鼠标松开 拖曳结束
            document.onmouseup = () => {
                console.log('这里是松开',left,top)
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    },
    // 每次重写打开dialog需要还原 
    updated(el) {
        console.log(target.style.left, '则')
        const target = el.children[0];
        target.style.left = '';
        target.style.top = '';
    },
    // 卸载时 清除事件绑定
    unbind(el) {
        const header = el.children[0].children[0];
        header.onmousedown = null;
    }
}

export default vDrag