class MyPromise {
    constructor (excutor) {
        this.state = 'pending'; 
        this.fulfilledEvent = []; 
        this.rejectedEvent = []; 
        this.value = undefined; 
        let resolve = (result) => {
            if(this.state !== 'pending') return;
            this.state = 'fulfilled';
            this.value = result;
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
            excutor(resolve, reject); 
        } catch(e){
            reject(e);
        }
    }
    then (resolveFn, rejectedFn){
        this.fulfilledEvent.push(resolveFn);
        this.rejectedEvent.push(rejectedFn);
    }
}

/*new MyPromise((resolve, reject) => {
    console.log(3);
    throw '111';
    reject('xyz');
}).then((res) => {
    console.log(1);
}, (err) => {
    console.log(2);
});
console.log(4);*/

