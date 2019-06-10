/*
* 目标：
*   1. 学习throw关键字手动抛出错误
*   2. 学习常见的内置错误类型
* */
// 1. throw 关键字：用来手动抛出异常(错误)，抛出异常后，后面的代码就不会执行（同步的操作）; throw后面无论写什么，都会当成错误抛出；

// throw 'hello world';
// alert('dddd');
// throw 123;
// throw {name: "123"};

// 2. 常见的内置错误类型：

// 2.1 ReferenceError 引用错误,一般由于引用未声明的变量导致
// throw new ReferenceError('引用错误');

// 2.2 TypeError 类型错误,一般由于搞错类型（不是函数的变量或者值后面跟一个小括号）
// 1();
// throw new TypeError('你搞错类型啦');

// 2.3 SyntaxError 语法错误,一般因为语法写的不对；
// throw new SyntaxError('你的语法不对呀');

// 2.4 Error 普通错误
// throw new Error('这是一个普通错误'); // 写不写new都行

// 结合try-catch根据不同的报错类型，采取不同的措施
try{
    throw new SyntaxError('类型错误');
} catch (e) {
    // 根据报错类型不同，采取不同的措施
    if(e instanceof TypeError){
        console.log(1);
    }else if(e instanceof SyntaxError){
        console.log(2);
    }
}












