import messageFix from '../../src/setting/messageFix'
/**
 * 关于指令钩子函数
 * bind // 只绑定一次 指令第一次绑定到元素时调用
 * inserted：被绑定元素插入父节点时调用
 * update：所在组件VNode更新时调用
 * componentUpdated 指令所在组件的VNode及其子VNode 全部更新后
 * unbind 只调用一次 指令与元素解绑的时候调用 这个？什么时候自动解绑
 * 
 * 参数 钩子函数(el,binding,vnode, oldVnode)
 * el:指令所绑定的元素 直接操作DOM
 * binding：对象 包含属性
 * name:指令名 不包含V
 * value：绑定值 如 v-copy="value" 这个value
 * oldValue:更新前的值
 * expression：字符串形成的指令表达式
 * arg：传递给指令的参数 如 v-copy:foo 那么 foo就是传给指令的参数 可以用来动态修改指令内部配置的值
 * 如 px大小 颜色等等
 * modifiers包含修饰符的对象？ v-copy：foo.a.b  会得到{a:true,b:true}
 */
const vCopy = {

    bind(el, {
        value
    }) {
        el.$value = value; // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到
        el.handler = () => {
            if (!el.$value) {
                messageFix.warning("无复制内容");
                return;
            }
            // 动态创建 textarea 标签
            const textarea = document.createElement('textarea');
            // 将该textarea 设为readonly 防止 ios下自动唤起键盘 同时将 textarea移出区域
            textarea.readOnly = 'readonly';
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            // copy的值赋给textarea标签的value属性
            textarea.value = el.$value;
            // 将textarea插入到body中
            document.body.appendChild(textarea);
            // 选中值并复制
            textarea.select();
            const result = document.execCommand('Copy') // 这个API 拷贝当前选中内容到剪贴板
            if (result) {
                messageFix.success('复制成功');
            }
            document.body.removeChild(textarea);
        };
        el.addEventListener('click',el.handler);
    },
    // 传进来的值更新时
    componentUpdated(el,{value}){
        el.$value = value
    },
    // 指令与元素解绑的时候,移出事件绑定
    unbind(el){
        el.removeEventListener('click',el.handler)
    }
}

export default vCopy


/**
 * 当一个HTML文档切换到设计模式时，
 * document暴露 execCommand 方法，
 * 该方法允许运行命令来操纵可编辑内容区域的元素。
 * bool = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
 * aCommandName:一个 DOMString ，命令的名称
 * aShowDefaultUI: 一个 Boolean， 是否展示用户界面，一般为 false。Mozilla 没有实现。
 * aValueArgument:  一些命令（例如insertImage）需要额外的参数（insertImage需要提供插入image的url），默认为null。.
 * 目前已知用途 进入可编辑模式 类似于富文本编辑器了
 * 延伸库 clipboard
 */