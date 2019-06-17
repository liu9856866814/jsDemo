/*
*
* 2. 开启严格模式：在脚本的第一行添加 "use strict" 字符串
// * 3. 严格模式下和松散模式
*       3.1
*       3.2 在严格模式下,call啥,函数中的this就是啥,call方法不传参,函数中的this就是undefined;
*       3.3
*
*
* */
'use strict';
function sum(a,b) {
    b = 10;
    console.log(arguments);// 1 2
}
sum(1,2);

var obj = {
    id: 1
};

sum.call(); // this -> undefined
sum.call(undefined); // this -> undefined
sum.call(null); // this -> null

some = 'abc'; // 松散模式下 -> window.some = 'abc';
// 严格模式下: 报错 Uncaught ReferenceError: some is not defined 引发Reference的原因大多娄情况下因为引用了未声明的变量



