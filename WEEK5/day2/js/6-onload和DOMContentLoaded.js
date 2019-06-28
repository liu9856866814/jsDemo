// window.onload 页面中所有的资源（css、js、图片、字体）全部加载完成后，才会触发；
// DOM0级事件：
window.onload = function () {
    console.log('window onload');
};
// DOMContentLoaded 页面中的DOM结构加载解析完成后就会触发；（DOM2级事件）
// DOM2级事件:
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Content Loaded');
}, false);

// DOMContentLoaded 触发早于window.onload;
document.addEventListener('DOMContentLoaded', function () {
    // 在这里面写了很多的业务逻辑，表示页面中的DOM结构加载完成后再执行这个回调函数中的代码；
    // 因为JS是用来操作DOM的，这样写是保证DOM结构加载解析完成，再操作DOM更安全；
}, false);