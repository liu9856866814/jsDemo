/*
* 目标:
*   1. 理解指定时长的动画原理
*   2. 比较指定时长和指定步长动画的区别
* */
// 固定时长的动画: 在指定的时间内,从某个位置运动到指定的位置;
// 在3s内运动到left的值是800;
const { css, win } = utils;
let time = 3000; // 3s 指定时间3s
let target = 800; // 目标位置

// 路程 = 目标位置 - 起点位置
let begin = css(box, 'left');
let change = target - begin; // 路程

// 速度 = 路程/ 时间
let speed = change / time;
console.log(speed);

let curT = 0; // 记录从动画开始后经过的时间

// 使用定时器开启动画
let timer = setInterval(() =>{
    console.log(curT);
    if(curT >= time){
        clearInterval(timer); // 动画过界判断: 如果curT大于3000,就应该修正成3000
        curT = time;
        css(box,'left','800');
    }
    curT += 16; // curT经过的时间
    let curLeft = curT * speed; // 在curT时间内走过的路程
    let total = begin + curLeft; // 经过curT时间后,元素应该所处的位置
    console.log(css(box, 'left'));
    css(box,'left', total);
},16);





