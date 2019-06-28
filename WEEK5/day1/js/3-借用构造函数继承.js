// 原型链继承是把父类的私有和公有的都变成了子类公有的.
// 现需要把父类私有变成子类私有的;
// 借用构造函数继承,在子类的构造函数中call执行父类的构造函数,此时父类是被当成一个普通函数使用的.
function A() {
    // text 是A类实例私有的
    this.text = 'A类私有的text';
}
// say 是 A类公有的属性
A.prototype.say = function () {
    console.log('hello world');
};

function B() {
    // console.log(this); // 此时 B构造函数中的this 是B类的实例
    A.call(this); // b 把A类的构造函数当成一个普通函数用call修改A内部的this为B类的实例(即B中的this), call修改完this,会让A执行,
    // 在A执行中遇到的this.xxx = xxx ,因为this已经变成了B的实例,所以这些私有属性都被添加到了B的实例上;
}
let b = new B(); // {text: 'A类私有的...'}
console.log(b);
console.log(b.hasOwnProperty('text')); // true





