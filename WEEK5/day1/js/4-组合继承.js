// 组合继承:原型链继承 + 借用构造函数继承
// 原型链继承: 把父类私有和公有的都变成了子类公有的
// 借用构造函数继承(call继承): 把父类私有的变成子类私有的

// 组合继承的结果是把父类私有的变成子类私有的,把父类公有的变成子类公有的;
function A() {
    // 给A类的实例添加私有的属性
    this.text = 'A类私有的text';
}
// 给A类添加 公有的方法say
A.prototype.say = function () {
    console.log('hello world');
};

function B(){
    A.call(this); // 借用构造函数继承
}
B.prototype = new A(); // 原型继承  {text: 'A...'}
B.prototype.constructor = B; // 把B原型上的constructor属性重新指向B;
let b = new B();
console.log(b); // {text: 'A...'}
console.log(b.text);  // b.text 拿的b私有的text属性
b.say(); // b.say 拿的是共有的say方法

// 子类会继承再次父类私有的,第一次来自于原型链继承时父类的私有的成为子类公有的;另一次来自于借用构造函数继承时,把父类私有的
// 变成了子类私有的.



