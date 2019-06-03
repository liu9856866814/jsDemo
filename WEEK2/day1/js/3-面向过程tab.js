// 1. 获取元素
// 1.1 获取容器元素
let wrapper1 = document.querySelector('#tab');
// 1.2 获取选项卡头
let headerList = wrapper1.querySelectorAll('.header>li');
// 1.3 获取所有的卡片
let cardList = wrapper1.querySelectorAll('div');

// 2. 给每个选项卡头绑定点击事件
for (let i = 0; i < headerList.length; i++) {
    // headerList[i]就是每个li元素
    headerList[i].onclick = function () {
        // 1. 清除所有选项卡头和卡片所有的选中样式；
        for (let j = 0; j < headerList.length; j++) {
            headerList[j].className = ''; //清除选项卡头的active样式
            cardList[j].className = ''; // 清卡片的active样式
        }
        // 2.给被点击的li以及卡片设置样式
        headerList[i].className='active';
        cardList[i].className='active';
    }
}

// 1. 获取元素
// 1.1 获取容器元素
let wrapper2 = document.querySelector('#tab2');
// 1.2 获取选项卡头
let headerList1 = wrapper2.querySelectorAll('.header > li');
// 1.3 获取所有的卡片
let cardList1 = wrapper2.querySelectorAll('div');

// 2. 给每个选项卡头都绑定点击事件
for (let i = 0; i < headerList1.length; i++) {
    // headerList[i] 就是每个li元素
    headerList1[i].onclick = function () {
        // 1. 清除所有选项卡头和卡片所有的选中样式；
        for (let j = 0; j < headerList1.length; j++) {
            headerList1[j].className = ''; // 清选项卡头的active样式
            cardList1[j].className = ''; // 清卡片的active样式
        }

        // 2. 给被点击的li以及对应的卡片div设置active样式
        headerList1[i].className = 'active';
        cardList1[i].className = 'active'
    }
}




