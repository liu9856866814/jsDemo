/*
* js运行机制：
*   1.作用域：供js代码从上到下执行的环境，存储基本数据类型的值；
*   作用域分类：
*       1.全局作用域：浏览器打开一个页面时首先形成一个全局作用域（window）
*       2.私有作用域（函数作用域）：函数执行时会创建一个私有作用域，这个私有作用域专门用来执行函数体中的代码；
*       3.块级作用域：ES6新增的，把代码块（if/for代码块）都变成作用域，功能和私有作用域相似。
* js运行机制：
*   1.在js代码执行之前，浏览器会先开辟一个全局作用域。然后进行全局作用域下的变量提升（变量提升就是在js代码执行前，
*   对带var和带function的进行提前的声明或者定义；带var只声明不定义，变量代表的是其默认值undefined，而带function是声明且定义为函数本身）
*   2.变量提升结束后，js代码从上到下执行，开始给变量赋值。如果赋值的是基本数据类型，就把基本数据类型的值直接存储在作用域中，
*   然后把变量和值关联起来。如果赋值的是一个引用数据类型值，浏览器会为其开辟一个堆内存空间，然后在堆内存中存储引用数据类型值
*   （对象存键值对，数组存键值对+length、函数则以字符串的形式存储函数体中的代码）,最后把堆内存地址赋值给变量（此时堆内存的地址存储在作用域中）；
*   3.如果遇到函数执行：
*       3.1 浏览器首先为函数执行创建一个私有作用域；
*       3.2 形参赋值，形参也是变量，是在这个阶段完成对形参的赋值
*       3.3 私有作用域看的变量提升
*       3.4 函数体中的代码自上而下执行；
* */

// 变量提升只发生在当前作用域中，如果函数不执行，函数里面的变量不会变量提升；

// 变量重复声明
// 1.多次声明同一个变量，浏览器不会多次声明，只会声明一次。多次赋值，变量会赋值最后的值
var num;
var num=1;
var num=2;
var num=3;// num 代表5；

function fe(){
    console.log(1);
}
function fe(){ // fe代表的是log(2)的函数
    console.log(2);
}

//3. 变量提升时，函数优先级高于普通变量，在变量名和函数名重名时，在变量被重新赋值前，fn一直代表函数。当被重新赋值后，代表被赋值的值

console.log(fn);//fn函数
var fn = 123;
console.log(fn);// 123
function fn(){
    console.log(3);
}
fn();//Uncaught TypeError : fn is not a function

console.log(foo);//foo代表log(3)的函数，var声明的就是普通变量
var foo = function (){
    console.log(4);
};
function foo(){
    console.log(3);
}

// 变量提升的细节问题：
// 1.等号右侧不会进行变量提升，即使右侧是函数也不会提升

//sum(1,2); // 报错，因为不知道有sum这个变量
var usa = function sum(a,b) {
    return a+b;
};
sum(12,3);//在这里执行也会报错，因为浏览器在变量提升阶段记录自己作用域中有哪些变量，因为等号右侧不会变量提升，所以不会记录
// sum这个变量。当代码执行到这时，变量提升已经结束，所以此时浏览器还是不知道有sum变量，所以报错；

//2. 在条件语句中的变量提升不会理会条件是否成立，都会变量提升；
// 在条件语句中，如果条件为false，不会给函数变量赋值；如果为true,才会给变量赋值。（不推荐在条件中声明变量）
console.log(n);//undefined
if (false){
    var n = 12;
    function bar(){
        console.log(123);
    }
}
console.log(n);//undefined

// 3. return 右边不会变量提升，即使是函数也不行；
function seo(){
    // SEO searching Engine Optimisation 搜索引擎优化
    //minus();//报错
    return function minus() {
        console.log('TDK');
    }
}
seo();

// 4.return 下面代码不会执行，但会进行变量提升
function tdk(){
    getAge();// undefined,因为age在return下面，无法赋值，只能是undefined
    return 'Title Description Keywords';
    var age = 10;
    function getAge(){
        console.log(age);
    }
}

// 带var和不带var的区别：带var的进行变量提升，不带var不会变量提升；
var num = 12;//在全局作用域中声明的变量会给window添加同名属性。

// in 运算符，检测一个对象是否包含一个属性

// 作用域链：变量的查找机制。当浏览器中访问一个变量时，会先在当前作用域中查找，找到就用当前作用域中的变量，如果没找到，
// 向上级作用域查找，找到就使用，如果还没找到，继续向上找，一直找到window,如果找到window还没有，分两种情况：
// 如果是访问这个变量的值，就报错；如果是赋值，就相当于给window添加了一个属性。

// 如何确定上级作用域？ 看函数定义中所在的作用域，定义时所在的作用域即函数的上级作用域；
function ok(){
    var num = 11;
    return function(){
        var num = 12;
        return function(){
            console.log(num);
        }
    }

}
ok();
