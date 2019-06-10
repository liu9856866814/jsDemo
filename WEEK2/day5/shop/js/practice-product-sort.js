// 获取元素
let linkBox = document.getElementById('header');
let linkList = linkBox.getElementsByTagName('a');
let productBox = document.getElementById('list');
let productList = productBox.getElementsByTagName('li');

let productData = null; //用来存后台传来的数据

// ajax 获取数据
let xhr = new XMLHttpRequest();
xhr.open('get','json/product.json',false);
xhr.onreadystatechange = function () {
    if(xhr.readyState ===4 && xhr.status === 200){
        productData = JSON.parse(xhr.responseText);
        // console.log(productData);
    }
};
xhr.send(); // 别忘记发送哦

// 将从服务器端接收的数据显示在页面中
let str = ``;

for (let i = 0; i < productData.length; i++) {
    let {title,time,price,hot,img} = productData[i];
    str += `<li data-time="${time}"
                data-price="${price}"
                data-hot="${hot}"
            >
            <a href="javascript:;">
                <img src="${img}" alt="">
                <p>${title}</p>
                <span>￥ ${price}</span>
                <span>日期：${time}</span>
                <span>热度：${hot}</span>
            </a>
        </li>`
}
productBox.innerHTML= str;

// 排序

let mySort = function(index,flag){
    productAry = utils.arrLiketoAry(productList);
    // console.log(productAry);
    productAry.sort((a,b) =>{
        let aIn,bIn;
        switch(index){
            case 0 :
                aIn = a.getAttribute('data-time').replace(/-/g,'');
                bIn = b.getAttribute('data-time').replace(/-/g,'');
                // console.log(aIn);
                // console.log(bIn);
                break;
            case 1:
                aIn = a.getAttribute('data-price');
                bIn = b.getAttribute('data-price');
                break;
            case 2:
                aIn = a.getAttribute('data-hot');
                bIn = b.getAttribute('data-hot');
                break;

        }
        return (aIn - bIn)*flag;
    });
    productAry.forEach(item => productBox.appendChild(item));//排序后要给页面元素排序
};

for (let i = 0; i < linkList.length; i++) {
    linkList[i].flag = -1;
    linkList[i].onclick=function(){
        [...linkList].forEach(item=>{
            if(item !== this){
                item.flag=-1;
            }
        });
        this.flag *= -1;
        mySort(i,this.flag);
    };
}
