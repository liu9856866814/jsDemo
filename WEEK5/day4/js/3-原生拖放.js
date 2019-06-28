// 1. HTML5原生支持拖放，但是需要给被拖动的元素设置行内属性 draggable = "true";

// 被拖拽元素和放置元素
// 被拖拽元素：被拖拽的元素（draggable = true）
// 放置元素：将来被拖拽元素放置的元素

// 原生的拖拽是基于原生拖拽事件完成的
let litBox = document.getElementById('litBox');
let bigBox = document.getElementById('bigBox');

// ondragstart 拖拽开始时触发
litBox.ondragstart = function () {
    console.log('start');
};

// ondrag 在拖拽时触发
litBox.ondrag = function () {
    // console.log('dragging');
};

// ondragend 拖拽结束时
litBox.ondragend = function () {
    console.log('end');
};
// 以上事件都是绑定给被拖拽元素的；对应的还有一些放置元素的相关事件；

// ondragenter 当被拖拽元素进入放置元素时触发；
bigBox.ondragenter = function(){
    console.log('enter');
};

// ondragover 当被拖拽元素经过放置元素时，触发放置元素的该事件
bigBox.ondragover = function (e) {
    console.log('over');
    e.preventDefault(); // 如果要使用放置元素的ondrop事件，必须阻止dragover的默认行为；
};

// ondragleave 当被拖拽元素离开放置元素时，触发放置元素的该事件
bigBox.ondragleave = function () {
    console.log('leave');
};

// ondrop 当被拖拽元素在放置元素上松开鼠标（结束拖拽）时触发放置元素的该事件
bigBox.ondrop = function () {
    console.log('drop');
    this.appendChild(litBox);
};


