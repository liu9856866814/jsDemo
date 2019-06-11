/*
* 目标:
*   1. 理解正则捕获的贪婪性
*   2. 掌握取消正则贪婪性的方法
* */
let str = '1234567890';
// let reg = /\d{2,6}/;
// let reg2 = /\d*/;
// let reg3 = /\d+/;
//
// console.log(reg.exec(str));
// console.log(reg2.exec(str));
// console.log(reg3.exec(str));

// 正则的贪婪性:正则在捕获的时候,一旦匹配后,按照最多的个数进行捕获.
// 解决正则的贪婪性: 在量词元字符后面增加 ? ,按照最低的限度去捕获
let reg4 = /\d{2,6}?/;
let reg5 = /\d*?/;
let reg6 = /\d+?/;

console.log(reg4.exec(str));
console.log(reg5.exec(str));
console.log(reg6.exec(str));
