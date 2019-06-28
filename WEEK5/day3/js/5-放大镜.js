/*
* 需求: 实现一个电商放大镜的郊果(放大3倍);
* 1. 默认展示原图
* 2. 当鼠标移入原图盒子时,原图盒子中的遮罩层以及装大图的盒子都要出现;
* 3. 当鼠标在原图盒子中移动时,遮罩层要跟随鼠标一起移动,但是盒子不能超出原图的盒子边界(带边界限制的鼠标跟随);
* 4. 大图展示的部分正好是盖住原图的部分;
* 5. 遮罩层和大图运动方向相反,遮罩层在原图盒子中移动距离x,大图需要移动-3x的距离;
* 6. 当鼠标移出原图时,遮罩层和大图都要消失;
* */

/*
* 思路: 放大镜放大3倍
* 1. 有两个大盒子,一个用来装原图的box1,另一个用来装大图box2; box1和box2的宽高是相等的;
* 2. box1下面有一个遮罩层,这个遮罩层盖住box1部分和box2露出的大图的部分是相同的,所以有一个比例关系:
*  mask的宽高 / box1的宽高 = box2 / 大图片的尺寸;
* 3. mask要相对于box1绝对定位,大图片相对于box2绝对定位;
* 4. 监听box1的onmouseenter事件,当事件触发时,设置mask和box2的display:block;
* 5. 鼠标移动时mask要跟随鼠标,需要监听box1的onmousemove事件,在事件函数中实现鼠标带边界的中心跟随;
* 6. 当mask在box1中移动时, 大图片bigImg要向相反方向移动; 如果mask移动x,那么bigImg需要移动 -3x 的距离;
* 7. 当鼠标移出box1的时候,mask和box2消失,所以需要监听box1的leave事件,在事件函数中把mask和box2的display设为none;
* */

// 1. 获取元素
let $ = selector => document.querySelector(selector);
let box1 = $('.box1'),
    mask = $('.mask'),
    box2 = $('.box2'),
    bigImg = $('.bigImg');

// 2. 监听box1的进入和移出,让mask和box2消失隐藏
box1.onmouseenter = function () {
    mask.style.display = box2.style.display = 'block';
};
box1.onmouseleave = function () {
    mask.style.display = box2.style.display = 'none';
};
// 3. 实现在box1中移动鼠标mask中心有边界跟随,并且bigImg相应移动
// mask移动边界值(left/top的最大值和最小值)
let minL = minT = 0,
    maxL = box1.clientWidth - parseFloat(mask.style.width),
    maxT = box1.clientHeight - parseFloat(mask.style.height);
box1.onmousemove = function(e){
    // 3.1 获取鼠标的位置
    let left = e.clientX - box1.offsetLeft - parseFloat(mask.style.width)/2;
    let top = e.clientY - box1.offsetTop - parseFloat(mask.style.height)/2;
    // 3.2 对鼠标位置进行修正
    if(left < minL){
        left = minL;
    }
    if(left > maxL){
        left = maxL;
    }
    if(top < minT){
        top = minT;
    }
    if(top > maxT){
        top = maxT;
    }
    // 3.3 把修正后的值设置给元素
    mask.style.left = left + 'px';
    mask.style.top = top + 'px';
    // 3.4 按照放大比例,设置bigImg的left和top
    bigImg.style.left = -3 * left + 'px';
    bigImg.style.top = -3 * top + 'px';
};