/*
* Promise 是ES6新增的一个类，用来管理异步的；
* */

let p = new Promise(function (resolve, reject) {
    // 在这个回调函数中处理异步
    // resolve 异步处理成功后执行的回调
    // reject 异步处理失败后执行的回调

    // .... 异步的操作
    setTimeout(()=>{
        resolve();
    }, 3000);
});
p.then((result) =>{
    // 这个回调就是resolve
},(error) =>{
    // 这个回调就是reject
});

console.log(p);

// promise实例（对象）有三种状态：
// pending: (已经准备好：已经初始化成功，开始执行异步任务)
// fulfilled: (成功：异步处理成功)
// rejected: (失败：异步处理失败)

// promise的状态是由pending变为 fulfilled 或者 rejected, 状态一旦发生变更就会凝固(不会再变化);

let p2 = new Promise(function (resolve,reject) {
    // 这个回调函数在创建Promise实例时就会同步执行,所以才能先输出2
    setTimeout(()=>{
        console.log(3); // 最后输出3
    },2000);
    console.log(2); // 先输出2
});
p2.then((result)=>{
    // console.log('');
});
console.log(1); // 再输出1

// ?? 怎么管理异步呢?

new Promise((resolve,reject)=>{
    // Promise 的回调函数有两个形参: resolve和reject ,并且这两个参数都是回调函数;
    // resolve: 异步处理成功后执行的回调函数
/*    setTimeout(()=>{
        resolve('oh yeah!') // resolve 是then方法的第一个参数
    },3000)*/
    setTimeout(()=>{
        reject('完蛋了') // reject 是then方法的第二个参数
    },3000)
}).then((result)=>{
    // 这个then的第一个参数就是resolve(现在可以这么说,事实上不是)
    // 如果resolve(),就会执行这个方法,我们想在异步处理成功后做的事情要写到这个方法中;
    console.log('then方法的第一个参数输出的结果: ', result);
},(error)=>{
    // 这个then的第二个参数
    // 如果reject() 就会执行这个函数,如果异步处理失败了之后的处理要写在这个函数中
    console.log('then 方法的第二个参数输出的结果: ', error);
});


