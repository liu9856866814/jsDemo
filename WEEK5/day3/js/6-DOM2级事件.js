// DOM0级事件:
// 绑定DOM0级事件: 直接给元素对象的事件属性(onclick等)赋值成一个函数;
// 元素对象.onxxx = function(){}
let box = document.getElementById('box');
box.onclick = function () {
    console.log(1);
};
box.onclick = function () {
    console.log(2);
};

// dom0级事件不能给同一个事件绑定多个监听函数;因为DOM0级事件,是给对象的事件属性赋值,一个属性只能保存一个值,多次赋值,属性
// 代表的是最后一个值;

// dom0级事件解绑事件监听函数: 把对象的事件属性赋值为null
box.onclick = null;

// dom0级事件都是绑定在冒泡阶段的;

// DOM2级事件:
// DOM2级事件绑定：
// 元素对象.addEventListener('不带on的事件名'，事件函数，是否捕获阶段)；
// 参数：
// 不带on的事件名： click mouseenter...
// 事件触发时执行的函数
// 是否捕获阶段： true 绑定在捕获阶段、false表示绑定在冒泡阶段，默认值false;
box.addEventListener('click', function () {
    console.log(1);
}, true); // 绑定在捕获阶段

box.addEventListener('click',function () {
    console.log(2);
}, false); // 绑定在冒泡阶段

box.addEventListener('click',function () {
    console.log(3);
}, false); // 绑定在冒泡阶段
function fn(){
    console.log(4);
}
box.addEventListener('click', fn , false); // 绑定在冒泡阶段

// DOM2级事件解绑事件监听函数
// 元素对象,removeEventListener(事件名,事件函数,是否捕获阶段)
// 事件名: 不带on的事件名
// 事件函数: 绑定的哪个函数,移除的就是哪个函数[同一个函数]
// 是否捕获阶段: false 冒泡阶段, true 捕获阶段;
box.removeEventListener('click', fn, false);

// dom2级事件和dom0级事件
// 1. dom2级事件可以给同一个元素的同一个事件绑定多个事件监听函数,并且在事件触发时,会按照绑定顺序依次触发;
// 2. DOM2级事件可以选择绑定在冒泡或者捕获阶段;
// 3. 绑定和解绑DOM2级事件都有专门的方法;

// IE DOM2级事件处理:
// IE 绑定DOM2级事件: 元素对象.attachEvent(带on的事件名, 事件函数);
// IE 解绑DOM2级事件: 元素对象.detachEvent(带on的事件名,事件函数);

// IE DOM2 和 普通的DOM2 区别
// 1. 绑定和解绑的方法不同;
// 2. IE的DOM2只能绑在冒泡阶段;
// 3. IE在给同一个元素同一个事件绑定多个监听函数时,不一定按照绑定顺序触发;

// 标准浏览器的DOM2级事件为什么可以绑定多个?
// DOM2级事件是给每个元素的每个事件设置了一个事件池,类似一个数组;每次addEventListener 都是把事件函数加入到事件池中.等到事
// 件触发时,再从事件池中把事件函数按顺序拿出来执行一次;
let ary = [];
function addEvent(fn) {
    ary.push(fn);
}
addEvent(function () {
    console.log(1);
});
addEvent(function () {
    console.log(2);
});
addEvent(function () {
    console.log(3);
});
function fire() {
    for (let i = 0; i < ary.length; i++) {
         ary[i]();
    }
}
setTimeout(function () {
    fire();
}, 5000);

