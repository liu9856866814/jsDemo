/*
 * 目标：
 *   1. 理解全局对象window
 *   2. 带var和function声明的变量会给window增加一个同名属性
 *   3. in运算符
 *   4. 不带var不参与变量提升
 * */

console.log(i);//带var undefined;不带var Uncaught ReferenceError
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(window);//window是全局作用域，而且是一个特殊的对象（在浏览器中叫window，Node.js叫Global）

var num = 12; // 给window添加一个属性num,
function fn(){ // 给window添加一个属性fn,
    console.log('321');
}
console.log(window.num);
console.log(window.fn);
// 1.在全局作用域中用var和function声明的变量，相当于为window上增加了一个同名属性；
// 2. in 运算符：检测一个对象中是否有某个属性,如果有返回true;没有返回false;
console.log('num' in window);//true
console.log('fn' in window);//true
console.log('mabin' in window);//false

var obj = {
    name: '珠峰',
    age: 10,
    values: '成就他人，成就自己'
};
if(obj.name===undefined){
    //obj.name 不等于undefined 说明obj有name属性
}
if ('name' in obj){
    // 'name' in obj 返回true.说明obj有name属性
}

// 3. 带var和不带var ：带var的是变量，会变量提升，不带var的不是变量。带var的在赋值之前使用不会报错，只不过值是undefined；
// 不带var不能在赋值之前使用，使用就会报错。
// console.log(MY_INDEX);如果引用一个没var过的变量，会报错。
MY_INDEX = `54321`;//如果没有var 直接赋值不会报错，为window增加了一个属性。`123`模板字符串ES6的语法
console.log(window.MY_INDEX);
//