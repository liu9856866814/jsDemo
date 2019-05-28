/*
* 目标：
* 1. 掌握变量提升的细节问题
 *     1.1 等号右侧不会进行变量提升，即使是函数也不行
 *     1.2 条件语句中的变量提升，不管条件成立与否，都会进行变量提升
 *     1.3 函数中，return 下面的代码虽然不执行，但仍会进行函数作用域中的变量提升；
* */
//1.等号右侧不会进行变量提升，即使是函数也不行
console.log(fn);
// sum();// Uncaught ReferenceError:sum is not defined [未能捕获的引用错误：sum 没有定义； 引发错误的原因是用了一个没有
// 声明过的变量]
var fn = function sum(a,b) {
    return a + b;
};
console.log(fn);


/*function (a, b) { //通过这种标准函数声明的方式创建的函数，可以在任意位置调用
    return a-b;
}*/
console.log(minus(10, 5));//minus是一个普通的变量，在变量提升时，minus代表undefined，undefined不是函数，所以不能执行，就会报错。
var minus = function (a, b) {
    return a-b;
};//用函数表达式的方式创建的函数，必须在赋值之后才能使用

// 2. 条件语句中的变量提升，不管条件成立与否，都会进行变量提升

console.log(num);
if (Number('i love programming')){ // Number('...')->NaN -> false,条件里面的代码不执行，num没办法赋值，所以num只能是默认值undefined
    var num=10;
}
console.log(num);//num undefined

console.log(num2);
if([]){ // []=>true;条件中的代码就会执行
    var num2=12;// 执行到这给num2赋值
}
console.log(num2); // 12;

// 3. return 下面的代码虽然不执行，但仍然会变量提升
function foo(){
    var age = 10;
    console.log(obj);//undefined
    getName();// 123;
    return '珠峰培训';
    var obj = {
        name:'xiaoming'
    };
    function getName(){
        console.log('123');
    }

}

// 4.函数return 右边的值不会进行变量提升，即使是函数也不行；（函数的返回值不会发生变量提升）
function bar(){
    getObj();
    return function getObj(){
        return {
            name:'珠峰'
        }
    }
}
bar();//Uncaught ReferenceError:getObj is not undefined
//要想执行后面的内容：bar()();