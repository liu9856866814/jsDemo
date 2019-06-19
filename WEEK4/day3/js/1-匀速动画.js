// 需求：让页面中的div#box在2s匀速运动到left为800的位置;并且在动画到达终点时console.log('game over')
let box = document.querySelector('#box');
const { css } = window.utils;

// 过渡时间

let duration = 2000; //2s 动画运动时间

// 终点位置 destination 目的地
let target = 800;

// 求起点的坐标位置
let begin = css(box,'left');

// 求路程: 终点坐标 - 起点坐标
let change = target - begin;

// 求速度: 路程/时间
let speed = change / duration;

// 记录从开始运动后经过的时间
let curT = 0;

// 定时执行间隔
let interval = 10;

let timerId = setInterval(() =>{
    // 1. 让经过的时间累加
    curT += interval; // 让经过的时间累加
    // 2.过界判断
    if(curT >= duration){ // 满足这个条件时表示元素已经到达或者超过终点
        clearInterval(timerId); // 停止动画
        // curT = duration;
        css(box, 'left', target); // 我们直接把元素设置到终点
        console.log('game over'); // 如果有一些事情需要在动画结束之后做,要写在这个位置;
        return; // 上面一行代码已经把元素设置到终点了，后面的代码不需要执行了
    }

    // 3.求经过curT时间后,元素所处的位置
    let curLeft = linear(curT, begin, change, duration);
    // 4. 把curLeft设置给box
    css(box, 'left', curLeft);
},interval);

// 已知: 起点位置begin, 当前路程change, 以及总时间duration
// 研究:经过curT时间后,元素所处的位置的公式
/**
 * @desc 元素做匀速直线运动,经过curT时间后所处的位置坐标
 * @param curT 经过curT时间
 * @param begin 起点坐标
 * @param change 总路程
 * @param duration 走过总路程需要的总时间
 * @return 经过curT时间后元素所处的位置坐标
 */
function linear(curT, begin, change, duration) {
    return change / duration * curT + begin;
}

// 匀速动画:
// 1. 求终点坐标(目标值,如opacity的最终值是1)
// 2. 求起点坐标(起点初始值)
// 3. 求路程: 终点坐标- 起点坐标
// 4. 设置计时curT,记录从开始运动经过的时间
// 5. 设置定时器,累加curT,计算经过curT时间后元素所处的位置,并且把这个位置设置给元素;
// 6. 做过界判断

