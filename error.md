## 记录排除的bug解决方案

## 2020年5月9日13:58:31
1. 档案新版 列表转换成树 因为他们迭代会默认去掉 子元素父ID不在列表内的元素 全都默认0开局 抄的那个字典方法就很巧妙

## 2020年5月11日17:29:35
1. 新增了图案档案管理 菜单和面包屑都是动态加载 动态塞入 后端也许方便 但前端掌管路由部分就弱了许多
2. 弹框可以分为通用弹框和业务弹框 分别封装 比如 非业务弹框 仅仅带上ID的删除确认弹框 把确定按钮 传入接口地址或者接口参数？ 还是把父组件的接口和参数由父组件控制 子组件只控制自己比较好 不至于太耦合