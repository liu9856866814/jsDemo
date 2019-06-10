/*
* 目标：
*   1. 理解严格模式的意义；
*   2. 严格模式和松散模式的常见区别
* */
// 一般情况下，js运行在松散模式下的。为了让语言越来越规范，引入了严格模式。
// 使用严格模式：在脚本的第一行增加一个字符串"use strict"
'use strict'; // 表示当前脚本使用严格模式解析

// 在松散模式和严格模式中的一些不同：
// 1. 在严格模式下，函数形参和arguments不再存在映射关系；
function sum(a, b) {
    b = 15;// 松散模式下，形参和arguments存在映射关系，如果在函数中修改形参的值，arguments中对应的值也会跟着修改
    console.log(arguments); // 松散模式：[1,15]  严格模式：[1, 2]
}
sum(1, 2);

// webpack 打包时，会把js文件默认添加"use strict";

// 2. 严格模式下，call不传参时，函数中的this是undefined;
// 严格模式下，call谁，函数中的this就是谁；
// call 方法改变this的；
function sum2(a,b) {
    console.log(this);
}
var obj = {
    name: 'zhufeng'
};
/* 松散模式下的：
sum2(); // window
sum2.call(obj); //obj

sum2.call(); // window
sum2.call(null); // window
sum2.call(undefined); // window*/
// 严格模式下：
sum2(); // undefined
sum2.call(obj); //obj

sum2.call(); // undefined
sum2.call(null); // null
sum2.call(undefined); // undefined

// 3. 严格模式下不能给未声明的变量赋值，如果赋值就会报销；
// aa = 1; 严格模式下会报错
console.log(aa);
console.log('aa' in window);


