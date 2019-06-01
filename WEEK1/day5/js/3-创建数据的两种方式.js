/*
* 目标:
*   1. 掌握js的两种创建数据类型的方式
*   2. 掌握instanceof运算符
* */
// 实例创建方式：通过new 类型构造函数
// 创建引用数据类型：通过实例的方式创建引用数据类型和字面量创建的没有区别；
let ary = new Array(1,2,3,4);
let obj = new Object();
let date = new Date();
let reg = new RegExp('\\d');
console.log(ary);
console.log(obj);
console.log(reg);

// 基本数据类型：使用实例方式创建基本数据类型，会得到一个对象；而对象不是基本数据类型的值；所以基本数据类型只能用字面量
// 的方式创建；
let str = new String('javascript');// String 是字符串类的构造函数
var str2 = 'javascript';
console.log(str);
console.log(str.toUpperCase());// str虽然是一个对象，但仍然可以调用字符串的方法；
console.log(str2);
console.log(typeof str);// object
console.log(typeof str2);// string

// 字面量的方式（字面的意思）：
// 创建引用数据类型：{}就是对象，[]就是数组，/\d/ 就是正则；用字面量创建的引用数据类型和实例的方式创建的数据类型没有区别；
var obj = {
    name: 'zf',
    age: 10
};
var ary1 = [1,2,3,4];// 字面量创建数组

// 字面量创建基本数据类型：
var num = 10;
var str3 = 'javascript';
var boo = true;
var empty = null;
var notDefined = undefined;
var symbol = Symbol('abc');

// ? 思考题：只有对象才能点，但是字符串等基本数据类型为什么也可以通过 . 调用字符串方法？
// 如： str3.toUpperCase(); ？ 为什么？
/*
* 在针对字符串、数字和布尔值使用字面量时，只有在该值被视为对象的情况下才会创建实际的复杂对象。换句话说，在尝试使用与构造
* 函数关联的方法或检索属性（如var len = 'abc'.length) 之前，一直在使用原始数据类型。当这种情况发生时，Javascript 会在幕后
* 为字面量值创建一个包装器对象，以便将该值视为一个对象。调用方法以后，Javascript 即抛弃包装器对象，该值返回字面量类型。
* 这就是字符串、数字、布尔值被认为是原始数据类型的原因。
* */




