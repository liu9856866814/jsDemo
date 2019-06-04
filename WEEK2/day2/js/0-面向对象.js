/*
* 面向对象：是对现实世界的理解和抽象的方法；它关注把问题分类解决，解决问题时会复用过往的经验，对现有的问题分类解决给未来
* 的问题提供借鉴。
* 对象：万事万物皆对象，每个对象都有属性和特性；
* 类：抽象事物的属性，把事物分类。类是一个抽象的概念，描述一群事物的属性和特性的抽象概念。
* 实例：类中的一个具体的个体。只要这个实例属于这个类，那么该实例就拥有这个类全部的属性和特性。
*
* js面向对象：封装、继承、多态（重写、重载）
* 封装的目的：为了创建对象；
* 最终在js中我们要掌握的面向对象：
*   类：类（构造函数）都是一个函数数据类型的，每个类都有一个prototype(原型)
*   原型（prototype）：原型属于某个类，值是一个对象；原型中有一个特殊的属性constructor，它的值指向类（构造函数）本身。
* 原型对象用来存放属于这个类的共有属性和方法；
*   对象：实例对象，原型对象，都有一个特殊的属性__proto__,它的值指向这个对象所属类的原型；
*   原型链：属性的查找机制；当我们 对象.属性 时，先在私有属性中查找，有就使用这个私有属性；如果私有属性没有，通过实例
* __proto__ 向对象所属类的原型查找，有就使用这个公有属性，如果没有，通过原型对象__proto__ 向上查找，最终会找到Object.prototype
* ,如果还没有就返回undefined;
*   通过实例的__proto__ 对可以修改原型；
*
* */
function Teacher(name,age,subject,from) {
    // 类中this.xxx = xxx 是在给实例添加私有属性，也是在描述属于这个类的实例有哪些属性，属于Teacher类的实例有name/age/
    // subject/from,四个属性；
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.from = from;
}
Teacher.prototype.teach = function () {
    `${this.name}老师教${this.subject}学科`
};
Teacher.prototype.punish = function () {
    console.log('惩罚');
};
Teacher.prototype.prepare = function () {
    console.log('备课');
};
let t1 = new Teacher('mrMa',18,'JS','珠峰');
console.log(t1.__proto__ === Teacher.prototype); // true; 因为t1.__proto__ 的值就是Teacher的prototype;


