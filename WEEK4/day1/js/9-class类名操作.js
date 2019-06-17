// 除了操作样式,我们通过操作类名来达到操作样式的目的

let btn = document.getElementById('btn');

// 1. 写一个方法判断元素中有没有某个类名

function hasClass(ele, className) {
    // 判断元素className属性值的字符串中是否包含某个字符串
    let cN = className.trim(); // 字符串的trim() 方法去除字符串首尾空格
    return ele.className.includes(cN);
}

console.log(hasClass(btn, 'btn')); // true
console.log(typeof btn.className);
console.log(btn.className);

// 2. 添加类名 : 在原有的类名基础上加等于一个新类名
function addClass(ele,className) {
    let cN = className.trim();
    // ele.className += ' '+ className;
    ele.className += ` ${cN}`;
}

addClass(btn, 'four');
console.log(btn.className);

// 3. 删除类名
function removeClass(ele, className) {
    // 删除类名就是把被删除的类名从元素的className里面替换成空;
    let cN = className.trim();
    let reg = new RegExp(cN,'g'); // 用实例的方式创建动态的正则;第一个参数元字符的【原义】，第二个参数是修饰符
    ele.className = ele.className.replace(reg,'');
}
removeClass(btn, 'three');

// 动态创建正则
let reg2 = new RegExp('\\d','g'); // \在字符串中也是转义符，当你要使用时也需要转义
console.log(reg2.test("123"));// true

