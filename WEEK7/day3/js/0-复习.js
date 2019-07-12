// 1. ajax基础
// 1.1 创建一个ajax实例
let xhr = new XMLHttpRequest();
// 1.2 调用open方法
xhr.open('get','banner.json',true);
// 1.3 监听xhr的readystatechange事件
xhr.onreadystatechange = function () {
    // 异步的状态下,xhr的readyState发生变化时,会触发这个事件;
    console.log(xhr.readyState);
    if(xhr.readyState === 4 && xhr.status === 200){
      // 在这里可以获取所需数据
      console.log(xhr.responseText); // xhr.responseText 服务器响应给我们的数据
  }
};
// 1.4 发送
xhr.send(); // send方法可以传参,传入的参数会放到请求体;

// readyState 表示ajax实例状态的,属性值是一个数字,并且每个数字代表一种状态;
// 0: 表示创建ajax实例
// 1: 已经调用open方法,打开接口
// 2: 已经接收到响应头(如果只获取响应头中的内容,readyState为2时,就可以)
// 3: 正在接收响应体中的内容;
// 4: ajax请求彻底完成

// 2. ajax-http-method http的请求方式
// GET: 通常用来获取数据,但是也可以传递少量数据给服务端;
//-> GET 请求的特点
// 1. 以问号传参的形式把数据传递给服务器,形如?key1=value1&key2=value2(通过location.search 获取地址栏里面url上的问号传参的内容)
// 2. 因为url的长度有限,get请求能传递的数据有限;
// 3. get请求时,把数据放在url末尾,以明文形式传递,不安全
// 4. get请求容易产生缓存;(清缓存,在url末尾加一个时间戳或者随机数;原理就是浏览器检测到url变化后,不会再使用缓存,而是重新请求数据)

// POST: 通常用来向服务端传递数据(但是也可以用来获取);
//-> POST 请求的特点
// 1. post请求把数据放到请求体中传递给服务器;
// 2. 因为post是把数据放到请求体中,传递的数据量大;
// 3. 把数据放到请求体中,相对来说比较安全;
// 4. post请求不走缓存;

// DELETE 从服务器上删除数据
// HEAD 获取响应头
// PUT 修改数据
// OPTIONS 查看服务器支持的请求方式
// TRACE 用于回显客户端的请求,一般用于测试
// PATH 对PUT的补充,用来修改数据

// RESTful API (需要服务端架构支持RESTful,前端才能使用RESTful的接口)
// 以HTTP-METHOD (get/post/put/delete...)为动词,服务端提供统一的接口,根据不同动词采取不同的操作,返回不同的数据;
// 接口: /order/:id(id是一个数字), 如/order/123
// GET /order/123 获取订单id为123的信息
// DELETE /order/123 删除订单id为123的信息

// 3. http-status-code http响应状态码(3位数字)
// 2xx: 表示成功
// 200: OK 完全成功
// 204: No Content 响应成功,但没有内容给客户端

// 3xx: 重定向
// 301: MovedPermanently 永久重定向
// 302: MovedTemporarily 临时重定向
// 304: Not Modified 走缓存

// 4xx: 客户端错误
// 400: Bad Request 参数错误
// 401: Unauthorized 权限不够
// 403: Forbidden 服务端已经收到请求,但是拒绝响应
// 404: Not Found 请求的资源不存在(首先确认自己写的接口和接口文档一致)

// 5xx: 服务端错误
// 500: Internal Server Error 服务器内部错误
// 502: Bad Gateway 网关错误

// AJAX同步异步: 真实项目中用异步更多;
// 用异步的方式请求两个接口,首先aside.json,等上一个结束后,再请求banner.json;
let xhr2 = new XMLHttpRequest();
xhr2.open('get','aside.json');
xhr2.onreadystatechange = function () {
    if(xhr2.readyState === 4 && xhr2.status === 200 ){
        // 异步的请求在这个条件中才算完成了;
        let xhr3 = new XMLHttpRequest();
        xhr3.open('get','aside.json');
        xhr3.onreadystatechange = function () {
            if(xhr3.readyState === 4 && xhr3.status ===200 ){

            }
        };
        xhr3.send();
    }
};
xhr2.send();


