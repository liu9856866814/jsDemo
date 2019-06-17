// 利用数据结构的相似性对数组/对象/字符串进行快速取值;

// 1. 对数组解构
// 利用索引位置对数组进行解构取值,解构 数组,等号左边要用方括号
let ary = [1,2,3];

let [a,b,c] = ary; // 利用的是a的位置和数组第一项对应,b和第二项位置对应,c和第三项的位置对应.
console.log(a, b, c); // 1 2 3

// 取数组中的某一项:
let [ , , d] = ary; // 只取数组中的第三项,虽然前面两个不要,但是仍然要写2个逗号

// 进一步解构
let ary2 = [2, 4, [6,8]];
let [, ,[,e]] = ary2;
console.log(e);

// 解构其中某几项,其余的放到一个新数组中
let ary3 = [1, 5, 9, 11, 15,19];
let [f,g,...h] = ary3;
console.log(h); // [ 9, 11, 15, 19];

// 解构赋值的默认值
let ary4 = [1, 3, 5];
let [i, j, k, l = 0] = ary4; // 对应位置上没有值或者对应位置上的值是undefined时,默认值才会生效;
console.log(i + j + k + l); // 因为l的默认值是0,虽然l的位置上没能解构到值,但是它有默认值0,不会影响最终的计算结果.

// 互为默认值
// let [ m , n = m] = [1];
// console.log(m, n);

// let [m = n , n] = [undefined, n]; // 当m解构的值是undefined 就要用默认值n,发现n尚未声明,所以是报错引用错误

// 2.对象的解构赋值:
// 利用的变量名和属性名一样,快速从对象中取值;解构对象时等号左侧要使用花括号;
let obj = {
    name: '美帝',
    character: '不要脸'
};

// let {name,character} = obj;
// console.log(name, character);

// 只取某一个属性
let { name } = obj;
console.log(name);

// 对象解构赋值时重命名: 等号左侧都是变量,不能和其他变量重名
let { name:name2 } = obj; // 从obj中把name解构出来,重命名成name2
console.log(name2);

// 进一步解构:
let json = {
    code: 0, // 一般0 表示成功
    data:{
        list: [
            {
                id: 1,
                src: 'https://alikunlun,com/imgs/1.jpg'
            },
            {
                id: 2,
                src: 'https://alikunlun,com/imgs/1.jpg'
            },
            {
                id: 3,
                src: 'https://alikunlun,com/imgs/1.jpg'
            }
        ], // 当前页的数据
        page:1, // 当前页
        total: 100, // 满足条件的结果集一共有100条
        limit: 10 // 表示一页展示多少条
    }, // 请求来的数据会放在data里面
    msg: 'ok' // msg表示code值的意义
};
// 传统方式获取list: json.data.list
// let {data:{ list }} = json;
// 获取list中的第一项
let {data:{ list:[first]}} = json;
console.log(first);

// 解构page/total/limit/list
let {data:{list:[, {id:id2}],page,total,limit}} = json;
console.log(page,total,limit,id2);

// 函数的实参解构赋值
function fn({ele, width = 100, height = 100, backgroundColor: bgc}) {
    // 从形参的位置上给实参解构赋值
    console.log(ele, width, height, bgc);
}
fn({
    ele:'#box',
    backgroundColor: 'red'
});

