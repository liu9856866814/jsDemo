// 1. 导出 export 关键字

// 1.1 单个导出
/*export var name = 'mabin';
export let age = 18;
export const job = 'fe';
export function sum(a, b) {
    return a + b;
}
export class Teacher {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}*/

// 1.2 批量导出
/*var name = 'mabin';
let age = 18;
const job = 'fe';
function sum(a, b) {
    return a + b;
}
class Teacher {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

export {name, age, job, sum, Teacher};*/

// 2. 导入 import 关键字
// import {name, job, sum, Teacher} from "./a.js";

// import {name as name1} from './a.js'; // 导入时重命名

import * as obj from './a.js'; // 全部导入, 此时obj是一个对象,对象中包含了所有a模块导出的内容; 导出时的变量名都成为obj的属性名

// 3. 默认导出: export default 导出内容

// 4. 导入其他模块的默认导出: import 任意变量名 from '默认导出的模块'
import aaa from './b.js';

// 5. import() 方法,
// import是关键字,只能用在同步导出, 而且必须置于全局作用域中(不能写在函数或者条件语句或者if中)
import('./b.js').then((res) => {
    // res 就是导入成功后模块的内容
});

// import() 和 async/await
async function getModule() {
    let A = await import('./a.js');
    console.log(A);
    return A;
}
getModule().then((res) => {
    // res 就是 getModule执行的返回值 A
});

// 现在Chrome 已经原生支持import() 我们需要掌握它;

