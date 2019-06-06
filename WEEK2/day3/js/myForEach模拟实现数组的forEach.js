// 遍历数组，返回数组的索引和索引值
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i],i);
    }
};
let ary1 = [1,2,3];
ary1.myForEach(function (item,index) {
    console.log(item, index);
});
console.log('_________');
ary1.forEach(function (item,index) {
    console.log(item, index);
});
