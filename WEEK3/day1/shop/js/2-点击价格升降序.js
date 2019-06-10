//1. 获取元素对象
let headerBox = document.getElementById('header'); // 按钮的容器元素
let linkList = headerBox.getElementsByTagName('a'); // 按钮集合
let listBox = document.getElementById('list'); // 商品列表的容器元素
let productList = listBox.getElementsByTagName('li'); // 获取所有的商品li的集合

let productData = null; //productData 准备存储从服务端获取的数据

// ajax 获取数据
let xhr = new XMLHttpRequest(); // 创建ajax实例对象
xhr.open('GET','json/product.json',false); // 调用open方法配置请求
xhr.onreadystatechange = function(){
    if(xhr.readyState ===4 && xhr.status ===200){
        productData = JSON.parse(xhr.responseText); // 解析服务端的数据结构
    }
}; // 监听xhr的onreadystatechange事件
xhr.send(); // 发送请求
// console.log(productData);

// 字符串拼接+ innerHTML

let str =``;
for (let i = 0; i < productData.length; i++) {
    // let item = productData[i];
    let {
        img,
        title,
        price,
        time,
        hot
    } = productData[i];
    // 因为后面排序需要使用价格/上架时间/热度,所以在绑定数据时就需要通过html行内属性的方式保存起来;
    str +=`<li data-price="${price}" 
               data-time="${time}"
               data-hot="${hot}">
            <a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥ ${price}</span><br>
            <span>热度：${hot}</span>
        </a></li>`
}
listBox.innerHTML = str;

// 2. 封装一个处理排序的方法
let flag = -1; // 1 -1 为了实现连续点击价格按键可以切换升降序,我们设置一个flag开头(一个标识在两个值之间来回切换)
let sortList = function(){ // 用let声明的变量必须在声明后才能使用
    // 1. 我们需要给页面中li进行排序,即给productList集合排序.但是productList是一个类数组集合,如果想用sort方法排序,需要先
    // 将其转换成数组;
    let productAry = utils.arrLiketoAry(productList);
    // 2. 处理排序(按照价格排序)
    productAry.sort((a,b) =>{
        // 在这里需要根据li的价格进行排序,而a/b就是li元素对象.但是我们目前阶段拿不到价格数据,所以我们需要回到绑定数据的地方,想办法
        // 把价格数据存起来
        let aInn = a.getAttribute('data-price');
        let bInn = b.getAttribute('data-price');
        return (aInn - bInn) * flag; // flag在+1t -1来回切换,就可以实现在升降序来回切换
        // 升序: (aInn - bInn) * -1
        // 降序: (bInn - aInn) * -1
        // 升序: (aInn - bInn) * -1
    });
    // console.log(productAry);
    // 3. 数组已经排序了,但是页面中元素没有排.为了让页面元素也排序,我们需要按照数组中元素顺序,把元素appendChild到ul中
    productAry.forEach(item=> listBox.appendChild(item));
};
// 3.绑定事件
for (let i = 0; i < linkList.length; i++) {
    linkList[i].onclick = function(){
        flag *= -1; // 点击时给flag*=-1,所以flag会在 正负1之间来回切换
        sortList();
    };
}
















