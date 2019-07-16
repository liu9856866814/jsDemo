let $ = selector => document.querySelector(selector);
let box1 = $('.box1'),
    mask = $('.mask'),
    box2 = $('.box2'),
    bigImg = $('.bigImg');
box1.onmouseenter = function () {
    mask.style.display = box2.style.display = 'block';
};
box1.onmouseleave = function () {
    mask.style.display = box2.style.display = 'none';
};
let minL = minT = 0,
    maxL = box1.clientWidth - parseFloat(mask.style.width),
    maxT = box1.clientHeight - parseFloat(mask.style.height);
box1.onmousemove = function(e){
    let left = e.clientX - box1.offsetLeft - parseFloat(mask.style.width)/2;
    let top = e.clientY - box1.offsetTop - parseFloat(mask.style.height)/2;
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
    mask.style.left = left + 'px';
    mask.style.top = top + 'px';
    bigImg.style.left = -3 * left + 'px';
    bigImg.style.top = -3 * top + 'px';
};