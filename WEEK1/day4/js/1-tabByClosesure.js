// 获取选项卡头
var headerList = document.querySelectorAll('.header>li');
var cardList = document.querySelectorAll('.wrapper>div');

// 循环给每个选项卡头绑定点击事件
for (var i = 0; i < headerList.length; i++) {
    (function (a) {
        // a = 0
        headerList[a].onclick = function () {
            //清除所有卡片和头的选中样式
            for (var j = 0; j < headerList.length; j++) {
                headerList[j].className = '';
                cardList[j].className = '';
            }
            // console.log(a);
            // console.log(i);
            headerList[a].className = 'active';
            cardList[a].className = 'active';
        }
    })(i)
    /*(function (a) {
    // a = 1
    headerList[a].onclick = function () {
      // 清除所有卡片和头的选中样式
      for (var j = 0; j < headerList.length; j++) {
        headerList[j].className = '';
        cardList[j].className = '';
      }
      console.log(i);
      headerList[a].className = 'active';
      cardList[a].className = 'active';
    }
  })(i)*/

    /* (function (a) {
       // a = 2
       headerList[a].onclick = function () {
         // 清除所有卡片和头的选中样式
         for (var j = 0; j < headerList.length; j++) {
           headerList[j].className = '';
           cardList[j].className = '';
         }
         console.log(i);
         headerList[a].className = 'active';
         cardList[a].className = 'active';
       }
     })(i)*/

}
