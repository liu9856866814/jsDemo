// URLSearchParams 是一个类, 专门用来处理url的查询字符串

// 1. 把对象变成查询字符串: key1=value1&key2=value2&key3=value3
let obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};
let qs = new URLSearchParams(); // 创建URLSearchParams的实例
for(let key in obj){
    qs.append(key,obj[key]); // append方法是用来把key和value追加到qs对象中
}

let qsStr = qs.toString();
console.log(qsStr);

// 2. 把url的查询字符串变成一个对象;
let str = '?key1=value1&key2=value2&key3=value3';
let strCopy = str.slice(1);
// 创建URLSearchParams实例时把strCopy传入;
let qs2 = new URLSearchParams(strCopy);

// 调用qs2的entries方法,得到一个遍历器对象
let ite = qs2.entries();

// for of 遍历ite (for of 专门用来遍历遍历器对象)
let obj2 = {};
for(let k of ite){
    let [attr, value] = k;
    obj2[attr] = value;
}
console.log(obj2);

// 封装两个方法,
// 1. 传入一个对象,生成一个查询字符串
// 2. 传入一个查询字符串,生成一个对象
