let headerBox = document.getElementById('header');
let linkBox = headerBox.getElementsByTagName('a');
let listBox = document.getElementById('list');
let productList = listBox.getElementsByTagName('li');

let productData = null;
let xhr = new XMLHttpRequest();
xhr.open('GET','json/product.json',false);
xhr.onreadystatechange = function (){
    if(xhr.readyState === 4 && xhr.status === 200){
        productData = JSON.parse(xhr.responseText);
    }
};
xhr.send();

let str = ``;
for(let i = 0; i < productData.length; i++){
    let { img, title, price,time,hot } = productData[i];
    str += `<li data-price = '${price}'
                data-time = '${time}'
                data-hot = '${hot}'>
        <a href="javascript:;">
        <img src="${img}" alt="">
        <p>${title}</p>
        <span>￥${price}</span> <br>
        <span>上架时间：${time}</span> <br>
        <span>热度：${hot}</span>
    </a></li>`
};
listBox.innerHTML = str;

// 封装一个排序的方法
let sortList = function (index, flag){
    productAry = Array.from(productList);
    productAry.sort(function (a, b){
        let aIn,bIn;
        let ary = ['data-time','data-price','data-hot'];
        aIn = a.getAttribute(ary[index]);
        bIn = b.getAttribute(ary[index]);
        if(!index){
            aIn = aIn.replace(/-/g,'');
            bIn = bIn.replace(/-/g,'')
        }
        return (aIn - bIn) * flag;
    })

    // 把拍好序的数据重新放回到页面中
    // productAry.forEach(item => listBox.appendChild(item));
};
console.log(productAry);
// 循环绑定点击事件
for(let i = 0; i < linkBox.length; i++){
    // 在绑定点击事件之前先给元素自定义属性flag
    linkBox[i].flag = -1;
    linkBox[i].onclick = function (){
        // for (let i = 0; i < linkBox.length; i++){
        //     let item = linkBox[i];
        //     if(item !== this){
        //         item.flag = -1;
        //     }
        // };
        [...linkBox].forEach(function (item){
            item !== this ? item.flag = -1 : null;
        });
        this.flag *= -1;
        sortList(i,this.flag);
    }
};
