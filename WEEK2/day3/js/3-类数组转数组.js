/*
* 目标：
*   1. 类数组： arguments、DOM集合
*   2. 类数组转数组
* */
// 类数组： 有索引、有length的对象；
// 常见的类数组：arguments、DOM元素对象集合

let divList = document.getElementsByClassName('box');
// divList.splice(1,3) undefined(1,3) typeError
// console.log(divList);
// 数组有很多方法，但只能给数组的实例使用。所以如果能将类数组转成数组，这些方法就可以使用了；

// 类数组转数组的方法：
// 1. 准备一个新数组，遍历类数组对象，把类数组中的每一项push到新数组中。
var newAry = [];
for (var i = 0; i < divList.length; i++) {
    newAry.push(divList[i]);
}
console.log(newAry.slice(1, 3));
// console.log(newAry);

// 2. 把类数组对象通过扩展运算符展开到一个数组中；
let ary1 = [...divList];
// console.log(ary1);
// console.log(Array.isArray(ary1)); //true

// 3. 借用数组原型上的slice方法
// 借用Array.prototype.slice() 方法，在slice执行时，把slice中的this修改成类数组，就可以实现把类数组转成数组；
let ary2 = Array.prototype.slice.call(divList);
// console.log(ary2);
// console.log(Array.isArray(ary2)); // true

// 简写方式：IE低版本会报错；
let ary3 = [].slice.call(divList); // Array.prototype.slice 直接访问Array的原型对象的slice方法；[].slice 使用[] 空数组的
// 原型链查找机制找到slice方法；
// console.log(ary3);
// console.log(Array.isArray(ary3));// true

// 4. Array.from() ES6新增的方法，把类数组对象（类数组结构、iterator对象）转变成数组；IE低版本不兼容
let ary4 = Array.from(divList);
console.log(ary4);
console.log(Array.isArray(ary4));



