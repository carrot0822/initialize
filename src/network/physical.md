# 物理层
1. 用途
2. 如何连通
## 基本概念
1. 机械特性 接口所用接线器的形状和尺寸 引线数据和排列 固定和锁定装置(机器硬件数目统计)
2. 电气特性 接口 电缆的 各条线上出现的电压的范围
3. 功能特性 某条线出现的某一电平的电压表示何种意义
4. 过程特性 对于不同功能的各种可能事件的出现顺序

## 数据通信的基础知识
### 模型



### 基础概念
1. 术语
+ 数据 运送消息的实体
+ 信号 数据的电气或电磁的表现
+ 模拟的 消息的参数取值是连续的
+ 数字的 消息的参数取值是
+ 码元 使用时间域的波形表示数字信号时 代表不同离散数值的基本波形 // 波形转成数字信号 仍然是数据
+ 信道：通信的通道 信号传输的媒介
+ 频率带宽
+ 频带：信号所占据的频带宽度 允许传送信号的最高频率与允许传送的信号的最低频率
+ 频带宽度
1Mbit=128KB
10M带宽 = 10*1024/128 = 1.25M 俗称的/8
2. 信号
+ 单向/单工通信：只能单方收 单方发
+ 双向交替/半双工通信 双方都能发 不能同时收
+ 双向同时/全双工通信 随时发和随时收

3. 信号分类
+ 基带信号(基本频带信号) 信源的信号 计算机输出的各种文字或图像文件的数据来源
基带信号含有较多的低频成分 甚至有直流成分
因为很多信道无法传输这种低频/直流成分
所以必须对基带信号进行 调制
+ 带通信号 基带信号经 过载波 调制后 信号频率范围搬移到较高频段以便在信道中传播 // 在一定频率范围内能通过信道


4. 调制方法
+ 为什么要调制？ 基带信号一些数据成分无法被信道传输

+ 基本的二元调制方法
调幅：载波的振幅随基带数字信号而变化
调频：载波的频率随基带数字信号而变化
调相：载波的初始相位随基带数字变化
振幅 频率 相位 // 这块应该是电路信号 数据存储为0 1 转换为电信号

+ 正交振幅调制QAM
（不明白
结论:码元可表示的比特数越多 在接收端进行解调时需要正确识别每一种状态就越困难

5. 信道
+ 信道的极限容量
信道并不理想 
传输信号时会产生各种失真以及带来多种干扰
码元传输的速率越高 信号距离越远 信道的输出端的波形 失真就越严重
失真：波形严重影响
影响失真的因素：带宽受限 噪声 干扰 失真
###  信道能通过的频率范围//重点

1. 奈式准则 

+ 码间串扰：
+ 频带：
+ 任何信道 码元传输速率存在上限 否则会出现 码间串扰的问题 使接收端对码元的判决成为不可能
+ 信道的频带越宽 能够通过的信号高频分量越多 可以用更高的速率传送
+ 

2. 香农公式求信躁比
宽带受限 且 有 高斯白噪声干扰 的 信道的极限 无差错的信息传输速率
C:极限信息传输速率
W：信道的带宽 (单位:HZ)
S: 信道内所传信号的平均功率
N： 信道内部的高斯噪声功率
C = W log2(1 + S/N)  单位 b/s
S/N大概就是信躁比吧
结论;
1. 信道的宽带或信道中的信躁比越大 则信息的极限传输速率就越高
2. 信息传输速率低于信道的极限信息传输速率 就一定有某种办法实现无差错传输
3. 信道带宽或 信噪比 S/N无上限 则信道极限信息传输速率C也没有上限
4. 实际信道能达到的信息传输速率比香农的极限传输速率低不少（大概还有其他影响吧）
额外
当W固定 S/N不能提高 码元传输速率达到上限值后 还可以用编码的方法
让每一个码元携带更多比特的信息量
来提高信息的传输速率

## 物理层下的传输媒体
1. 电信领域使用的电磁波的频谱

2. 电缆


3. 光纤
+ 光线在光纤中的折射

+ 光纤的工作原理 在纤芯中不断反射

+ 多模和单模光纤折射图

4. 非导向传输媒体


## 信道复用（重点

1. 频分复用FDM
用户分配到一定的频带后 通信过程中始终占用这个频带（频率大小的范围）
频分复用的用户在同样时间占用不同的带宽资源 （这里的带宽指频率带宽 不是数据发送速率）

2. 时分复用TDM
+ 将时间划分为一段段等长的时分复用帧(TDM帧) 每一个时分复用的用户在每一个TDM帧中占用固定序号的时隙
+ 每个用户所占用的间隙 是周期性出现的 周期就是TDM帧额长度
+ TDM信号 也称为 等时信号
+ 时分复用 所有用户在不同时间占用同样的频带宽度

缺点： 时分复用会造成线路资源的浪费 计算机数据突发性导致用户对分配到的子信道利用率一般不高
3. 统计时分复用STDM
根据用户使用时间点 把相同时间使用的数据传递放在一起形成一个固定的TDM帧 减小TDM帧的长度
提高利用率
4. 波分复用WDM
光的频分复用：经过光调制器和复用器 分用器 光解调器 转换数据
5. 码分复用CDM 码分多址CDMA

+ 码片

+ 码片序列
S站8bit码片序列 000 11 0 11
发送比特1 发送序列 00011011
发送比特0 发送序列 11100100
码片序列二进制序列

特点：每个站分配的码片序列需要各不相同 还必须互相正交
伪随机序列

CDMA要看视频总结


## 数字传输系统
0. 旧数字传输系统
+ 缺点：速率标准不统一 不是同步传输


1. 脉码调制PCM体制

2. 同步光纤网SONET
是什么？
做什么？
by 链路层回来的我
+ 同步传送信号
+ 光载波
+ 同步数字系列
+ 同步传递模块

### SONET体系结构
1. 光接口层
+ 路径层 处理路径端接设备PTE之间的业务的传输

+ 线路层 负责路径层的同步和复用

+ 段层 在光缆上传送 STS-N帧

+ 光子层 处理跨越光缆的比特传送

2. 体系结构传递图


## 宽带接入技术
+ xDSL：数字用户线 digital subscribe line x是数字用户线上实现的不同宽带方案
(X电话线转网线的技术)
+ xDSL技术就是用数字技术改造电话线让电话现能承载宽带业务
+ 把0~4KHz的低端频谱留给传统电话  没利用的高端频谱留给用户上网

###  xDSL的类型
+ ADSL:非对称数字用户线 (Asymmetric)
+ HDSL： 高速数字用户线 (high speed)
+ SDSL： 1对线的数字用户线 (single-line )
+ VDSL： 甚高速数字用户线 (very high speed)
+ DSL：ISDN用户线
+ RADSL：速率自适应DSL  ADSL子集 可自动调节线路速率(Rate-Adaptive)

1. ADSL(重点)
+ 特点
1. 上行和下行的带宽做成不对称的
上行指从用户到ISP 下行指ISP到用户
2. ASDL在用户线两端各自安装一个ADSL调制解调器

+ DMT技术(离散多音调)调制技术 
多载波 
多子信道
采用频分复用的技术 把40KHz~1.1MHz的高频频谱划分为许多的信道 25个子信道作为上行信道
249个子信道作为下行信道 每个子信道占据4.3125KHZ 使用不同载波进行数字调制
类似于使用许多小型调制解调器并行地传送数据

+ 数据率
用户线具体条件不同 //距离 线径 相邻用户线干扰
ADSL使用自适应调制技术使用户线 能传送尽可能高的数据率

+ ADSL组成
- -根据电话线连接到电话局 电话局 根据DSLAM连接 区域宽带网 局域宽带网连接至ISP提供上网

+ 二代ADSL
 提高调制效率得到更高的数据率 // 扩展了频谱范围
 采用无缝速率自适应技术SRA 在运营中不中断通信和不产生错误码的情况下 自适应地调整数据率
 改善了线路质量评测和故障定位功能
### ADSL的使用流程

### 光纤同轴混合网
+ HFC 在有线电视网CATV的基础上开发的一种居民宽带 
+ CATV 树形拓扑结构的同轴电缆网络
+ 特点

+ 体系结构

+ 特点

+ 优点

+ 要求

+ 电缆调制解调器

### FTTX技术
FFTx 光纤到 实现宽带居民接入网的方案
+ 光纤到家 FTTH
+ 光纤到大楼 FTTB
+ 光纤到路边 FTTC


