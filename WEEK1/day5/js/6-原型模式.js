/*
* 目标：
*   1. 理解构造函数模式的不足
*   2. 掌握原型模式实现
*   3. 理解原型对象
* */

/*function Teacher(name,age,subject,from) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.from = from;
    this.teach = function () {
        console.log(`${this.name} 老师教 ${this.subject}`);
    }
}
let mrMa = new Teacher('mabin',18,'JS','珠峰');
let mrJiang = new Teacher('姜文',19,'架构','珠峰');
console.log(mrMa);
console.log(mrJiang);
console.log(mrMa.teach === mrJiang.teach);// false

let ary1 = new Array(1,2,3,4);
let ary2 = new Array(1,2,3);
console.log(ary1);
console.log(ary2);
console.log(ary1.push === ary2.push);// true*/

// 只要属于数组类，就可以push、pop、slice.但是数组实例中并没有这些属性，这是因为内置Array类，它把数组类共有的属性实现了共有。
// 所以我们自定义的Teacher类也应该把teach方法共有了。那么问题来了，这个方法放在哪儿，可以实现共有？

//改造Teacher类
function Teacher(name,age,subject,from) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.from = from;
}
Teacher.prototype.teach = function () {
    console.log(`${this.name} 老师教 ${this.subject}学科`);
};
/*var obj = {};
obj = function () {
    console.log(`${this.name} 老师教 ${this.subject}学科`);
};*/

let mrMa = new Teacher('mabin',18,'JS','珠峰');
let mrJiang = new Teacher('姜文',19,'架构','珠峰');
let mrRen = new Teacher('renTeacher',19,'JS','珠峰');

console.log(mrMa);
console.log(mrJiang);
mrMa.teach();
mrJiang.teach();
mrRen.teach();
console.log(mrMa.teach === mrJiang.teach);
console.log(mrRen.teach === mrJiang.teach);

// prototype（原型）对象：每个函数（普通函数、构造函数【类】）都天生自带一个属性prototype（原型），它的值是一个对象，它是
// 用来存储这个类共有的属性和方法。存储在prototype上的属性和方法称为公有属性和方法。

// 基于构造函数的原型模式：把这个类共有的属性和方法放在prototype(原型)对象中。这样做可以实现只要是这个类的实例就能够使用这
// 些属性或者方法；这样做解决了共有属性和方法共有的问题。

console.log(Teacher.prototype);
console.log(Teacher.prototype.constructor === Teacher);//true

// prototype对象上天生自带一个constructor属性，它的值就是构造函数本身；或者说 prototype对象的constructor属性指向Teacher构造函数；
/*
* {
*   teach: function ...,
*   constructor: Teacher 构造函数
* }
* */

// ？ 为什么我们把teach方法搬到Teacher.prototype 对象里了，但是Teacher的实例还可以调用这个方法？
console.log(mrRen);
console.log(mrMa);
//经过查看，mrRen和mrMa这两个实例里面没有teach私有属性，但是我们发现__proto__属性，这个属性值是一个对象，在这个对象中有我们
// 需要的teach方法。

// 如果直接访问一个对象不存在的属性,会得到一个undefined.但是我们访问mrRen/mrMa的teach属性时得到了teach方法,所以一定有机制
// 可以让它找到teach方法.






