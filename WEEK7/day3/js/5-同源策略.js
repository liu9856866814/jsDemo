let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.baidu.com');
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send(null);
// Access to XMLHttpRequest at 'https://www.baidu.com/' (redirected from 'http://www.baidu.com/') from origin 'null' has
// been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

// ajax 受同源策略的约束;
// 同源策略: 为了保证浏览器的信息安全,当前源中的信息只能在当前的源中使用;其他源如果想使用当前源中的信息,需要做特殊的处理;

// 同源策略要求通信的源的协议、域名、端口号相同，如果三者中有一个不同就是非同源。非同源的通信叫做跨域，需要做特殊的处理；
// http://www.dahai.com 和 https://www.dahai.com/abc/cde (协议不同)
// localhost:5500 和 file://D:/js/index.html (协议不同，file:// file协议)
// localhost:63342 和 localhost:5500 （通信端口号不同）
// https://vip.itouzi.com 和 https://www,itouzi.com (vip.itouzi.com和www.itouzi.com域名不同)

// 常用的跨域解决方案：
// 1. jsonp
// 2. 服务端转发; 只有客户端受同源策略的约束,服务端是不受约束的; 请求自己的接口,然后让服务端在服务器上去请求第三方的接口,
// 拿到第三方接口的数据返回给客户端;
// 3. nginx转发; nginx是服务端应用程序,在服务器可以配置某种规则,nginx就会帮我们转发请求到第三方;(需要服务端和运维的支持)
// 4. CORS: Cross-Origin-Resource-Sharing 跨域资源共享;需要目标源(域)设置Access-Control-Allow-Origin响应头;

// AJAX 虽然好用,但是不能跨域;如果一定要跨域需要做特殊处理;
