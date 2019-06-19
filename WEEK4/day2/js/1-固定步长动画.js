/*
* 目标:
*   1. 理解指定步长动画的原理
*
* */

// js动画的原理: 通过定时器去不断修改一个元素的某个属性,因为定时器每隔一段时间就会执行一次,元素的属性每隔一段时间就会被
// 修改一次,元素就去了新的位置, 人的眼睛看到的就是动画效果;

// 固定步长的动画:每次定时器执行让这个元素改变固定的步长.

const { win, css } = window.utils;
let box = document.getElementById('box');
let step = 10; // 设置步长
let maxL = win('clientWidth') - css(box, 'width');

let timer = setInterval(() => {
    // 固定步长的动画,在原有的基础上累加上步长,然后再设置回去
    let preLeft = css(box, 'left'); // 获取原有的left值
    let curLeft = preLeft + step;
    // 动画过界判断: 判断元素是否运动到边界了,如果到达超过边界,先把定时器清除了,停止动画,并且把curLeft发在最大值;
    if(curLeft >= maxL){
        console.log(maxL);
        clearInterval(timer);
        curLeft = maxL;
    }
    css(box,'left', curLeft);
},16);

let maxH = win('clientHeight') - css(box, 'height');
let timer2 = setInterval(() =>{
    let preBottom = css(box, 'top');
    let curBottom = preBottom + step;
    if(curBottom >= maxH){
        console.log(maxH);
        console.log(css(box, 'top'));
        clearInterval(timer2);
        curBottom = maxH;
        console.log(css(box, 'top')); // curBottom 是当前元素下一帧的位置,要把curLeft设置给box的left属性,box才会去curLeft的位置
    }
    css(box, 'top', curBottom);
},16);


