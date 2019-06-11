/*
* 目标:
*   1. 理解正向预查和负向预查
* */

// 正向预查
let reg = /x(?=)y/; //匹配x.仅当x后紧跟一个y; (匹配紧跟着y的x);

// 负向预查(?!)
let reg2 = /x(?!y)/; // 匹配x,仅当x后面没有y的; (匹配后面没有y的x);

let str = 'a1 b2 c3 d4';
let reg3 = /[a-z](?=3|4)/g;
console.log(reg3.exec(str)); // c
console.log(reg3.exec(str)); // d
console.log(str.match(reg3)); // [c, d]

let reg4 = /[a-z](?!3|4)/g;

console.log(reg4.exec(str)); // a
console.log(reg4.exec(str)); // b
console.log(str.match(reg4)); // [a, b]