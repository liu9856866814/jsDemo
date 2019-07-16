// 在这个文件中调用3-test.js 中的fn方法

// 导入模块: 使用require('被依赖js文件的路径')方法
// 因为4-使用模块.js 需要使用3-test.js
let obj = require('./3-test'); // 在导入3-test.js时，3-test.js中的代码就会执行

console.log(obj.fn());
console.log(obj.abc);

// console.log('4  ', obj());

