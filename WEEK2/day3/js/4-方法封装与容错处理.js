/**
 * @desc （方法功能描述）类数组转数组
 * @param arrLike （方法的参数）参数的意义：类数组对象 类型：对象
 * @returns {any[]} 返回值意义：返回值是什么，类型是什么
 */

// 写了注释是好习惯，但是如果功能变更了，要维护这些注释；
/*function arrLikeToAry(arrLike) {
    // return [...arrLike]
    return Array.from(arrLike);
}*/

// 这么写有个问题，Array.from 是ES6的新特性，只能在高版本的浏览器使用。在低版本浏览器使用，会报错；这时需要做容错(异常)处理；

// try-catch 语句用于JS的异常处理；因为js是单线程的（浏览器是多线程的）一旦程序出现异常，后面的代码就不会执行了。所以，
// 使用try-catch语句捕获异常；
/*try {
    // 可能会引发异常的代码
    let divList = document.getElementsByClassName('box');
    var arr = Array.from(arrLike)
} catch(e){
    // 上面的try中的代码报错后，会执行这个代码块中的代码；如果try中的代码不报错，这里的代码不会执行
    // e 是错误信息，这个错误信息里面包含了上面try时引发的异常；当拿到这个错误后可以选择在浏览器中抛出异常；（有一些做报
    // 错或者性能监控时，需要回传给服务器）
    console.log(e);
    // var arr = Array.from(divList); 如果在catch语句中报销，并且也没有其他容错处理，就会报错且后面代码也不执行了

}
console.log('1234');*/

// 利用try-catch语句改造类数组转数组的方法，使这个方法兼容所有的浏览器
// try-catch 语句增强代码的健壮性，但是开发效率就会相应降低
function arrLikeToAry(arrLike) {
    // 先尝试ES6语法
    try{
        return Array.from(arrLike);
    } catch(e){
        // 如果代码执行到catch语句了，说明try中的Array.from 报错；所以需要兼容处理；
        var newArr = [];
        for (var i = 0; i < divList.length; i++) {
            newArr.push(divList[i]);
        }
        return newArr;
    }
}

var divs= document.getElementsByTagName('div');
console.log(divs);

