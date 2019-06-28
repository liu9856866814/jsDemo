// 寄生组合式继承： 原型式继承 + 借用构造函数继承
// 原型式继承： 继承父类公有的
// 借用构造函数继承：继承父类私有的
// 寄生组合式继承最后把父类公有的变成子类公有的，把父类的私有的变成子类私有的。

function A() {
    this.text = 'A类的私有text'
}
A.prototype.say = function () {
    console.log('hello world');
};

function B() {
    A.call(this); // 借用构造函数继承,继承父类私有的
}
B.prototype = Object.create(A.prototype); // 原型式继承,继承父类的公有的
B.prototype.constructor = B; // 重新指定B.prototype中的constructor
// console.log(B.prototype);

let b = new B();
console.log(b); // {text: 'A...'}
console.log(b.text); // 继承的父类的私有属性'A...'
b.say(); // say是继承的公有属性 'hello world'

