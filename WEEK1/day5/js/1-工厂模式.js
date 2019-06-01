/*
* 目标：
*   1. 理解工厂模式
*   2. 理解工厂模式解决了单例模式的那些问题
*   3. 理解工厂模式的不足
* */

// 单例模式创建老师的信息记录对象

var t1 = {
  name: 'mabin',
  age: 18,
  subject: 'js',
  from: 'zhufeng'
};
var t2 = {
    name: 'jiangwen',
    age: 19,
    subject: '架构师课程',
    from: 'zhufeng'
};

// 单例模式虽然解决了全局变量命名空间互相覆盖的问题，但是效率太低，当大规模创建对象时，就需要写许多重复的代码。怎么解决这个问题？

function teacher(name,age,subject,from = '珠峰') {
    var obj = {};// 原材料
    obj.name = name;// 加工
    obj.age = age;// 加工
    obj.subject = subject;
    obj.from = from;
    obj.teach = function () {
        console.log(`${this.name} 老师教 ${this.subject}`);;
    };
    return obj;// 出厂
}
var t3 = teacher('任老师',19,'JS');
console.log(t3);
var t4 = teacher('薛老师',19,'JS');
console.log(t4);
console.log(t3 === t4);

// 工厂模式：像上面这样，把创建对象的细节封装成一个函数，在函数中为这个对象添加属性，这种创建对象的模式叫做工厂模式；

// 工厂模式虽然可以批量生产，但是生产的对象都一样，没有分类。

var ary = new Array(1,3,4); // 通过new操作符以实例创建方式创建了一个数组的实例。

var t5 = new teacher("mabin",18,'js','zhufeng');
console.log(t5);
// 通过new操作符执行工厂模式的函数，和直接执行没啥区别；new Array得到数组实例，但是new teacher 只能得到一个普通对象，和不
// new没区别；这时，咱们的teacher函数和Array存在不同。
// 因为Array虽然是函数数据类型的，但它不是普通函数，它叫做构造函数。



