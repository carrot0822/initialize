# 文件目录说明
## html
+ administration 对应权限管理子系统
+ checkcenter 各种检查审核 暂时没找到对应的 // 审核中心好像是
+ form 疑似是弹框相关 暂时没找到对应的
+ 根目录9个html对应权限管理9个子模块页面

## achive 档案中心
+ archiveBox 档案盒管理
+ archive-manage：归档中心
+ 
1. add-archive ：新增档案
+ 涉及到与硬件方 使用websocket 服务通信 来扫描RFID
+ 涉及到图片上传预览 pdf上传预览 excel上传预览
+ 一般新增档案更改了之后  preview-archive  archive-change archive-change-preview(档案管理/编辑) 都会更改

2. preview-archive：新增档案预览 区别是无法输入 全禁止
3. archive-history： 待归档历史
4. archive-list：归档列表
5. waiting-for-archiving： 待归档案
+ 根目录疑似对应档案管理子系统 子模块页面及导航

+ destory-manage:销毁管理
1. destroy-history 归档中心 销毁历史
2. destroy-list 销毁中心-销毁列表

## environmental- 环境监测系统


## log
环境安防控制子系统----》报警信息模块

## process
权限控制子系统---》部门管理

## securitycenter 安全中心？
视频监控

## storehouse 虚拟库房子系统管理
+ doormanage： 虚拟库房管理子系统----》RFID门禁
+ 根目录有远程管理和库房中心


## usercenter
个人中心





## 架构和方式说明
1. 采用的iframe跳转的方式 路由地址是由html结构构成 这就意味如果前端要更改本地文件目录 则需要沟通后端 放置一张对应的目录结构表
