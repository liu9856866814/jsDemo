/*
* 目标：
*   1.理解函数栈内存不销毁的情形
*   2.理解函数栈内存不销毁时，保存在栈内存中的数据也不销毁
* */
// 栈内存不销毁的特殊情况：
// 一般情况下，函数执行完，栈内存就会销毁，但函数执行时，函数作用域中有一些值被其他地方占用，此时作用域不能销毁（栈内存不销毁）；

function add(){
    var n = 1;
    return { //对象的花括号不是作用域
        name:'zhufeng',
        n : 2,
        addNum: function(){
            n++;//这个n是add函数作用域中的私有变量n,对象的花括号不是作用域
            console.log(n);
        }
    }
}
var obj = add();// add() 执行后返回的对象被obj所接收，所以add执行的作用域不能被销毁，所以栈内存不能释放，保存在作用域中的值也不会销毁
obj.addNum();//2
obj.addNum();//3
add();// 这样执行add函数，没有人接收它的返回值，执行完后，add的作用域销毁。

function foo(){
    var n = 1;
    n++;
    console.log(n);
}
foo();//2
foo();//2

//1.当函数执行完，如果函数返回了一个引用数据类型的值，且被外面的变量或者属性接收，此时函数执行的作用域不能销毁，在这个作
// 用域中储存的值也不会销毁；

function f1(){
    console.log('1');
}
f1();
f1();

// 2. 函数内部的引用数据类型值，被函数外的变量或者属性占用，此时函数作用域不能销毁；
var x = null;
function happyPass(){
    x = {
        name:'zf'
    }
}
happyPass();//因为全局变量x占用着happyPass里面的一个对象，所以happyPass的作用域不能销毁

function foo1(){
    var n = 15;
    return function (x){
        // 形参赋值：x = 2 // 3 18
        // 变量提升：无
        x++;
        x += n;
        //n += x; //n = 18;
        console.log(x);// 18
        console.log(n);// 15
    }
}
var f2 = foo1();
f2(2);

function f4(){
    return function(){
        console.log('zhaosi');
    }
}
var obj2 = {
    getF4:f4()
};
// obj2的getF4属性占用着f4的返回值，所以f4执行时，作用域不销毁。





