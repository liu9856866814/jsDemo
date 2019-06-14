// offsetLeft / offsetTop 当前元素相对于父级偏移参照物内侧的偏移距离,left是左偏移,Top是上偏移

// offsetParent父级偏移参照物: 距离当前元素最近的有定位属性的父级元素; 如果父级都没有定位属性,这个参照物就是body,但是body
// 没有父级偏移参照物;
// console.log(document.body.parentNode) // html
// console.log(document.body.offsetParent) // null
let center = document.getElementById('center');
// console.log(center.offsetParent);

console.log(center.offsetLeft); // 当前元素左外边框到父级参照物的左内边框的距离
console.log(center.offsetTop); // 当前元素上外边框到父级参照物的上内边框的距离

// 因为我们经常需要这个元素距离body顶端的距离;当前元素的左上角点相对于body左上角点的坐标位置;
function offset(ele) { // jQuery offset的源码
    let left = ele.offsetLeft; // 获取当前元素的offsetLeft;
    let top = ele.offsetTop; // 获取当前元素的offsetTop;
    let parent = ele.offsetParent; // 获取当前元素的父级参照物

    // 只要parent存在,并且parent不是body,就要向上找;
    while (parent && parent.nodeName !== 'BODY'){
        left += parent.clientLeft + parent.offsetLeft;
        top += parent.clientTop + parent.offsetTop;
        parent = parent.offsetParent;
    }
    return {
        left, // left : left
        top // top : top
    }
}

console.log(offset(center)); // {left: xxx, top: xxx}

