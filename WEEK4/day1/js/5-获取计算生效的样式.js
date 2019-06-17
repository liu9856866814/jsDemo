// 元素对象.style.xxx 只能获取写在行内的样式: css (层叠样式表)里面的样式无法通过这种方式获取.

// 标准浏览器下
// window.getComputedStyle(元素对象,伪类) 获取元素对象经过计算生效的样式(既包含写在样式表的也包含行内的);返回一个对象,这个
// 对象中存储了这个元素经过计算生效的样式,对象的属性就是css属性名,值就是这个样式的值;(这个对象是只读的read-only,修改它就会报错)

// IE浏览器下
// 元素对象.currentStyle 属性,这个属性的值是一个对象,这个对象中存储了这个元素计算生效的样式;

function getCss(ele,attr) {
    var value;
    if('getComputedStyle' in window){
        value = window.getComputedStyle(ele,null)[attr];
    }else{
        value = ele.currentStyle[attr];
    }
    // 处理单位:写一个正则匹配数字带单位
    // 10.5px - 20px 0.2rem
    var reg = /^-?\d+(\.\d+)?(px|rem|pt|em)$/g;
    if(reg.test(value)){
        value = parseFloat(value);
    }
    return value;
}