// 1. 导入工具方法
const {offset,win} = window.utils; // 解构赋值导入工具方法

// 2. 计算
let img = document.getElementById('first');
let dataSrc = img.getAttribute('data-src');
window.onscroll = function(){
    // 页面滚动条滚动时会触发这个事件，执行这个事件函数
    let imgOffsetTop = offset(img).top; // 获取图片距离body的上内边缘的距离
    let winScrollTop = win('scrollTop'); // 获取页面滚动条卷去的高度
    let winH = win('clientHeight'); // 获取浏览器可视窗口的高度

    // 判断是否进入可视区域
    if(imgOffsetTop - winScrollTop - winH <= 0){
        // 满足这个条件时给img的src赋值
        // img.src = dataSrc; // 这里还需要一点点优化，真实项目中一般不直接给页面中的图片src赋值，而是先动态创建一个img标签，
        // 然后给这个动态创建出来的src赋值，让这个新建的img去尝试加载，如果加载成功，再给页面中的图片的src属性赋值。
        let newImg = document.createElement('img');
        // let newImg = new Image(); 动态创建图片 两种方法一样
        newImg.src = dataSrc; // 尝试加载
        newImg.onload = function () {
            // img标签有一个onload事件，如果这张图片加载成功就会触发这个事件
            img.src = dataSrc; // 这个时候表示加载成功
            newImg = null; // 释放这个临时图片的堆内存
        };
        newImg.onerror = function () {
            // 如果加载失败就会触发这个事件
        }
    }
};