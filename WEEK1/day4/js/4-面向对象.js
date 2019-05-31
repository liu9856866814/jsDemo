/*
* 面向对象：
*   1. 理解面向对象
*   2. 面向对象研究范畴、实例、类；
* */

// 面向过程：是以过程为核心，它关注眼下要解决的问题。现在有一个功能要实现，就写一段代码来实现。它不关心过去是否有过类似的功能，
// 未来是否还有类似的功能。

// 面积对象：是一种对现实世界的理解和抽象的方法。面向对象关心现有问题分类解决，过去有没有写过类似的代码，现在可以复用；我们
//现在做的功能未来是不是还要用。

// 面向对象的研究范畴：
/*
* 1、对象：万事万物皆对象，每个对象都具备各自的属性、特性和功能；
* 2、类：抽象事物特性、属性，把事物分类。类是描述一群事物的属性、特性和功能的抽象概念；比如说动物类、植物类、学员类、老师类...
* 3、实例：类中的具体的一个个体。只要是这个类中的一个个体，就会有这个类所有的属性、特性和功能。
* */

// JS的面积对象体现在哪里？
// 在讲数据类型时，有一个对象类和数组类。数组类的属性和特性是：有序的、有push、pop...数组方法，但是对象是无序的键值对集合；
var ary = [1,2,3]; // 数组是数组类的一个实例
var obj = {
    name : 'zhufeng',
    age:10
};// obj是对象类的一个实例

// ary是数组的一个实例，所以它也可以push、pop
ary.push(4);

// JS当中还有哪些内置类：
// Object 对象类
// Array 数组类
// Date 日期类
// RegExp 正则类
// Function 函数类

// 创建数据的方式：字面量、实例的方式
var ary1 = new Array(1,2,3); // 实例的创建方式：创建数组类的一个实例
ary1.push(4);
console.log(ary1);

// 内置类都是函数数据类型
console.log(typeof Array); // function
console.log(typeof Date); // function

//JS的面向对象研究 对象、类、实例三者之间的关系。

// JS的面向对象，我们讨论 封装、类继承和多态（重载、重写）这三个问题；

















