// Promise: ES6新增的类,用来管理异步的; Promise是同步的，new Promise时传递的回调函数会同步执行；

let p = new Promise(function (resolve,reject) {
    // 这个函数是同步执行
    // 函数里面放的是异步处理的任务
});

p.then(function (result) {
    // 异步处理成功后执行的操作写在then的第一个回调中
    console.log(result);
},function (err) {
    // 异步处理失败后执行的操作写在then的第二个回调中
    console.log(err);
});

// Promise实例有三种状态:
// pending: Promise实例初始化成功,正在处理异步
// fulfilled: 异步处理成功
// rejected: 异步处理失败

// Promise 对象的状态只能从pending变成fulfilled或者变成rejected;一旦发生改变,状态就会凝固,不能再发生变化;

let p2 = new Promise(function (resolve, reject) {
    // 这个回调是同步执行的,里面放的都是异步处理的任务
    // resolve 是一个函数,在异步处理成功后执行,有两个作用,第一, 把Promise实例的状态从pending变为fulfilled;第二,执行一个事件池
    // ,这个事件池中收集了所有then方法的第一个回调函数;
    // reject 是一个函数,在异步处理失败后执行;有两个作用,第一,把Promise实例的状态从pending变成rejected;第二,执行一个事件池,
    // 这个事件池中收集了所有then方法的第二个回调函数;

    // resolve或者reject在执行时收到的实参会传递给第一个then方法的回调函数;

    setTimeout(function () {
        // reject('xyz');
        resolve('abc'); // 因为Promise的状态一旦发生变化,就凝固了,不能再变化;
    },1000)
});
p2.then(function (result) {
    // then的回调函数的执行规律:
    // 第一个then比较特殊, 它的两个回调函数中哪个能执行取决于上面创建Promise实例时,到底是resolve还是reject.如果是resolve了,
    // 第一个then的第一个回调函数会执行,如果是reject了,那么第二个回调执行;

    // 后面的then方法中哪个回调能执行,由前面then方法中执行情况决定:
    // 1. 当前面then的回调函数没有返回Promise实例时,无论前面的then是哪个回调函数执行,都会执行第一个回调函数;前面then的回调
    // 函数的返回值会传给下一个then的回调函数;如果前面then回调执行时报错了,就会执行第二个,并且报错信息会传递给第二个回调
    // 2. 当前面then的回调返回了Promise实例时；后面then方法的哪个回调能执行，取决于前面then方法返回的Promise实例的状态；如果
    // 前面返回的实例resolve了，后面then的第一个回调就会执行;如果前面的实例reject了，后面then的第二个回调执行；并且
    // 前面的then的回调返回的实例resolve或者reject执行时收到的实参，会传给下一个then要执行的回调；

    // throw '就想报错';
    // console.log(1);
    // console.log(result);
    // return 'ok'
    return new Promise(function (resolve, reject) {
        // resolve('前面实例resolve');
        reject('前面实例reject');
    })
},function (err) {
    console.log(2);
    console.log(err);
    return '不ok';
}).then(function (result2) {
    // result2 是上面then回调函数的返回值
    console.log(3);
    console.log(result2);
}, function (err2) {
    console.log(4);
    console.log(err2);
});
