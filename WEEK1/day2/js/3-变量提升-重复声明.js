/*
* 目标：
*   1.理解变量重复声明时的var和function的不同
*   2.同名变量多次声明，只会声明一次，值是最后一个
*   3.变量提升时function的优先级高于普通变量
*
* */

// 1. 变量多次声明时，浏览器不会多次重复声明，只声明一次
var num;
var num=11;
var num=112;
var num=13;
var num=14; // 虽然num声明四次，但浏览器只声明一次，值是最后一次被赋值的 14；
function fn(){
    console.log(1);
}function fn(){
    console.log(2);
}function fn(){
    console.log(3);
}
console.log(num);
fn();// fn函数写了3次，但是浏览器只声明一次，值是最后一次被赋值的log(3)的函数；

console.log(fe);//fe函数体
var fe = '123';
console.log(fe);//'123'
function fe(){
    console.log("FE from zhufengpeixun")
}
fe();// Uncaught TypeError: fe is not a function [未能捕获的类型错误：fe 不是一个函数]

// 当函数名和变量重名时，函数的优先级比变量的优先级高。在变量提升阶段，变量名只会声明一次，但是var fe 先得到undefined
// 接着因为函数又要赋值，所以fe这个变量就被赋值成了函数。所以只要不执行 var fe = '123'时，fe一直就代表函数。一旦执行过var fe ='123',接下来fe就代表‘123’；
