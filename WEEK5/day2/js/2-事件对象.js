let $ = selector => document.querySelector(selector);
let btn = $('.btn');
btn.onclick = function (event) {
    // 浏览器在事件触发时会执行事件函数时,同时会传入一个实参,这个实参是一个对象,这个对象中包含了事件触发时的信息;
    console.log(event);
    console.log(event.clientX); // 鼠标点击的位置相对于浏览器可视窗口左边的水平坐标
    console.log(event.clientY); // 鼠标点击的位置相对于浏览器可视窗口上边的竖直坐标
    console.log(event.pageX); // 鼠标点击的位置相对于页面左边的水平坐标
    console.log(event.pageY); // 鼠标点击的位置相对于页面上边的竖直坐标
    console.log(event.target); // 触发事件的元素对象,也叫做事件源

};

// keyboard 键盘
document.onkeydown = function (e) {
    console.log(e);
    console.log(e.keyCode); // 键盘上的键都有一个对应的键码,是一个数字;
    // enter 13;
    // shift 16;
    // ctrl 17;
    // 上排数字键48- 57;
    // a-z 65-90 ;
    // Caps lock 20;
    // 空格 32;
    // esc 27;
    // 左 37
    // 上 38
    // 右 39
    // 下 40

};

// 事件对象: 事件触发时,浏览器执行事件函数时传入的一个实参,是一个对象;一般常见的鼠标事件对象/键盘事件对象,这个对象中保存了
// 事件触发时的信息;

// IE兼容性问题:
// IE事件对象存在 window.event 属性上;




