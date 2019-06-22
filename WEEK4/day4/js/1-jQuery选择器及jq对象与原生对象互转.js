// jQuery 是一款非常优秀的类库；
// 类库、插件、UI组件、框架
// 1. 类库：提供了很多的工具方法，这里面没有业务逻辑；我们可以用这些工具方法来实现我们的业务逻辑；常用的类库：jQuery、
// zepto、lodash...

// 2. 插件：封装了指定功能的js代码的单元。插件都是有固定功能的，如选项卡插件，轮播图插件、日历插件；

// 3. UI组件，把固定功能的html、css、js都封装起来；需要某个功能时，直接导入就能用；常用的有antd(ant-design) / ElementUI /
// material-Design

// 4. 框架：有自己的设计理念和思想（数据驱动MVC、MVVM），使用框架开发需要我们按照框架思想和理念开发，然后框架会帮我们实现
// 成应用；常用的框架React（React Native）、Vue（尤雨溪）、Backbone、Angular

// jQuery 是类库，是一个类（Function）；常用$表示jQuery；

// 用jQuery 获取元素对象；jq(jQuery的简称)
// let tabBox = $('#tabBox');
// jq一般使用选择器来获取元素
// 1.1 基本选择器: id /class/标签
// let idEg = $('#tabBox');
// let classEg = $('.tabBox');
// let tagEg = $('ul');
// console.log(idEg);
// console.log(classEg);
// console.log(tagEg);
// console.log(idEg instanceof $); // true
// 通过$(selector) 获取的结果是一个类数组：并且是jQuery的实例
/*
* jQuery.fn.init [
*   0: div#tabBox.tabBox,
*   context: document,
*   length: 1, 根据选择器获取到元素个数
*   selector: "#tabBox" 获取时使用的选择器
* ]
* */
// 1.2 层级选择器:根据html层级关系选择元素对象

// 后代选择器: #tabBox div
// console.log($('#tabBox div')); // 获取id为tabBox的后代中所有的div

// 子级选择器:#tabBox > div
// console.log($('#tabBox > div')); // 获取id为tabBox的所有子级中的div

// 兄弟选择器: #tabBox + div  获取当前元素紧邻的下一个弟弟
// console.log($('#tabBox + div'));

// 获取所有的弟弟: #tabBox ~ p
// console.log($('#tabBox~p')); // 获取所有弟弟中的p标签

/* 1.3 过滤选择器
*  :first 获取第一个
*  :last 获取最后一个
*  :odd 获取索引为奇数的
*  :even 获取索引为偶数的
*  :not() 除了xxx的都获取，:not(first) 除了第一个
*  :eq(index) 获取索引为index的
*  :gt(index) 获取比指定索引大的
*  :lt(index) 获取比指定索引小的
* */

// console.log($('.header li:first'));
// console.log($('.header li:last'));
// console.log($('.header li:odd'));
// console.log($('.header li:even'));
// console.log($('.header li:not(:first)'));
// console.log($('.header li:eq(2)'));
// console.log($('.header li:gt(1)'));
// console.log($('.header li:lt(1)'));

// 通过jq获取来的都是jq的实例，就能够调用jq原型上的方法。jq会把所有获取来的元素对象都放到实例中，并且有索引有length；索引
// 对应的值都是原生对象；

// 原生对象：通过原生js提供的方法（getElementsByXXX）获取来的元素对象；
/*
* jQuery.fn.init(2) [
* 0：li, // li 都是原生DOM对象
* 1：li, // li 也是原生DOM对象
* prevObject: jQuery.fn.init(1),
* context: document,
* selector: ".header li:even"
* ]
* */

let tabBox = document.getElementById('tabBox');
let $tabBox = $("#tabBox");
// console.log(tabBox);
// console.log($tabBox);

// 原生对象和jq对象互转

// jq对象转原生对象：通过{索引}把原生对象从jq对象中取出来；
console.log($tabBox[0]);
// console.log($tabBox.eq(0)[0]);
console.log($tabBox.get(0)); // 通过get方法也可以把原生对象从jq对象中取出来

// 原生对象转jq对象：$(原生对象)

console.log($(tabBox));

//?? 为啥要互转？因为原生对象只能调用原生的方法，jq对象只能调用jq原型的方法。有的时候我们需要把原生对象转成jq对象，以便使用
// jq原型上的方法；
