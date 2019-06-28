// 1. 准备一个数组当做事件池;
let ary = [];

// 2. 提供向事件池中添加订阅的方法
function addEvent(fn) {
    // fn 订阅某个时刻到来时要做的事情
    // DOM2级事件不能重复绑定同一个事件函数
    if(!ary.includes(fn)) ary.push(fn); // 表示事件池不包含fn时再添加fn
}

// 3. 提供取消订阅的方法(把函数从数组中移除)
function removeEvent(fn) {
    // 把fn从ary移除掉(可以使用splice删除,但是会导致数组塌陷)
    // 数组.filter(callback) 利用filter把ary改成除了fn以外的组成的新数组;
    ary = ary.filter(function (item,index) {
        return item !== fn;
    });
}

// 4. 提供一个发布事件的方法
function fire(...arg) {
    ary.forEach(item => item(...arg)); // 把事件池中的函数一个一个拿出来执行,并且在执行时,传一些参数
}

function fn1() {
    console.log(1);
}

function fn2() {
    console.log(2);
}

function fn3() {
    console.log(3);
}

addEvent(fn1);
addEvent(fn2);
addEvent(fn3);

removeEvent(fn2);
// 订阅5s后执行fn1, fn2, fn3
setTimeout(() =>{
    fire(); // 3s后,发布事件
}, 3000);