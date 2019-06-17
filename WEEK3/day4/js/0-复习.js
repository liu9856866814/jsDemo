// 1. client
// 1.1 clientWidth 内容的宽度 + 左右padding
// 1.2 clientHeight 内容的高度 + 上下padding
// 1.3 clientTop 上边框高度
// 1.4 clientLeft 左边框宽度


// 2. offset
// 2.1 offsetWidth clientWidth + 左右边框
// 2.2 offsetHeight clientHeight + 上下边框
// 2.3 offsetLeft 相对于offsetParent的左偏移量
// 2.4 offsetTop 相对于offsetParent的上偏移量
// offsetParent 距离当前元素最近的有定位属性的父级元素，如果所有父级元素都没有的话 就是body元素；
// document.body.offsetParent === null; -> true

// 3. scroll
// 内容不溢出时：
// scrollWidth： 等于clientWidth
// scrollHeight: 等于clientHeight
// 内容溢出时：
// scrollWidth = clientWidth + 溢出部分（横向滚动条可以滚动的最大距离）
// scrollHeight = clientHeight + 溢出部分（纵向滚动条可以滚动的最大距离）

// scrollLeft: 横向滚动条卷去的距离
// scrollTop: 纵向滚动条卷去的距离

// 获取浏览器可视窗口的宽高
let winW = document.documentElement.clientWidth || document.body.clientWidth;
let winH = document.documentElement.clientHeight || document.body.clientHeight;

// let clientTop = document.documentElement.clientTop || document.body.clientTop;

// 盒子模型属性不仅可以获取，还可以设置
// 写一个方法获取浏览器可视窗口的盒子模型属性
function win(attr, val) {
    if(typeof val === 'undefined'){
        // 如果val是undefined，证明第二个参数没传，没传就是获取
        return document.documentElement[attr] || document.body[attr]; // 如果函数返回值是表达式，它会等着表达式求值，把求出来
        // 的值作为返回值返回
    }
    document.documentElement[attr] = document.body[attr] = val;
}

// console.log(win('clientWidth'));
// console.log(win('scrollTop'));

win('clientWidth'); // 获取clientWidth
win('scrollTop',100); // 设置scrollTop的值是100
// 因为除了获取盒子模型属性，我们还有设置盒子模型属性的需要；所以改造win方法，传一个参数是获取，传两个参数是设置

// offset方法：获取当前元素在页面中相对于body的左上角的坐标
let box = document.getElementById('inner');

function offset(ele) {
    let left = ele.offsetLeft; // 当前元素的offsetLeft
    let top = ele.offsetTop; // 当前元素的offsetTop
    let parent = ele.offsetParent; //
    while (parent && parent.nodeName !== 'BODY'){
        left += parent.clientLeft + parent.offsetLeft;
        top += parent.clientTop + parent.offsetTop;
        parent = parent.offsetParent;
    }
    return {
        left,
        top
    }
}

console.log(offset(inner)); // {left: xx, right: xx}