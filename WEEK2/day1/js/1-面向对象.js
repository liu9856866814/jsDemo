/*
* 目标：
*   1、面向对象
*   2、内置类、自定义类
*   3、原型链
*   4、hasOwnProperty
*   5、重载、重写
* */

// 面向过程：关心现有问题，有一个功能就写一段代码；
// 面向对象：面向对象是一种对现实世界的理解抽象的方法。关心把现有的问题分类解决。

// 对象：万事万物皆对象，每个对象都有自己的属性和特性；
// 类：抽象事物的属性（特性、功能）将事物分类，类是描述一群事物属性的抽象概念；
// 实例：拥有类的属性的一个具体的个体。实例是属于这个类，那么这个实例就该带有这个类全部的属性和功能。

// JS中的面向对象：
// 数组类：有序的键值对，有push、pop、slice等属性方法
// 对象类：无序键值对
// 只要是数组的实例就可以push/pop/slice，对象不可以push/pop等
// JS的面积对象研究的问题：封装、继承、多态

// JS的封装就是为了创造对象：
// 1. 单例模式、高级单例模式：解决了全局变量互相覆盖的问题，把描述事物的属性放到一个对象中，这个对象叫做单例(单例的实例)，
// 对象对应的变量名叫命名空间(namespace)；
// 单例模式的不足：创建对象的效率太低，不能实现批量生产；
var o1 = {
    name: '马宾',
    age:18
};
var o2 = {
    name: 'mrMa',
    age: 19
};
// 2. 工厂模式：封装了创建对象的细节，成为一个函数，当需要创建一个对象时，就执行一次这个函数；
// 不足：工厂模式没有类型的概念；
function teacher(name,age,subject,from) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.subject = subject;
    obj.from = from;
    return obj;
}
var o3 = teacher('mabin',18,'JS','珠峰');

// 3. 构造函数：构造函数也是函数，调用方式是通过new调用。它同样把创建对象的细节封装到构造函数中；
// 不足：不能把属于这个类共有的属性和方法共有。this.xxx = xxx的方式把属性都添加到了实例上，而每个实例都是一个单独对象，
// 这些对象之间无法共享属性和方法；
function Teacher(name,age,subject,from) {
    // 1. 构造函数名要用大驼峰命名法（CameCase）(小驼峰cameCase)
    // 2. 不需要显式手动创建对象，构造函数会隐式帮我们创建
    // 3. 加工this
    // 4. 不需要显式返回实例；
    var x = 15;// 函数的私有变量，不属于构造函数
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.from = from;
    this.teach = function () {
        `${this.name} 老师教 ${this.subject} 学科`
    }
}
var t1 = new Teacher('jiangwen','19','架构','珠峰');//通过new调用构造函数，得到一个Teacher类的一个实例；
var t2 = new Teacher('mabin','19','JS','珠峰');
// instanceof 运算符
console.log(t1 instanceof Teacher);// true

var ary = [1,3,4];
var ary2 = [1,3,3];
console.log(ary.push === ary2.push);//true
console.log(t1.teach === t2.teach);//false

// 原型模式：把属于这个类型的公有的属性和方法存储到原型（prototype）上.
// 原型对象（prototype）:每个函数都有一个prototype属性，它的值是一个对象，存放类的共有属性和方法；

function Teacher(name,age,subject,from='zhufeng') {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.from = from;
}
Teacher.prototype.teach = function () {
    `${this.name} 老师教 ${this.subject} 学科`
};
var t3 = new Teacher('mabin',18,'JS');
var t4 = new Teacher('jiangwen',19,'架构');
console.log(t3.teach === t4.teach);//true
t3.teach();
t4.teach();
console.log(Teacher.prototype);
console.log(Teacher.prototype.constructor);
console.log(t2.__proto__ === Teacher.prototype);//true;

// 总结JS的面向对象：
// 类：是一个函数数据类型，每个类都有一个原型（prototype）；
// 原型(prototype):每个类的prototype都是一个对象，并且有一个特殊的属性constructor,它的值指向当前类的构造函数本身
// 对象：（实例对象、原型对象、函数对象）都有一个特殊的属性__proto__,它的值指向当前对象（实例对象、原型对象、函数对象...）
// 所属类的原型(prototype);

// 原型链：属性的查找机制
// 每个对象都有一个__proto__属性，实例对象的__proto__指向所属类的原型。原型对象prototype也有__proto__属性。
// 当 对象.属性名 时，浏览器会首先在对象的私有属性中查找有没有这样一个属性，如果有就使用私有属性。如果在私有属性中没有找
// 到，通过实例的__proto__去所属类的原型prototype上查找共有属性和方法，如果在原型上找到了就使用共有属性或者方法；如果还
// 没找到，就通过原型的__proto__继续向上查找，一直找到Object的prototype为止，如果还没找到就返回undefined;

// 内置类：Array/ Date/ RegExp/ Function/ Object
// 1. 内置类都是函数
console.log(typeof Array); // function
var ary3 = new Array(1,3,4); // 创建一个数组类的实例；
console.log(ary3.__proto__);
console.log(Array.prototype);
console.log(ary3.__proto__ === Array.prototype);

// 2. 自定义类：写一个构造函数，把自定义类的公有属性和方法写在构造函数的原型上；

// 如何检测一个属性是私有属性还是公有属性；
// hasOwnProperty():用来检测一个属性是否是这个对象的私有属性，如果是私有属性返回true,如果不是返回false
console.log(ary3.hasOwnProperty('pop'));
console.log(ary3.hasOwnProperty('length'));

function Fn() {
    this.hello = 'hello';
    this.world = 'world';
}
Fn.prototype.greeting = function () {
    console.log('HELLO WORLD');
};
var f1 = new Fn;//new 调用构造函数不需要传参时后面的小括号可以省略；
console.log(f1);// {hello:'hello',world:'world'}
f1.hasOwnProperty('hello');//true;
f1.hasOwnProperty('greeting');//false;

// ? isPrototypeOf() 自己查这个方法是干嘛用的？

// 多态：重写和重载
// 重写：子类可以重写父类的属性和方法
// 重载：有多个同名函数，但是这些函数的参数（签名）不同；当传不同参数时，会自动调用不同函数执行；JS中没有真正的重载；但
// 是这个功能可以模拟，传不同的参数做不同的事；

/*function sum(int a, int b) { // 参数：数字 a , 数字 b
    return a + b;
}
function sum(char a, char b) { // 参数：字符串 a , 字符串 b
    return Number(a) + Number(b)
}
sum(1,3);// 如果有重载，自动调用第一个sum
sum('12','23');//如果有重载，自动调用第二个sum*/
// 因为不允许声明多个同名函数，声明多个同名函数时，函数名代表最后一个函数，所以JS没有真正意义上的重载；

// 实现一个重载：根据参数不同做不同的事
// 写一个函数，如果只传一个参数，返回这个参数，如果传两个参数就给这两个参数求和；（根据参数个数重载）

function num(a,b) {
    if (arguments.length === 1){
        return arguments[0];
    }
    if(arguments.length ===2){
        return arguments[0] + arguments[1];
    }
}

// console.dir() 详细输出
// console.dir(Array)
