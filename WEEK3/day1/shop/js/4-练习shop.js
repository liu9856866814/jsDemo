// 获取元素对象
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
        productData = utils.toJSON(xhr.responseText);
        // console.log(productData);
    }
};
xhr.send();

// 绑定数据
let str =``;
for (let i = 0; i < productData.length; i++) {
    let {price, img, hot, time, title} = productData[i];
    str += `<li data-time = ${time}
                data-price = ${price}
                data-hot = ${hot}
            ><a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span><br>
            <p>热度：${hot}</p>
            <p>日期：${time}</p>
        </a></li>`;
    // console.log(str);
}
listBox.innerHTML = str;

// 商品排序
let sortList = function (index, flag) {
    // debugger;
    // console.log(111);
    let productAry = utils.arrLikeToAry(productList);
  productAry.sort((a,b) => {
      let aInn, bInn;
      switch (index){
          case 0:
              // console.log(111);
              aInn = a.getAttribute('data-time').replace(/-/g,'');
              // console.log(aInn, bInn);
              bInn = b.getAttribute('data-time').replace(/-/g,'');
              break;
          case 1:
              // console.log(222);
              aInn = a.getAttribute('data-price');
              bInn = b.getAttribute('data-price');
              break;
          case 2:
              // console.log(333);
              aInn = a.getAttribute('data-hot');
              bInn = b.getAttribute('data-hot');
      }
      return (aInn - bInn) * flag;
  });
    productAry.forEach(item =>listBox.appendChild(item));
    // console.log(listBox);
};
// sortList();
for (let i = 0; i < linkList.length; i++) {
    linkList[i].flag = -1;
    linkList[i].onclick = function () {
        [...linkList].forEach(item =>{item !== this ? item.flag = -1: void 0});
        // console.log(this.flag);
        this.flag *= -1;
        // console.log(this.flag);
        sortList(i,this.flag);
    }
}




