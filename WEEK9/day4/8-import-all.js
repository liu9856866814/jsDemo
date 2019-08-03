// 全部导入: 把模块中导出的内容全部导入进来;

import * as obj from './5-export.js'; // 把5-export.js中导出的内容全部导入,放到objK ,obj 是一个对象;obj是一个变量,符合变量
// 命名的变量名都行

console.log(obj); // obj是一个对象,对象中的属性名和属性值 分别是 导出时的变量名和变量所代表的值;
console.log(obj.sum(3, 4));
