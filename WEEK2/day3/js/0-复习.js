/*
* 面向对象：封装、继承、多态（重写和重载）
* 类（构造函数）：类都是一个函数数据类型的，并且每个类都自带一个属性prototype;
* 原型（prototype）:原型是一个对象数据类型的值，原型是用来存储这个类的共有的属性和方法的。在原型对象上天生自带一个特殊属性
* ，constructor属性，这个属性的值指向当前类（构造函数）本身；
* 对象：实例对象、原型对象、函数对象都有一个特殊的属性：__proto__,它的值指向当前对象所属类的原型。
*
* 原型链：属性的查找机制，当我们 对象.属性名 时，首先在私有属性中查找，如果找到就使用私有的属性；如果没找到，通过对象的
* __proto__ 属性找到当前实例对象所属类的原型，在原型对象（公有属性）中查找，找到就使用公有属性；如果还没找到，通过原型对
* 象的__proto__继续向上查找，一直找到Object的原型为止,如果还没有就返回undefined;
* */

/*
* Function类：函数类。
* 1. 所有函数（普通函数、构造函数）都是Function类的实例；
* 2. 内置类：Array/Object/RegExp/Date/Function都是函数数据类型的值；所以这些内置类都是Function的实例；
* 3. Object 和 Function之间的关系；
*   3.1 Object是Function的实例，Object.__proto__ 指向Function.prototype
*   3.2 Function.prototype.__proto__ 指向 Object.prototype
*   3.3 因为Object是基类，所以Function又是Object的实例；
* */
console.log(Array instanceof Function); // true
console.log(Object instanceof Function); // true

/*
* call/apply/bind 是用来修改this指向的；
* 1. 事件函数中的this是绑定该事件的函数
* 2. 自执行函数中的this指向window;
* 3. 定时器中的回调函数this指向window;
* 4. 全局作用域中的this指向window;
* 5. 方法调用时this指向看方法名前面有没有点，如果有点，点前是谁方法中的this就是谁，如果没有点方法中的this就是window
* 6. 箭头函数中的this指向箭头函数声明时所在作用域的this;
* 7. 构造函数中的this指向当前实例（原型上的方法中的this不一定是实例，还需要看这个方法是谁调用的）
* 8. call/apply/bind 修改函数中的this;
*
* call(ctx, 实参1， 实参2...) 方法：修改函数中的this，并且让修改this的函数执行；
* call方法的第一个参数ctx，是修改this指向的，新的this指向ctx
* 实参1、实参2...：是传递给函数的实参；
* apply(ctx, [实参1， 实参2,....])方法：修改函数中的this，并且让修改this的函数执行；
* call方法的第一个参数ctx，是修改this指向的，新的this指向ctx
* [实参1、实参2...]：apply以数组的方式打包传递实参；
* bind(ctx, 实参1， 实参2...) 方法：修改函数中的this，并且返回一个修改this后的新函数；（不会执行函数）
*
*
* */
/*let btn = document.getElementById('btn');
btn.onclick = function () {
    // 这个函数就是事件函数:把函数赋值给元素对象的事件属性，这个函数称为事件函数
    console.log(this);
};*/

/*var name = 'your name';
function Fn() {
    this.name = 'name';
    this.age = 'age';
}
Fn.prototype.getName = function () {
    console.log(this.name);
};
let f = new Fn();
f.getName(); // 此时getName中的this是f实例
Fn.prototype.getName(); // 此时getName中的this指向Fn.prototype
f.__proto__.getName(); // 此时getName中的this还是Fn.prototype
var g = Fn.prototype.getName;
g(); // 此时getName中的this指向window*/

function sum(a,b) {
    console.log(this);
    console.log(a, b);
    return a + b;
}
let obj = {
    id: '17'
};
sum(1,2); // this -> window
sum.call(obj,1,3); // this -> obj; 1,3 是传递给sum的实参

//以下情况修改this无效
// sum.call(undefined,1,2);
// sum.call(null,1,2);
// sum.call();

// sum.apply(obj,[12,11]);

//null,undefined，不传  函数中的this不受影响
// sum.apply(null,[2,4]);
// sum.apply(undefined,[3,4]);
// sum.apply();

// ? 有这样一个方法r,参数是一个一个的，我们想把数组作为参数传给r方法？怎么做？
function r(a,b,c,d) {
    return a + b - c + d
}
var ary = [12,1,3,15];
sum.apply(null,ary); // 我们利用了apply方法可以传一个数组作为实参的特性，但是我们并不想修改r方法中的this，所以第一个参数
// 传null

// bind
function ok(a, b, c) {
    console.log(this);
    console.log(a, b, c);
    return a + b + c;
}
var o2 = {
    that: '123'
};
// ok(1,3,4); // this -> window
var ok1 = ok.bind(o2,1,2,3); // bind只是修改this返回新函数，不会执行函数
ok1(); // 在执行新函数时，一个实参都没传，但是我们发现 a/b/c 三个形参都有值，还是bind时传的参数；bind不仅能够绑定函数中的
// this，还可以绑定参数；

let ok2 = ok.bind(o2,1); // {ok2 a 已经被绑定为 1
let ok3 = ok.bind(null,12); // ok3 a 上一步绑定的1，b被绑定成12
let ok4 = ok.bind(null,13); // ok4 a = 1; b = 12; c = 13;
ok4(); // {that:'123'} 1 12 13

function curryingOk(a) {
    // a 保存在此作用域
    return function (b) {
        // b 保存在此作用域
        return function (c) {
            // c 保存在此作用域
            return a + b + c;
        }
    }
}
var r = curryingOk(1)(2)(3);
console.log(r);

// 用bind方法实现函数柯里化；
let bind1 = ok.bind(null,1); // 给a 绑定1
let bind2 = bind1.bind(null,2); // 给b 绑定2
let bind3 = bind2.bind(null,3); // 给c 绑定3
var r2 = bind3();
console.log(r2);

