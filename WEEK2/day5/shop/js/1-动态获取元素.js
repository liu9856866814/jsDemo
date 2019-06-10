//1. 获取元素对象
let headerBox = document.getElementById('header'); // 按钮的容器元素
let linkList = headerBox.getElementsByTagName('a'); // 按钮集合
let listBox = document.getElementById('list'); // 商品列表的容器元素
let productList = listBox.getElementsByTagName('li'); // 获取所有的商品li的集合
// let productList = listBox.querySelectorAll('li');
// console.log(linkList);
// console.log(productList); // productList是一个空集合

// 2. 获取和绑定数据：一般项目中 通过ajax/jsonp等技术从服务端获取数据，动态绑定到页面中；
// 2.1 基于ajax从服务端获取数据（本次没有服务端，所以请求本地的json文件）;
// 2.2 把上一步拿到的数据变成html结构（动态创建DOM或者拼接字符串）；
// 2.3 把上一步得到的html结构插入页面中；
let productData = null; //productData 准备存储从服务端获取的数据

// -> 2.1 ajax 获取数据
let xhr = new XMLHttpRequest(); // 创建ajax实例对象
xhr.open('GET','json/product.json',false); // 调用open方法配置请求
// open方法的三个参数：
// http method: 请求方式 GET
// url: 请求的接口地址
// async: false 表示同步；true 表示异步
xhr.onreadystatechange = function(){
    if(xhr.readyState ===4 && xhr.status ===200){
        // xhr.redayState 是表示当前请求状态的值
        // xhr.status 这个status是http status,以2开头的数字都是成功
        // console.log(xhr.responseText); // xhr.responseText 存储的是从服务端返回的数据
        // console.log(typeof xhr.responseText); //JSON格式的字符串
        productData = JSON.parse(xhr.responseText); // 解析服务端的数据结构
    }
}; // 监听xhr的onreadystatechange事件
xhr.send(); // 发送请求
// console.log(productData);

// -> 2.2 把数据绑定成html
// 动态创建DOM、插入DOM
/*for (let i = 0; i < productData.length; i++) {
    let item = productData[i];
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = 'javascript:;';
    let img = document.createElement('img');
    img.src = item.img;
    let p = document.createElement('p');
    p.innerHTML = item.title;
    let span = document.createElement('span');
    span.innerHTML = '￥'+ item.price;
    a.appendChild(img);
    a.appendChild(p);
    a.appendChild(span);
    li.appendChild(a);
    listBox.appendChild(li); // 每插入一次就会引起一次DOM回流
}*/
// DOM回流、重绘
// DOM回流（reflow）: 页面中的元素增加、删除、大小、位置的改变，会引起浏览器重新计算其他元素的位置，这种现象称为DOM回流。
// DOM回流非常消耗性能，尽量避免DOM回流；
// DOM重绘：元素的某些css样式如背景色、字体颜色等发生改变时，浏览器需要重新描绘渲染这个元素，这种现象称为DOM重绘。

// 文档碎片：存放DOM元素的临时容器；专门用来减少DOM回流次数的
// document.createDocumentFragment() 创建一个文档碎片
/*let frg = document.createDocumentFragment();
for (let i = 0; i < productData.length; i++) {
    let item = productData[i];
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = 'javascript:;';
    let img = document.createElement('img');
    img.src = item.img;
    let p = document.createElement('p');
    p.innerHTML = item.title;
    let span = document.createElement('span');
    span.innerHTML = '￥'+ item.price;
    // img/p/span是a的子元素
    a.appendChild(img);
    a.appendChild(p);
    a.appendChild(span);
    // a标签是li子元素
    li.appendChild(a);
    listBox.appendChild(li);
    frg.appendChild(li);// 把每次创建出来 的li插入到文档碎片中，以求减少DOM回流次数
}
listBox.appendChild(frg);// 把文档碎片插入ul中，一次性把10个li插入页面中，这样做只会引发一次DOM回流
frg = null // 临时对象用完之后记得手动释放内存(手动释放内存是良好的代码风格之一).
*/

// 字符串拼接+ innerHTML
/*// 传统字符串拼接
let str = '';
for (let i = 0; i < productData.length; i++) {
  let item = productData[i];
  // let {img, title, price} = productData[i];
  str += '<li>';
  str += '<a href="javascript:;">';
  str += '<img src="' + item.img + '" alt="">';
  str += '<p>' + item.title + '</p>';
  str += '<span>￥' + item.price + '</span>';
  str += '</a>';
  str += '<>'
}
// console.log(str);
listBox.innerHTML = str;*/

// 模板引擎: 原理也是字符串拼接

let str =``;
for (let i = 0; i < productData.length; i++) {
    // let item = productData[i];
    let {img,title,price} = productData[i];
    str +=`<li>
            <a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥ ${price}</span>
        </a></li>`
}
listBox.innerHTML = str;
// console.log(productList);
// 在数据绑定之前,ul下面并没有li,所以我们获取来的集合productList是一个空集合.但是当数据绑定完成后,我们并没有重新获取这个ul
// 下面的li,但是因为DOM映射的关系,页面中ul下面有li了,DOM映射会把新插入的li映射到productList集合中,所以这个集合不是空集合了.
// 但是querySelectorAll()方法获取来的集合是静态集合 staticNodeList,是掐断了DOM映射的,如果在数据绑定前用querySelectorALL
// 方法获取的元素集合,需要在数据绑定后重新获取.


















