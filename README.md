# egg-first
egg项目
### Egg.js开发指南
http://eggjs.org/zh-cn/
### EggBorn.js开发指南
http://egg-born.org/zh-cn/docs/tutorial/

---
+<a href="./docs/detail01.md">详细说明1</a> 
+详细说明2
+详细说明3

<span id="jump">跳转到的地方</span>


[点击跳转](#jump)
[TOC]
	[TOC]
## 0. 斜体和粗体{#top}
1. *斜体*
2. **粗体**
3. ***加粗斜体***
4. ~~删除线~~

### 分级标题

1. # 一级标题
2. ## 二级标题
3. ### 三级标题
4. #### 四级标题
5. ##### 五级标题
6. ###### 六级标题

### 超链接
	1行内式
	欢迎来到[剑雨无尘](https://www.baidu.com)
	欢迎来到[剑雨无尘](./docs/detail01.md)
	欢迎来到[剑雨无尘](./docs/detail02.md)
	欢迎来到[剑雨无尘](./docs/detail03.md)
	2参考式
	我经常去的几个网站[Google][1]、[Leanote][2]
	[Google][1]是一个不错的[网站][网站]
	[网站][]
	[1]:http://www.google.com "Google"
	[2]:http://www.leanote.com
	[网站]:https://github.com/chenxijywc/egg-first "egg-first"
	3自动链接
	<http://www.baidu.com>
	<address@example.com>
	
### 锚点
	跳转到顶部[斜体和粗体](#top)
	
### 列表
1无序列表
* 无序列表项一
* 无序列表项二
* 无序列表项三
* 无序列表项四
+ 无序列表项一
+ 无序列表项二
+ 无序列表项三
+ 无序列表项四
- 无序列表项一
- 无序列表项二
- 无序列表项三
- 无序列表项四
2有序列表
1. 无序列表项一
2. 无序列表项二
3. 无序列表项三
4. 无序列表项四

3定义型列表

	Markdown	
	:    轻量级文本标记语言，可以转换成html，pdf等格式（左侧有一个可见的冒号和四个不可见的空格）
Markdown
:    轻量级文本标记语言，可以转换成html，pdf等格式（左侧有一个可见的冒号和四个不可见的空格）
4列表缩进
* 轻轻的我走了， 正如我轻轻的来； 我轻轻的招手， 作别西天的云彩。
那河畔的金柳， 是夕阳中的新娘； 波光里的艳影， 在我的心头荡漾。 
软泥上的青荇， 油油的在水底招摇； 在康河的柔波里， 我甘心做一条水草！ 
* 那榆荫下的一潭， 不是清泉， 是天上虹； 揉碎在浮藻间， 沉淀着彩虹似的梦。 
寻梦？撑一支长篙， 向青草更青处漫溯； 满载一船星辉， 在星辉斑斓里放歌。 
但我不能放歌， 悄悄是别离的笙箫； 夏虫也为我沉默， 沉默是今晚的康桥！ 
悄悄的我走了， 正如我悄悄的来； 我挥一挥衣袖， 不带走一片云彩。
5列表缩进
*	轻轻的我走了， 正如我轻轻的来； 我轻轻的招手， 作别西天的云彩。
那河畔的金柳， 是夕阳中的新娘； 波光里的艳影， 在我的心头荡漾。 
软泥上的青荇， 油油的在水底招摇； 在康河的柔波里， 我甘心做一条水草！

	那榆荫下的一潭， 不是清泉， 是天上虹； 揉碎在浮藻间， 沉淀着彩虹似的梦。 
寻梦？撑一支长篙， 向青草更青处漫溯； 满载一船星辉， 在星辉斑斓里放歌。 
但我不能放歌， 悄悄是别离的笙箫； 夏虫也为我沉默， 沉默是今晚的康桥！ 
*	悄悄的我走了， 正如我悄悄的来； 我挥一挥衣袖， 不带走一片云彩。
6包含引用的列表
*	阅读的方法:
	>打开书本<br/>
	>打开点灯
7包含代码区块的引用
*	一列表项包含一个列表区块
		function () {
			var a = 1;
			return;
		}
8特殊情况
1986. What a great season.
1986\. What a great season.

### 引用
1引用的基本语法
> 这是一个有两段文字的引用
> 无意义的占行文字1.
> 无意义的占行文字2.
> 
> 无意义的占行文字3.
> 无意义的占行文字4.
2引用的多层嵌套
>>> 请问 Markdwon 怎么用？ - 小白请问 Markdwon 怎么用？ - 小白请问 Markdwon 怎么用？ - 小白请问 Markdwon 怎么用？ - 小白请问 Markdwon 怎么用？ - 小白请问 Markdwon 怎么用？ - 小白
>>>么用？ - 小白
>
>> 自己看教程！ - 愤青

> 教程在哪？ - 小白<br/>
>> 自己看教程！ - 愤青
>
> 教程在哪？ - 小白<br/>
> 1. 教程在哪？ - 小白<br/>
> 2. 教程在哪？ - 小白<br/>

 ###插入图像
语法说明：![图片Alt](图片地址 “图片Title”)

![花朵](http://ww2.sinaimg.cn/large/56d258bdjw1eugeubg8ujj21kw16odn6.jpg "美丽花儿")

### 内容目录
在段落中填写 [TOC] 以显示全文内容的目录结构。

### 注脚
使用 Markdown[^1]可以效率的书写文档, 直接转换成 HTML[^2], 你可以使用 Leanote[^Le] 编辑器进行书写。
[^1]:Markdown是一种纯文本标记语言
[^2]:HyperText Markup Language 超文本标记语言
[^Le]:开源笔记平台，支持Markdown和笔记直接发为博文

### LaTeX 公式
$$\sum_{i=1}^n a_i=0$$
$$f(x_1,x_x,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2 $$
$$\sum^{j-1}_{k=0}{\widehat{\gamma}_{kj} z_k}$$

###流程图

flow
st=>start: Start:>https://www.zybuluo.com
io=>inputoutput: verification
op=>operation: Your Operation
cond=>condition: Yes or No?
sub=>subroutine: Your Subroutine
e=>end
st->io->op->cond
cond(yes)->e
cond(no)->sub->io

###表格
|学号|姓名|分数|
|-|-|-|
|小明|男|75|
|小红|女|79|
|小陆|男|92|