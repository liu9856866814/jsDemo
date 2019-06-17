/*
* 图片懒加载（延时加载）：真实的项目中如果页面中有很多的图片，一般不是页面打开时就加载全部的图片，只加载用户可以看到的区域
* 的图片，用户暂时看不到不图片暂时不加载，等到某一个合适的时机（这个时机一般都是滚动到出现在浏览器的可视窗口内）再去加载
* 这张图片。
*
* 实现原理：img能展示成图片是因为img标签有一个src属性，src的属性值是一个图片资源路径。当浏览器解析HTML时，发现img有src属性，
* 就会立刻按照资源路径去下载这张图片，如果这张图片真实有效，最后被下载成功，浏览器就会把渲染成一张图片。
*
* 图片懒加载不直接给img设置src属性，imh没有src属性就不会去加载图片。我们通过自定义属性的方式把图片的资源路径存储在img标签
* 上（一般用data-src），等到合适的时机把存储的资源路径取出来，然后赋值给图片的src属性。此时，img获得了自己的src,浏览器会
* 立刻通过这个src去加载这张图片。
*
*
* */

// 单张图片延时加载: 当图片进入浏览器的可视窗口时再去加载这张图片

// ？如何计算图片什么时候进入可视区域？
// 当图片的上外边缘距离body上内边缘的距离 - 页面滚动条卷去的距离 - 浏览器可视窗口的高度 <= 0 时表示图片将进入可视窗口了
// 什么时候去算？ 当页面滚动条滚动时计算

/*// 1. 导入工具方法
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
        img.src = dataSrc; // 这里还需要一点点优化

    }
};*/


///////////////////// test-lazyOnload-one
/*
const {offset, win} = window.utils;
let img = document.getElementById('first');
let dataSrc = img.getAttribute('data-src');
window.onscroll = function(){
    let imgOffestTop = offset(img).top;
    let winScrollTop = win('scrollTop');
    let winH = win('clientHeight');
    if(imgOffestTop - winScrollTop - winH <= 0 ){
        let newImg = new Image();
        newImg.src = dataSrc;
        newImg.onload = function () {
            img.src = dataSrc;
            newImg = null;
        }
    }
};*/

////////////////// test-lazyOnload-moreImg
// 导入工具方法
const {offset,win} = window.utils;
let winH = win('clientHeight');
window.onscroll = function () {
    let imgAll = document.querySelectorAll('img');
    for (let i = 0; i < imgAll.length; i++) {
        let img = imgAll[i];
        let imgOffsetTop = offset(img).top;
        let winScrollTop = win('scrollTop');
        if(imgOffsetTop - winScrollTop - winH <= 0){
            if(img.src){
                continue;
            }
            let dataSrc = img.getAttribute('data-src');
            let newImg = new Image();
            newImg.src = dataSrc;
            newImg.onload = function () {
                img.src = dataSrc;
                newImg = null;
            }
        }
    }
};
