// class 关键字: ES6新增的,用于声明一个类

// ES5声明类
/*function Teacher(name, age, subject, from) {
    this.name = name;
    this.age = age;
    this.subject= subject;
    this.from = from;
}
Teacher.prototype.teach = function () {
    console.log(`${this.name} 教 ${this.subject}`);
};
Teacher.motto = '传道受业解惑'; // 把Teacher当成一个普通对象,并且添加一个属性motto;motto是静态属性,和实例无关,和原型无关;
Teacher.getX = function(){ // 静态属性
    console.log('abcdefg');
}
let m = new Teacher('mabin', 18, 'JS', 'zf');
m.teach(); // mabin 教 JS;*/

// ES6声明类

class Teacher {
    constructor (name, age, subject, from) {
        // 在constructor (构造函数中)通过this.xxx = xxx是在给实例添加私有属性
        let x = 100; // x 不是私有属性
        this.name = name;
        this.age = age;
        this.subject= subject;
        this.from = from;
    }

    // 添加公有方法
    teach (){
        console.log(`${this.name} 教 ${this.subject}`);
    }
    getY (){
        console.log('hello');
    }

    // 添加静态属性, 用static声明静态的属性和方法;静态属性和方法只能类自身访问,和实例、原型都没有关系;
    static motto = '传道受业解惑';
    static getX (){
        console.log('四十米大刀');
    }
}
// 没有兼容性问题
// Teacher.motto = 'xxx';
// Teacher.getX = function(){};

// Teacher.motto = '传道授业解惑';
console.log(Teacher.motto);
Teacher.getX();
let n = new Teacher('niuxiaoxin', 19, 'JS', 'zhufeng');
console.log(n);
n.teach();

