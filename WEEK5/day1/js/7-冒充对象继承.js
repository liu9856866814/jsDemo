// 冒充对象继承: 在子类的构造函数中,创建一个父类的实例.遍历这个实例,把父类实例的属性都添加到子类的实例身上.

// 冒充对象继承: 把父类公有和私有的都变成子类私有的.

function A() {
    this.text = 'A类的私有属性text';
}

A.prototype.say = function () {
    console.log('hello world');
};

function B() {
    let a = new A(); // 创建A类的一个实例;
    for(let key in a ){ // for in 循环遍历的是对象的可枚举属性,可枚举属性不仅包含对象私有属性还包含当前对象所属类的原型上
        // 自定义的属性;
        this[key] = a[key];
    }
}
let b = new B();
console.log(b);


