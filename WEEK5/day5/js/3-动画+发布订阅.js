let box = document.getElementById('box');
/*
* 动画结束后做如下事情:
* 1. 把box的背景色设成 #00b38a
* 2. 把文字颜色改成 #fff;
* 3. 向box中输出一句话: 加油加油加油!
* */

// 发布订阅
let todoList = new Subscribe();
todoList.addEvent(function (that) {
    // console.log(that);
    that.style.backgroundColor = '#00b38a';
}).addEvent(function (that) {
    that.style.color = '#fff';
}).addEvent(function (that) {
    that.innerText = '加油加油!'
});

animate({
    ele: box, // 元素对象
    target:{ // 多方向终点位置坐标集合
        left: 350,
        top: 400
    },
    duration: 2000, // 过渡时间
    after: function () { // 动画执行结束后执行的函数(现在不执行,未来某个时刻会执行的函数叫做 钩子 [hook] )
        todoList.fire(this);
    }
});

