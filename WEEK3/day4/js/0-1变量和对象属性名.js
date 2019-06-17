var obj ={
    name: 'zhufeng',
    age: 18
};
var n = 'name';
console.log(obj[n]); // 此时n是变量，变量是用来存储值和代表值的，这表示取变量n代表的值
console.log(obj.n); // 获取对象obj下的属性n的值
console.log(obj['name']);

var num = 10;
var obj2 = { // 对象的花括号不是作用域
    num: 12 // 写在冒号前面的不是变量
};
console.log(num); // 这种单独使用不依赖点，就是变量 查找机制用作用域链
console.log(obj.num); // 对象.xxx 写在点后面的是属性 查找机制用原型链
console.log(obj2['num']); // 对象['xx'] 写在方括号里面的字符串是属性
console.log(obj2[num]); // 对象[变量] 变量存储的值才是属性
