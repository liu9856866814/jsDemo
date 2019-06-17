// 1. 获取元素
let box = document.querySelector('#box');
// console.log(box);

// 2. 复制一份li
let ulBox = document.querySelector('#ulBox');
ulBox.innerHTML += ulBox.innerHTML; // 复制一份html，并且插入到页面中

// 3.  为了让这些图片在一行，重新调整ul的宽度
ulBox.style.width = '1600px'; // 要有单位px

// 4. 滚动起来
let timer = setInterval(() =>{
    box.scrollLeft += 1;
    if(box.scrollLeft >= 800){
        box.scrollLeft = 0;
    }
},16);

// 当浏览器窗口处于最小化时，浏览器中的定时器计时可能会出现问题。是因为最小化的过程中，浏览器进入了节能的状态，计算会出现偏差
// 切换页卡也可能会导致这种情况
// webWorker 可以启动另一个线程，某些情况下可以用这个解决这些问题

