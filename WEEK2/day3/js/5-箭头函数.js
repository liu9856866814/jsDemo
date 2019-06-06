/*
* 箭头函数：
*   1.熟悉箭头函数语法
*   2.牢记箭头函数的注意事项
* */

// 标准函数语法:
/*function sum(a, b) {
    return a + b;
}*/

// 箭头函数语法:
/*let sum = (a, b) =>{
    return a + b;
};
var r = sum(1,3);
console.log(r);*/

// 简化语法：
// 1. 当形参只有一个时，形参入口的小括号可以不写
let ok = how =>{
  return "I'm fine"
};
// 2. 当函数只有一行代码时，可以省略花括号和return关键字
let ok2 = how => "I'm fine";
console.log(ok2());
// 当返回一个对象时，要用小括号包裹
let ok3 = how =>({name:'zhufeng'});
console.log(ok3());

// 3. 箭头函数中没有arguments,但是可以使用不定参数（剩余参数）；
let sum = (...arg) =>{
    console.log(arg);
    console.log(Array.isArray(arg)); // true 剩余参数是一个真正的数组
};
sum(1,2,3);

// 不定参数：
let sum2 = (a,b,...arg) =>{
    // 此时arg表示除了a,b剩下的实参；从第三个及以后的实参会放到arg中
    console.log(arg);
};
sum2(1); // arg = []  arg是一个数组，里面没值时是个空数组
sum2(1,2); // arg = [];
sum2(1,2,3); // arg = [3]
sum2(1,2,3,4,5); // arg = [3,4,5]

// 4. 箭头函数中没有自己的this，所以箭头函数里面的this是箭头函数声明时所在作用域中的this(上级作用域中的this);
// arguments 和this 是函数执行时，解析引擎传给函数的。箭头函数执行时，js引擎没有给它传。
// 所以箭头函数不能用来做构造函数；
// 箭头函数也没有自己的prototype;
var f = () =>{};
console.log(f.__proto__ === Function.prototype);
