// 模拟实现slice
// 作业：模拟slice方法 （提示 js重载 判断n/m是否undefined 或者arguments.length= 0 1 2;判断索引必须是数字不然打印错误）
// 作用：复制数组项，原数组不变，返回新数组；
// 1. slice(n,m) 从索引n开始，到索引m(不含m)
// 2. slice(n) 从索引n开始，复制数组结尾
// 3. slice() n/m 都不传，把这个数组从头到尾复制一遍

Array.prototype.mySlice = function (n,m) {
    // if(){
    //
    // }
    // if(isNaN(n) || isNaN(m)){
    //     console.error('非数字，请输入0-2个数字，例如（1，3）');
    //     return;
    // }
    let newArr = [];
    this.n = parseInt(n);
    this.m = parseInt(m);
    if(arguments.length===0){
        for (let i = 0; i < this.length; i++) {
            newArr.push(this[i]);
        }
    }else if(arguments.length===1){
        for (let j = n; j < this.length; j++) {
            newArr.push(this[j]);
            // console.log(this.length);
        }
    }else if(arguments.length===2){
        for (let i = n; i < m; i++) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};
let arr = [1,2,3,4,5,6];
let result = arr.slice();
let result22 = arr.slice(2);
let result33 = arr.slice(2,3);
let result1 = arr.mySlice();
let result2 = arr.mySlice(2);
let result3 = arr.mySlice(2,3);
console.log(result + ' /slice');
console.log(result1 + ' /不传参');
console.log(result22 + ' /slice n');
console.log(result2 + ' /n');
console.log(result33 + ' /slice n m');
console.log(result3 + ' /n m');







