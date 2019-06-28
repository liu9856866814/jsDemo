/*
* 鼠标跟随： 鼠标移动时，盒子要跟随着鼠标。所以就是鼠标移动的过程中即onmousemove事件触发时，不断的设置盒子去鼠标的位置上，
* 就能实现鼠标跟随；实现鼠标跟随的关键点在于计算出盒子的位置，计算位置需要鼠标在页面中的坐标位置（e.clientX/e.clientY）,
* 如果直接把clientX当成left、clientY当成top,盒子的左上角点一直跟随着鼠标；为敢实现盒子的中心点跟随，我们需要从clientX减去
* 半个盒子的宽，clientY减去半个盒子的高，此时把减后的值作为盒子的left和top即可实现中心跟随；
*
* 边界限制：边界限制就是不让盒子超过某个区域。控制这个盒子所在位置的是left和top的值，所以控制盒子不超过某个区域就需要限制
* 盒子的left和top的值不能小于最小值，不能大于最大值；left和top的最小值为0，再小如果为负值，就会越过左边界；
* left 的最大值 = 大盒子的宽 - 小盒子的宽； top的最大值 = 大盒子的高 - 小盒子的高；
*
* 放大镜：利用遮罩层 ： 原图 = 大图盒子 ： 大图片；
* 以放大3倍为例，
* 有一个装原图的盒子box1，在box1中有一张原图，还有一个遮罩层，遮罩层相对于box1做绝对定位；box1的尺寸是300*300,根据比例遮罩
* 层的尺寸100*100；还有一个装大图的盒子box2,box2下面有一张大图bigImg, bigImg相对于box2绝对定位；
* 在box1中实现一个mask鼠标跟随，mask向某个方向 移动距离x,对应的bigImg向相反的方向移动 -3x;
* */

let box = document.getElementById('box');
// box.onclick = function (e) {
//     console.log(e);
// };
// box.onclick = function () {
//     console.log(2);
// };
box.onclick = null; // DOM0 解绑事件

/*
* DOM0级事件：通过给元素事件属性赋值一个函数实现监听这个事件；当事件触发的时候，浏览器会把事件监听函数执行；
* DOM0 只能绑定一个事件监听函数；
* DOM0事件都是绑定在冒泡阶段；
* */

/*
* DOM2级事件：
*
* */
// box.addEventListener('事件名',事件函数，是否捕获阶段)
// 事件名: 不带on的事件名, click.mouseenter...
// 事件函数: 在事件触发时会执行的函数
// 是否捕获: true表示捕获阶段/false表示冒泡
function fn1(){
    console.log(1);
}
function fn2() {
    console.log(2);
}
function fn3() {
    console.log(3);
}
// box.addEventListener('click', fn1, false);
// box.addEventListener('click', fn1, false);
//
// box.addEventListener('click', fn2, false);
//
// box.addEventListener('click', fn3, false);
// box.addEventListener('click', fn3, false);
/*
* DOM2级事件:可以给一个元素的同个事件同一个阶段绑定多个事件监听函数;但不能重复绑定同一个监听函数,例如上面不能绑定再次fn1
* 或者绑两次fn3;
* */

box.addEventListener('click',function(){
    console.log(1);
},false);
box.addEventListener('click',function(){
    console.log(1);
},false);

// 像上面这种写法,console.log(1) 的函数是两个不同的函数,是两个堆内存空间,他们俩长得一样,但是不是同一个函数;

/*
* 1. DOM2 可以绑定多个事件监听函数,因为DOM2级事件给每个元素的每个事件都设置了一个事件池,每次addEventListener 都是向事件池
* 增加一个事件监听函数(把事件监听函数放到事件池中并不会立刻执行),当事件触发时,再从事件池中把事件监听函数拿出来一个一个的执行了.
*
* 2. DOM2事件还可以指定绑在捕获阶段还是冒泡阶段;
* 3. 不能重复绑定同一个函数;
* */

var ary =[];

function addEvent(fn) {
    // 如何保证ary中不出现重复函数?? 在push之前先判断,如果ary中包含fn,就不能再push;
    // if( ary.includes(fn)) return;
    if( ary.indexOf(fn) !== -1) return;
    ary.push(fn);
}
function fn4() {
    console.log(4);
}
addEvent(fn4);
addEvent(fn4);
console.log(ary); // [fn4];
console.log(ary[0] === ary[1]);

// 以后项目中用到的图片都需要压缩一下, tinypng 压缩图片网站;除特殊图片,一般一张图保证在200k左右
// https://tinypng.com

