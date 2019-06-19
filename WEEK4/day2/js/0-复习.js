/*
* 复习：
*   1. setCss 方法
*   2. setBatchCss
*   3. 整合css方法
*   4. hasClass方法，检验元素是否有某个类名
*   5. addClass 方法，给元素增加一个类名
*   6. removeClass 方法，删除当前元素的某个类名
* */
// 设置css样式： 元素.style.xxx = xxx 的方式设置元素的样式;
function setCss(ele, attr, val) {
    // 处理单位: width/height/margin/padding/left/top/bottom/right/fontSize...
    // 处理属性是上面的这些属性,值是不带单位的数字
    let reg = /(fontSize|width|height|(margin|padding)?|(top|right|bottom|left)?)/i; // 写i是为了匹配marginTop这些属性
    if(reg.test(attr) && !isNaN(val)){
        // 当前的属性attr是上面这些需要单位的属性,并且val没有单位,才需要加单位
        val += 'px';
    }
    ele.style[attr] = val;
}
setCss(box, 'width' , 100); // 想好方法要怎么调用,组织参数

// 2. 批量设置css
let obj = {
    width:100,
    height:100,
    backgroundColor: 'red'
};
function setBatchCss(ele, batch) {
    if(typeof batch !== 'object') throw TypeError('\'batch\' is not a object');
    for(let key in batch) {
        if (batch.hasOwnProperty(key)){
            // 判断key是否是batch的一个私有属性,如果是再设置css样式,如果不是就不设置
            setCss(ele, key, batch[key])
        }
    }
}
setBatchCss(box, obj);
for (let key in obj){
    console.log(key,obj[key]);
    // key -> width obj[key] -> obj['width'] -> 100
    // key -> height obj[key] -> obj['height'] -> 100
    // key -> backgroundColor obj[key] -> obj['backgroundColor'] -> 'red'
}

// 3. 整合css方法: getCss/ setCss/ setBatchCss三合一
const { getCss } = window.utils;
function css(ele, attr, val) {
    // 根据不同的参数调用不同的方法:模拟重载
    // 1. 第二个参数是字符串,第三个参数没传是获取
    if( typeof attr === 'string' && typeof val === 'undefined'){
        return getCss(ele,attr);
    }
    // 2. 第二个参数是字符串,第三个参数传值了
    if( typeof attr === 'string' && val !== 'undefined'){
        return setCss(ele, attr, val); // 返回值为undefined;
    }
    // 3. 第二个参数是一个对象
    if( typeof attr === 'object'){
        setBatchCss(ele,attr);
    }
}
css(box, 'width'); // 获取box的width属性的值
css(box, 'width', 100); // 设置box的width属性值是100px
css(box,{
    width: 100,
    height: 100,
    color: 'red'
}); // 批量设置css样式

// 判断获取的是元素集合还是元素 : 扩展内容
// 判断获取的结果是HTMLCollection 或者NodeList的实例 就是集合

let list = document.getElementById('list');
let liList = list.getElementsByTagName('li');
console.log(liList);
console.log(liList instanceof HTMLCollection); // 集合

let byQueryLi = document.querySelectorAll('#list > li');
console.log(byQueryLi instanceof NodeList); // 集合

// 类名操作
// 1. 判断有没有某个类名
function hasClass(ele, className) {
    let cN = className.trim();
    // return ele.className.includes(cN);
    return ele.className.indexOf(cN) !== -1; // indexOf 查找字符首次在字符串中出现的索引位置,如果出现过就是索引,如果没出现过返回-1;

}
console.log(hasClass(box, 'box'));

// 2. 为这个元素增加一个类名
function addClass(ele, className) {
    let cN = className.trim();
    ele.className += ` ${cN}`;
}

// 移除类名
function removeClass(ele, className) {
    let cN = className.trim();
    let reg = new RegExp(`${cN}`,'g');
    ele.className = ele.className.replace(reg, '');
}



