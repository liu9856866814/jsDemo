// 需求: 在2s内,元素匀速运动到top为500px/left为850px的位置
function linear(curT, begin, change, duration = 2000) {
    return change / duration * curT + begin;
}

// 匀速动画:
// 1. 求终点坐标(目标值,如opacity的最终值是1)
// 2. 求起点坐标(起点初始值)
// 3. 求路程: 终点坐标- 起点坐标
// 4. 设置计时curT,记录从开始运动经过的时间
// 5. 设置定时器,累加curT,计算经过curT时间后元素所处的位置,并且把这个位置设置给元素;
// 6. 做过界判断

const { css } = window.utils;
// console.log(box); // 元素id在js中可以当变量用,无需获取,变量代表的就是带有该id的元素对象;但不要如此做!!
let box = document.getElementById('box');

let duration = 2000;

// 1. 求终点坐标
let targetTop = 500,
    targetLeft = 850;
// 2. 求起点坐标
let beginTop = css(box, 'top');
let beginLeft = css(box, 'left');

// 3. 求路程
let changeTop = targetTop - beginTop,
    changeLeft = targetLeft - beginLeft;

// 设置计时器变量
let curT = 0;

let timerId = setInterval(() => {
    // 4.1 给计时器累加
    curT += 10;
    // console.log(curT+' 111');
    // 4.2 做过界判断
    if(curT >= duration){
        clearInterval(timerId);
        // console.log(curT+' 222');
        css(box, {
            left: targetLeft,
            top: targetTop
        }); // 把元素的位置设置到终点(批量设置)
        console.log('game over');
        return;
    }
    // 4.3 经过curT时间后所处位置
    let left = linear(curT, beginLeft, changeLeft); // linear 有duration的默认值
    let top = linear(curT, beginTop, changeTop, duration);
    // 4.4 把计算出来的位置设置给元素
    css(box,{
        left, // 对象的简洁语法
        top
    })
},10);
