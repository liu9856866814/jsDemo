class MyPromise {
    // excutor 意思 执行器
    constructor (excutor) {
        // this 是构造函数的实例, this.xxx = xxx 向实例上添加私有属性;

        this.state = 'pending'; // promise 的状态, 默认是pending
        this.fulfilledEvent = []; // 成功的事件池
        this.rejectedEvent = []; // 失败的事件池
        this.value = undefined; // 用来记录resolve()或者reject()时传入的值
        let resolve = (result) => {
            // resolve的作用是修改状态为fulfilled,挨个执行成功事件池中的函数
            if(this.state !== 'pending') return; // promise的状态只能修改一次,只能从pending变为fulfilled或者从pending变为
            // rejected ,如果this.state 不是pending了,说明这个状态被改过了,后面的代码不能再执行了;

            this.state = 'fulfilled';
            this.value = result;
            // this.fulfilledEvent.forEach(item => item(this.value)); // fulfilledEvent里面收集的是then方法的回调函数,而then
            // 方法的回调都应该是异步执行的; 所以这里需要把执行事件池处理成异步的;
            let timer = setTimeout(() => {
                clearTimeout(timer);
                this.fulfilledEvent.forEach(item => item(this.value));
            },0);
        };
        let reject = (reason) => {
            if(this.state !== 'pending') return;
            this.state = 'rejected';
            this.value = reason;
            let timer = setTimeout(() => {
                clearTimeout(timer);
                this.rejectedEvent.forEach(item => item(this.value));
            }, 0)
        };
        try {
            excutor(resolve, reject); // 这个位置 一会问下倩倩
        } catch(e){
            reject(e);
        }
    }
    then (resolveFn, rejectedFn){
        // this.fulfilledEvent.push(resolveFn);
        // this.rejectedEvent.push(rejectedFn);
        return new MyPromise((resolve, reject) => {
            this.fulfilledEvent.push((result) => {
                try{
                    let x = resolveFn(result); // 这一段有点绕
                    x instanceof MyPromise
                        ? x.then(resolve, reject)
                        : resolve(x);
                    resolve(x);////////////////////////////
                }catch (e) {
                    reject(e);
                }
            });
            this.rejectedEvent.push((reason) => {
                try {
                    let x = rejectedFn(reason);
                    x instanceof MyPromise // 判断x是否是MyPromise的实例
                        ? x.then(resolve, reject) // x 是一个promise实例,x是resolve还是reject决定后面(p2)的then哪个回调执行;
                        // x如果resolve了,就应该执行p2.then的第一个回调,如果x reject了,会执行p2的第二个回调;
                        // 我们发现x的状态决定了p2的状态; 我们现在把控制p2状态变为resolve的resolve函数添加到x的成功事件池中,
                        // 把控制p2状态变为 rejected的reject方法添加到x的失败事件池中;
                        // 如果x现在变为resolve了, 就会执行x成功的事件池中的函数; 在x的成功事件池中有一个控制p2 resolve的方法,
                        // 执行了它,p2就变成resolve了; 对应的,如果x变为rejected了, 就会执行x的失败的事件池,就会把p2的reject
                        // 方法执行了,p2就变成了rejected;
                        : resolve(x);
                    resolve(x);
                }catch (e) {
                    reject(e);
                }
            })
        })
    }
}

let p1 = new MyPromise((resolve, reject) => {
    console.log(3);
    resolve('xyz');
});
let p2 = p1.then((res) => {
    console.log(1);
    return new MyPromise((resolve, reject) => {
        resolve();
        // reject();
    })
}, (err) => {
    console.log(2);
});

p2.then((res) => {
    console.log(4);
}, (err) => {
    console.log(5);
});



