// 写两个方法:
// 一个求两数之和sum方法
// 一个求两数之差的minus方法;

function sum(a, b){
    return a + b;
}
function minus(c, d) {
    return c - d;
}

// 导出多个
// 1.
// exports.sum = sum;
// exports.minus = minus;

// 2.
module.exports = {
    sum,
    minus
};
