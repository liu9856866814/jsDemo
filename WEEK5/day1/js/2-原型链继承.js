// 原型链继承: 把子类的原型改写成父类的一个实例;

function A() {
    this.text = 'A类的text';
}
A.prototype.say = function () {
    console.log('hello world');
};
function B() {}
// 把B类的原型改写成A类的一个实例;
// console.log(B.prototype.constructor); // B
B.prototype = new A(); // {text: 'A类的text', __proto__: A.prototype};
// console.log(B.prototype.constructor); // A 为什么变成了A? 因为B的原型指向了A的实例,而A的实例:
// console.log(B.prototype); // B.prototype 变成了A的实例{text: 'A类的text', __proto__: A.prototype}, 所以我们访问
// B.prototype.constructor 就是先在A的实例中查找constructor属性,然而并没有,接着就通过__proto__去A.prototype上查找,而
// A.prototype上的constructor指向A.
B.prototype.constructor = B; // 原型继承要重新指定继承后的constructor属性;
let b = new B(); // b是B类的实例 {__proto__: B.prototype}
b.say(); // 'hello world';
console.log(b.text); // b.text 是B类公有的属性 'A类的text'

// 原型链继承:把父类私有和公有的属性都继承为子类的公有的属性和方法;









