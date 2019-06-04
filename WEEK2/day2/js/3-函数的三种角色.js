/*
* 目标：
*   1. 理解函数的三种角色；
*   2. 学习利用函数的三种角色解决问题
*
* */

// 在js中函数有三种角色：
// 1. 普通函数 （函数名、形参、实参、返回值）
function sum(a,b) {
    return a + b;
}// 函数定义
var result = sum(1,3);// 函数执行
console.log(result);
// 普通函数执行的过程：
// 1.1 新开辟私有作用域
// 1.2 形参赋值（形参也是私有作用域中的私有变量）
// 1.3 私有作用域中变量提升（变量只发生在当前作用域）
// 1.4 函数代码执行
// 1.5 私有作用域销毁（注意特殊情况作用域不销毁）

// 2. 构造函数、类（new 构造函数）: 必须通过new 调用时，函数才能成为构造函数；
function Teacher(name,age,subject,from) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.from = from;
}
let t1 = new Teacher('马宾',27,'JS','珠峰'); // 此时Teacher被new调用，Teacher才是真正成为一个构造函数
// let t2 = Teacher('mabin',27,'JS'); 普通调用时，Teacher还是普通函数
// new 调用构造函数执行过程：
// 2.1 新开辟私有作用域
// 2.2 形参赋值
// 2.3 私有作用域中变量提升
// 2.4 隐式的创建一个实例对象，把当前作用域中的this指向这个实例对象
// 2.5 执行函数中代码； this.xxx = xxx 给实例添加私有属性
// 2.6 隐式返回this实例
// 2.7 销毁私有作用域


// 3. 对象，和普通对象一样，键值对的集合（操作起来和普通对象一样）
function minus(a, b) {
    return a - b;
}
console.dir(minus);
// length: 函数形参个数
// name: 'minus' 函数的名字
console.log(minus.name);
console.log(minus.length);
minus.by = 'mabin';
minus.getName = function(){
    console.log('my name is lyt');
};
console.dir(minus);
minus.getName();
// 我们把函数当成一个普通对象时，通过 函数名.属性名 = 属性值的方式添加的属性都是函数对象的私有属性；当你需要访问这些属性时，
// 只能通过 函数名.属性名 的方式；

function Fn() {
    this.name = 'boy';
}
Fn.getName = function (){
    console.log('MY_NAME');
};// 把Fn当成一个对象添加一个私有属性
// Fn.prototype.xxx = xxx; // 只有通过 Fn.prototype.xxx = xxx 这样的形式才是给Fn的原型添加属性
let f1 = new Fn();
f1.getName(); // ? 类型错误 实例能够使用的属性要么是私有属性（在构造函数中 this.xxx = xxx 得来的），要么就是实例所属类的
// 原型(链)上的属性；

Fn.getName(); //
// 向上面这样把函数当成一个普通对象，给其添加的属性和方法称为静态属性或方法；

// 内置类Array的一个静态方法：
// Array.isArray() 把Array 当做普通对象使用，isArray 是一个静态方法；判断一个值是否是一个数组,是数组返回true,不是返回false
// ES6新增的，注意老旧浏览器不兼容
console.log(Array.isArray(1)); // false
console.log(Array.isArray([1, 2])); // true













