/*
* 目标：
*   1. 掌握this的常见情况
*   2. this在运行时不能被修改
* */

// this 是一个js的关键字，代表当前代码【执行】的环境对象。一般在函数中使用，在函数执行时确定，根据函数执行方式的不同，
// 代表的值不同。目前有以下几种情况：
//   1. 事件函数（赋值给DOM元素对象的事件属性、onclick/onmouseover/onmouseout/ondbclick...的函数）中的this，是绑定当前事件的元素。

var btn = document.getElementById('btn');
btn.onclick = function () {
    console.log(this);// btn这个标签元素
};

// 2. 自执行函数中的this是window
var num = 14;
(function () {
    var num = 15;
    console.log(this);// window
    console.log(this.num);// 14
})();

// 3. setTimeout/setInterval 的回调函数中的this指向window
setTimeout(function () {
    console.log(this);
}, 1000);

// 4. 方法调用时，看方法名前面有没有 . ，如果有点前面是谁，方法中的this就是谁，如果没有点，方法中的this就是window
var obj = {
    num : 12,
    fn : function () {
        console.log(this);
        console.log(this.num);
    }
};
obj.fn();// fn前面有. 点前面是obj，所以本次obj.fn执行时，obj.fn中的this就是obj
obj['fn'](); // 注意 obj["fn"] 等效于 obj.fn.所以本次执行obj.fn中的this仍然是obj

var fn = obj.fn;
var fn2 = fn;
fn(); // 函数执行时（最后有小括号()）函数名前面没点，所以函数里面的this就是window

// 5. 箭头函数的this
// ES6新增的函数语法：箭头函数，省略function关键字，在形参入口后面增加箭头（=>）后面紧跟函数体,只能用于函数表达式；
let sum = (a, b) => {
  var total = 0;
  total = a + b;
  return total;
};
// 箭头函数的执行和普通函数执行没有区别；
var r1 = sum(1,3);
console.log(r1);

// 简化语法：当形参只有一个时，形参入口的小括号可以省略
let foo = a =>{ // 只有一个形参，可以省略小括号
    var age = 10;
    return a + age;
};
// 当函数体只有一行代码时，可以省略函数体的花括号。如果这一行代码用return指定返回值时，return可以省略
let sum1 = (a,b) => a + b;
// 等效于：(a,b) => {return a + b}

let getObj = (a,b) => ({a: a,b: b});// (如果要返回一个对象，需要用小括号包起来)

// 箭头函数的this 指向的是箭头函数声明时所在作用域中的this。
var num2 = 16;
let obj2 = {
    num2 : 17,
    fn : () =>{
        console.log(this.num2);
    }
};
obj2.fn();//16;

// 6. 全局作用域中的this是window
console.log(this);

// 7. this在运行时不能直接通过赋值的方式修改
// this = 13;//报错




