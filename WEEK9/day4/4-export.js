// export 关键字用于指定模块导出的内容

// 单个导出
export var name = 'mabin';
export var age = 18;
export var job = "FE";

export let x = 1;
export const y = 2;

export function sum(a, b) {
    return a + b;
}

export class Teacher {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let ok = 100;
// 单个导出export 变量声明语句;
