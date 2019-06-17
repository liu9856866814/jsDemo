// 多张图片的延时加载
// 就是在页面滚动时，把所有的图片都获取到，然后遍历这些图片，对每个图片进行判断，判断其是否进入了浏览器可视窗口，如果进入了，
// 就去加载它，如果没进入就不加载。
// 1. 导入工具方法
const {offset, win} = window.utils;

let winH = win('clientHeight'); // 获取浏览器可视窗口的高度

// 2. 监听滚动条滚动
window.onscroll = function () {
    // 2.1 获取所有的图片
    let imgList = document.querySelectorAll('img');

    // 2.2 遍历集合中每一张图片，判断每一个图片是否进入浏览器可视区域
    for (let i = 0; i < imgList.length; i++) {
        let img = imgList[i]; // 这个集合中的每一张图片
        if(img.src){
            // img标签如果没有加载过，src属性值为空，空就是false.如果加载过了，img的src属性就不为空，不为空就是true,此时
            // 不需要重复加载，需要跳过该张图片，所以使用continue;
            continue;
        }
        let imgOffsetTop = offset(img).top; // 求出每一张图片到body上内边缘的距离
        let winScrollTop = win('scrollTop'); // 获取页面卷去的高度
        console.log(winScrollTop);
        // 判断是否出现在可视区中
        // if(imgOffsetTop - winScrollTop - winH <= 0){
        //     // 满足这个条件说明图片已经要出来了，要去加载这张图片
        //     let dataSrc = img.getAttribute('data-src');
        //     // 动态创建img标签尝试加载
        //     let newImg = new Image();
        //     newImg.src = dataSrc;
        //     newImg.onload = function () { //监听onload事件，如果加载成功就会触发这个事件
        //         img.src = dataSrc;
        //         newImg = null;
        //     }
        // }
    }
};




