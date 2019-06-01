/*
* 目标：
*   1. 理解构造函数模式的作用
* */

// 构造函数：构造函数也是一个函数，但是其内部实现和调用方式与普通函数不同。
// 1. 构造函数只能有new来调用（用new调用这个函数才叫构造函数）
// 2. 构造函数不需要手动创建实例对象，在通过new调用构造函数时，构造函数会隐式的创建一个属于这个类的实例对象，并且把构造
// 函数中的this指向这个实例对象。后续的加工都在this上加工即可。
// 3. 构造函数不城西手动返回实例对象，构造函数在执行后会隐式的返回实例对象；

// 工厂函数
function teacher(name,age,subject,from = '珠峰') {
    var obj = {};// 原材料
    obj.name = name;// 加工
    obj.age = age;// 加工
    obj.subject = subject;
    obj.from = from;
    obj.teach = function () {
        console.log(`${this.name} 老师教 ${this.subject}`);
    };
    return obj;// 出厂
}
// 构造函数
function Teacher(name,age,subject,from) {
    //
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.from = from;
    this.teach = function () {
        console.log(`${this.name} 老师教 ${this.subject}`);
    }

}
let t1 = teacher('Bella',18,'JS','珠峰');// 工厂函数创建
let t2 = new Teacher('mrMa',19,'JS','珠峰');
let t3 = new Teacher('mrJiang',19,'架构','珠峰');
console.log(t1);// 得到一个普通对象，没有类的概念
console.log(t2);// 得到一个带有Teacher类型的实例对象

// 构造函数模式：像向上面这种，把创建对象的细节封装到构造函数中。通过this.xxx = xxx 向实例对象上添加属性。用这种方式创建
// 对象称为构造函数模式。此时构造函数就叫做类，函数名叫类名(一般情况下，类名首字母大写，如果有多个单词，使用驼峰命名法)；
// 通过new的方式调用构造函数，可以返回一个属于当前类的实例对象。这个实例对象里面的属性称为【私有属性】；

// instanceof 运算符：检测一个实例是否属于某个类型，如果属于这个类型返回true,如果不属于返回false.

// console.log([] instanceof Array);//true
// console.log(/\d/ instanceof RegExp);//true
// console.log(t2 instanceof Teacher);//true
// console.log(t2 instanceof Object);//true
// console.log([] instanceof Object);//true
// console.log(/\d+/ instanceof Object);//true
// console.log(Teacher instanceof Object);//true

// Object 是js中的基类（基础类型），其他的类都有Object的属性和特点.所以用instanceof检测实例是否是Object的实例时，都会返回true;

let ary2 = new Array(1,2,30);
let ary3 = new Array(2,2,3);
console.log(ary2);
t2.teach();
t3.teach();
console.log(ary2.push === ary3.push);
console.log(t2.teach === t3.teach);

// 构造函数虽然解决了工厂函数没有类型的问题，但是相比较Array内置类，我们自定义的类Teacher没办法让共有的属性和方法共有，
// 而是每个实例各有一份。例如t2和t3都是老师类的实例，而只要是老师就应该会teach（教学），说明teach是老师类共有的属性，但是
// 构造函数Teacher却没办法实现？









