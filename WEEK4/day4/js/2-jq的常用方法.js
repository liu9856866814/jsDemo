// jq常用的方法，jq的常用方法大部分都定义在jq的原型上，也有一部分定义在了jq自身上；定义在原型上的方法只有jq的实例能调用，
// 定义在jq自身上的方法只有jq自己可以调用；

let $tabBox = $(".tabBox");
// 1. height() 不传参时是获取元素的高度，传参是设置元素的高度
console.log($tabBox.height());
// $tabBox.height(100);

// 2. width() 不传参时是获取元素宽度,传参是设置元素的宽度
console.log($tabBox.width());
// $tabBox.width(100);

// 3. offset() 获取元素到body左内边和上内边的距离
console.log($tabBox.offset()); // 返回一个对象{left:xxx, top:xxx}

// 4. scrollLeft()/ scrollTop() 获取横向滚动条/ 纵向滚动条卷去的距离
// console.log($(document.documentElement).scrollTop());
$(document.documentElement).scrollTop(500); // 在浏览器可以用 在js文件写不能生效？？？

// 5. innerWidth()/ innerHeight() 获取元素的clientWidth、clientHeight
// console.log($tabBox.innerWidth());
// console.log($tabBox.innerHeight());

// 6. outerWidth() / outerHeight() 获取元素的包含边框的宽度和高度
// console.log($tabBox.outerWidth());
// console.log($tabBox.outerHeight());

// 7. hasClass() 判断元素是否有某个类名 有返回true 没有返回false
// console.log($tabBox.hasClass('tabBox'));

// 8. addCLass() 为当前元素增加类名
// console.log($tabBox.addClass('one'));

// 9. removeClass() 移除当前元素的某个类名
// console.log($tabBox.removeClass('two'));

// 10. append() 向元素末尾追加元素
let newDiv = $('<div>这是一个新建的div</div>'); // 向$()传一个长得像标签的字符串,会创建一个新的jq元素对象【不是原生对象】
// console.log(newDiv);
$tabBox.append(newDiv);

// 11. 元素.remove() 删除元素
// $tabBox.remove(); // 谁要被删除，谁去调用remove方法；

// 12. children() 获取当前元素的所有元素子节点
// console.log($tabBox.children());

// 13. parent() 获取当前元素的父亲元素
let $header = $('.header');
// console.log($header.parent());

// 14. next() 获取当前元素的弟弟元素 / nextAll() 获取当前元素的所有弟弟
// console.log($header.next());
// console.log($header.nextAll());

// 15. prev() 获取当前元素的上一个哥哥元素 / prevAll() 获取当前元素的所有哥哥元素
let $pp = $('.pp');
// console.log($pp.prev());
// console.log($pp.prevAll());

// 16. siblings() 获取当前元素的所有兄弟元素
// console.log($pp.siblings());

// 17. index() 获取当前元素的索引 (其原理是获取当前元素的哥哥数量,这个数量恰好就是元素)
$('.header li').click(function () {
    // this 还是被点击的元素（原生对象）
    // console.log(this);
    console.log($(this).index());
});

// 18. .eq(index) 获取指定索引的元素
console.log($('.header li').eq(1));

// 19. css()
console.log($tabBox.css('width')); // 获取当前元素的width
$tabBox.css('width',600); // 设置当前元素的width为600px
$tabBox.css({
    height: 400,
    background: 'red'
}); // 批量设置元素的样式

// 20. text() 如果不传参获取当前元素的innerText,如果传参就是设置当前元素的innerText
console.log($('.btn').text());
$('.btn').text('大风车');

// 21. html() 如果不传参就是获取innerHTML,如果传参就是设置元素的innerHTML;
console.log($tabBox.html());
$tabBox.html('<a href="https://www.baidu.com">百度</a>');








