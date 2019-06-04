/*
* 目标：
*   1. 理解所有函数都是Function的实例
*   2. 理解Function和Object的关系
* */
// 内置类：Array Object RegExp Date Function (函数类)
// Function 类：所有的函数都是Function类的实例。

// 内置类的数据类型：所有的内置类都是一个函数数据类型
console.log(typeof Array); // 'function'
// 所有，所有的内置类都是Function的实例。所以这些内置类有一个__proto__属性，它的值指向Function的prototype

console.dir(Array);
console.log(Array.__proto__ === Function.prototype);
console.dir(Function.prototype);// 有一堆方法：call/apply/bind等方法，所以只要是函数就能使用这些方法，因为这些方法属于
// Function.prototype

console.dir(Object);// Object 的构造函数
console.dir(Object.__proto__ === Function.prototype);// true
// Object构造函数也是Function类的实例
console.log(Date.__proto__ === Function.prototype);// true
console.log(Array instanceof Function);// true
console.log(Date instanceof Function);// true
console.log(RegExp instanceof Function);// true
console.log(Object instanceof Function);// true

function sum(a,b) {
    return a + b;
}

console.log(sum instanceof Function); // true 自定义的函数也是Function的实例；
console.log(sum.__proto__ === Function.prototype);// true

// 2. Function类也有自己的原型prototype
console.log(typeof Function); // function
console.dir(Function.prototype.__proto__ === Object.prototype); // true 说明Function.protoype的__proto__ 属性指向Object
// 的原型（prototype）;

// Object和Function的关系
// 1、Object是Function的实例，所以Object.__proto__ 指向Function.prototype
console.log(Object.__proto__ === Function.prototype); // true
// 2. Function 是一个类，但是Function.prototype是一个对象，所以，Function.prototype也有一个__proto__的属性，它的值指向
// Object.prototype.
console.log(Function.prototype.__proto__ === Object.prototype); //true;
// __proto__ 是实例用来找原型的，Object是构造函数，Object.__proto__ 找原型，Object是谁的实例呢，是Function的实例，
// Object.__proto__找的就是Function的原型prototype;

// Function.prototype 是对象，所以Function.prototype.__proto__是在prototype的原型，就是在找对象的所属类的原型，
// 对象所属类是Object,所以找到Object.prototype;
// Function 是一个类，也是一个函数，所以Function是自己的实例
console.log(Function.__proto__ === Function.prototype); // true
console.log(Function instanceof Function);// true

