/*
* 目标:
*   1. 理解正则中小括号的作用
* */

// 小括号的细节问题
// () 分组捕获

// 1.分组捕获
let str = 'hello2019 zhufeng2018abc zhufeng2019xyz';
let reg = /zhufeng(\d+)[a-z]{3}/g;
// console.log(reg.exec(str)[1]); // exec 方法的返回值是一个数组,索引为1的项表示分组捕获的内容,所以可以通过索引取得分组捕获内容

// 2. 分组引用: \数字 表示引用数字代表的分组的内容
// 需求:写一个正则,匹配两位数,要求十位上的数字和个位上的数字相同;
let reg2 = /^(\d)\1$/;
// console.log(reg2.test('11'));
// console.log(reg2.test('22'));
// console.log(reg2.test('23'));

// 写一个正则,匹配第二个字母和第四个相同
let reg3 = /^[a-z]([a-z])[a-z]\1$/;
// console.log(reg3.test('data'));
// console.log(reg3.test('java'));
// console.log(reg3.test('last'));

// 13344445555
let reg4 = /^1\d{2}(\d)\1{3}(\d)\2{3}$/;
// console.log(reg4.test('13344445555')); // true

// 3. 改变优先级
let reg5 = /^18|19$/;
// console.log(reg5.test('8')); // false
// console.log(reg5.test('18')); // true
// console.log(reg5.test('19')); // true
// console.log(reg5.test('1819')); // true
// console.log(reg5.test('1839419')); // true

let reg6 = /^(?:18|19)$/; // 增加小括号把(18|19)当成一个整体
// console.log(reg6.test('18')); // true
// console.log(reg6.test('19')); // true
// console.log(reg6.test('1819')); // false
// console.log(reg6.test('1839419')); // false



