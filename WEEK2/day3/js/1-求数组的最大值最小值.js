/*
* 目标：
*   1. 求数组极值
*   2. 掌握call/...扩展运算符/apply方法求极值
* */

// 需求：求一个数组中的最大值和最小值；
let ary = [12,1,-1,0,22];
// 1. 先排序，再取极值 sort方法
// 求最大值：给数组降序排列（sort方法给原数组排序）
ary.sort(function (a,b) {
   return b - a;
});
// ary经过排序后，最大值是数组的第一项，从数组中取值只能通过[索引]把数组项取出；
let max = ary[0];
// 求最小值：给数组升序排序
ary.sort(function (a, b) {
    return a - b; // 升序
});
// 排序后最小的在数组第一项
let min = ary[0];

// 服务端给的数据大多娄情况下都是服务端在查数据库的时候已经排序好了，使用的是SQL的关键字； SQL语句中，asc是指定列按升序排
// 列，desc则是指定列按降序排列。

// 2. 假设法
// 求最大值：假设数组的第一项是最大值，然后从第二项开始和假设的最大值比较，如果后面的值比假设值大，就把假设值改成较大的值；
let max1 = ary[0]; // 假设第一个是最大值
for (let i = 1; i < ary.length; i++) {
    if(ary[i]>max1){
        max1 = ary[i];
    }
}
console.log(max1);
// 求最小值：假设数组的第一项是最小值，然后从第二项开始和假设的最小值比较，如果后面的值比假设值小，就把假设值改成较小的值；
let min1 = ary[0]; // 假设第一个是最小值
for (let j = 1; j < ary.length; j++) {
    if(ary[j]<min1){
        min1 = ary[i];
    }
}
console.log(min1);

// 3. 排序算法
// 4. Math.max() Math.min(); 但是这两个方法只能接受一个一个的参数；
// ？思考：怎么让这个Math.max接受数组作为参数或者把数组变成一项工项的；？
let max3 = Math.max(3,5,2,6,2,4);
let min3 = Math.max(3,5,1,2,6,2,4);

// ...数组 扩展运算符（ES6新增运算符）：把数组变成一项一项的
let max4 = Math.max(...ary); //...ary 把数组变成一项一项的
let min4 = Math.min(...ary);
console.log(max4,min4);

// 让Math.max和Math.min 接收一个数组：使用apply方法,可以打包传递参数
let max5 = Math.max.apply(null,ary);
let min5 = Math.min.apply(null,ary);
console.log(max5, min5);

// 5. 把数组toString() 然后再用eval求值
// eval 方法把字符串识别成js代码，并执行；比较消耗性能，尽量少用；
eval('alert(12345)');
let aryStr = ary.toString(); //"12,1,-1,0,22"
console.log(`Math.max(${aryStr})`);
console.log(eval(`Math.max(${aryStr})`));
console.log(eval(`Math.min(${aryStr})`));

