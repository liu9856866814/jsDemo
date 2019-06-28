// 在被拖拽元素和放置元素之间传递数据,需要使用dataTransfer对象.
// dataTransfer 在事件对象中;
let litBox = document.getElementById('litBox');
let bigBox = document.getElementById('bigBox');

// 设置数据
litBox.ondragstart = function (e) {
    e.dataTransfer.setData('key', 'value'); // 保存数据
    e.dataTransfer.setData('id', this.id); // 把元素的id通过dataTransfer对象的setDate方法保存起来
};

bigBox.ondragover = function (e) {
    e.preventDefault(); // 想使用放置元素的ondrop事件,需要阻止默许行为;

};

// dataTransfer 中的文件信息
bigBox.ondrop = function (e) {
    console.log(e.dataTransfer.files);
    // e.dataTransfer.files 属性存储文件信息,是拖拽到放置元素中的文件;是一个类数组,有长度有索引;类数组中的项有些属性需要掌握;
    // name: 文件名 (带扩展名)
    // size: 文件大小 (B) 1024B = 1KB; 1024K = 1M;
    // type: 文件类型
    // 如果做一个拖拽上传, 验证类型时可以使用name的拓展名或者使用type;
    // 如果验证大小:可以使用size属性求得文件大小
    e.preventDefault();
};




