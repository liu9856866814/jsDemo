// 1. 获取元素
var headerList = document.querySelectorAll('#header > li'); // 获取所有的选项卡头
var cardList = document.querySelectorAll('.wrapper > div');

// 2. 给每一个选项卡头绑定事件
for (let i = 0; i < headerList.length; i++) {
  headerList[i].onclick = function () {

    tabChange(i);
  }
}
function tabChange(i) {
  // 1 清除所有选中样式
  for (let k = 0; k < headerList.length; k++) {
    headerList[k].className = ''; // 清除选项卡头的active样式
    cardList[k].className = ''; // 清卡片的active样式
  }
  // 2. 设置选项卡头以及这个头对应的卡片为active
  headerList[i].className = 'active';
  cardList[i].className = 'active';
}

// 3. 定时器驱动选项卡切换
var index = 0;
setInterval(function () {
  index++;
  if (index > 2) {
    index = 0;
  }
  tabChange(index);
}, 1000);