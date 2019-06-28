


















p.then((data)=>{
    // 异步处理成功后要做的事，如ajax请求数据后的数据绑定等，相当于resolve
},(error) =>{
    // 异步处理失败要处理的事情，相当于上面的reject
});

// promise对象有三种状态: 一旦promise对象的状态发生变更,状态就会凝固;执行resolve()状态就从pending变成fulfillde;
// 执行reject() 状态就会从pending变成rejected;
// pending: 准备好了,开始处理异步任务
// fulfilled: 异步处理成功
// rejected: 异步处理失败

// Promise 处理ajax
let ajaxP = new Promise((resolve,reject)=>{
   let xhr = new XMLHttpRequest();
   xhr.open('get', 'json/banner.json', true);
   xhr.onreadystatechange = function () {
       if(xhr.readyState === 4 && xhr.status === 200){
           resolve(JSON.parse(xhr.responseText))
       }
       if(xhr.readyState === 4 && xhr.status !== 200){
           reject('ajax请求失败了');
       }
   };
   xhr.send();
});
ajaxP.then((data) => {
    // 这个函数是ajax执行成功后执行的函数
    console.log(data);
},(err) => {
    console.log(err);
});

// jQuery 类库: $ jQuery

// 1. 获取元素:用选择器获取
let $container = $('.container');
let $container2 = $('#container');
let $focusList = $('.focus > li'); // 获取focus的子级li

// 2. 常用的方法
// ajax()
$.ajax({
    url: 'json/ banner.json', // 接口
    method: 'get', // 请求方式: GET POST delete put options
    dataType: 'json', // 数据类型,jq会做格式化数据
    async: true, // 是否异步,默认是true
    data:{}, // post 给服务器的数据, get请求时不必写data
    error (data){
      // error first 先处理错误
    },
    success (data){
        // ajax请求成功后会执行这个函数
        // 绑定数据
    }
});

// on() 方法: 绑定事件; click() mouseover() mouseout()...

// css() 获取元素某个样式属性或者设置或者批量设置
$container.css('width'); // 获取
$container.css('width',100); // 设置
$container.css({
    left: 100,
    backgroundColor: '#00b38a'
}); // 批量设置

// html() 不传参是获取元素的innerHTML,传参就是设置元素的innerHTNL;
// text() 获取或者设置innerText

// index() 获取索引
// addClass() 增加类名
// removeCLass() 移除类名

// siblings() 获取当前元素的兄弟们

// animate(target, duration, effect, after) 动画方法

// stop() 不管是否执行完,都得停;
// finish() 忽略动画时间,一下子到终点













