// 宏任务和微任务是等待任务队列中的异步任务的处理机制;

// 浏览器的任务队列:
// 主任务队列存储的都是同步任务;
// 等待任务队列存储的都是异步任务;

// 首先浏览器会把主任务队列中的同步任务挨个全部执行完, 然后再去等待任务队列中看哪个任务可以执行了,然后把该执行的任务放到
// 主任务队列中去执行, 等这个任务执行完,再去等待任务中看谁可以执行了,再把这个任务放到主任务队列中执行... 如此循环.这种循
// 环叫做事件循环(Event Loop)

// 异步任务都是谁先到达条件谁先执行,但是谁先到达执行条件也有优先级的问题,这个优先级要看这个任务是宏任务还是微任务;微任务
// 的优先级比宏任务的要高;

setTimeout(function () {
    console.log(1)
}, 0);
console.log(5);

let p = new Promise((resolve, reject) => {
    console.log(2);
    resolve(); // resolve执行并不是让then里面回调函数立即执行,resolve执行只是告诉then的回调函数到达执行条件了;而then里面的
    // 回调函数是异步执行的;需要等着所有的同步任务执行结束
    console.log(3);
});
console.log(6);
p.then(() => {
    console.log(4)
});
console.log(7);
// 5 2 3 6 7 【主任务队列中的同步任务都执行完了】4 1

// 为什么4先输出了？
// 因为定时器是宏任务，then里面的回调函数是微任务；因为微任务的优先级比宏任务的高，所以微任务先执行；所以先输出4

// 当主任务队列中同步任务执行完,先去等待任务队列中把所有的微任务找到,并且执行这些微任务执行完;等微任务执行完,再去把宏任务
// 找出来并且执行;

// 哪些是微任务:
// 1. Promise的then的回调函数
// 2. async 函数await下面的代码;
// 3. process.nextTick

// 哪些是宏任务:
// 1. 定时器(setInterval 和 setTimeout)

console.log(1);
setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => {
        console.log(3);
    })
},0);
Promise.resolve().then(() => {
    console.log(4);
}).then(() => {
    console.log(5);
});
console.log(6);



