/*
* 目标:
*   1. 理解JSON格式
*   2. 理解JSON对象和字符串互转
* */

// JSON 数据: 是一种常用的前后端交互的数据格式.

// -> 1.JSON格式的对象: 把属性名和属性值都用字符串包起来,如果属性值数字可以不包(用引号包了,就是字符串);
var obj = {
    "name":"bella",
};
var ary =  [
    {
        "name": "张三",
        "age": 15,
    },
    {
        "name": "李四",
        "age": 19,
    }
];

// -> 2. JSON格式的字符串 : 长得像极了JSON对象的字符串,属性名和属性值都是用双引号包着
// js中引号在字符串中单双循环着用;如果最外层是单引号,字符串中不能再用单引号了,如果一定要用要使用\'(\叫做转义符);如果最外
// 层是双引号,字符串中不能再用双引号,如果一定要用必须使用\"转义
var str1 = '{"name": "张三"}';
let str2 = '[{"name": "张三"},{"name": "李四"}]';

// JSON格式的对象和JSON格式的字符串互转
// 在window上面有一个叫JSON的对象,其中有两个方法;

// window.JSON.parse(); 把JSON格式的字符串转成对象
let ary2 = JSON.parse(str2);
console.log(Array.isArray(ary2)); // true
console.log(ary2); // 数组

// window.JSON.stringify() 把对象转成JSON格式的字符串
let str3 = JSON.stringify({name:'马六'});
let str4 = JSON.stringify([{name:'张三'},{name:'李四'}]);
console.log(str3);
console.log(str4);
console.log(typeof str3, typeof str4);

// 使用JSON的方法实现深复制:

let ary3 = [{name:'zs'},{name:'ls'}];
let ary4 = ary3.slice();
let ary5 = JSON.parse(JSON.stringify(ary3)); // 先把对象转成JSON格式的字符串,再把JSON格式的字符串转成一个对象,这个对象和
// 原来的没有关系;
ary5[1].name = '小明';
console.log(ary3);
console.log(ary5);

// IE6/7 没有JSON对象,无法使用JSON.parse()把字符串转成对象
// IE6/7中使用eval方法
var str6 = '[{"name": "张三"},{"name": "李四"}]';
var obj2 = eval(str6);
console.log(obj2);

var str7 = '{"name": "mabin"}';
// var obj3 = eval(str7);
// console.log(obj3);//{"name":"mabin"} 这个花括号会被js解析引擎理解成代码块,所以为了避免这种情况,需要在字符串外侧拼接一个小括号
var obj3 = eval('('+str7+")"); // ({"name": "mabin"}) 加小括号后,js解析器认为这是一个整体的值,里面的花括号就会处理成对象
console.log(obj3);

/**
 * @desc JSON格式字符串转对象
 * @param jsonstr JSON格式字符串
 * @returns {object} 对象
 */
function toJSON(jsonstr) {
    if('JSON' in window){ // 'JSON' in window 返回false表示JSON的方法不可以用
        return JSON.parse(jsonstr);
    }else{
        return eval('('+ jsonstr + ')');
    }
}