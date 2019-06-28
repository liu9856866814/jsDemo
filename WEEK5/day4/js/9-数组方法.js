let ary2 = [1,6,4,5,3,8];
// filter 方法会把让回调函数返回值为true的数组项组成一个新数组返回,原数组不变;
let a1 = ary2.filter((item, index) => {
    // console.log(item, index); item是数组中的每一项; index是每一项的索引
    return item < 5; // 把数组中小于5的过滤出来;
});
console.log(a1);