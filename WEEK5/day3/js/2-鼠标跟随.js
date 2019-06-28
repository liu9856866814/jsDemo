// 实现一个鼠标跟随效果:
// 页面中有一个盒子BOX,当鼠标移动的时候,要让盒子box跟随鼠标,保持鼠标牌盒子的中心位置;

// 1. 监听onmousemove事件,监听document的onmousemove事件
// 2. 实时获取鼠标的位置,把鼠标的位置坐标设置成元素的left和top
let $ = selector => document.querySelector(selector);
let box = $('.box');
document.onmousemove = function (e) {
    // console.log(e.clientX, e.clientY);
    // 元素的left值和top值设置的是元素的左上角点距离body的左边框和上边框的距离;直接设置会导致鼠标一直处于元素的左上角
    // box.style.left = e.clientX + 'px';
    // box.style.top = e.clientY + 'px';

    // 为了让鼠标处于盒子的中心位置,因为元素在跟着鼠标动,鼠标的位置是不能改的,为了让鼠标在盒子中心位置,所以需要让clientX
    // 减去半个盒子的宽,clientY - 半个盒子的高.
    let left = e.clientX - box.offsetWidth/2  + 'px';
    let top = e.clientY - box.offsetHeight/2  + 'px';
    // 把left 和 top的值设置给元素
    box.style.left = left;
    box.style.top = top;
};