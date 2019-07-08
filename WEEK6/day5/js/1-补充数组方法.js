let ary = [12,4,5,18,0,1,3];
// 1. 数组.filter(callback) : 过滤数组,把符合条件的数组项放到新数组中返回,原数组不变;(符合条件:能够使回调函数返回true的;)
// 数组中有多少项就会执行多少次回调函数;
let lessThan12 = ary.filter((item, index) => {
    // item 是数组中的每一项
    // index 是每一项的索引
    return item < 12; // 把小于12的项过滤出来
});
// console.log(lessThan12);

/*
* course: int 课时数
* price: int 课程单价
* subject: int 科目  1 数学  4 英语 3 物理 5 化学
* */
// 把购买的课程数小于等于36的课时总数计算出来

let ary2 = [
    {
        course: 18,
        price: 180,
        subject: 1
    },
    {
        course: 36,
        price: 180,
        subject: 4
    },
    {
        course: 24,
        price: 180,
        subject: 3
    },
    {
        course: 72,
        price: 180,
        subject: 5
    }
];
let total = 0;
let mappings = [{
    1: '数学',
    4: '物理',
    3: '英语',
    5: '化学'
}];
let lt36 = ary2.filter(({course}) => {
    // console.log(course,subject);
    return course <= 36;
});


/*lt36.forEach((item) => {
    total += lt36[0].course;
    console.log(mappings[0][item.subject] + `: ${item.course}`);
});
// console.log(lt36);
console.log(total);*/

// 2. 数组.every(callback) 判断数组中所有的项都满足条件,如果都满足条件(回调函数返回true)返回true,否则返回false,

let ary3 = [
    {
        name: 'zs',
        age: 17
    },
    {
        name: 'xx',
        age: 20
    },
    {
        name: 'yy',
        age: 19
    },
    {
        name: 'yy',
        age: 15
    }
];
// 判断这个列表中的所有人是否都是成年人; (判断数组中每一项的age属性是否大于等于18)
let allAdult = ary3.every((item,index) => {
    console.log(item); // item是数组中的每一项,如果数组中有一项不满足条件,后面的就不再执行了
    return item.age >= 18;
});
console.log(allAdult);

let ary4 = [1, 3, 5, 7, 11, 12]; // 判断数组中是否是奇数?
let isOdd = ary4.every((item) => item % 2 !== 0);
console.log(isOdd);

// 3. 数组.some(callback) 判断数组中是否有符合条件的项;
// 判断ary3中是否有未成年人;
let u18 = ary3.some(function (item) {
    return item.age < 18;
});
console.log(u18);

// 4. 数组.find(callback) 从数组中把满足条件的数组项拿到, 如果有多项符合条件,只拿第一个; 如果找不到返回undefined;
// 把ary3中未成年拿一个出来;
let one = ary3.find((item) => item.age < 18);
console.log(one);

// 5. 数组.reduce(function(prev,current){},initValue);