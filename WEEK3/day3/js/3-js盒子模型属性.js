// JS盒子模型：通过js的方法或者属性获取的元素对象的一系列描述盒子模型的属性；

let box = document.getElementById('box');

// 内容的高度：是我们css样式设置的高度，和溢出与否无关
// 真实的高度：盒子的实际高度，包含溢出的部分
// client 系列
// clientWidth / clientHeight
// clientWidth = 内容的宽度 + 左右padding
// clientHeight = 内容的高度 + 上下padding
// console.log(box.clientWidth); // 340
// console.log(box.clientHeight); // 440

// clientLeft / clientTop
// clientLeft: 元素的左边框的宽度
// clientTop: 元素上边框的宽度
console.log(box.clientLeft);
console.log(box.clientTop);

// offset 系列
// offsetWidth/ OffsetHeight
// offsetWidth = clientWidth (内容宽度+左右padding) + 左右边框
// offsetHeight = clientHeight (内容高度+ 上下padding) + 上下边框
console.log(box.offsetWidth);
console.log(box.offsetHeight);

// offsetLeft/ offsetTop
// offsetLeft 相对于父级偏移参照物左偏移距离
// offsetTop 相对于父级偏移参照物上偏移距离

// scroll 系列
// onscroll 事件，监听滚动条的滚动事件
// scrollLeft 横向滚动条卷去的距离
// scrollTop 纵向滚动条卷去的距离

// scrollLeft和scrollTop 不仅可以读取还可以设置；
// box.scrollTop = 125;

// scrollWidth / scrollHeight
// scrollWidth: 内容不溢出时,和clienWidth相等;当溢出时,就是真实宽度(clientWidth + 溢出部分[滚动条可以滚动的最大距离])
console.log(box.scrollWidth);
// scrollHeight: 内容不溢出时,和clientHeight相等;当溢出时,就是真实高度(clientHeight + 溢出部分[纵向滚动条可以滚动的最大距离])
console.log(box.scrollHeight);

// ? 这个scrollTop的最大值是多少? 怎么求?
// scrollHeight = clientHeight + scrollTop(最大值);




