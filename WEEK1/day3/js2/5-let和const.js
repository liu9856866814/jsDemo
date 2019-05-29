/*
* 目标：
*   1.掌握let和const
*   2.掌握let和var的区别
*   3.理解使用let和const会形成块级作用域
* */
// let 和 const : ES6新增的关键字，用于声明变量
// let 用于声明普通变量
// const 声明常量


// let、const和var的区别
// 1. let 和 const 声明的变量不存在变量提升；如果要使用这个变量，要在变量定义之后使用；
console.log(num);// undefined
var num = 100;
//console.log(num2);// 报错：num2 尚未定义
let num2 = 120;
//console.log(lightSpeed);// 报错：ligthSpeed尚未定义
const lightSpeed = 3 * Math.pow(10,8);// 3*10^8

// 2. let 和 const不能重复声明变量，如果重复声明会报错
var num3;
var num3 = 1;
var num3 = 2;

let num4 = 10;
let num4 = 11;//Uncaught SyntaxError: Identifier 'num4' has already been declared
// [未能捕获的语法错误：标识符 num4 已经被声明过了]

// 3.用let和const在全局作用域中声明变量，不会为window增加一个同名属性；
var fullName='zhufeng';
function getName(){
    console.log('zf');
}
console.log('fullName' in window);//true; 在全局作用域中用var声明的变量会给window增加一个同名属性

let firstName = 'ting';
let lastName = 'liu';
console.log('firstName' in window);//false;

// 4. let 和 const 出现在代码块中，会把代码块（字面量声明对象除外）变成块级作用域，并且出现暂时死区；
var obj = {};//{} 字面量声明对象，不是代码块；
// if(){ 如果在这个代码块中使用let const 就会形成块级作用域}
if(true){
    let add = '+'; // let 会把if的花括号变成块级作用域，所以在此声明的变量只能在这个代码块里用；
    console.log(add);// +
}
console.log(add);// Uncaught ReferenceError: add is not defined

// for(...){for循环中的代码块}
for (var i = 0; i < 3; i++) {} // var 会把i泄露成全局变量
//console.log(i);

for (let j = 0; i < 3; i++) {} // let 不会把j泄露成全局变量，写在小括号里，但属于for循环的代码块
//console.log(j);

// 利用{代码块}形成块级作用域: 块级作用域和私有作用域很像，块级作用域也是作用域链查找的一环。
/*let num5 = 1;
{
    let num5 = 2;
    console.log(num5);//2
}
console.log(num5);//1*/

let num5 = 1;
 {
 console.log(num5);//1
 }

{
    let num6= 6;
    {
        let num6 = 7;
        console.log(num5);//1;// 在块级作用域中使用变量，也是首先在当前块级作用域中查找，如果当前块级作用域中有，就使用当前的，
        // 没有就利用作用域链查找机制向上查找。
    }
}

// 暂时性死区（TDZ: Temporary Dead Zone）: 在代码块中，使用let const 声明的变量，不能在定义之前使用。这一现象叫暂时性死区

if(true){
    //console.log(ok);// 不能在变量声明之前使用，使用就会报错
    console.log(typeof ok);//报错 Uncaught ReferenceError: ok is not defined
    let ok = 'are u ok?'
}

console.log(typeof CBD); // 过去typeof被称为最安全的运算符，因为检测一个尚未声明的变量，也不会报错，但在ES6中，不再适用。

// const 声明常量的细节问题：
// 1. 声明常量时必须赋值
var num7;
let num8;
//const num9;// Uncaught SyntaxError: Missing initializer in const declaration [未能捕获的语法错误：用const声明时初始值缺失]

// 2.常量一旦赋值，不能再修改，如果修改就会报错；
const num10 = 10;
//num10 = 11;// Uncaught TypeError: Assignment to constant variable.

// 3. 如果const创建的常量是一个引用数据类型的值，这个常量代表的是这个引用数据类型的地址。可以随意操作引用数据类型值，
// 但是不能修改常量存储的地址。
const ary=[1,2,3];
ary.push(4);
//ary = [1,2,3,4];// 报错  Uncaught TypeError: Assignment to constant variable.













