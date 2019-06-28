//
class A {
    constructor (a, b){
        // 给A类的实例添加私有属性
        this.text = 'A类的text';
    }
    // 添加公有的方法
    say (){
        // console.log('hello');
    }
}

class B extends A{ // class B extends A 让B类继承A类
    constructor () {
        super('x', 'y'); // 在这里调用supper(); supper就是父类； supper() 这一行代码要写在使用this关键字之前；如果不这样就
        // 会报错；supper执行时还可以传递裸骑，实参是传递给父类的构造函数（父类的constructor）;
        this.x = 100;
        this.y = 200;
    }
}

let b = new B();
// console.log(b);
b.say(); // hello  说明，extends关键字继承把父类的公有的变成了子类公有的；

/*
* {
*   text: 'A类的text', text属性是继承的A类的，extends可以把父类私有的变为子类私有的；
*   x: 100,
*   y: 200
* }
* */

// extends 关键字继承：
// 1. 声明子类时，需要extends 父类 ， 形如 class B extends A；
// 2. 在子类的构造函数中使用this关键字之前，调用supper();

// extends 关键字的原理使用的是寄生组合式继承（原型式继承 + call继承）；

// 用ES6声明一个类： Student
// 要求: 这个类的实例,有name, age, sex,(一般:1表示男性,2表示女性) score这些私有属性;
// 还要有learn公有方法,learn 方法执行输出: '我热爱编程,编程使我快乐'

// 继承就是为了让子类的实例能够使用父类上的属性或者方法;

class Human {
    constructor (name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    eat (){
        console.log('美食');
    }
    drink (){
        console.log('干杯');
    }
    sleep (){
        console.log('睡觉');
    }
    think (){
        console.log('我是谁,我在哪,我要干什么');
    }
}

class Student extends Human {
    constructor (name, age, sex){
        super(name, age, sex);
    }
    learn (){
        console.log('Good good study, day day up');
    }
}
let stu = new Student('mabin', 18, '男');
stu.drink();
stu.eat();
stu.sleep();
stu.think();
stu.learn();

class Assistant extends Human{
    constructor(name, age, sex) {
        super(name, age, sex);
    }
    lock (){
        console.log('锁门');
    }
}

let assis = new Assistant('王五', 40, '男');
assis.lock();
assis.drink();
