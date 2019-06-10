// 1.先获取元素对象
let headerBox = document.getElementById('header'),
  linkList = headerBox.getElementsByTagName('a'),
  listBox = document.getElementById('list'),
  productList = listBox.getElementsByTagName('li');

// 2. 基于ajax动态获取数据并绑定到页面
let productData = null;
let xhr = new XMLHttpRequest();
xhr.open('get','json/product.json',false);
// ./json/product.json 相对于index.html查找的
xhr.onreadystatechange = function () {
  if(xhr.readyState=== 4 && xhr.status === 200){
    productData = JSON.parse(xhr.responseText);
  }
};
xhr.send();

// 绑定数据
let str = ``;
productData.forEach(({img ,title ,price ,hot ,time }) =>{
  // let {img ,title ,price ,hot ,time } = item;
  str += `<li data-price="${price}"
              data-time="${time}"
              data-hot="${hot}"
            >
            <a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span><br>
            <span>日期：${time}</span><br>
            <span>热度 ${hot}</span>
        </a></li>`
});
listBox.innerHTML = str;

// 声明一个方法处理排序
let sortList = function (index, flag) {
  // 1. 先把类数组集合转成数组
  let productAry = utils.arrLiketoAry(productList);
  // 2. 排序
  productAry.sort((a, b) =>{
    let aInn, bInn;
    switch (index) {
      case 0:
        aInn = a.getAttribute('data-time').replace(/-/g,'');
        bInn = b.getAttribute('data-time').replace(/-/g,'');
        break;
      case 1:
        aInn = a.getAttribute('data-price');
        bInn = b.getAttribute('data-price');
        break;
      case 2:
        aInn = a.getAttribute('data-hot');
        bInn = b.getAttribute('data-hot');
        break
    }
    return (aInn - bInn) * flag;
  });
  // 3. 按照排序好的数组，把元素插入到页面中
  productAry.forEach(item=> listBox.appendChild(item));
};


// 循环绑定事件
for (let i = 0; i < linkList.length; i++) {
  linkList[i].flag = -1;
  linkList[i].onclick = function(){
    for (let j = 0; j < linkList.length; j++) {
      if(linkList[j] !== this) linkList[j].flag = -1; // 如果if语句的花括号中只有一行代码，可以不写花括号；
      // linkList[j] !== this && linkList[j].flag = -1;
    }
    this.flag *= -1;
    sortList(i, this.flag);
  }
}
