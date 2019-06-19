const { css, removeClass, addClass} = window.utils;
let box = document.getElementById('box');
let btnW = document.getElementById('btnW');
let btnH = document.getElementById('btnH');
let btnB = document.getElementById('btnB');
let reset = document.getElementById('reset');
let bW = '50';
let bH = '30';
let bB = '1px solid #000';
btnW.onclick = function(){
    addClass(box, 'btnW');
};
btnH.onclick = function(){
    addClass(box, 'btnH')
};
btnB.onclick = function(){
    addClass(box, 'btnB');
};
reset.onclick = function () {
    removeClass(box, 'btnW');
    removeClass(box, 'btnH');
    removeClass(box, 'btnB');
};