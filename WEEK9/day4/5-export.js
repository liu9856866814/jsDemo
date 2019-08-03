// 批量导出

var name = 'mabin';
var age = 18;
var job = 'FE';

let x = 1;
const y = 2;

function sum(a, b) {
    return a + b;
}
class Teacher {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

// 批量导出 export {要导出的变量}
export {name, age, job, x, y, sum, Teacher}

// 推荐使用批量导出的方式导出,可以很清晰的看出模块导出了哪些东西;