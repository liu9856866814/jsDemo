let headerBox = document.getElementById('header');
let linkList = document.getElementsByTagName('a');
let listBox = document.getElementById('list');
let productList = document.getElementsByTagName('li');

let productData = null;

let xhr = new XMLHttpRequest();
xhr.open('get','json/product.json',false);
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
        productData = JSON.parse(xhr.responseText);
    }
};
xhr.send();

let str = ``;

for (let i = 0; i < productData.length; i++) {
    let {price,title,hot,img, time} = productData[i];
    str +=`<li data-price = ${price}
                data-time = ${time}
                data-hot = ${hot}>
            <a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${title}</span><br>
            <span></span>
            <span>热度：${hot}</span>
            
        </a></li`
}