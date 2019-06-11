/*
* 目标:
*   1. 掌握正则的捕获方法
*   2. 正则捕获的懒惰性
*   3. lastIndex
*   4. match 方法
*   5. match和exec比较
*
* */

// 正则有两种处理,第一种是正则匹配(使用test方法);
// 第二种是正则捕获,把符合规则的字符串获取到.
// RegExp.prototype.exec() 方法
let str = 'hello2019 zhufeng2018 zhufeng2019';
let reg = /zhufeng\d+/;
let result = reg.exec(str);
// console.log(result);
// console.log(Array.isArray(result)); // true
// 字符串中有符合这个规则,正则捕获到的是一个数组,如果没有符合的规则,返回一个null;
/*
* ["zhufeng2018", 正则捕获的内容
*  index: 10, 符合正则规则的第一个字符的索引位置
*  input: "hello2019 zhufeng2018 zhufeng2019", 原始字符串
*  groups: undefined
* ]
* */
// console.log(reg.exec(str)); // ['zhufeng2018'...]
// console.log(reg.exec(str)); // ['zhufeng2018'...]

// 正则的懒惰性:正则在挺不错时,如果没有特殊处理时,每次从头开始找,找到符合规则的就停止捕获,即使后面还有符合条件的也不管了.
// 解决正则捕获的懒惰性:在正则后面加修饰符 g g表示全局匹配,即把所有的都找到;
let reg2 = /zhufeng\d+/g;
// console.log(reg2.exec(str));
// console.log(reg2.exec(str));
// console.log(reg2.exec(str));
// console.log(reg2.exec(str));
// 正则捕获每次只能捕获一个,即使加了g也只能捕获一个.但是加g后,多次执行捕获方法,可以把所有符合条件的字符串捕获到.

// 正则的lastIndex属性: 正则匹配或者捕获时下一次开始查找的索引位置;正则捕获时,根据lastIndex属性的值开始往后查找,当匹配到最后
// 一次的时候,后面就没有匹配的字符串时,返回null,同时lastIndex变成0,所以下一次再捕获时,又从头开始查找,如此往复,像一个循环一样.

// let str = 'hello2019 zhufeng2018 zhufeng2019';

console.log(reg2.lastIndex);
console.log(reg2.exec(str));
console.log(reg2.lastIndex);

console.log(reg2.exec(str));
console.log(reg2.lastIndex);

console.log(reg2.exec(str));
console.log(reg2.lastIndex);

// match 字符串的方法捕获
let r0 = reg.exec(str);
let r1 = str.match(reg); // reg 不带修饰符 g
console.log(r0);
console.log(r1);
// match方法使用的正则没有修饰符g时,match匹配的结果和正则exec捕获的结果是一样的

let r2 = str.match(reg2); // reg2 带修饰符g
console.log(r2); // match 方法使用的正则有修饰符 g ,会一次性把所有符合规则的都获取到.

let reg3 = /xxxx/g;
console.log(str.match(reg3)); // null match匹配不到时,返回null

