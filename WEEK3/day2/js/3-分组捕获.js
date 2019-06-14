/*
* 目标:
*   1. 理解正则的分组捕获
* */

// () 正则分组;结合exec方法可以捕获分组内容

let str ='hello2019 zhufeng2018abc zhufeng2019xyz';
let reg = /zhufeng\d+/g;
let reg2 = /zhufeng(\d+)([a-z]{3})/g;

console.log(reg.exec(str));
console.log(reg2.exec(str)); // ["zhufeng2018", "2018", index.html: 10, input: "hello2019 zhufeng2018 zhufeng2019", groups: undefined]
console.log(reg2.exec(str));
// 正则捕获的内容是一个数组,数组的第一项是大正则捕获到的内容,从第二项起,就是正则分组捕获到的内容,有几个分组,后面就有几项;所以
// 捕获来的数组形如:['大正则捕获的内容','分组1捕获','分组2捕获'...]

// 取消分组捕获:即该分组只匹配不捕获 (?:)
let reg3 = /zhufeng(?:\d+)(?:[a-z]{3})/g; // (?:) 取消分组捕获,只匹配,捕获时小分组里面的内容不必再单独捕获
console.log(reg3.exec(str));

// ? 作用
// ? 表示出现0-1次的量词元字符
// (?:) 取消分组捕获
// (?=) 正向预查
// (?!) 反向预查

// match 方法不理会正则的分组,match方法的返回值没有分组捕获的内容;
let str2 = 'hello2019 zhufeng2018abc zhufeng2019xyz';
let reg4 = /zhufeng(\d+)[a-z]{3}/g;
console.log(str2.match(reg4));


