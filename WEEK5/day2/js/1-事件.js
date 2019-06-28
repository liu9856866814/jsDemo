// 事件: 文档(document/html元素)发生的特定交互的瞬间.我们可以监听这些事件,来达到事件触发时作出相应的操作的目的;
// 如点击时切换颜色
// 页面滚动条滚动时计算图片是否要进入可视区

// 常见的事件:

// 1. 鼠标事件
// onclick 左键单击
// ondblclick 左键双击
// onmouseover 鼠标划入
// onmouseout 鼠标进入
// onmouseenter 鼠标进入
// onmouseleave 鼠标离开
// onmousemove 鼠标移动
// onmousedown 鼠标按下
// onmouseup 鼠标抬起
// onmousewheel 鼠标滚轮滚动
// oncontextmenu 鼠标右键事件(右键弹出自定义菜单就需要oncontextmenu);

let $ = selector => document.querySelector(selector);
let btn = $('.btn');
let box = $('.box');
// btn.ondblclick = function () {
//     console.log('666');
// };
/*btn.onmousedown = function () {
    console.log('down');
};
btn.onmouseup = function () {
    console.log('up');
};
btn.onclick = function () {
    console.log('click');
};
// 点击事件是在onmouseup结束后触发;

document.oncontextmenu = function (e) {
    console.log('右键');
    e.preventDefault(); // 阻止默认行为,鼠标右键的默认行为是打开浏览器的上下文菜单;
};
box.oncontextmenu = function () {
    console.log('box的鼠标右键');
};*/

// 2. 键盘事件
// onkeydown 键盘按下事件
// onkeyup 按键弹起事件
// onkeypress 按键事件(有兼容性问题)
// input/textarea/document/documentElement/document.body/window 需要绑定键盘事件,其他标签如div/p/a....一般不需要键盘事件;
let input = $('#input');
let textarea = $('textarea');
/*input.onkeydown = function () {
    console.log('keydown');
};
input.onkeyup = function () {
    console.log('keyup');
};
input.onkeypress = function () {
    console.log('keypress');
};
document.onkeydown = function () {
    console.log('document的keydown');
};*/

// 表单元素事件：input/textarea/select/checkbox/radio
// onfocus 获得焦点时触发：得焦事件
// onblur 失去焦点时触发：失焦事件
// oninput 输入事件： 输入时触发
// onchange 表单的值发生改变时触发

input.onfocus = function () {
    console.log('onfocus');
};
input.onblur = function () {
    console.log('onblur');
};
input.oninput = function () { // input/ textarea 只要输入内容就会触发
    console.log(input.value);
};
textarea.oninput = function () {
    console.log(textarea.value);
};
let select = $('#select');
// console.log(select.value);
select.onchange = function () {
    console.log(this.value);
};

// 3. 系统事件：
// window.onload 页面中所有的资源都加载完成后触发
// window.onresize 浏览器窗口的尺寸发生改变时触发
// window.onscroll 浏览器窗口滚动条滚动的时候触发

window.onload = function () {
    console.log('页面资源加载完成');
};
window.onresize = function () {
    console.log('尺寸变了');
};

// 4. 移动端事件
// ontouchstart: 触摸屏幕元素时触发
// ontouchend: 手指离开屏幕时触发
// ontouchmove: 手指滑动的时候触发
// 某些特殊的能力: 如华为手机指关节敲击屏幕/ios 3D-Touch 这种特殊能力要看操作系统是否给了浏览器,还要盾浏览器开发商是否
// 开发相应的功能去调用操作系统的能力;

box.ontouchstart = function () {
    console.log('start');
};
box.ontouchend = function () {
    console.log('end');
};
box.ontouchmove = function () {
    console.log('move');
};
// 移动端使用onclick事件会有300ms的延迟

// 事件函数都是在事件触发时,浏览器执行的.我们给元素的事件属性赋值一个函数,这个行为叫做监听事件.






