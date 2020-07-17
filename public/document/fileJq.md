## git分支说明
1. fixTwoRiver：两江法院项目 更改版本
2. dev619：竞标用更改  主要更改了档号生成规则
3. test： 测试分支
4. dev：开发分支
5. complete：备用分支
6. test3.0:3.0之前的备份分支
7. guangz：广州项目的分支
8. fixNc：宁采项目修改后的分支
9. Nc：早期宁采项目分支 备份保留
10. testCopy：早期test分支的备份
11. fixName：竞标用 只做了替换
12. completeTest：光正集团展示用版本
13. master:早期版本分支
14. langf：廊坊项目
## 文件目录及部分说明
### frames 框架存放地址
### Home 数据可视化页面
1. 调试的话需要使用到区域控制器 使用前需要跟工程部人员 后端人员说明
### html 存放html的文件
## achive 档案中心
### archiveBox 档案盒管理
1. 编辑功能对应的是 单文件的 archive-change.html 同理 archive-change更改时  archive-change-preview也要一起更改
### archive-change 归档中心
1. add-archive ：新增档案
+ 涉及到与硬件方 使用websocket 服务通信 来扫描RFID
+ 涉及到图片上传预览 pdf上传预览(pdf.js) excel上传预览(excel.js)
+ 一般新增档案更改了之后  preview-archive  archive-change archive-change-preview(档案管理/编辑) 都会更改
2. preview-archive：新增档案预览 区别是无法输入 全禁止
3. archive-history： 待归档历史
4. archive-list：归档列表
5. waiting-for-archiving： 待归档案

### borrow 借阅中心
0. 增删查改数据
### destroy-manage 销毁管理
0. 销毁相关的增删查改
1. destroy-history 归档中心-销毁历史(回收站)
2. destroy-list 销毁中心-销毁列表
### form 各类填写表单
0. 各类增删编辑的弹框可能会放在这里
### notice 公告管理
0. 增删查改公告
### transfer-manage 移交中心
0. 增删查改数据
### 单文件


## 虚拟库房管理
0. 目录
+ 文件目录位于 html/storehouse modal.html或者modal文件夹
1. 库房中心 html/storehouse/room-management
+ 库房管理设定的 固定列位置 固定列方向 区列个数 绑定IP将会影响到 远程控制/全景监控 内的设置
2. 远程控制 全景监控
+ 在选择库房的时候需要先绑定IP(由库房接口返回) 
+ 绑定ip之后 根据选择的区 去查询对应的位置信息 温湿度 人数等
+ 在用户选择完移动列后 根据移动列所在位置 选取对应接口
3. RFID门禁：log文件夹
+ 增删查改表格

## 环境安防控制子系统 environmental-monitoring文件夹
0. 全景监测
+ 涉及到区域控制器与websocket通信 需要与后端 工程部协助调试
+ 拖曳相关设备 边界问题需要注意
1. 其余都是增删查改表格

## 权限管理 administration文件夹

### markdown 存放md文档

### static 静态资源目录

### webapp 二维码扫描过后弹出的页面


