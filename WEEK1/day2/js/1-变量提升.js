/*
* 目标：
*   1. 理解变量提升(预解释)机制
*   2. 掌握变量提升对var 和function的不同处理机制
* */

console.log(num);
var num = 100;
console.log(num);

console.log(fe);
fe();
function fe(){
    console.log("前端工程师");
}
fe();

/*
* 变量提升（预解释、预处理）：在js代码执行之前，浏览器会对所有带var和function的进行提前的声明或定义；
* 声明（declaration）:声明一个变量，告诉浏览器有这么一个变量；
* 定义（define）:给变量赋值；
* 对带var的变量只声明不定义，变量声明后不定义其默认值是undefined；
* 对带function的变量（函数名），声明并且定义；
*
* 完成变量提升后，js代码才会从上到下执行
* */

console.log(getName);
var obj ={
    name: "珠峰培训"
};
console.log(age);
var age = 10;
function getName(){
    console.log('your name')
}