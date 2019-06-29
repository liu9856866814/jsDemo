class Subscribe {
    constructor (){
        // 事件池要私有
        this.pond = [];
    }
    // 公有的方法
    isExist (fn){ // 判断某个事件池中是否包含某个订阅函数
        return this.pond.includes(fn);
    }
    addEvent (fn){ // 添加订阅
        if(!this.isExist(fn)) this.pond.push(fn);
        return this;
    }
    removeEvent(fn){ // 取消订阅
        if(this.isExist(fn)){
            this.pond = this.pond.filter(item => item !== fn);
        }
    }
    fire(...arg){
        this.pond.forEach(item => item(...arg));
    }
}

