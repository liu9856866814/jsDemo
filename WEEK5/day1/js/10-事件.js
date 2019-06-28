// 事件: 文档(html元素及document)以及浏览器窗口发生的特定交互的瞬间;我们可以监听这些事件,在这些事件发生时作出特定的操作;

// 常见的事件:

// 1. 鼠标事件
// 1.1 onclick 单击事件
// 1.2 ondbclick 双击事件
// 1.3 onmouseover 鼠标划入事件
// 1.4 onmouseout 鼠标划出事件
// 1.5 onmousemove 鼠标移动事件
// 1.6 onmousewheel 鼠标滚轮滚动事件
// 1.7 onmousedown 鼠标左键按下
// 1.8 onmouseup 鼠标左键抬起
// 1.9 oncontextmenu 鼠标右键事件

let $ = selector => document.querySelector(selector);
let btn = $('.btn');
let box = $('.box');
box.onmousemove = function () {
    console.log('move');
};
btn.ondblclick = function () {
    console.log('双击');
};
document.oncontextmenu = function () {
    console.log('12345');
};