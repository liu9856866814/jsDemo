/*
* 目标:
*   1. 理解style属性智能获取设置元素的行内属性
*   2. 掌握获取元素计算生效的样式及其兼容性处理
*
* */

// let box = document.getElementsByClassName('box')[0];

// 1. 获取元素样式
// 1.1 元素对象.style.xxx 只能获取元素的行内样式
// console.log(box.style.height);
// console.log(box.style.width);
// console.log(box.style.padding);

// 2. 获取元素所有计算生效的样式
// window.getComputedStyle(元素.伪类)
// let styles = window.getComputedStyle(box,null); // 第二个参数不用伪类时写null
// console.log(styles);
// console.log(styles instanceof CSSStyleDeclaration); // true
// console.log(styles.width);
// console.log(styles.padding);
// console.log(styles.paddingBottom);
// console.log(styles.opacity);
// console.log(styles.height); // 300px 因为行内样式的权重比style标签中的内嵌样式权重高,所以300px是计算生效的样式.

// 2.2 获取伪类的样式:
// let fakeStyle = window.getComputedStyle(box,'before'); // 第二个参数传伪类
// console.log(fakeStyle.content);
// console.log(fakeStyle.color);
// console.log(fakeStyle.fontSize);

// IE低版本不兼容

// IE有一个属性获取当前元素计算生效的样式: currentStyle
// 元素对象.currentStyle [currentStyle是一个属性不能执行]
// var box = document.getElementById('box');
// var result = box.currentStyle;
// console.log(result);
// console.log(result.width);

// 获取元素计算生效后的样式:
// 1. 标准浏览器: window.getComputedStyle(元素对象,伪类[不需要伪类写null]);返回一个对象,对象中都是计算生效的样式,返回的对
// 象是只读的，不能修改里面的样式；
// 2. IE低版本 对象.currentStyle 属性, 属性值是一个对象,对象存储的是这个元素计算生效后的样式

// 写一个方法,获取元素对象的计算生效的样式,兼容IE浏览器
