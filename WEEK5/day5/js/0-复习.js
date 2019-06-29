// 拖拽: 页面中有一个盒子,在这个盒子上按下鼠标左键不松开,移动鼠标盒子要跟随鼠标,到达目的地后松开鼠标,盒子要停留在松开鼠标
// 的位置,鼠标再移动,盒子不会再跟随;

// 1. 拖动的关键点是盒子跟着鼠标动;这种能力不是一开始就有的,而是鼠标按下去的时候才有的.所以第一步监听盒子的onmousedown事件
let box = document.getElementById('box');
box.onmousedown = dragStart;
document.onmouseup = dragEnd;

function dragStart(e) {
    // 记录盒子的起始left和top 和鼠标的起始坐标
    let {style: {left, top}} = this;
    let {pageX, pageY} = e;
    this.startX = pageX;
    this.startY = pageY;
    this.startL = parseFloat(left);
    this.startT = parseFloat(top);
    document.onmousemove = dragMove.bind(this);
}
function dragMove(e) {
    // dragMove中计算盒子的left和top,并且设置给元素
    // 1. 盒子的left值是 从按下鼠标到移动一段距离后，两次盒子之间的距离 + 起始的left值；
    // top 同理
    let moveX = e.pageX - this.startX;
    let moveY = e.pageY - this.startY;
    // 2. 计算盒子应该出现的位置
    let curL = this.startL + moveX;
    let curT = this.startT + moveY;
    // 3. 把curL和curT设置给盒子
    this.style.left = curL + 'px';
    this.style.top = curT + 'px';
}
function dragEnd(e) {
    // 1. 移除盒子跟随鼠标移动的能力
    document.onmousemove = null;
}

// 原生拖拽
let dragObj = document.getElementById('dragObj');
let put = document.getElementById('put');
// 1. 使用原生拖拽要先给被拖拽元素设置行内属性 draggable = 'true';
// 2. 原生拖拽的事件:

// 2.1 拖拽开始
dragObj.ondragstart = function () {

};
// 2.2 拖拽中
dragObj.ondrag = function () {

};
// 2.3 拖拽结束
dragObj.ondragend = function () {

};

// 2.4 ondragover 当被拖拽元素经过放置元素时触发
put.ondragover = function () {

};
// 2.5 ondragleave 当被拖拽元素离开放置元素时触发
put.ondragleave = function () {

};
// 2.6 ondragenter 当被拖拽元素进入放置元素时触发
put.ondragenter = function () {

};
// 2.7 ondrop 当在放置元素上松开鼠标时触发; 要想用这个事件需要在dragover中阻止默认行为;
// 当向放置元素中拖入文件时,阻止浏览器打开文件,需要阻止ondrop中阻止默认行为;
put.ondrop = function () {

};

// 发布订阅:
// 事件(广义): 所有可以量化的时刻都是一个事件;
// DOM2级事件: 给每个元素的每个事件都设置一个事件池,addEventListener 就是订阅这个事件,把事件发生时要做的事情添加到事件池中;
// removeEventListener 是取消订阅,把某个订阅了这个事件的函数从事件池中移除掉;
// DOM2级事件触发时,浏览器会把事件池中的所有订阅了该事件的函数都执行;

// 发布订阅就是模拟DOM2级事件的事件池思想,解决自定义事件的.准备一个数组当做事件池,并且提供订阅事件和取消订阅的方法,并且要提供一个执行事件池中的函数的方法(DOM2事件是内置的事件,事件发生时浏览器帮你执行事件函数,但我们自己定义的事件,需要我们自己去执行事件函数);

let ary = [];
function addEvent(fn) {
    if(!ary.includes(fn)) ary.push(fn);
}
function removeEvent(fn) {
    if (ary.includes(fn)){
        ary = ary.filter(item => item !== fn);
    }
}
function fire(...arg) {
    // arg [1, 2, 3, 4];
    ary.forEach(item => item(...arg));
}

function fn1(...arg1) {
    console.log(arg1);
    console.log(1);
}
function fn2(...arg2) {
    console.log(arg2);
    console.log(2);
}
function fn3(...arg3) {
    console.log(arg3);
    console.log(3);
}

addEvent(fn1);
addEvent(fn2);
addEvent(fn3);

setTimeout(() =>{
    fire(1, 2, 3, 4);
    removeEvent(fn2);
}, 3000);

setTimeout(() => {
    fire('a', 'b', 'c');
}, 5000);


