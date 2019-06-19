const { css } = window.utils;
let box = document.getElementById('box');
let btnW = document.getElementById('btnW');
let btnH = document.getElementById('btnH');
let btnB = document.getElementById('btnB');
let reset = document.getElementById('reset');
let bW = '50';
let bH = '30';
let bB = '1px solid #000';
btnW.onclick = function(){
    css(box, 'width', '100');
};
btnH.onclick = function(){
    css(box, 'height', '200');
};
btnB.onclick = function(){
    css(box, 'backgroundColor', '#00b38a');
};
reset.onclick = function () {
    css(box,{
        width : bW,
        height: bH,
        border: bB,
        background: 'none'
    })
}