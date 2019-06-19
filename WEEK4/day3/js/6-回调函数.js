// 回调函数: 把一个函数A当做实参传给函数B; 此时A叫做回调函数,B称为宿主函数;

let obj = {
    id: 17
};
let fn = (callback) => {
   // callback 是形参,形参是变量,用来存储值和代表值;形参都是用来代表实参的.所以操作形参就是在操作形参代表的值;
   // 1. 回调函数可以执行无限次,并且可以根据需要传实参
    callback(1, 2);
    callback(2, 3);
    callback(3, 4);
    callback.call(obj, 8, 10); // 修改回调函数的this指向
    let res = callback(10, 15);
    console.log('res is ', res);
    setTimeout(() =>{
        callback('x','y');
    }, 3000)
};
fn(function (n, m){
    console.log(n, m);
    console.log(this);
    return n + m;
}); //此时小括号里面的function就是回调函数,fn就是宿主函数;

// 2. 回调函数在宿主函数中的行为
// 2.1 回调函数可以根据需要无限次执行
// 2.2 回调函数不仅可以执行,还可以在宿主函数中执行的时候给它传递实参,但是需要回调函数设置形参或者使用arguments或者不定参数
// 接收即可
// 2.3 回调函数可以修改this指向
// 2.4 在宿主函数中还可以接收回调函数的返回值;
// 2.5 在宿主函数中,回调函数还可以异步执行; 在没有Promise和async/await 以及Generator函数 都是用回调函数解决异步问题;





