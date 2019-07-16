// 1. http: 超文本传输协议; 是前后端在传输数据时要遵守的规范;http协议用于客户端和服务端通信,整个通信过程分为两个阶段:请求
// 阶段和响应阶段;

// 2. 三次握手(建立连接):
// 2.1 客户端向服务端发送SYN码数据包,表示客户端请求建立连接;
// 2.2 服务端收到syn后,向客户端发送ACK码数据包,表示客户端的请求已经收到,询问客户端是否确认建立连接;
// 2.3 客户端收到ack码以后会检验是否正确,如果正确,客户端发送ack码数据包给服务端,表示确认连接;

// 3. 四次挥手
// 3.1 当客户端发送请求数据结束时,会发送FIN码数据包给服务端;告知服务端请求数据已经传输完毕;
// 3.2 服务端收到FIN码后,会发送一个ack码数据包给客户端;客户端收到ack以后就会把传输数据的通道关闭;
// 3.3 当服务端传输响应的数据结束时,会发送fin码数据包给客户端,告知客户端响应的数据已经传输完成;
// 3.4 客户端收到服务端的fin码以后,会发送一个ack,表示客户端已经知道服务端的数据传完了,服务端收到客户端的ack码后,就可以放心
// 的关闭数据传输通道了;

// 4. DNS解析: 所有连接在互联网里面的设备都有一个IP地址;但是我们人类更擅长记忆url,例如www.baidu.com;DNS解析就是负责把url
// 解析成IP地址;

// 5. 在地址栏里面输入一个url,到看到页面发生了哪些事情(前后端交互模型)
// [请求阶段]
// 5.1 获取地址栏中用户输入的url,把url发送给DNS服务器;
// 5.2 DNS服务器把url解析成ip地址;
// 5.3 把请求的内容发送到DNS解析的ip地址;

// [响应阶段](http找80端口,https找443, 80和443都是默认端口)
// 5.4 服务端收到请求的内容后,解析客户端的请求,准备响应的内容;
// 5.5 设置Content-Type(内容类型),每一种文件都有一个conten-type,客户端会根据不同的内类型把响应内容解析成不同的文件;
// 5.6 把响应内容发送给客户端;

// [渲染阶段]
// 解析html文档,根据html节点间的关系绘制成DOM树,当遇到link/img/script/audio/video等标签时,再次发送http请求,去请求对应的资源
// (link/img/script/audio/video标签让浏览器自动发起http请求,这些请求都是get请求);
// 把css绘制成css树;
// 把dom树和css树组合成render树(渲染树)
// 把渲染树交给显卡(GPU)绘制页面;

// 6. HTTP报文: http报文是前后端进行http通信时的信息载体;
// 6.1 报文结构: 报文首部 空行 报文体
// 6.2 请求报文: 报文首部(请求行[请求方式 协议、版本]/请求头) 空行 请求体(POST请求才有请求体)
// 6.3 响应报文: 报文首部(状态行【协议】/响应头) 空行 响应体

// 7. 本地存储
// cookie localStorage sessionStorage
// 存值 localStorage.setItem(key,value); key和value都是字符串类型
// 取值 localStorage.getItem(key);
// 删除 localStorage.removeItem(key) 删除指定key的
// 全部删除 localStorage.clear() 清空localStorage
// cookie
// 设置 document.cookie= 'key=value;';
// 取值 document.cookie 【返回一个字符串】
// ls和cookie的区别
// 1. ls是H5新增的浏览器本地存储，是浏览器技术；cookie属于http协议的一部分；ls和cookie都是存在浏览器的；
// 2. ls不兼容ie低版本，cookie兼容ie低版本；
// 3. cookie会随着http协议传递，大小很有限(能存的东西很少); ls存储空间比较大;尽量不要向cookie中存东西,会占用http的带宽;
// 4. cookie可以设置过期时间,ls不能设置;

// 如果要求ls有过期时间该怎么写?
// 设置一个定时器每隔一秒钟去看一下ls中的东西是否过期了,如果过期就删除ls中存储的内容;(一旦清空ls后,要清定时器)

// sessionStorage和localStorage的区别
// 1. sessionStorage是会话存储,sessionStorage中存储的数据的生命周期就是整个会话,如果会话关闭了数据也就不再了; localStorage
// 是永久存储,用户不清除并且开发不用代码删,数据会一直存在;

// 8. ajax
// readyState 表示ajax状态的
// 0: 创建ajax实例成功
// 1: 表示已经调用open方法打开url
// 2: 已经获取响应头
// 3: 响应体正在接收
// 4: 表示响应体已经接到完毕

// 9. http-method 请求方式
// GET 一般用来获取数据,也可以向服务器发送少量数据;
// 1. 以问号传参的形式向服务器发送数据; ?key1=value1&key2=value2
// 2. url大小有限,所以get请求能传递给服务器的数据量也很小;
// 3. 以明文传递数据,不安全;
// 4. get请求容易走缓存(在url末尾拼接一个时间戳或者随机数据可以防止缓存,原理是浏览器检测到url发生变化就会重新请求数据,
// 不再使用缓存)

// POST 向服务器传递数据
// 1. 把数据放在请求体中传递给服务端的(字符串类型的)
// 2. 数据放在请求体中,大小不受限制;
// 3. 数据放在请求体中,相对安全一些;
// 4. post请求没有缓存;

// DELETE
// PUT
// OPTIONS
// PATCH
// TRACE
// HEAD

// RESTful API
// 以http-method为动词,表示请求的目的是什么;

// 10. http-status-code http响应状态码 (表示网络请求是否成功)
// 2xx: 成功
// 200 ok 没有问题的成功
// 204 No Content 请求成功,但服务器没有内容给你

// 3xx: 重定向
// 301: Moved Permanently 永久重定向
// 302: Moved Temporarily 临时重定向
// 304: Not Modified 走缓存

// 4xx: 客户端错误
// 400: Bad Request 参数错误引发错误
// 401: Unauthorized 权限不错
// 403: Forbidden 请求已经收到,但是服务器拒绝响应
// 404: Not Found 请求资源找不到(确认接口和接口文档一致)

// 5xx: 服务端错误
// 500: Internal Server Error 服务器内部错误
// 502: Bad Gateway 网关错误

// 11.同源策略和跨域
// 协议/域名/端口号相同,否则就是跨域;
// 常用跨域解析方案:
// jsonp
// 服务端转发
// nginx 转发
// CORS: 目标域需要设置一个响应头: Access-Control-Allow-Origin, 这个头可以设置成具体的源,也可以设置成*,表示任意的源都能访问;

// 12. Promise:用来管理异步的,创建Promise实例时,回调函数是同步执行的,then里面的回调函数是异步的执行的;

// Promise实例有有三种状态: pending/fulfilled/rejected
// then方法中的回调函数执行规律:
// 第一个then的哪个回调执行由创建Promise实例时是resolve还是reject了,如果resolve第一个执行,如果reject第二个执行
// 后面then哪个回调执行,前面的then回调没胡返回Promise实例,不管第一还是第二个回调执行后面then的第一个会执行;但是如果前面报错了,
// 后面then的第二个会执行;
// 如果前面then回调返回Promise实例,如果实例resolve了,后面then第一个回调执行,如果reject了,后面第二个回调执行;

new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('abc');
        reject('xyz');
    }, 1000)
}).then((res) => console.log(res), (err) => console.log(err));

// 13. 宏任务微任务: 宏任务和微任务都是异步任务;
// 微任务的优先级比宏任务高,微任务先执行,宏任务后执行;
// 微任务: promise的then回调、async函数await下面的代码；process.nextTick
// 宏任务：定时器（setTimeout、setInterval）

// 14. async/await
// async 函数默认返回Promise实例，可以直接.then
// await 如果后面跟的是同步代码,等着同步代码执行;如果是Promise实例,就等它resolve;
// await 有返回值,如果右边是一个值,就把这个值返回;如果是Promise,获取Promise resolve时传递的数据
// await 下面的代码会变成微任务;

// 15. cookie session token

// cookie: 记录http状态,随着http请求和响应在客户端和服务端传递;

// session: 会话控制,服务端技术,用来存储用户的状态及敏感信息;session存储在服务器上; session-id 是存在cookie中的;

// token 令牌(身份校验机制): 用户登录后根据用户的id、登录时间等令信息加密生成的一个字符串；下次客户端再来时带着这个token来，
// 服务器就认识方式：
// 1. 把token写到cookie中
// 2. 服务端返给前端,前端自己保存,下次请求时带着来(一般存在localStorage)
// 3. 写在请求头中,服务端可以从请求头中获取;

let xhr = new XMLHttpRequest();
xhr.setRequestHeader('key','value'); // 设置请求头


