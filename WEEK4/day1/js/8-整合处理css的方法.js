// 封装一个css的方法,根据参数不同有不同的功能
const {getCss, setCss, setBatchCss} = window.utils;
function css(ele,param,val) {
    // 根据传参的不同调用不同的方法
    // 第二个参数是字符串类型,不传val时,就是获取
    // 第二个参数是字符串时,并且第三个参数传了,就是设置单个样式
    // 第二个参数是对象时,就是批量设置css样式
    if(typeof param === "string" && typeof val === 'undefined'){
        return getCss(ele,param);
    }
    if(typeof param === 'string' && typeof val !== 'undefined'){
        setCss(ele,param,val);
        return;
    }
    if (typeof param === 'object'){
        setBatchCss(ele,param);
    }
}

console.log(css(box, 'width')); // 获取box的width属性值
css(box,'width',150); // 设置box的width属性值是100px
css(box,{
    width:100,
    height:200,
    backgroundColor: 'pink'
}); //批量设置
