/*
* 目标：
*   1. 理解原型链
*   2. 掌握原型查找的方法
* */

// 原型（prototype）链：是对象的属性查找机制。
// 当我们访问一个对象的属性时，浏览器会首先在对象的私有属性中查找，如果找到就使用这个私有属性，如果没找到，就通过实例对象
// __proto__属性去当前实例对象所属类的prototype(原型)上查找，如果在原型的公有属性中找到这个属性，就使用 这个公有的属性。
// 如果找不到，就通过prototype(原型)对象继续向上查找，一直找到基类Object的原型上（Object.prototype），如果还没找到，就
// 返回undefined.

function Teacher(name,age,subject,from) {
    //
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.from = from;
}
Teacher.prototype.teach = function () {
    console.log(`${this.name} 老师教 ${this.subject}学科`);
};

let mrMa = new Teacher('mabin',18,'JS','珠峰'); // 实例对象是new Teacher() 执行的返回值
let mrJiang = new Teacher('姜文',19,'架构','珠峰');
console.log(mrJiang);
console.log(mrMa);
mrMa.teach();
mrJiang.teach();
// console.log(mrMa.address);// undefined
console.log(mrMa.__proto__ === Teacher.prototype); //true
console.log(mrMa.__proto__.__proto__ === Object.prototype);//true
console.log(Teacher.prototype.__proto__ === Object.prototype);//true
// console.log(Object.prototype);




