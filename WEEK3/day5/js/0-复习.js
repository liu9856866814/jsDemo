/*
* JS盒子模型属性：
*   1. client
*       1.1 clientWidth / clientHeight 内容宽（高）+ 左右（上下）padding
*       1.2 clientLeft / clientTop 左边框宽度 / 上边框的宽度
*
*   2. offset系列
*       2.1 offsetWidth : clientWidth + 左右边框
*           offsetHeight : clientHeight + 上下边框
*       2.2 offsetLeft: 相对父级偏移参照物（offsetParent）的左偏移值
*           offsetTop: 相对于父级偏移参照物（offsetParent）的上偏移值
*       2.3 offsetParent: 距离当前元素最近的有定位属性的父级元素，如果父级元素都没有定位属性，offsetParent就是body.body的
* offsetParent是null
*       offset方法：确定当前元素的左上角点距离body左内边和上内边的距离（当前元素左上角点在页面中的坐标）
*
*   3. scroll系列
*       内容不溢出：
*       scrollWidth: clientWidth
*       scrollHeight: clientHeight
*       内容溢出（内容溢出时，scrollWidth/scrollHeight是元素真实的宽高）：
*       scrollWidth: clientWidth + 溢出部分（scrollLeft的最大值）
*       scrollHeight: clientHeight + 溢出部分（scrollTop的最大值）
*
*       scrollLeft: 横向滚动条卷去的距离
*       scrollTop: 纵向滚动条卷去的距离
* */

// 获取经过计算生效的样式（层叠样式表【CSS】和行内都包含）：为啥叫经过计算生效的样式？因为css样式根据权重（！important）、
// 距离元素的远近（行内>内嵌>外链）会互相覆盖，最终生效的只有一个

// 对象.style.xxx 只能获取或者设置元素的行内样式，拿不到css中的样式。

// window.getComputedStyle(元素对象，伪类)返回一个对象，这个对象中包含了所有计算生效的样式；

// IE低版本中：
// 元素对象.currentStyle属性，这个属性的值是一个对象，这个对象中包含了所有计算生效的样式。

// 图片延时加载（常用性能优化手段）：
// 原理：img标签有一个src属性，这个属性的值存储的是图片的资源路径（url）.当浏览器检测到img标签有这个src属性时，就会立刻去
// 加载这张图片。所以延时加载先不给img标签设置src属性，但是要先把资源路径存在这个img标签身上，等到合适的时机（一般都是这张
// 图片即将进入浏览器的可视窗口时）再把这个资源路径从img标签身上取出来，然后赋值成img标签的src属性。浏览器发现img有了src,
// 就会去加载这张图片。

// 计算什么时候这个图片进入浏览器的可视区域：
// 什么时候去计算？当页面的滚动条滚动时：onscroll事件，只要滚动滚动条onscroll事件就会触发；
// 图片出现在可视区的临界值：图片上外边框距离body上内边框的距离 - 页面滚动条卷去的距离 - 浏览器可视窗口的高度 === 0 时，
// 表示将要出现在浏览器的可视窗口中。一般为了优化用户体验，都是距离出现在可视窗口还剩一些时就去加载。如果为了减小服务器压力，
// 一般是让这个图片出现在可视区域一段距离再去加载。



