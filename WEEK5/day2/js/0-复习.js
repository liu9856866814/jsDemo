/*
* 继承： 为了让子类能够使用父类的方法或者属性（公有、私有）
* */

// 1.原型链继承
function A() {
    this.text = 'A的私有的text';
}
A.prototype.say = function () {
    console.log('hello world');
}

function B() {
}
B.prototype = new A(); // 原型链继承：把子类的原型修改为父类的一个实例
B.prototype.constructor = B; // 改写B的原型对象后，需要重新指定constructor

// 原型链继承：把父类公有和私有的都成为子类公有的；

// 2. call继承（借用构造函数继承）：
function C() {
    this.text = 'C的私有属性text';
    // call继承时 this被修改为D的实例： D的实例.text = 'C.....'
}
C.prototype.say = function () {
    console.log('hello world');
};
function D() {
    // call继承： 在子类的构造函数中call执行父类的构造函数，把父类构造函数中的this修改为子类的实例（D函数中的this就是当前D的实例）
    C.call(this);
}
// call继承是继承父类私有的属性和方法；

// 3. 组合继承（原型链 + call继承）
function E() {
    this.text = 'E私有的text';
}
E.prototype.say = function () {
    console.log('hello world');
};
F.prototype = new E();
F.prototype.constructor = F; // 原型继承的缺点：需要重新指定constructor属性；
function F() {
    E.call(this); // call继承（借用构造函数继承）
}
// 组合继承的缺点：会多继承一份父类私有的；第一次来自于原型链继承时，把父类私有的放到子类的原型上；第二次来自于call继承时，
// 把父类私有变成了子类私有的。此时，子类的原型上有一份父类私有的，在子类私有的也有一份父类私有的；

// 4. 原型式继承
function G() {
    this.text = 'G私有的text';
}
G.prototype.say = function () {
    console.log('hello world');
};
function H() {}
// Object.create(protoObj) 返回一个指定了__proto__的新对象，这个新对象的__proto__指向protoObj
H.prototype = Object.create(G.prototype);
H.prototype.constructor = H; // 只要改写原型对象的指向，就需要重新指定constructor

// 5. 寄生组合式继承：call继承 + 原型式继承
// 把父类公有继承到子类的公有的，把父类的私有的继承到子类私有的。
function J() {
    this.text = 'J的私有的text';
}
J.prototype.say = function () {
    console.log('hello world');
};
function K() {
    J.call(this); // call继承（借用构造函数继承）
}
K.prototype = Object.create(J.prototype); // 原型式继承
K.prototype.constructor = K; // 重新指定constructor

// 6. 冒充对象继承：在子类的构造函数中创建父类的一个实例，然后for in循环遍历这个实例，把实例上的属性名和属性值添加到子类的实例上；
// 把父类公有和私有的都变成子类私有的
function L() {
    this.text = 'L的私有text'
}
L.prototype.say = function () {
    console.log('hello');
};

function M() {
    let l = new L(); // 创建一个父类的实例
    for(let key in l){ // for in 不仅可以遍历私有属性还可以遍历原型上的自定义属性(可枚举属性)
        this[key] = l[key];
    }
}

// 7. ES6 extends 关键字继承: 原理是寄生组合式继承

class Human {
    constructor (name, age, sex){
        // constructor中 this.xxx = xxx 给实例添加私有属性
        this.name = name;
        this.age = name;
        this.sex = seg === 0 ? '男': '女';
    }
    // 添加公有方法: eat drink sleep think
    eat (){
        console.log(`${this.name} 吃`);
    }
    drink (){
        console.log(`${this.name} 喝`);
    }
    sleep (){
        console.log(`${this.name} 睡`);
    }
    think (){
        console.log('who am i');
    }
}
class Teacher extends Human{ // 1. 在声明类进就使用extends关键字
    constructor (name, age, sex, subject, from){
        super(name, age, sex); // 2. 在子类的构造函数中,调用super(); super是父类的构造函数
        this.subject = subject;
        this.from = from;
    }
    teach (){
        console.log(`${this.name} 老师 教 ${this.subject}`);
    }
}
