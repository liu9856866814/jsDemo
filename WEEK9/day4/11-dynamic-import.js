// 动态导入
// import 只能是同步的, 模块导入是静态的,发生在js代码执行之前,而且只能写在顶层作用域中;

// 但有一些场景需要动态导入模块;
// 此时我们需要用import() 方法
// import()方法支持动态导入,返回一个Promise实例,可以直接.then; then的第一个回调收到的参数就是模块中的内容;

// 动态导入何时何地都可以导入;

/*setTimeout(() => {
    import('./5-export.js').then((res) => {
        console.log(res);
    })
}, 3000);*/


let ran = Math.round(Math.random() * (10 - 0) + 0);
console.log(ran);
// 如果随机数大于5加载a模块,否则加载b模块
if(ran > 5){
    import('./a.js').then(a => console.log(a));
}else{
    import('./b.js').then(b => console.log(b));
}

// 动态导入模块的场景:
// 1. 按需加载, 如点击或者滑动时去加载;
// 2. 按条件加载, 条件为true加载a模块,否则加载b模块
// 3. 模块的路径是动态的,例如路径是通过ajax从服务端获取的;

// 动态加载多个模块: Promise.all([]);
Promise.all([
    import('./a.js'),
    import('./b.js')
]).then((arr) => {
    console.log('L 36');
    console.log(arr);
});

// import() 和 async 函数

async function getM() {
    let A = await import('./a.js');
    let B = await import('./b.js');
    return [A, B]
}
getM().then((res) => {
    console.log('L 48');
    console.log(res);
});
