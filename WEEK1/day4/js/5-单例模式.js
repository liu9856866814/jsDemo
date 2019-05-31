/*
* 目标：
*   1. 掌握单例模式
*   2. 掌握高级单例
* */

// 1. 登记学员信息：
var name = '张奎';
var age = 18;
var sex = 'boy';
var address = '***';

var name = '肖泽辉';
var age = 19;
var sex = 'boy';
var address = '河北省';

var stu1 = {
    name: '张奎',
    age: 18,
    sex:'boy',
    address:'***'
};
var stu2 = {
    name: '肖泽辉',
    age: 19,
    sex:'boy',
    address:'河北省'
};

// 单例模式：像上面这种把描述一个对象的属性放在一个对象中，这种封装方式称为单例模式.stu1和stu2代表的这两个对象称为单例，
// stu1.name和stu2.name没有关系，不会互相覆盖。因为这两个对象是两个不同的堆内存空间.stu1和stu2这个两个变量名称为命名空间(namespace)

// 高级单例模式：不是直接将一个对象赋值给变量名,而是在等号右侧写一个自执行函数,在自执行函数末尾返回一个对象;这样写的优势是,我们可
// 以选择哪些给外面用,哪些不给外面用;另一个优势就是代码很简洁.

//

var stu3 = (
    function () {
        var name = '马宾';
        var age = 19;
        var sex = 'boy';
        var address = '河北涞水';
        return {
            name: name,
            age, // ES6对象语法:属性名和变量名同名时,写一个变量名就可以代表属性名是变量名,属性值是变量代表的值: age: age
            sex: sex
        }
    }
)();

// 单例模式解决了全局变量命名冲突、互相覆盖的问题。但是效率很低，不能批量的创建对象；
// 有没有简单方式可以实现批量生产呢？


