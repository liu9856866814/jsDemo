/*
* 目标：
*   1.
*   2.
* */
// 工厂函数
function teacher(name,age,subject,from = '珠峰') {
    var obj = {};// 原材料
    obj.name = name;// 加工
    obj.age = age;// 加工
    obj.subject = subject;
    obj.from = from;
    obj.teach = function () {
        console.log(`${this.name} 老师教 ${this.subject}`);;
    };
    return obj;// 出厂
}
// 构造函数
function Teacher(name,age,subject,from) {
    var address = '河北'; //这是一个私有变量，不会添加到实例中。只有通过this.xxx = xxx 这种方式才能将属性添加到实例中。
    function sum(a,b) {
        return a + b;
    }//和构造函数无关，只是普通的函数
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.from = from;
    this.teach = function () {
        console.log(`${this.name} 老师教 ${this.subject}`);
    }
}

let t2 = new Teacher('jiangwen',19,'Architect','珠峰');
let t3 = Teacher('renjinhui',19,'JS');//此时，是一个普通函数，没有return所以值是undefined;
console.log(t2);// Teacher 的实例
console.log(t3);// undefined
function fn() {
    console.log(12);
}
var f = new fn;
console.log(f);// fn {}

// new fn; new 操作符可以让函数执行,通过new调用，这个函数就会被当做构造函数对待，返回一个实例对象；
// new执行和函数普通执行有很明显的区别。之所以会有这种区别，是因为函数普通执行和new执行有很大的区别;

// 普通函数执行机制：
// 1. 开辟私有作用域
// 2. 形参赋值
// 3. 变量提升
// 4. 代码执行
// 5. 销毁栈内存

// new 构造函数执行：
// 1. 开辟作用域
// 2. 形参赋值
// 3. 变量提升
// 4. 隐式创建一个属于当前类的实例对象，然后把this指向这个实例对象。
// 5. 执行构造函数中的代码，如果遇到this.xxx = xxx;就是给实例添加私有属性。
// 6. 隐式返回这个实例对象，相当于return this;
// 7. 销毁栈内存（构造函数的作用域销毁与否和普通函数一样）

// 构造函数的this 指向当前构造函数的实例对象；


