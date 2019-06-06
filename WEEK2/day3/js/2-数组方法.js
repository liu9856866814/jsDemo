/*
*
*
*
* */

// 常用的数组方法都定义在数组原型上
// push() 向数组末尾追加项
// pop() 删除末尾一项
// unshift() 向数组的开头添加项
// shift() 删除第一项  被删除项
// splice(n,m) 从索引n开始删除m个 返回被删除项组成的新数组
// splice(n,m,x) 有x替换被删除项 返回被删除项组成的新数组
// splice(n,0,x) 把x插入到索引为n的那一项之前

// slice(n,m) 从索引n开始，复制到索引m(不含m)
// concat() 拼接数组、数组项
// join() 用指定的分隔符把数组项连接成字符串，原数组不改变
// toString() 把数组变成字符串（效果就是把方括号变引号）

// indexOf() 获取此项在数组首次出现的索引位置，如果没有这一项返回-1
// lastIndexOf() 获取此项最后一次在数组中出现的位置，如果没有这一项返回-1
// includes() 判断数组是否包含某一项，如果包含返回true,不包含返回false

var ary = [1,3,5,7,9];
if(ary.indexOf(11) !== -1){
    // 当11在数组中出现过，条件成立
}
if (ary.indexOf(11)=== -1){
    // 当11在数组中没出现过，条件成立
}

// sort(function(a,b){return a-b} 升序)
// sort(function(a,b){return b-a} 降序)
// reverse() 反转数组

// forEach(function(item,index){ item 数组的每一项 index 当前项的索引})
// map(function(item,index){ item 数组的每一项 index 当前项的索引}) 将原数组映射成一个新数组，新数组由回调函数的返回值组成

var ary2 = [1,3,5];
var ary4 = ary2.map(function (item,index) {
   return 'abc'
});
// console.log(ary4);// ['abc','abc','abc']
// forEach 和 map 数组有多少项，回调函数就会执行多少次，并且在执行的过程中，会把当前数组项和当前索引传给回调函数；

// 模拟数组方法：
// push 方法：
// 1. 向数组末尾追加项
// 2. 返回数组的新长度

Array.prototype.myPush = function () {
    // 当 数组.myPush() 的方式调用时，this就代表这个数组
    // 遍历arguments,把arguments中的每一项添加到数组中
    for (let i = 0; i < arguments.length; i++) {
        // ？怎么向数组末尾追加？
        this[this.length] = arguments[i];
        /*可以用splice
        this.splice(this.length,0,arguments[i])*/
    }
    return this.length
};
let ary5 = [1];
var result = ary5.myPush(3,5,7); // ary.myPush(3,5,7) 这个组合（方法名和（）的组合）不仅是让这个ary.myPush方法执行，还代表这个
// 方法执行过后的返回值；
console.log(result);
console.log(ary5);

// pop()
// 1.删除最后一项
// 2. 返回被删除的项

Array.prototype.myPop = function (){
    // 通过 数组.myPop 的方式调用，函数中的this代表数组
    let last = this[this.length - 1]; // 因为pop方法返回被删除项，所以需要在删除之前提前存起来
    this.length--; // 执行删除最后一项
    // this.splice(this.length - 1,1); 还可以使用splice方法删除最后
    return last; // 把被删除项返回
};
let ary6 = [1,3,5];
let result2 = ary6.myPop();
console.log(result2);
console.log(ary6);

// 作业：模拟slice方法 （提示 js重载 判断n/m是否undefined 或者arguments.length= 0 1 2;判断索引必须是数字不然打印错误）
// 作用：复制数组项，原数组不变，返回新数组；
// 1. slice(n,m) 从索引n开始，到索引m(不含m)
// 2. slice(n) 从索引n开始，复制数组结尾
// 3. slice() n/m 都不传，把这个数组从头到尾复制一遍

// forEach(function(item, index){ item 数组的每一项 index是当前项的索引})
// 参数是一个回调函数：
// 数组有多少项，回调函数就需要执行多少次，在执行的过程中，还需要把当前项和当前项的索引传递给回调函数
// forEach 不需要返回值

Array.prototype.myForEach = function (callback) {
    // callback 就是回调函数 也可以写cb;回调函数执行就是callback()
    // 数组有多少项回调函数就需要执行多少次，所以这里需要一个for循环
    for (let i = 0; i < this.length; i++) {
        // this[i] 表示当前项
        // i 当前项的索引
        callback(this[i],i);
    }
};
console.log("___________");
var ary7 = [1,3,5,7,9];
ary7.myForEach(function (item,index) {
    console.log(item, index);
});
console.log("___________");
ary7.forEach(function (item,index) {
    console.log(item,index);
});

