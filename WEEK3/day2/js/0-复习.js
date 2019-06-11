// 正则是一个专门用来处理字符串的规则，这种处理分为两种
// 1. 正则匹配，判断当前字符串是否符合某个规则
// 2. 正则捕获，获取到符合规则的字符串

// 创建正则的方式
// let reg = /d+/g;
// let reg2 = new RegExp('\\d+','g');

// 正则是由元字符和修饰符构成的

// 元字符
// 特殊元字符
/*
* \d 匹配0-9任意一个数字
* \D 匹配除0-9以外的任意一个字符
* \w 数字、字母、_中的任意一个字符
* \s 匹配一个空白符（空格、制表符\t）
* \b 匹配边界（boundary 边界）'zhu-feng' 字母和非字母连接处称为边界
* \n 匹配一个换行符
* .匹配除换行符\n 以外的任意一个字符
* \ 转义符，把有特殊意义的元字符转义成原本的意义。例如 . 表示除换行符以外的任意一个字符，\. 表示 普通小数点。还可以把普通元
* 字符转成特殊元字符，例如 \d 表示0-9的数字
* ^(读作caret) 表示以某个元字符开头
* $ 表示以某个元字符结尾
* x|y 表示x或y中的一个
* [xyz] 表示x或y或z中的一个
* [a-z] 匹配a-z中的一个小写字母（不可以写[z-a]）
* [A-Z] 匹配A-Z中的一个大写字母
* [0-9] 匹配0-9任意一个数字
* [^abc] 除了a/b/c的任意一个字符
* ()
* (?:) 表示当前分组只匹配不捕获
* (?=) 正向预查
* (?!) 反向预查
* */

// 量词元字符
// * 表示0到多次
// + 表示1到多次
// ? 表示0-1次（出现或者不出现）
// {n} 表示出现n次
// {n,} 至少出现n次
// {n,m} 出现n-m次

// 普通元字符：除了特殊元字符和量词元字符以外的元字符都是普通元字符；

// 修饰符
// i：ignorecase 忽略大小写匹配
// m: multiline 多行匹配
// g： global 全局匹配

// 正则匹配：RegExp.prototype.test() 方法：test方法定义在RegExp的原型上，所有正则的实例都能使用；

let reg = /\d/; // 匹配0-9的任意一个数字
// console.log(reg.test('1'));
// console.log(reg.test('abc1'));

let reg2 = /\D/; // 只要不是0-9的数字都行
// console.log(reg2.test('1'));
// console.log(reg2.test('+++'));

let reg3 = /\w/; // 数字、字母、下划线中的一个
// console.log(reg3.test('9')); // true
// console.log(reg3.test('a')); // true
// console.log(reg3.test('_')); // true
// console.log(reg3.test('$')); // false

let reg4 = /\s/; // 匹配空格、空白符
// console.log(reg4.test('   ')); // true
// console.log(reg4.test(' abc')); // true
// console.log(reg4.test('\t')); // true
// console.log(reg4.test('\n')); // true

let reg5 = /\b/;
// console.log(reg5.test('zhu-feng')); // true
// console.log(reg5.test('￥')); // false

let reg6 = /\n/; // 换行符
// console.log(reg6.test(`
// `)); //true 在模板字符串中写了回车

let reg7 = /./;
// console.log(reg7.test('a'));
// console.log(reg7.test('1'));
// console.log(reg7.test('+'));
// console.log(reg7.test('$'));
// console.log(reg7.test('\n'));

let reg8 = /\./; // 转义后的. 不是通配符
// console.log(reg8.test('a'));
// console.log(reg8.test('1'));
// console.log(reg8.test('+'));
// console.log(reg8.test('$'));
// console.log(reg8.test('\n'));
// console.log(reg8.test('.'));

let reg9 = /^1\d{10}$/; // ^1 表示以1开头
// console.log(reg9.test('12345678900'));
// console.log(reg9.test('22345678900'));

// let reg10 = /ing$/; // 必须以g结尾,但是g前面还要有in
let reg10 = /g$/; // 必须以g结尾
// console.log(reg10.test('dog')); // true
// console.log(reg10.test('done')); // false

let reg11 = /a|b/;
// console.log(reg11.test('x')); // false
// console.log(reg11.test('a')); // true
// console.log(reg11.test('b')); // true

let reg12 = /[xyz]/;
// console.log(reg12.test('abc')); // false
// console.log(reg12.test('ayz')); // true

let reg13 = /[a-z]/;
// console.log(reg13.test('abc')); // true
// console.log(reg13.test('AB')); // false

let reg14 = /[^a-z]/; // 除了a-z都行
// console.log(reg14.test('i')); // false
// console.log(reg14.test('I')); // true
// console.log(reg14.test('0')); // true

let reg15 = /a*/; // * 表示0到多次
// console.log(reg15.test('i')); // true
// console.log(reg15.test('abc')); // true

let reg16 = /b+/; // + 表示1到多次
// console.log(reg16.test('i')); // false
// console.log(reg16.test('abc')); // true

let reg17 = /b?/; // ? 表示0到1次
// console.log(reg17.test('ac')); // true
// console.log(reg17.test('acbb')); // true

let reg18 = /^\d{3}$/;
// console.log(reg18.test('1111')); // false
// console.log(reg18.test('111')); // true

let reg19 = /^\d{3,}$/; //至少出现3次
// console.log(reg19.test('12345')); // true
// console.log(reg19.test('123')); // true
// console.log(reg19.test('12')); // false

let reg20 = /^\d{3,5}$/; // 3次到5次
console.log(reg20.test('12345')); // true
console.log(reg20.test('123456')); // false

// 匹配有效数字
// 10 1.5 +10 -10 有效数字
// 1. 010 --12 +-10 非有效数字
// +- 只能出现一个， 要么出现要么不出现
// 多位数不能以0开头
// 小数部分可以有可以没有，有小数点后面必须至少一位小数
let reg21 = /^[+-]?(\d|[1-9]\d+)(\.\d+)$/;

