var box = document.getElementById('box');

// 封装一个getCss方法，获取元素计算生效后样式

function getCss(ele, attr) {
    var value;
    // 1. 判断是否是IE浏览器
    if('getComputedStyle' in window){ // 判断window对象上有getComputedStyle属性
        value = window.getComputedStyle(ele,null)[attr];
    }else{
        value = ele.currentStyle[attr];
    }
    // 把单位去掉: 把数字且带单位的，把单位去掉
    var reg = /^-?\d+(\.\d+)?(px|rem|em|pt)$/g;
    if (reg.test(value)){
        value = parseFloat(value);
    }
    return value;
}
console.log(getCss(box, 'width')); // 300px -> 300
console.log(getCss(box, 'height')); // 300px -> 300
console.log(getCss(box, 'opacity'));

// 优化点：
// 1. 要把px单位去掉
