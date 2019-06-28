// 1.获取元素
let litBox = document.getElementById('litBox');
let litBox2 = document.getElementById('litBox2');

let bigBox = document.getElementById('bigBox'); // 放置元素

// 给被拖拽元素绑定事件: 在事件函数中保存被拖拽元素的id
litBox.ondragstart = function (e) {
    e.dataTransfer.setData('id', this.id);
};
litBox2.ondragstart = function (e) {
    e.dataTransfer.setData('id', this.id);
};

// 给放置元素绑定事件
bigBox.ondragover = function(e){
    e.preventDefault(); // 阻止dragover的默认行为
};
bigBox.ondrop = function (e) {
    let id = e.dataTransfer.getData('id');
    let ele = document.getElementById(id); // 根据dataTransfer中的id获取被拖拽的元素
    // 把元素插入到bigBox中
    this.appendChild(ele);

};
