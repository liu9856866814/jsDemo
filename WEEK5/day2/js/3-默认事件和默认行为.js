// 例如页面中的a标签,我们不需要做窗外的处理,点击a标签就可以跳转到href指向的链接.这种行为称为元素的默认行为,类似的还有鼠标
// 右键点击出现一个菜单;

// 我们也没有给a标签绑定过事件,但是点击它却有反应,这种事件是默认的.

let baidu = document.getElementById('baidu');
// 给a标签绑定一个点击事件
baidu.onclick = function (e) {
    console.log('112233');
    // e.preventDefault(); // 阻止默认行为,阻止默认行为后,a标签被点击时就不会再跳转了.
    return false; // return false 也可以阻止默认行为;
    // IE 阻止默认行为
    e.returnValue = false;
};
// 我们发现a标签被点击时照样会跳走,而且'112233'会输出出来.说明它默认的行为还在,我们绑的事件也生效了;

document.oncontextmenu = function (e) {
    e.preventDefault(); // 阻止了鼠标右键的默认行为,在页面中单击鼠标右键时,系统默认菜单不会再弹出;
};