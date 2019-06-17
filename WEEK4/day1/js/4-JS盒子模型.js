 // js盒子模型属性：
 // 内容的宽高： 内容的宽高指的是我们设置的宽高和溢出不溢出没关系
 // 真实宽高：包含溢出部分的真实宽高

// client
 /*
 * clientWidth: 内容的宽度 + 左右padding
 * clientHeight: 内容的高度 + 上下padding
 *
 * clientLeft: 左边框
 * clientTop: 上边框
 * */
 let winW = document.documentElement.clientWidth || document.body.clientWidth;
// document.documentElement 指的是整个html，document.body是整个body.他们两个的clienWidth恰好是浏览器可视窗口的宽度.

// offset
 /*
 * offsetWidth: clientWidth (内容宽 + 左右padding) + 左右边框
 * offsetHeight: clientHeight (内容宽 + 上下padding) + 上下边框
 * offsetLeft: 相对于父级偏移参照物的左偏移值
 * offsetTop: 相对于父级偏移参照物的上偏移值
 * offsetParent: 父级偏移参照物,距离当前元素最近的有定位属性的父级元素,如果父级元素都没有定位属性,就是body;body的offsetParent是null
 *
 * */

//  scroll
/*
* scrollLeft: 横向滚动条卷去的距离
* scrollTop: 纵向滚动条卷去的距离
* 内容不溢出时:
* scrollWidth: 不溢出时就是clientWidth
* scrollHeight: clientHeight
* 内容溢出时:
* scrollWidth = clientWidth + scrollLeft的最大值
* scrollHeight = clientHeight + scrollTop的最大值
* */

// 图片懒加载: img标签有一个src属性,它的值存储的是图片的资源路径(url:统一资源定位符).当浏览器检测到img标签有src属性就会根据
 // url去加载这张图片,如果加载成功了,这个img标签就会被渲染成一张图片.延时加载(或者懒加载),不是直接给图片src属性,而是先用
 // 自定义属性的方式把图片的url存起来,等到合适的时机(一般都是这张图片即将进入浏览器可视窗口时)然后再把url取出来赋值给img的
 // src属性即可.
 // 关键点: 计算图片何时出现在可视窗口;
//  图片的上外边距离body上内边缘的距离 - 页面滚动条卷去的高度 - 浏览器可视窗口的高度 <=0 的时候图片就要出来了

// 多张图片懒加载和单张的懒加载相比: 要注意不要重复加载;