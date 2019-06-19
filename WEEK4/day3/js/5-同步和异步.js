// js执行时,浏览器会把代码分为同步执行任务和异步执行任务;

// 1. 同步和异步
// 同步任务: 当前任务按顺序执行,如果当前这个任务没有完成,下一个任务不能开始;
// 异步任务: 当前任务需要过一段时间或者执行时机不确定(定时器里面的回调就是过一段时间才会执行,事件就是执行时机不确定),浏览器
// 不会傻傻的等着这件事情完成,而是先去做后面的事情,等把后面的事情都做完,再去看这些任务;

// 2. 常见的异步情形:
// 2.1 定时器的回调函数都是异步执行
// 2.2 所有的事件函数都是异步执行
// 2.3 ajax的异步情形(open 的第三个参数是true就是异步)
// 2.4 回调函数也可以是异步执行

/*
let n = 0;
setTimeout(() =>{
    n++;
},1000);
console.log(n); // n 是多少? 0; 为啥? console.log(n)并没有等着上面的定时器执行,因为如果等了定时器执行,n就变成了1,输出结果
// 就会变成1,而现在是0,所以没等;
*/

// 异步编程: 编写异步处理程序就是异步编程;JS最大的特色就是异步和事件机制;

// 3. 浏览器如何实现异步的?
// js是一个单线程的,它一次只能干一件事;能够实现异步,依赖于浏览器的任务队列机制;任务队列分为两种:
// 主任务队列: 主任务队列中放的都是当前需要同步执行的任务;
// 等待任务队列: 把不需要立即执行的任务都放到等待任务队列中;

// 首先执行主任务队列中的任务,当主任务队列中的任务【都执行完了】,再去等待任务队列看看哪些任务可以执行了(等待任务到达了执行条件,
// 例如定时器到时间),如果有多个任务都满足条件了,那么看谁先到达了执行条件,谁先执行;

/*setTimeout(() => {
    console.log('abc');
},1000);
while (true){}*/
// while (true){} 是同步任务，死循环，永远执行不完。就是主任务队列中的任务永远执行不完，就永远不会去执行等待任务队列中的
// 任务；即便是过了1s，abc也无法打印出来；

// 冒烟测试：测试主流程和主要功能，保证其通畅性；冒烟测试通过是基本的准入标准；

// => 思考题
setTimeout(() => { // 等待任务
    console.log(1);
}, 2000);
console.log(2);
setTimeout(() => {
    console.log(3)
}, 3000);
console.log(4);
setTimeout(() => {
    console.log(10)
}, 0);
for(let i = 0; i < 9999999; i++) {}
console.log(5);
setTimeout(() => {
    console.log(6)
}, 1400);
console.log(7);
setTimeout(() => {
    console.log(8)
}, 1500);
console.log(9); // 输出顺序： 2 4 5 7 9 10 6 8 1 3

// setTImeout(() =>{}, 0) 定时器写0，也不是同步执行；所有的定时器（定时器的回调函数）都是异步的。即便写0,也需要把主任务队列
// 中的同步任务执行完,才会去执行它.即便是主任务队列中的事件用的时间无论多少,也是需要时间的,这个时间叫做定时器的最小反应时间,如果
// 设置的时间比这个值还小,最后定时器使用的还是最小反应时间;(这个时间和硬件以及操作系统有关)

// 当主任务队列中的任务从上到下执行时,遇到一个异步任务,浏览器不会等着这些异步任务执行,而是把他们添加到等待任务队列中排队;

// 当主任务队列中的任务执行完成后,才会去等待任务队列中(如果主任务队列中的任务没执行完,即使等待任务队列中的任务到时间了,也不会执行);

// 等待任务队列中谁先到达执行条件了(如果有多个,谁先到的先执行谁),就把这个任务拿到主任务队列中执行它,等执行完再去等待任务找...









