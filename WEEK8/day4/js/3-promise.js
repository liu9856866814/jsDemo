// Promise 用来管理异步的, Promise本身是同步的, then里面的回调函数是异步的;

let p1 = new Promise((resolve, reject) => {
    resolve();
    // reject();
    // throw '111';
    console.log(0);

});
let p2 = p1.then( () => {
    // 异步处理成功后执行的回调
    console.log(p1 === p2); // false, 说明 then 方法返回了一个新的Promise实例;
    console.log(1);
}, (err) => {
    // 异步处理失败执行的
    console.log(2);
});
p2.then();
