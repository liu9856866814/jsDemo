// 1.获取鼠标位置
// 2. 把ul的left和top设置为鼠标的位置
// 3. 把盒子的display属性设置为block;
let $ = selector => document.querySelector(selector);
let menu = $('#menu');

function win(attr) {
    return document.documentElement[attr] || document.body[attr];
}
let minL = 0;
let minT = 0;
document.oncontextmenu = function (e) {
    menu.style.display = 'block';
    let maxL = document.documentElement.clientWidth - menu.offsetWidth;
    let maxT = document.documentElement.clientHeight - menu.offsetHeight -2;
    e.preventDefault();
    let left = e.clientX;
    let top = e.clientY;

    if(left < minL){
        left = minL;
    }
    if(top < minT){
        top = minT;
    }
    if(left > maxL){
        left = maxL;
    }
    if(top > maxT){
        // top = maxT;
        top = top - menu.offsetHeight;
    }
    menu.style.left = left + 'px';
    menu.style.top = top + 'px';

};
document.onclick = function () {
    menu.style.display = 'none';
};

// 增加刷新功能
let refresh = $('#refresh');
refresh.onclick = function () {
    // 刷新页面的方法:
    // 1.reload
    window.location.reload();
    // 2. 重新给location的href属性赋值
    // window.location.href 获取当前页面的url;如果给href属性赋值一个url,页面就会跳转到这个url指向的页面;
    // window.location.href = window.location.href;
    // window.location.href = 'http://www.baidu.com';
};
