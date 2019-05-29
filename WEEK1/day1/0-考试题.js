// 一、 1. js中的数据类型
/*
* 基本数据类型
*   number
*   string
*   boolean
*   null
*   undefined
*   Symbol()
*
* 引用数据类型：
*   对象
*     普通对象类 Object
*     数组对象类 Array
*     正则 RegExp /^\d$/
*     Date 类型 new Date()
*   函数
*     Function function
* */

// 2. 数据类型检测
/*
* typeof 运算符
* constructor 构造函数  运算符
* instanceof 运算符
* Object.prototype.toString.call() 方法
* */

// 3. 区别：
// 基本数据类型的操作是值类型的操作，变量代表的就是值本身。引用数据类型是操作堆内存地址，变量存储的是引用数据类型的堆内存地址。

var obj = {
  name: 'zf'
};

// 4. 函数接收实参的方式：形参、arguments（实参集合）、不定参数（）

function sum(...arg) {
  // arg 就是不定参数
  // arguments 和不定参数的区别：
  // 1. 不定参数需要在形参声明，arguments不需要声明可以直接使用
  // 2. arguments是一个类数组，而不定参数时一个真正的数组（可以调用数组方法）
}

function minus(a, b, ...arg) {
  // a 和 b是必传的，...arg 表示可以传还可以不传，可以传一个，可以传多个
  arg.push('100');
  console.log(arg);
}

// 5. js中的定时器：
// setTimeout(callback, 时间间隔毫秒数) 到时间执行一次callback就完事了，返回定时器ID
// setInterval(callback, 时间间隔毫秒数) 每隔一定时间间隔机会执行一次callback，返回定时器ID
// clearTimeout(定时器id);
// clearInterval(定时器id);

// 二、DOM api 字符串方法
// 1. document.getElementById('div1');
// 2. document.getElementsByClassName('box')[0]
// 3. document.getElementsByTagName('div')[0]
// 4. document.querySelector('#div1')
// 5. document.querySelector('.box')

// 2. 动态创建p标签、插入到body尾部
var p = document.createElement('p');
document.body.appendChild(p);
document.documentElement; // 获取html标签

// 3. 获取子元素节点：children
// childNodes 获取所有子节点

// 4. 字符串截取的方法：
// substr(n, m) 从索引n开始，截取m个
// substring(n, m) 从索引n开始，截取到索引为m（不包含m）
// slice(n, m) 从索引n开始，截取到索引m（不包含m）。可以使用负数索引。

// 5. 字符串替换：replace(被替换的, 要替换成的内容)
// 5.2 字符串替换：replace(被替换的, function () { return 要替换成的内容})

// 三、数组
// 1. push(100) 、splice(ary.length, 0, 1)、ary[ary.length] = 100；
// 2. pop()、ary.length--、splice(ary.length - 1, 1);

// 3. forEach(function (item, index) {})
// 3.2 for 循环（for 循环是语句）
// 3.3 map(function (item, index) {})
// 3.4 for of 循环

// 4. sort(function (a, b) {return a - b}) 升序（从小到大）
//    sort(function (a, b) {return b -a }) 降序（从大到小）

// 5. slice(n - 1, m - 1); （第n项的索引n - 1） splice()会修改元素数组

// 四、Math
// 1. Math.round(Math.random() * (m - n) + n)
// 2. Math.max() Math.min()
// 3. == 比较，布尔值 == 对象 true
// 4. true
// 5. 'ok'

// 五、累加求和
// for loop
var total = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    // i 可以被3和5整除
    total += i;
  }
}
console.log(total);

// recursion (recursive call 递归调用) 递归方式

function rSum(num) {
  if (num === 100) {
    return 0
  }
  if (num % 15 === 0) {
    return num + rSum(num + 1);
  } else {
    return rSum(num + 1);
  }
}

console.log(rSum(1));

// 六、任意数求和
function anySum() { // 没有处理非number的转化
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    var item = arguments[i];
    if (typeof item === 'number' && !isNaN(item)) {
      total += item;
    }
  }
  return total;
}

var result = anySum(1, 2, undefined, NaN, '3');

function anySum2() {
  // 1. 设置初始值
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    var item = arguments[i];
    if (typeof item !== 'number') {
      item = parseFloat(item); // 如果item不是数字，尝试转换成数字
    }
    if (!isNaN(item)) {
      total += item;
    }
  }
  return total;
}

// 七、随机验证码
// 随机验证码的核心就是随机；
var oDiv = document.getElementById('div1');
var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function validateCode(count = 4) {
  // 三种设置默认参数的方法
  // if (count === undefined) {
  //   count = 4;
  // }
  // count = count || 4;

  // 1. 设置一个基础值
  var codeBox = '';
  // 2 循环
  /*for (var i = 0; i < count; i++) {
    // 2.1 取出一个随机数
    var ran = Math.round(Math.random() * 61);
    // 2.2 用ran当做索引取一个字符
    var ranChar = str[ran]; // str[ran] 和 str.charAt(ran)是等效的

    // 2.3 验证重复
    var upperCodeBox = codeBox.toUpperCase();
    var upperChar = ranChar.toUpperCase();
    if (!upperCodeBox.includes(upperChar)) {
      // 如果满足这个条件说明codeBox不包含char
      codeBox += ranChar;
    } else {
      i--;
    }
  }*/

  // while 循环版：空字符的length是0
  while (codeBox.length < count) {
    // 1. 取一个随机字符
    var ran = Math.round(Math.random() * 61);
    var ranChar = str.charAt(ran);
    // 2. 验重
    var upperCodeBox = codeBox.toUpperCase();
    var upperChar = ranChar.toUpperCase();
    !upperChar.includes(upperChar) ? codeBox += ranChar : void 0;
    // !upperCodeBox.includes(upperChar) && (codeBox += ranChar);
  }

  return codeBox;
}

oDiv.innerHTML = validateCode(6); // 默认参数在不传递实参时才会生效

// 八、隔行变色
/*
* .bg0 {background-color: pink}
* .bg1 {background-color: blue}
* .bg-hover {background-color: yellow}
*
* */
// 获取元素
var liList= document.querySelectorAll('#list > li');
// 遍历元素集合
for (var i = 0; i < liList.length; i++) {
  // 1. 变色
  liList[i].className = `bg${i % 2}`;
  liList[i].bgClass = `bg${i % 2}`; // bgClass自定义属性保存原始类名
  // 2. 绑定事件
  liList[i].onmouseover = function () {
    this.className = 'bg-hover';
  };
  liList[i].onmouseout = function () {
    this.className = this.bgClass;
  }
}