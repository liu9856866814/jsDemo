/*
* 目标：
*   1. 理解sort排序原理
*   2. 理解sort排序的常见情况
* */
// sort方法：数组的排序方法；

// 1. sort不传参
var ary = [1,2,5,8,0,15,13];
var ary2= [1,3,4,2,5,0];
var r1 = ary.sort();
var r2 = ary2.sort();
// console.log(r1);
// console.log(r2);

// 2. ary.sort(callback)

var ary3 = [1,34,23,44,11,49,34];
ary3.sort(function (a,b) {
    // console.log(a, b);
    // console.log(ary3);
    return a - b;
});
// console.log(ary3);

var ary4 = [1,2,3,4,5,6,7];
ary4.sort((a,b)=>{
    // console.log(a, b);
    return a - b;
});

// a,b 都是数组中的项，回调函数执行多次。回调函数执行次数和数组项娄、以及数组项本身排列顺序有关；

// sort原理：相邻项比较，a就是前一项，b是后一项；利用回调函数的返回值（a - b或者b - a的结果）和零的关系有如下操作：
// 如果回调函数返回值大于0，交换两项的位置；
// 如果小于等于0，不交换位置；

// 数组对象（二维数组）

var ary5 = [1,3,5];
var ary6 = [ // 数组项可以是任意数据类型的
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
        age: 14
    },
    {
        name: '赵六',
        age: 25
    }
];

// 按照年龄（按照某个对象的属性）进行升序排序
// 如果数组项是对象，我们按照对象的某个属性排序时，在回调函数中return a.属性名 - b.属性名;就可以实现数组中的项按照这个属
// 性升序排序；（不只把这个属性值排序，而是数组项整体排序）
ary6.sort(function (a,b) {
    return a.age - b.age;
});
// console.log(ary6);

// 需求:给页面中的10个li按照里面的内容数字进行升序排列；
//1.获取元素对象
var box = document.getElementById('box'); // 不许写选择器
var liList = box.getElementsByTagName('li');

// 2.把获取到的liList转成一个数组
var listAry = utils.arrLiketoAry(liList); // listAry 已经是数组了
// console.log(listAry);

// 3. 给listAry排序:listAry 中数组项都是元素对象，而我们需要按照页面中标签里面的数组排序，而数字恰好就是元素对象的
// innerHTML属性。所以这个问题就转变成了按照每个li的innerHTML属性进行排序
var res = listAry.sort((a,b)=>{
   return a.innerText - b.innerText
});
// console.log(res);
/*var textAry = listAry.map(function (item,index) {
    return item.innerHTML
});
console.log(textAry);*/

// 4. 如果想让页面中的li的顺序也发生变化，需要重新把数组中的li元素对象添加到页面中；appendChild() 方法

for (let i = 0; i < listAry.length; i++) {
    box.appendChild(listAry[i]); // 把每一项重新添加到页面中？
}

// ？ 思考：页面中还是10个，为什么不是20个？

// 需求：给华为电商产品按照降序排列
// 1. 获取元素对象
let box2 = document.getElementById('box2');
let hwList = box2.getElementsByTagName('li');

// 2.hwList 转成数组
let hwAry = utils.arrLiketoAry(hwList);

// 3. 给hwAry按照价格降序排序:hwAry 中都是li元素对象,怎么获取到存储在行内属性中价格?
// setAttribute(key,value) 给元素对象设置行内属性key,值是value
// getAttribute(key) 获取当前元素对象的行内属性key的值
// removeAttribute(key) 删除当前元素对象的行内属性key
hwAry.sort((a,b) => b.getAttribute('price') - a.getAttribute('price'));
console.log(hwAry);

// 4. 要想页面中li的顺序也发生变化,需要重新把hwAry中li元素插入ul中;
for (let i = 0; i < hwAry.length; i++) {
    box2.appendChild(hwAry[i]);
}


