/*
* 目标：
*   1. 理解闭包
*   2. 了解闭包常见用途
* */

/*
* 闭包：
* 珠峰解释：函数执行形成私有作用域，在私有作用域中声明变量不受外界影响，这种机制叫做闭包；
* */
// 市面解释：形成一个不销毁的作用域，才是闭包；
function foo() {
    return function () {
        console.log('市面上认为函数return函数才是闭包');
    }
}
var f = foo();

// 闭包的作用：
// 1. 函数柯里化（柯利华函数）：把多参数的函数变成单参数的函数
function sum(a,b,c){
    return a + b + c;
}
// 改造sum为fun，调用方式如下：（函数柯里化）
function fun(a){
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

fun(1)(2)(3);//6

// 2. 利用闭包机制隔离全局命名空间：在过去没有模块规范时，大家通常用这种方式区分命名空间；
var count = 5;
(function () {
    var count = 6;// count 是私有变量，和全局的count没有关系。使用闭包实现命名空间隔离的效果
})();

// 3. 惰性封装
var utils = (function () {
    var version = '1.0.2';
    function sum(a,b) {
        return a + b;
    }
    function minus(a,b) {
        return a - b;
    }
    return {
        sum: sum,
        minus: minus
    }
})();

// 4. 利用闭包不销毁保存数据：累加计数、选项卡的闭包解决方案







