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

const vDrag = {
    inserted(el) {

        const target = el.children[0]; // 组件的容器元素
        const header = target.children[0]; // 头部区域

        // 鼠标手型设置
        header.style.cursor = 'move';
        header.onmousedown = (e) => {
            // 记录按下时鼠标的坐标
            const sty = target.currentStyle || window.getComputedStyle(target, null);
            const currentX = e.clientX;
            const currentY = e.clientY
            let left, top
            if (sty.left.includes('%')) {
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
            console.log(minLeft,'最左最小',maxLeft,)
            console.log(minTop,maxTop,'最上最小')
            // 鼠标移动产生距离统计 并改变拖曳元素的定位
            console.log(left,top,'原先的位置')
            document.onmousemove = (event) => {
                // 鼠标移动时计算每次移动的距离，并改变拖拽元素的定位
                 const disX = event.clientX - currentX;
                const disY = event.clientY - currentY;
                console.log(disX,disY,'移动的距离')
                
                // 判断左、右边界
                if (disX < 0 && disX <= -minLeft) {
                    target.style.left = `${ - minLeft}`;
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