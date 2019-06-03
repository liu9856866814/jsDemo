/*
* 目标：
*   1. 理解内置类的原型
*   2. 理解原型链的对象属性
* */

// 原型（prototype）:函数都有一个prototype的属性，并且它的值是一个对象；如果这个函数被用来当做类（构造函数）来使用，此时
// prototype是用来存放这个类的公有属性和方法的；
// 原型链: 每个对象（实例对象、prototype对象）都有一个__proto__属性。当 对象.属性名 时，会首先在私有属性中查找，如果私有
// 属性没有，就通过实例的__proto__ 去当前实例所属类的原型上查找，如果原型上还没有，就通过原型的__proto__继续向上查找，一
// 直找到Object的原型，如果还没有就返回undefined；

function Fn() {
    this.name = 'name';
}
// 1. 向原型上增加属性的方式：

// 1.1 向原型对象上增加属性和方法
/*Fn.prototype.say = function () {
    console.log('预祝自己税后30k');
};
Fn.prototype.hello = 'hello';
Fn.prototype.world = 'world';*/

var f1 = new Fn();// {name:'name'};

// 1.2 通过实例的__proto__给原型增加属性
/*f1.__proto__.say= function () {
    console.log('预祝自己税后30k');
};
f1.__proto__.hello = 'hello';
f1.__proto__.world = 'world';
console.log(f1);
f1.say();*/
// 实例__proto__ 不仅是只读的，还是可写的，所以不要轻易修改这个属性；

// 1.3 直接将原型指向一个新对象
var obj = {
    hello: 'hello',
    world: 'world',
    say: function () {
        console.log('税后30k');
    }
};
console.log(Fn.prototype); // 修改之前的Fn.prototype
Fn.prototype = obj;
console.log(Fn.prototype); // 修改之后的Fn.prototype
console.log(Fn.prototype.constructor);// Object 因为我们在修改Fn.prototype指向obj时，obj没有constructor，所以通过obj的
// __proto__找到Object的prototype,拿到Object构造函数；
// 这种方式在修改原型指向一个新对象后，需要重新指定构造函数：
Fn.prototype.constructor = Fn; // 重新指定构造函数
var f2 = new Fn;
f2.say();// 可以执行

// constructor 检测数据类型：
console.log([].constructor === Array);// true
console.log(/\d/.constructor === Array);//false
console.log(/\d/.constructor === RegExp);//true
// 但是，constructor可以被修改，容易导致检测结果不准确
Array.prototype.constructor = 1;
console.log([].constructor === Array); // false 因为此时Array.prototype.constructor 是1

// 面向过程、面向对象比较：
// 面向过程
/*
var name = '张三';
var age = 18;
var job = '搬砖';

var name2 = '李斯';
var age = 50;
var job = '丞相';

function eat() {
    console.log(`${name} 吃饭`);
}
function drink() {
    console.log(`${name} 喝两口`);
}
function sleep() {
    console.log(`${name} 睡觉`);
}

//张三
eat(name);
drink(name);
sleep(name);

//李斯
eat(name2);
drink(name2);
sleep(name2);
*/

// 面向对象
function Human(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
Human.prototype.eat = function () {
    console.log(`${this.name} 吃饭`);
    return this;// this 代表当前实例
};
Human.prototype.drink = function () {
    console.log(`${this.name} 喝两口`);
    return this;// this 代表当前实例
};
Human.prototype.sleep = function () {
    console.log(`${this.name} 睡觉`);
    return this;// this 代表当前实例
};
var zhangSan = new Human('张三',18,'搬砖');
/*zhangSan.eat();
zhangSan.drink();
zhangSan.sleep();*/

zhangSan.eat().drink().sleep(); // 链式调用的原理 就是在方法中return this;

var liSi = new Human('李斯',50,'丞相');
/*liSi.eat();
liSi.drink();
liSi.sleep();*/
liSi.eat().drink().sleep();





