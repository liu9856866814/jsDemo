// 导入5-sum中的sum和minus方法
// 求 3 + 4 之和 ,并且输出到控制台;
// 求 7 和 4的差,并且输出到控制台;

let {sum, minus} = require('./5-sum'); // 可以配合解构赋值使用

console.log(sum(4, 4));
console.log(minus(7, 4));