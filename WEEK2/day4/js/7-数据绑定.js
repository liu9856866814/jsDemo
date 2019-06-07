/*
* 目标:
*
*   2. 理解DOM回流和重绘
* */

// 数据绑定:通过某种方式把数据绑定到页面的html中

var stus = [
    {
        name: '张三',
        age: 18
    },
    {
        name: '李四',
        age: 19
    },
    {
        name: '王五',
        age: 14
    }
];

// 常见的方式:
// 1. 动态创建添加DOM
let box = document.getElementById('box');
for (let i = 0; i < stus.length; i++) {
    let item = stus[i];
    let li = document.createElement('li');
    // name: zhangsan, age: 18
    li.innerHTML = `name:${item.name},age:${item.age}`;
    box.appendChild(li);
}
// DOM回流和重绘:

// 2. 字符串拼接+innerHTML

// 2.1 传统字符串拼接

// 2.2 模板字符串拼接
let str = ``;
for (let i = 0; i < stus.length; i++) {
    let item = stus[i];
    str += `<li>name: ${item.name}, age: ${item.age}</li>`
}
// console.log(str);
box.innerHTML= str;



