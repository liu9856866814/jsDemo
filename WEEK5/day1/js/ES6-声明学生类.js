class Student {
    constructor(name, age, sex, score)  {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.score = score;
    }
    learn() {
        console.log('我热爱编程,因为编程使我快乐');
    }
}
let stu = new Student('xiaoming',19, 1, 99);
let stu1 = new Student('xiaohong', 18, 2, 98);
console.log(stu);
console.log(stu1);
console.log(stu.learn === stu1.learn);
