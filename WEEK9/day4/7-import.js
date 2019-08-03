// 在导入时给导出的变量重命名
// import {原名 as 新名字} from 模块

import {Teacher as T } from "./5-export.js";

// console.log(Teacher); 重命名之后 Teacher就不能用了

console.log(T);

// 导入几个都行,不用全部导入;
