/*
* 1. sort应用：
*   1.1 sort不传参数也可以排序，但只能正常排0-9的数字
*   1.2 sort(callback)
*       1.2.1 普通数字升序 sort(function (a,b) return a - b)
*       1.2.2 排二维数组 sort(function (a,b) return a.age - b.age);按照数组项的age属性升序排序；排序时整体移动数组项，
* 不是只排age属性
*       1.2.3 给页面中的html元素集合排序：按照标签中的内容排序；
*           1.2.3.1 sort((a,b) => a.innerHTML - b.innerHTML) 用箭头函数考虑清楚this的问题
*           1.2.3.2 按照html的某个行内属性排序：先转数组，再排序：关键点在于获取行内属性的值；元素对象.getAttribute(属性名)
*           sort((a,b) => a.getAttribute('price') - b.getAttribute('price'));
*  2. 数组复制
*      数组项是基本数组类型，数组存储的这一项就是这个值本身，在复制时，复制的也是这个值本身；所以复制出来的这一份和原来的数组没关系；
*      数组项是引用数据类型，数组存储的是这一项的堆内存地址，在复制时，复制的是这个对象的堆内存地址，后续如果操作新数组中的项，其
* 实在操作这个地址，所以原来的数组也会被修改。（浅复制、浅拷贝）
* 3. DOM映射：页面中的html元素和通过js的相关方法（getElementBy一切）获取来的对象或者集合存在映射关系（一个改变另一个跟着改）；
*   1. box2.style.backgroundColor = 'red'
*   2. appendChild(元素对象) 它会先看一下这个要追加到容器中的元素是否存在于页面中，如果这个元素已经存在了，它直接把元素移
* 动到容器末尾
*   3.
*
* 4. JSON： 一种常用的前后端交互使用的数据格式；
*    JSON对象：属性名和属性值都被双引号包裹着；
*    let obj = {"name":"张三"}；
*    let ary = [{"name":"mabin"},{"name":"李四"}]；
*
*    JSON格式字符串：长的很像JSON对象的字符串
*    let str = '{"name":"bella"}';
*    let str2 = '[{"name":"mabin"},{"name":"李四"}]'
*
*    JSON对象和字符串互转：window.JSON对象
*    JSON.parse() 把JSON格式的字符串转换成对象
*    JSON.stringify() 把对象转成JSON格式的字符串
*
*    深复制：JSON.parse(JSON.stringify(对象))
*
* 5. AJAX：Asynchronous Javascript And XML 前后端交互的重要技术
*   5.1 创建ajax实例对象
*   let xhr = XMLHttpRequest();
*   5.2 调用xhr的open方法配置请求
*   http method 'get' 请求方式
*   请求接口地址 一般服务端（后端）的人提供 一个链接 称为 接口（API）
*   异步还是同步：false同步，true表示异步，默认异步
*   xhr.open("GET", "js/data.json", false);
*   5.3 监听xhr的onreadystatechange事件
*   xhr.onreadystatechange = function(){
*       if(xhr.readyState === 4 && xhr.status === 200){
*           // 满足这个条件，表示本次请求成功
*           xhr.responseText 保存着本次请求来的数据
*           console.log(xhr.responseText);
*       }
*   }
*   5.4 发送请求
*   xhr.send();
*
* 6. 数据绑定: 把动态获取的数据，通过某种方式，把数据绑定到页面的html中，最后以html的形式呈现给用户，前端追求的是极致的用户体验；
*   6.1 动态创建插入DOM: document.createElement() appendChild()
*
*   6.2 字符串拼接+innerHTML的方式
* */
