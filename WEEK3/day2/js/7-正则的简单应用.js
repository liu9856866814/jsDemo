// 正则简单应用

// 1. 验证中国大陆手机号 以1开头的11位数字
let reg = /^1\d{10}$/;
// console.log(reg.test('12345678900'));
// console.log(reg.test('10045678900'));

// 2. 校验号段: 188 177 134 130 166 131
let reg2 = /^1(88|77|34|30|66|31)\d{8}$/;
// console.log(reg2.test('13420321234')); // true
// console.log(reg2.test('15920321234')); // false

// 3. 匹配尾号是豹子号 (末尾连续三位相同)
let reg3 = /^1\d{7}(\d)\1{2}$/;
// console.log(reg3.test('17723453666')); // true
// console.log(reg3.test('17723453663')); // false

// 4. 匹配靓号 中间四位相同末尾四位相同
let reg4 = /^1\d{2}(\d)\1{3}(\d)\2{3}$/;
// console.log(reg4.test('13344445555'));
// console.log(reg4.test('13344445550'));

// 5. 验证有效数字
// 10 +10 -10 +1.5 -1.5
// .1 010 10..5 ++10 --10 +-10
// 有效数字规律:
// 1) 可以有符号也可以没有,且只能出现一次
// 2) 如果是个位数,0-9的任意一个数字
// 3) 如果是多位数0不能作为开头
// 4) 小数点可有可无,如果有,后面至少有一位小数
let reg5 = /^[+-]?(\d|[1-9]\d+)(\.\d+)?$/;
// console.log(reg5.test('.55')); // false
// console.log(reg5.test('0.5')); // true
// console.log(reg5.test('9')); // true
// console.log(reg5.test('99')); // true
// console.log(reg5.test('99.99.9')); // false
// console.log(reg5.test('00')); // false

// 6. 验证一个数字是否在某一范围内 23-68
// let reg6 = /[23-68]/; // 2或3-6或8
// 23-29 2[3-9]
// 30-59 [3-5][0-9]
// 60-68 6[0-8]
let reg6 = /^(2[3-9]|[3-5]\d|6[0-8])$/;
// console.log(reg6.test('22')); // false
// console.log(reg6.test('69')); // false
// console.log(reg6.test('25')); // true
// console.log(reg6.test('66')); // true

// 7. 匹配中文姓名
// 中文的Unicode范围: \u4e00-\u9fa5
let reg7 = /^[\u4e00-\u9fa5]{2,4}$/;
console.log(reg7.test('马宾')); // true
console.log(reg7.test('郭达斯坦森')); // false

// 8. 邮箱验证: 简单验证
// 雅虎: xxx@yahoo.com.cn
// 雅虎: xxx@yahoo.com
// 新浪: xxxx@sina.com.cn
// 新浪: xxxx@sina.com
// google: xxxx@gmail.com
// 网易: xxxx@163.com
//     : xxxx@126.com
// qq : xxxx@qq.com
// 第一段: 数字/字母/下划线,须以字母开头
// 第二段: 主域名 数字/字母/-
// 第三段: .com .com.cn ,vip .net
let reg8 = /^[a-zA-Z\d]\w+@[a-zA-z\d]+(-[a-zA-Z\d]+)?(\.[a-z]+){1,2}$/;
console.log(reg8.test('mabinbingo@163.com')); // true
console.log(reg8.test('mabinbingo@gmail.com')); // true
console.log(reg8.test('mabinbingo@gmail.com.cn')); // true

