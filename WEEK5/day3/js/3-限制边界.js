// 鼠标跟随,盒子不能超出浏览器的可视窗口

// 边界限制的原理: 用户看到的是盒子不能超过浏览器窗口,事实上是left和top不能超过某个值;
// left 和top的最小值0
// 如何求left和top的最大值?
// left的最大值 = 浏览器可视窗口的宽 - 盒子宽
// top 的最大值 = 浏览器可视窗口的高 - 盒子高

function win(attr) {
    return document.documentElement[attr] || document.body[attr];

}
let $ = selector => document.querySelector(selector);
let box = $('#box');

// 求left和top的最大值
let maxL = win('clientWidth') - box.offsetWidth;
let maxT = win('clientHeight') - box.offsetHeight;

// left top的最小值
let minL = 0;
let minT = 0;

// 监听document的onmousemove事件,在事件中实时计算盒子的left和top;
document.onmousemove = function (e) {
    // 1. 根据鼠标的位置计算盒子的left和top
    let left = e.clientX - box.offsetWidth/2;
    let top = e.clientY - box.offsetHeight/2;
    // 2. 判断是否越界,如果越界就需要修正(比最小值还小,就等于最小值,比最大值还大就等于最大值)
    if(left < minL){
        left = minL;
    }
    if(left > maxL){
        left = maxL
    }
    if(top < minT){
        top = minT;
    }
    if(top > maxT){
        top = maxT;
    }
    // 3. 把left和top设置给box元素
    box.style.left = left + 'px';
    box.style.top = top + 'px';
};