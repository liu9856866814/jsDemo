// 元素对象有一个属性 classList,值是一个类数组,包含了这个元素所有的类名
let btn = document.getElementById('btn');
console.log(btn.classList);
/*
* [
*   0: "btn"
*   1: "one"
*   2: "two"
*   3: "three"
*   length: 4
*   value: "btn one two three"
* ]
* */

// classList 上面还有许多方法可以操作元素对象的这些类名
// ele.classList.add(类名1, 类名2...) 为元素增加类名
btn.classList.add('four', 'five');

// ele.classList.remove(类名1, 类名2...) 移除元素的类名
btn.classList.remove('three', 'four');

// ele.classList.contains(类名) 判断当前元素是否有某一个类名
console.log(btn.classList.contains('four'));

// ele.classList.toggle(类名): 如果元素原来有某个类名,就给它删除掉.如果原来没有就给它加上;
let box = document.getElementById('box');
btn.onclick = function () {
    box.classList.toggle('hide');
};

// ele.classList.forEach(callback) 遍历当前元素对象的所有类名
btn.classList.forEach(function (item,index) {
    console.log(item, index);
});

// 作业: 用classList改写utils中的hasClass/removeClass/addClass
