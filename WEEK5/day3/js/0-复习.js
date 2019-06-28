// DOM事件
/*
* 1. 事件: 元素(普通html元素/document)浏览器窗口(window)发生的特定的交互瞬间;通常我们监听某一个事件,以便在事件触发时可以
* 进行我们需要的操作;
* 2. 常见的事件
*   2.1 鼠标事件
*   onclick 点击时触发
*   ondblclick 双击时触发
*   onmousedown 鼠标按下去触发
*   onmouseup 鼠标抬起时触发
*   onmousemove 鼠标移动时触发
*   onmouseover 鼠标滑入事件
*   onmouseout 鼠标滑出事件
*   onmouseenter 鼠标进入
*   onmouseleave 鼠标离开时触发
*   onmousewheel 鼠标滚轮滚动时触发
*   oncontextmenu 鼠标右键
*
* 2.2 键盘事件:
* onkeydown 键按下时触发
* onkeyup 键抬起时触发
* onkeypress 按键时触发
* 2.3 系统事件
* window.onload 整个页面中的所有资源加载完成后触发(js文件/css文件/图片/字体...)
* DOMContentLoaded 页面的DOM结构加载并解析完成后就会触发;
* document.addEventListener('DOMContentLoaded', function(){})
* window.onresize 浏览器窗口大小发生改变/页面被缩放时触发
* window.onscroll 浏览器滚动条滚动时触发
*
* 2.4 表单事件
* oninput input/textarea 可以输入的元素的输入事件
* onfocus 得焦事件
* onblur 失焦事件
* onchange 表单元素的值发生改变时触发
* onsubmit form 表单提交时触发
* */

/*
* 2. 事件对象:在事件触发时,浏览器会执行我们的事件函数,并且传递一个实参进来,这个实参是一个对象,这个对象中包含了事件触发的信息,
* 这个对象称为事件对象;
*   2.1 MouseEvent:
*   e.clientX 相对于浏览器窗口左边的水平坐标
*   e.clientY 相对于浏览器窗口上边的垂直坐标
*   e.pageX 相对于页面左边的水平坐标
*   e.pageY 相对于页面上边的垂直坐标
*   e.target 事件源(触发事件的元素); 点击事件,点谁谁就是事件源;事件源是个元素对象,操作起来和操作普通元素对象一样;
*   2.1 keyboardEvent:
*   e.keyCode
* */
let submit = document.getElementById('submit');
submit.onclick = function (e) {
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.pageX);
    console.log(e.pageY);
    console.log(e.target);
    // console.log(e.target.tagName);
    console.log(e.target.nodeName);
};

/*
* 3. 事件的默认行为: a标签会默认跳转,右键默认弹出菜单,表单提交会跳转...这些都是默认行为;
*
* e.preventDefault() 阻止默认行为
* IE -> e.returnValue = false
* */

/*
* 4. 事件传播机制: 捕获阶段/ 目标阶段/ 冒泡阶段; DOM0级事件都是绑定在冒泡阶段的;
* 冒泡: 当前元素的某个事件触发了,它的父级元素也会依次触发该事件.
* 阻止冒泡: e.stopPropagation()
*
* IE阻止冒泡: e.cancelBubble = true;
*
* */