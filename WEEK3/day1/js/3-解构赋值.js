/*
* 目标：
*   1. 理解解构赋值的作用
*   2. 掌握常用的解构赋值
* */

// let obj = {
//     name: 'bella',
//     age: 18,
//     title: '宇宙集团军总司令'
// };
// let name = obj.name;
// let age = obj.age;
// let title = obj.title;
// let {name, age, title} = obj;
// // console.log(name, age, title);
//
// let ary = ['JS','HTML','CSS','NODEJS','MYSQL'];
// // let js = ary[0];
// // let html = ary[1];
// let [js,html,css,node,mysql] = ary;
// console.log(js, html, css, node, mysql);

// 解构赋值：利用数据结构，快速对对象和数组进行取值；（ES6新增的）

// 1. 数组的解构赋值：
let ary = [1, 2, 3, 4];

// 1.1 顺序解构
let [a, b, c, d] = ary; // 等号左边是变量，等号右边是数组，左边的变量要求和你想取的数组中的值的位置对应
console.log(a, b, c, d);

// 1.2 只取数组中的某一个，如取第三个 前面写两个逗号
let [,,e] = ary;
console.log(e);

// 1.3 进一步解构: 取ary2 中的 'a' 'b'
let ary2 = [1,['a', 'b']];
let [f,[g,h]] = ary2;
console.log(g, h);

// 1.4 取出第一项和第二项，把剩下的放到一个数组中;
let ary3 = [1, 3, 5, 7, 9];
let [i, j , ...k] = ary3; // k的后面不能再解构了，再解构就会报错
console.log(i, j); // 1 3
console.log(k); // [5, 7, 9]

// 1.5 数组解构时的默认值: 当解构到的值是undefined时（解构到的值是undefined，另一种就是没有解构到值），就会使用默认值
let ary4 = [2, 4, 6, undefined];
let [l, m, n, o = 'haha'] = ary4; // 给o设置解构的默认值
console.log(l, m, n, o);

// 用p当q的默认值
let [p, q  = p] = [1];
console.log(p, q);

// let [r = s ,s] = [undefined,3]; 报错：当r解构出undefined时，要使用s的值做默认值，但是s没声明过，就会报错；当解构变量互为
// 默认值时，注意！
// console.log(r, s);

// 对象的解构赋值
// 通常情况下我们使用对象.属性名 或者 对象['属性名'] 取得该属性名对应的属性值；

// 对象的解构赋值: 利用变量名和对象的属性名同名时就可以取得对象该属性的值,与顺序无关

let obj = {
    name: 'bella',
    age: 18,
    title: '宇宙集团军总司令'
};
let {age, name, title} = obj;
console.log(name, age, title);

// 1. 只想取一个值，比如取courses;对象解构赋值，你想取哪个就写哪个。
let zf = {
    name: 'zf',
    age: 10,
    courses: ['js', 'UI', 'Architect']
};
let {courses} = zf;
console.log(courses);

// 2. 进一步解构
let zf2 = {
    name: 'zf',
    age: 10,
    characters: {
        teacher: 'mabin',
        t:{
            t_age: 18
        }
    }
};
let {characters:{teacher: {t_age}}} = zf2;
console.log(t_age);

// 3. 重命名 : 防止和其他变量命名冲突
let job = 'FE';
let obj4 = {
    name:'mabin',
    job:'teacher'
};
let {job:job2} = obj4; // 从obj4中解构job属性，并且重命名为job2
console.log(job2);

// 4. 对象解构的默认值：当解构出来的值是undefined，默认值才会生效
let obj5 = {
    name:'zhufeng'
};
let {name:name2, address = '北京昌平'} = obj5;
console.log(name2, address);

// 解构字符串:字符串的解构依赖位置
let [x, y, z] = 'hello';
console.log(x, y, z);

// 函数的参数解构
/*
// 原来是在函数体中对obj解构
function reg(obj) {
    let {name,age} = obj;
}
reg({
    name: 'zf',
    age: 10
});*/
function reg({name = 'zf',age = 10}) {
    // 在函数形参位置解构函数执行时传递进来的实参
    console.log(name, age);
}
reg({
    name: 'zhufeng',
    // age: 10
});

function getAry([x,y,z]) {
    console.log(x, y, z);
}
getAry(['a','b','c']);

// 对象的简洁语法：ES6
let config = '110.179.23.123';
let pwd = '@#4ghij1099';
let obj6 = {
    config: config,
    pwd: pwd
};
// 当对象属性名和变量名同名时，在对象中只写一个变量名就可以了
let obj7 = {
    config,
    pwd
};
console.log(obj6);
console.log(obj7);


