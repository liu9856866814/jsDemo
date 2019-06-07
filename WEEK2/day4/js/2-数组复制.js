/*
* 目标:
*   1. 理解数组的复制
* */

var ary = [1,2,3,4,5,];

// 复制一个数组;
// slice()
// contact()
// ... 扩展运算符
var a1 = ary.slice();
var a2 = ary.concat();
var a3 = [...ary];

var ary2 = [
    {
        name: '张三',
        age: 15
    },
    {
        name: '李四',
        age: 18
    },
    {
        name: '王五',
        age: 40
    },
    {
        name: '赵六',
        age: 25
    }
];
var ary3 = ary2.slice(); // ary3 是复制出来的数组
// console.log(ary3);
// console.log(ary3 === ary2);
//
// a1[1] = 100;
// console.log(ary);
// console.log(a1);
//
// ary3[1].age = 51; //修改的是复制出来的数组ary3的第二项的属性
// console.log(ary2);
// console.log(ary3);

// ? 原数组ary2和复制出来的数组ary3的第二项的age属性都被修改成了51? 为啥呢?

// 当数组项是一个基本数据类型值,数组存储这一项时,存储的就是这个基本数据类型值本身;
// 如果数组项是引用数据类型值,数组存储这一项时存储的引用数据类型的堆内存地址;ary2 存储的结构是类似这样:
// var ary2 =[aaafff000,aaafff111,aaafff222];

// 所以在复制数组时,如果复制的项是基本数据类型的值,复制出来的就是基本数据类型值本身(相当于克隆子一个这个值);
// 如果复制的项是引用数据类型时,被复制的是堆内存地址,所以在新数组中存储的也是堆内存地址;所以这时操作新数组中的项,操作的
// 就是这个内存地址,所以原数组中的这一项也会跟着改变;这种复制称为浅复制(浅拷贝)

// 深拷贝: 要求我们复制出来的数组和原数组没有关系;
// 深拷贝:
var aryBak = [];
for (let i = 0; i < ary2.length; i++) {
    let obj = {}; // 这是一个新的对象和数组项没有关系
    obj.name = ary2[i].name; // 把数组项中name和age属性添加到新对象中
    obj.age = ary2[i].age;
    aryBak.push(obj);
}
aryBak[1].age = 51;
console.log(ary2);
console.log(aryBak);

// 思考题? 如何深复制这样一个数组,写一个方法
var ary5 = [
    {
        name: '张三',
        age: 15,
        ex: [
            {
                name: '小兰',
                age: 15
            },
            {
                name: '王五',
                age: 18
            }
        ]
    },
    {
        name: '马六',
        age: 19,
        ex: [
            {
                name: '小兰',
                age: 15
            },
            {
                name: '王五',
                age: 18
            }
        ]
    }
];

// 类数组转数组时
var box2 = document.getElementById('box2');
var lis = box2.getElementsByTagName('li');
console.log(lis);//DOM元素集合都是类数组

lis[1].style.background='#ff0000'; //lis 类数组集合中都是li元素对象

var lisAry = utils.arrLiketoAry(lis);
console.log(lisAry);
lisAry[0].style.background='#00b38a';// 操作lisAry,liAry是通过类数组lis转成的数组;

// lis集合中每个li元素对象,对应的都是页面中的一个li;而元素对象也是对象,所以lis这个集合中存储的li元素对象的堆内存地址;
// lis = {0: aaafff000, 1: aaafff111, 2: ...length:4};
// 然后类数组转数组,只不过是把类数组集合中存储的堆内存地址复制到了数组中.并没有重新再造一份li元素对象,这个数组中的元素就
// 是页面中的元素对象.
// 转成的数组:[aaafff000, aaafff222, ....]








