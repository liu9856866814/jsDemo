// 获取元素
let headerBox = document.getElementById('header');
let linkList = document.getElementsByTagName('a');
let listBox = document.getElementById('list');
let productList = document.getElementsByTagName('li');

// 获取数据
let productData = null;
let xhr = new XMLHttpRequest();
xhr.open('get','json/product.json',false);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200){
    productData = JSON.parse(xhr.responseText);
  }
};
xhr.send();

// 绑定数据
let str = ``;
for (let i = 0; i < productData.length; i++) {
  let {price, img, title, hot, time} = productData[i];
  str += `<li data-price = ${price}
              data-time = ${time}
              data-hot = ${hot}>
            <a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span><br>
            <span>热度：${hot}</span><br>
            <span>日期：${time}</span>
        </a></li>`
}
listBox.innerHTML = str;

// 排序
let sortList = function (index, flag) {
  // console.log(arguments);
  let productAry = Array.from(productList);
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
        break;
    }
    return (aInn - bInn) * flag;
  });
  productAry.forEach((item)=>{listBox.appendChild(item)})
};

for (let i = 0; i < linkList.length; i++) {
  let item = linkList[i];
  item.flag = -1;
  item.onclick = function () {
    [...linkList].forEach((item) => item !== this ? item.flag = -1:void 0);
    this.flag *= -1;
    sortList(i,this.flag);
  }
}

