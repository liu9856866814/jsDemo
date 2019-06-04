/*
* 目标：
*   1. 理解给构造函数设置返回基本数据类型的返回值和引用数据类型的返回值的区别；
*   2. 不要随意指定构造函数的返回值
* */

function Teacher(name,age,subject,from) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.from = from;
    this.teach = function () {
        console.log(`${this.name} 老师教 ${this.subject}`);
    };
    // return 1;
    // return {today:'六一' }
    // return this; this 就是这个类的实例，显示的return this并不会带来什么不良影响。
}


let mrJiang = new Teacher('姜文',19,'架构');
console.log(mrJiang);
console.log(mrJiang instanceof Teacher);// true

// 1. return 基本数据类型：构造函数不受影响，仍然正常返回实例。
// 2. return 引用数据类型：构造函数隐式返回的实例就会被return的这个引用数据类型的值所覆盖，并且返回值也不再是该类型的实例了。

//! 不要随意在构造函数中指定返回值；



