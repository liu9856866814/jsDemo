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
// console.log(productData); // 数组对象

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
            <span>￥${price}</span><br>
            <span>日期: ${time}</span><br>
            <span>热度：${hot}</span>
        </a></li>`
}
listBox.innerHTML = str;

// 2. 封装一个处理排序的方法
// let flag = -1; // 我们发现一个问题,当我们第一次点击的是上架时间时,商品按照上架时间进行升序排序,但是接下来点击价格,我们期待商品
// 按照价格升序排序,事实上是商品按照价格的降序排列了.之所以这样,是因为第一次点击上架时间时,全局变量flag被修改成+1了,当点击价格
// 时又给全局变量乘了一个-1,所以此时flag变成-1,再乘给(aInn - bInn) 时就变成bInn - aInn,即降序;为了解决这个问题,我们让每个a标签
// 都拥有自己的flag,在点击时把自己的乘等于-1;
let sortList = function(index, flag){ // 用let声明的变量必须在声明后才能使用
    // index 形参代表的是被点击a标签的索引,用来判断按照哪个维度排序;如果索引为0表示按照上架时间排序,1 表示价格,2 表示热度
    // 1. 我们需要给页面中li进行排序,即给productList集合排序.但是productList是一个类数组集合,如果想用sort方法排序,需要先
    // 将其转换成数组;
    let productAry = utils.arrLiketoAry(productList);
    // 2. 处理排序(按照价格排序)
    productAry.sort((a,b) =>{
        let aInn,bInn;
        // 根据被点击a标签的索引,给
        switch (index) {
            case 0:
                // 日期中有一个 - ,导致两个日期相减得到NaN,无法排序,所以我们把日期中的 - 全部替换成空; /-/g 匹配字符串中所有的 -
                aInn = a.getAttribute('data-time').replace(/-/g, '');
                bInn = b.getAttribute('data-time').replace(/-/g, '');
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
        return (aInn - bInn) * flag; // flag在+1t -1来回切换,就可以实现在升降序来回切换
    });
    // 3. 数组已经排序了,但是页面中元素没有排.为了让页面元素也排序,我们需要按照数组中元素顺序,把元素appendChild到ul中
    productAry.forEach(item=> listBox.appendChild(item));
};
// 3.绑定事件
for (let i = 0; i < linkList.length; i++) {
    linkList[i].flag = -1; // 通过自定义属性的方式给每个a标签添加一个私有的flag属性
    linkList[i].onclick = function(){
        // 还有一个功能,点击当前维度时当前维度按照升序排序,当我再点击其他维度时,不管上一次是升序还是降序,本次就要升序,所以需要
        // 点击当前维度时,重置其他维度的flag为-1;
        /*for (let j = 0; j < linkList.length; j++) {
            if(linkList[j] !== this){
                // 不是this就表示是其他两个维度
                linkList[j].flag = -1; // 重置其他维度的flag
            }
        }*/
        [...linkList].forEach(item =>{
            item !== this ? item.flag = -1 : void 0;
        });
        this.flag *= -1; // 点击时给flag*=-1,所以flag会在 正负1之间来回切换
        sortList(i,this.flag); // 点击第个按钮都会调用sortList方法排序,sortList方法需要知道被点击的是哪个按钮,按照哪个维度排序
        // 此时我们把flag属性变成了每个a标签私有属性,sortList方法依赖flag,所以我们直接在执行sortList方法时,把a标签的flag属性作
        // 为实参传递给sortList方法
    };
}


