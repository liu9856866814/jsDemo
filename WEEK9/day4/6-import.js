// import 关键字用于从其他模块中导入内容;

// 导入4-export.js
// import {name, age, job, x, y, sum, Teacher} from "./4-exports.js";
// 写在import后面的花括号中的都是变量;自己声明的变量不能和花括号里面的重名;

// 导入5-export.js
// 原名导出: 导出时变量叫什么,导入时变量就叫什么;
import {name, age, job, x, y, sum, Teacher} from './5-export.js';
// import {ok} from './5-export.js';
console.log(name, age, job, x, y, sum(2,4), Teacher);
// import {ok} from './4-exports.js'
// console.log(ok);

// 导入注意事项:
// 1. import {变量} from '带路径的模块文件'
// 2. 模块没有导出的变量不能导入
// 3. html在引入模块化的js文件时,script标签上要写type="module"





