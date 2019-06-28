let $ = selector => document.querySelector(selector);

let inner = $('.inner');
let outer = $('.outer');

inner.onclick = function (e) {
    console.log('inner的click事件触发了');
    e.stopPropagation(); // 阻止事件冒泡
};
outer.onclick = function () {
    console.log('outer的click事件触发了');
};
document.body.onclick = function(){
    console.log('body的click事件触发了');
};
document.onclick = function () {
    console.log('document的click事件触发了');
};

// 事件冒泡: 点击inner,inner的父级元素outer的点击事件以及整个文档顶端的document的点击事件都会被依次触发.这种从低层级的
// html元素向高层级依次触发事件的现象称为事件冒泡;

// 事件触发一共有三个阶段: 捕获阶段/目标阶段/冒泡阶段;从最外层元素找到事件源的过程称为捕获阶段,在捕获的过程中,如果经过的
// 元素有绑定有该事件,也会被触发;在事件目标(事件源)触发事件后,开始向上冒泡,依次触发父级元素的该事件;

// 取消冒泡: e.stopPropagation() 阻止事件冒泡;

// IE的阻止冒泡:
// e.cancelBubble = true;








