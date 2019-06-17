// 写一个方法批量设置css样式;
const {setCss} = window.utils;

function setBatchCss(ele,cssBatch) {
    // 批量设置css样式 就是遍历传入的css对象,把样式和值依次设置给元素对象即可
    // 检验cssBatch是不是一个对象
    if (typeof cssBatch !== 'object'){
        throw TypeError('cssBatch is not a object');
    }
    for(let key in cssBatch){
    // hasOwnProperty() 检测某个属性是不是对象私有的,是返回true,不是返回false
        if(cssBatch.hasOwnProperty(key)){ // 复习for in 循环.面向对象
            setCss(ele,key,cssBatch[key])
        }
    }
}

setBatchCss(box,{
    width: 200,
    height: 200,
    backgroundColor: '#00b38a',
    color: '#fff'
});