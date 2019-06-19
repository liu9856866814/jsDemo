// 定时器: 设置一个定时器,还要有时间间隔.等到了时间间隔,浏览器就会把定时器的回调函数执行.

// 2. 常用定时器: 都是挂载在window上的方法
// 2.1 window.setTimeout(callback, interval) 到达时间后执行一次,这个定时器也称为【超时调用】
// callback：回调函数
// interval: 时间间隔

// let n = 0;
// setTimeout(() => {
//     n++;
//     console.log(n);
// },1000);

// 2.2 window.setInterval(callback, interval) 每隔interval时间，就执行一次callback；也称为 间歇调用
// callback: 回调函数
// interval: 时间间隔

// setInterval(() => {
//     console.log('abc');
// },1000);

// 2.3 setTimeout/setInterval 的返回值是定时器id(一个数字,每次返回的定时器id和之前的都不会重复)

// 2.4 清除定时器: clearInterval() / clearTimeout() 需要定时器ID,清除指定id的定时器;只要定时器被清除了,不管它是否发挥作用
// (执行过回调函数),就不会在有任何作用(定时器里面的回调函数就不会再执行了)

let timer1 = setTimeout(() =>{
    console.log('abc');
},2000);
clearTimeout(timer1);

let timer2 = setInterval(()=>{
    console.log('xyz');
},1000);
clearTimeout(timer2);


// 2.5 思考题: 最近zhufeng打印的时间间隔是多少? 100
// setInterval() 在执行时传递实参,如果传了一个变量,如果这个蛮代表的是一个基本数据类型的值,直接把这个值传给函数,如果变量代
// 表的是一个引用数据类型,则是把堆内存地址传给函数;
let t = 100;
setInterval(() =>{
    console.log('zhufeng');
},t);
setTimeout(() =>{
    t = 5000;
},50);





