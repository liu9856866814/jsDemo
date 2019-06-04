/*
* 目标：
*   1. call/ apply/ bind 作用用法
*   2. call/ apply/ bind 三个方法有什么区别
* */

// console.dir(Function.prototype);
// 1. 事件函数中的this是绑定当前事件的元素
// 2. 自执行函数中的this指向window
// 3. 定时器回调函数中的this指向window
// 4. 全局作用域中的this是window
// 5. 方法调用时，看方法名前有没有点，有点的话，点前面是谁方法中的this就是谁，如果没有点，方法中的this就是window
// 6. 箭头函数中的this指向声明时所有作用域中的this
// 7. 构造函数中的this指向当前实例
// 8. call/apply/bind 用来修改this指向

function sum(a,b) {
    console.log(this);
    console.log(a, b);
    return a + b;
}
var obj = {
    id: '0511120117'
};
// sum(1,2); // window

// 1. call
// 作用：修改函数中的this指向,并且把修改this后的函数执行
// 语法：函数名.call(ctx, 实参1， 实参2...)
// 参数：ctx 就是用来替换函数中this的对象，从第二个参数起，都是传递给函数的实参
// sum.call(obj,2,3); // call之后，sum中的this就变成了obj

// 用call指定undefined和null作为this无效；
// sum.call(undefined,3,4);
// sum.call(null,1,3);
// sum.call();

// 2. apply()
// apply方法和call方法作用一样，修改函数中的this,并且让这个修改this之后的函数执行；
// 但是传参方式不同;call方法是一个一个的传递实参给sum的，apply是把实参都放到一个数组中，数组项是传递给sum的实参；

// sum.apply(obj,[11,22]);
// var ary = [1,2,3,4,5];
// sum.apply(obj,ary);


// 3. bind()
// 作用：修改函数中的this.返回一个修改this后的新函数；不会让函数执行。
// 语法：
let sum2 = sum.bind(obj,3,2); // 传参时和call一样，需要一个一个传；
console.log(sum2);
console.log(sum === sum2); // false 因为sum2是一个新函数
sum2();// 修改this后，需要自己执行一次这个函数

// call和apply 是修改this并且让函数执行，call是一个一个的传参，apply传递一个数组
// bind是只修改this返回修改this后的新函数，并不会让函数执行

